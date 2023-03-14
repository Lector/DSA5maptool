[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: typ = arg(0)]

[h: sortedAnimals = ""]
[h,if(typ != "Fallenjagd"),Code:
{
	[h,if(typ == "Angeln"),Code:{
		[prop = "Wasser"]
		[maxSize = 3]
	};{
		[prop = "Land"]
		[maxSize = 4]
	}]

	[h: animals1 = getTokens("json", json.set("", "propertyType", "Basic", "mapName", getCurrentMapName()))]
	[h,if(getLibProperty("WildnisSpieltisch", "Lib:macros") == 1),Code:
	{
		[h: animals2 = getTokens("json", json.set("", "propertyType", "Basic", "mapName", "Spieltisch"))]
		[h: allAnimals = json.union(animals1, animals2)]
	};
	{
		[h: allAnimals = animals1]
	}]
	[h,foreach(animal, allAnimals),Code:
	{
		[h: map = json.get(getTokenMap(animal), 0)]
		[h: animalName = getName(animal, map)]
		[h: gr = groesse(getSize(animal, map))]
		[h,if(getProperty(prop, animal, map) == 1 && gr <= maxSize):
			sortedAnimals = json.append(sortedAnimals, json.set("", "id", animal, "name", animalName))]
	}]
	[h: sortedAnimals = json.sort(sortedAnimals, "asc", "name")]
}]
[h: animalOptions = ""]
[h,foreach(animal, sortedAnimals),Code:{
	[h: id = json.get(animal, "id")]
	[h: animalName = json.get(animal, "name")]
	[h: mod = getProperty("JagdMod", id, json.get(getTokenMap(id), 0))]
	[h: animalOptions = strformat("%{animalOptions}
	<option value='%{id}'>
		%{animalName} (%+d)
	</option>",
	mod)]
}]
[h: suche = strformat("
<tr>
	<td colspan=2>
		Jagd auf:
	</td>
	<td>
		<select size='1' name='tier'>
			<option value=''>Irgendetwas Essbares</option>
			%{animalOptions}
		</select>
	</td>
</tr>
")]

[h: waffen = ""]
[h: checked = "checked"]
[h,if(FKWaffe >= 0),Code:
{
	[h: fk = resolveFK(getFernkampfwaffe(FKWaffe))]
	[h: waffen = waffen + strformat("
	<tr>
		<td>
			<input type='radio' name='waffe' id='ranged' value='%{fk}' checked/>
		</td>
		<td>%s (%d)</td>
	</tr>",
	json.get(fk, "Name"), json.get(fk, "FK"))]
	[h: checked = ""]
}]
[h: melee = resolveNK(getNahkampfwaffe(0))]
[h,if(json.get(melee, "Name") == "Waffenlos"), Code:
{
    [h: waffen = waffen + strformat("
    <tr>
    	<td>
    		<input type='radio' name='waffe' id='melee' value='%{melee}' %{checked}/>
    	</td>
    	<td>%s (%d) (%+d)</td>
    </tr>",
    json.get(melee, "Name"), json.get(melee, "AT"), -8)]
}]
[h: waffen = strformat("
		<td valign='top'>
			<div class='label'>
				Waffe
			</div>
		</td>
		<td valign='top'>
			<table>%{waffen}</table>
		</td>
		<td width=20>&nbsp;</td>
")]

[h: skill1 = "Tierkunde"]
[h: spec1 = "Wildtiere"]
[h: skill2 = "Verbergen"]
[h: spec2 = "Sich verstecken"]
[h: zeit = 10]
[h: fk = 1]
[h: maxqs = 6]
[h,switch(typ),Code:
	case "Angeln":
	{
		[maxqs = 2]
		[fk = 0]
		[skill1 = "Fischen & Angeln"]
		[spec1 = ""]
	};
	case "Ansitzjagd":
	{

	};
	case "Pirschjagd":
	{
		[skill2 = "Fährtensuchen"]
		[spec2 = "Tierische Spuren"]
	};
	case "Fallenjagd":
	{
		[skill2 = "Fährtensuchen"]
		[spec2 = "Tierische Spuren"]
		[zeit = 24]
		[fk = 0]
	};
]

[h: sightfk = "<table><tr>"+probeSicht('fk')+"</tr></table>"]
[h: sightnk = "<table><tr>"+probeSicht('at')+"</tr></table>"]

[h: js = strformat("
function showHideFKOptions() {
	var ranged = document.getElementById('ranged');
	var melee = document.getElementById('melee');
	var sight = document.getElementById('sight');
	var maxqs = document.getElementById('maxqs');
	if(ranged != null && ranged.checked)
	{
		maxqs.value = %{maxqs};
		if(sight != null) { sight.innerHTML = document.getElementById('sightfk').innerHTML; }
	}
	if(melee != null && melee.checked)
	{
		maxqs.value = 2;
		if(sight != null) { sight.innerHTML = document.getElementById('sightnk').innerHTML; }
	}
}
window.addEventListener('load', function(evt) {
	var ranged = document.getElementById('ranged');
	if(ranged != null) {
		ranged.addEventListener('change', function(evt) {
			showHideFKOptions();
		});
	}
	var melee = document.getElementById('melee');
	if(melee != null) {
		document.getElementById('melee').addEventListener('change', function(evt) {
			showHideFKOptions();
		});
	}
	showHideFKOptions();
})"
)]

[h: height = 680]
[h,if(fk == 0): height = height - 140]
[h: actionLink = macroLinkText("probeJagdProcess@this", "")]
[dialog5("jagd", "width=814; height="+height+"; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: typ]</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
		<script>[r: js]</script>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header(typ)]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<table class="probe">
								<tr>
									[r,macro("probeMod@Lib:macros"): ""]
								</tr>
							</table>
						</td>
						<td>
							[h: button = tableImage("forms", 11)]
							<button type="submit" name="action">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>

				[r,macro("probeChat@Lib:macros"): currentToken()]
				<hr/>

				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td valign=top>
							<div class="label">
								[r: skill1][r,if(spec1 != ""): strformat("<br>(%{spec1})")]
							</div>
						</td>
						<td valign=top style="white-space: nowrap;">
							[r,macro("probeInfo@Lib:macros"): json.append(currentToken(), skill1, spec1)]
						</td>
						<td width=20>&nbsp;</td>
						
						<td valign=top style="white-space: nowrap;">
							<table><tr>
							[r,macro("probeBelastung@Lib:macros"): skill1]
							[r,macro("probeParalyse@Lib:macros"): json.append("Natur", skill1)]
							[r,macro("probeMirakel@Lib:macros"): skill1]
							[r,macro("probeGottgefaellig@Lib:macros"): skill1]
							</tr></table>
						</td>
					</tr>
				</table>

				<hr/>
				
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td valign=top>
							<div class="label">
								[r: skill2][r,if(spec2 != ""): strformat("<br>(%{spec2})")]
							</div>
						</td>
						<td valign=top style="white-space: nowrap;">
							[r,macro("probeInfo@Lib:macros"): json.append(currentToken(), skill2, spec2)]
						</td>
						<td width=20>&nbsp;</td>
						
						<td valign=top style="white-space: nowrap;">
							<table><tr>
							[r,macro("probeBelastung@Lib:macros"): skill2]
							[r,macro("probeParalyse@Lib:macros"): json.append("Natur", skill2)]
							[r,macro("probeMirakel@Lib:macros"): skill2]
							[r,macro("probeGottgefaellig@Lib:macros"): skill2]
							</tr></table>
						</td>
					</tr>
				</table>

				<hr/>
				
				<table style='margin: 0px auto 0px auto;'>
					[r,if(typ != "Fallenjagd"),Code:
					{
					<tr>
						<td valign=top>
							<div class="label">
								Einstellungen
							</div>
						</td>
						<td valign=top>
							<table>
								[r: suche]
								<tr>
									<td colspan=2 style="white-space: nowrap;">
										Suchdauer:
									</td>
									<td>
										<select id='suchdauer' name='suchDauer' size=1>
											<option value=10>10 Stunden</option>
											<option value=8>8 Stunden</option>
											<option value=6>6 Stunden</option>
											<option value=4>4 Stunden</option>
											<option value=2>2 Stunden</option>
										</select>
									</td>
								</tr>
							</table>
						</td>
						<td width=20>&nbsp;</td>
					};{
					<input type="hidden" name="suchDauer" value="24"/>
					}]
						<td valign=top>
							<div class="label">
								Umgebung
							</div>
						</td>
						<td valign=top>
							<table style="margin: 0px auto 0px auto;">
								<tr>
									<td colspan=2>
										Jagdgebiet:
									</td>
									<td>
										<select name='eignungSelection' size='1'>
											<option value='3'>Sehr gut geeignet (+3)</option>
											<option value='2'>Besser geeignet (+2)</option>
											<option value='1'>Gut geeignet (+1)</option>
											<option value='0' selected='selected'>Normal geeignet (0)</option>
											<option value='-1'>Schlecht geeignet (-1)</option>
											<option value='-2'>Schlechter geeignet (-2)</option>
											<option value='-3'>Sehr schlecht geeignet (-3)</option>
										</select>
									</td>
								</tr>
								[r,macro("probeGelaendekunde@this"): json.append(currentToken(), encode("[]"))]
								[r,macro("probeWetter@this"): ""]
								[r,if(typ == "Angeln"),Code:
								{
								<tr>
									<td colspan=2>
										Gewässer:
									</td>
									<td>
										<select name='spec1' size='1'>
											<option value='Salzwassertiere'>Salzwasser</option>
											<option value='Süßwassertiere'>Süßwasser</option>
										</select>
									</td>
								</tr>
								};
								{
								<input type="hidden" name="spec1" value="[r: spec1]"/>
								}]
							</table>
						</td>
					</tr>
				</table>

				[r,if(typ != "Angeln" && typ != "Fallenjagd"),Code:
				{
				<hr/>
				<table style='margin: 0px auto 0px auto;'>
					<tr id="fkoptions">
						[r: waffen]
						<td>
							<div id="sight">
								
							</div>
						</td>
					</tr>
				</table>
				}]
				
				<input type="hidden" name="skill1" value="[r: skill1]"/>
				<input type="hidden" name="skill2" value="[r: skill2]"/>
				<input type="hidden" name="spec2" value="[r: spec2]"/>
				<input type="hidden" name="basisDauer" value="[r: zeit]"/>
				<input type="hidden" id="maxqs" name="maxqs" value="[r: maxqs]"/>
				<input type="hidden" name="typ" value="[r: typ]"/>
				<input type="hidden" name="image" value="[r,if(typ == 'Angeln'): 43; 42]"/>
			</form>
			<div style="display: none" id="sightfk">
				[r: sightfk]
			</div>
			<div style="display: none" id="sightnk">
				[r: sightnk]
			</div>
		</div>
	</body>
</html>
}]

