[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]

<!-- Als erstes suchen wir auf dem Spieltisch nach allen Kraut-Tokens -->
[h: herbSelectionCondition = json.set("{}", "propertyType", "Kraut", "mapName", getCurrentMapName())]
[h: currentMapHerbs = getTokens("json", herbSelectionCondition)]
[h,if(getLibProperty("WildnisSpieltisch","com.github.lector.dsa5maptool") == 1),Code:
{
	[h: herbSelectionCondition = json.set(herbSelectionCondition, "mapName", "Spieltisch")]
	[h: spieltischHerbs = getTokens("json", herbSelectionCondition)]
	[h: allherbList = json.union(spieltischHerbs, currentMapHerbs)]
};{
	[h: allherbList = currentMapHerbs]
}]
<!-- Als nächstes sortieren wir diese Liste nach Namen. Dazu bauen wir uns ein JSON-Objekt -->
[h: sortedHerbs = ""]
[h,foreach(herb, allherbList),Code:
{
	[h: sortedHerbs = json.append(sortedHerbs, json.set("",
		"id", herb,
		"name", getName(herb, json.get(getTokenMap(herb), 0))))]
}]
[h: sortedHerbs = json.sort(sortedHerbs, "asc", "name")]

<!-- Nach der Sortierung teilen wir unser Superset aus Kräutern in 8, nach Gegend separierten, Listen auf -->
[h: nordenOptions = "[]"]
[h: steppeOptions = "[]"]
[h: sumpfOptions = "[]"]
[h: waldOptions = "[]"]
[h: dschungelOptions = "[]"]
[h: gebirgeOptions = "[]"]
[h: wuesteOptions = "[]"]
[h: maraskanOptions = "[]"]
[h,FOREACH(herb, sortedHerbs),code:
{
	[h: id = json.get(herb, "id")]
	[h: map = tokenMap(id)]
	[h,if(getProperty("Norden", id, map) > 0): nordenOptions = json.append(nordenOptions, id)]
	[h,if(getProperty("Steppe", id, map) > 0): steppeOptions = json.append(steppeOptions, id)]
	[h,if(getProperty("Sumpf", id, map) > 0): sumpfOptions = json.append(sumpfOptions, id)]
	[h,if(getProperty("Wald", id, map) > 0): waldOptions = json.append(waldOptions, id)]
	[h,if(getProperty("Dschungel", id, map) > 0): dschungelOptions = json.append(dschungelOptions, id)]
	[h,if(getProperty("Gebirge", id, map) > 0): gebirgeOptions = json.append(gebirgeOptions, id)]
	[h,if(getProperty("Wueste", id, map) > 0): wuesteOptions = json.append(wuesteOptions, id)]
	[h,if(getProperty("Maraskan", id, map) > 0): maraskanOptions = json.append(maraskanOptions, id)]
}]

<!-- Alle Gegenden stellen wir als Array auf -->
[h: gegenden = "[Norden, Steppe, Sumpf, Wald, Dschungel, Gebirge, Wueste, Maraskan]"]
<!-- Außerdem machen wir ein Array aus den Kräuterlisten -->
[h: gegendOptions = strformat("[%{nordenOptions}, %{steppeOptions}, %{sumpfOptions}, %{waldOptions}, %{dschungelOptions}, %{gebirgeOptions}, %{wuesteOptions}, %{maraskanOptions}]")]

<!-- Wir wollen dass beim Umwählen einer Gegend automatisch die Krautliste geändert wird.
Dazu brauchen wir in unserem JavaScript eine Funktion, welche die Kräuter entsprechend füllt - für jede Gegend 
Diese FillFunctions generieren wir nun-->
[h: fillFunctions = ""]
[h: open = "{"]
[h: close = "}"]
<!-- Für alle 8 Gegenden generieren wir 1 fillFunction -->
[h,for(i, 0, 8, 1, ""),Code:
{
	<!-- Zuerst ermitteln wir die Gegend -->
	[h: gegend = json.get(gegenden, i)]
	<!-- Nun die ganzen Kräuteroptionen -->
	[h: options = json.get(gegendOptions, i)]
	<!-- Hier fangen wir mit unserer FillFunction an
	Jede Funktion trägt auch die Nummer der Gegend -->
	[h: fillFunction = strformat("
		function fillHerbs%{i}() %{open}
			// Zuerst leeren wir unsere KräuterListe der Oberfläche
			startFillHerbs();
			// Hier setzten wir Gegend und die Kräuterliste in ein Hidden-Feld
			// damit im Falle einer allgemeinen Kräutersuche das Process-Skript die nötigen Infos hat
			document.getElementById('allHerbs').value = '%{options}';
			document.getElementById('gelaendeKey').value = '%{gegend}';
			// Hier ermitteln wir die Kräuterliste der UI
			var herbs = document.getElementById('herbs');
	")]
	<!-- Für jedes Kraut in der entsprechend Liste wird nun JS-Code generiert, welcher das Select-Feld
	um den entsprechenden Eintrag ergänzt -->
	[h,foreach(herb, options),Code:
	{
		[h: map = json.get(getTokenMap(herb), 0)]
		[h: fillFunction = fillFunction + strformat("
			var newOption = document.createElement('option');
			newOption.text = '%s (%+d)';
			newOption.value = '%{herb}';
			herbs.add(newOption);",
		getName(herb, map), getProperty("Suchschwierigkeit", herb, map))]
	}]
	<!-- Nachdem die das UI-Kräuterfeld neu generiert wurde steht es auf Allgemeiner Kräutersuche
	D.h. dass evtl die maximale Suchdauer umgestellt werden muss. Das macht die Funktion prepareDuration()-->
	[h: fillFunction = fillFunction + strformat("
		prepareDuration();
	%{close}")]
	[h: fillFunctions = fillFunctions + fillFunction]
}]

[h: optionAllgemein = "<option value=''>Allgemeine Suche (-1)</option>"]

[h: actionLink = macroLinkText("probeKraeutersucheProcess@this", "")]
[dialog5("kraeutersucheSpeziell", "width=1000; height=520; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Kräutersuche</title>
		<link rel='stylesheet' type='text/css' href='lib://this/styles/base.css?cachelib=false'/>

		<!-- Hier generieren wir unser JavaScript -->
		[h: js = strformat("
		
		function clearHerbs() {
			var herbs = document.getElementById('herbs');
			while(herbs.options.length > 0) herbs.remove(0);
		}
		// Der 1. Eintrag in der Kräuterliste sollte immer die Allgemeiner Kräutersuche sein
		function addAllgemeineSuche()
		{
			var newOption = document.createElement('option');
			newOption.text = 'Allgemeine Kräutersuche (-1)';
			newOption.value = '';
			herbs.add(newOption);
		}
		function startFillHerbs() {
			clearHerbs();
			addAllgemeineSuche();
		}

		// Hier integrieren wir die generierten FillFunctions für die 8 Regionen
		%{fillFunctions}

		// Diese Funktion baut das UI-Element für die Suchdauer auf
		// Bei Allgemeiner Kräutersuche sind das 2-10 Stunden
		// Bei Spezieller Kräutersuche sind das 2-8 Stunden
		function prepareDuration() {
			var herbs = document.getElementById('herbs');
			var suchdauer = document.getElementById('suchdauer');
			// Das Element für 10 Stunden wir nur eingebaut wenn der 1. Eintrag in der Kräuterliste aktiv ist
			// UND die Suchdauer aus höchstens 4 Elemente besteht
			if(herbs.options[0].selected && suchdauer.options.length <= 4)
			{
				document.getElementById('basisDauer').value = 10;
				var newOption = document.createElement('option');
				newOption.text = '10 Stunden';
				newOption.value = '10';
				suchdauer.options.add(newOption, 0);
				// Wenn vorher 8 Stunden ausgewählt war setzten wir es auf 10 Stunden
				// Das machen wir weil es die Basiszeit ohne Verkürzung ist
				if(suchdauer.options[1].selected) suchdauer.options[0].selected = true;
			}
			// Wenn ein spezielles Kraut ausgewählt wurde entfernen wir den Eintrag für 10 Stunden
			// falls er vorhanden ist
			if(!herbs.options[0].selected && suchdauer.options.length >= 5)
			{
				document.getElementById('basisDauer').value = 8;
				suchdauer.options.remove(0);
			}
		}
		
		window.addEventListener('load', function(evt) {
			document.getElementById('gegend').addEventListener('change', function(evt) {
				// Wenn die Gegend geändert wird, rufen wir die entsprechende fillHerbs-Funktion auf
				for(i=0; i<8; i++)
				{
					var selected = document.getElementById('gegend').options[i].selected;
					if(selected && i==0) fillHerbs0();
					if(selected && i==1) fillHerbs1();
					if(selected && i==2) fillHerbs2();
					if(selected && i==3) fillHerbs3();
					if(selected && i==4) fillHerbs4();
					if(selected && i==5) fillHerbs5();
					if(selected && i==6) fillHerbs6();
					if(selected && i==7) fillHerbs7();
				}
			});
			
			// Wenn man zwischen allgemeiner und spezieller Kräutersuche wechselt soll die Suchdauer sich anpassen
			document.getElementById('herbs').addEventListener('change', function(evt) {
				prepareDuration();
			});

			// Zu beginn des Dialogs stellen wir gewisse Startauswahlen ein
			// Das wäre in unserem Fall die Gegend Wald
			document.getElementById('gegend').options[3].selected = true;
			fillHerbs3();
			document.getElementById('herbs').options[0].selected = true;
			prepareDuration();
		});
		")]
		<script>[r: js]</script>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Kräutersuche")]
				<table style='margin: 5px auto 7px auto;'>
					<tr>
						[r,macro("probeMod@lib:com.github.lector.dsa5maptool"): ""]
						<td>
							[h: button = tableImage("forms", 11)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@lib:com.github.lector.dsa5maptool"): currentToken()]
				<hr/>
				[r,macro("pflanzensucheInfo@this"): ""]
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td valign="top">
							<div class="label">
								Einstellungen:
							</div>
						</td>
						<td>
							<table>
								<tr>
									<td colspan=2>
										Suche nach:
									</td>
									<td>
										<select name='krautSelection' id='herbs'>
										</select>
									</td>
								</tr>
								<tr>
									<td colspan=2 style="white-space: nowrap;">
										Mit QS aus Pflanzenkunde:
									</td>
									<td>
										<select name="QSpk" size="1">
											<option value="0" selected>Sinnesschärfe erleichtern & Suchdauer verkürzen</option>
											<option value="1">Kräuterfunde erhöhen</option>
										</select>
									</td>
								</tr>
								[r,macro("probeSuchdauer@this"): ""]
							</table>
						</td>
						<td width=20>&nbsp;</td>
						<td valign=top>
							<div class="label">
								Umgebung:
							</div>
						</td>
						<td>
							<table>
								<tr>
									<td colspan=2>
										Gegend:
									</td>
									<td>
										<select name='gegendSelection' id='gegend'>
											<option value='-4'>Hoher Norden (-4)</option>
											<option value='0'>Grasländer Heide und Steppen (0)</option>
											<option value='-1'>Sümpfe, Marschen und Moore (-1)</option>
											<option value='+1'>Wälder (+1)</option>
											<option value='0'>Regenwälder (0)</option>
											<option value='-1'>Gebirge (-1)</option>
											<option value='-4'>Wüstenrandgebiete und Wüsten (-4)</option>
											<option value='-2'>Maraskan (-2)</option>
										</select>
									</td>
								</tr>
								[r,macro("probeGelaendekunde@this"): json.append(currentToken(), encode(json.append("", "Eis- und Schneekundig", "Steppenkundig", "Sumpfkundig", "Waldkundig", "Dschungelkundig", "Gebirgskundig", "Wüstenkundig", ""))) ]
								[r,macro("probeWetter@this"): ""]
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" id="basisDauer" name="basisDauer" value="8"/>
				<input type="hidden" id="allHerbs" name="allHerbs" />
				<input type="hidden" id="gelaendeKey" name="gelaende" />
			</form>
		</div>
	</body>
</html>
}]
