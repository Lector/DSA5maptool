[h: switchToken(arg(0))]
[h: group = arg(1)]
[h,if(group == ""): group = "Koerper"]

<div class="panel-round">
	<div class="table" id="skill">
		<div>
			Fertigkeit
		</div>
		<div>
			Probe
		</div>
		<div>
			<span title="Routineprobe">R</span>
		</div>
		<div>
			FW
		</div>
		<div>
			[h: editLink = macroLinkText("chareditTalent@this", "", json.append(currentToken(), group))]
			<a href="[r: editLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEdit.png")]' border="0" alt="edit"></image></a>
		</div>

	[h: tBaum = eval(group)]
	[Foreach(tDaten, tBaum,""), CODE:
	{
		[h: tName = json.get(tDaten, "Talent")]
		[h: tProbe = json.get(tDaten, "Probe")]
		[h: tEigenschaft1 = json.get(tProbe, "Eigenschaft1")]
		[h: tEigenschaft2 = json.get(tProbe, "Eigenschaft2")]
		[h: tEigenschaft3 = json.get(tProbe, "Eigenschaft3")]
		[h: tWert = json.get(tDaten, "Talentwert")]
		[h: tUebergabe = ""]
		[h: tUebergabe = listAppend(tUebergabe, tName)]
		[h: tUebergabe = listAppend(tUebergabe, tEigenschaft1)]
		[h: tUebergabe = listAppend(tUebergabe, tEigenschaft2)]
		[h: tUebergabe = listAppend(tUebergabe, tEigenschaft3)]
		[h: tUebergabe = listAppend(tUebergabe, tWert)]
		[h: tUebergabe = listAppend(tUebergabe, group)]
		<div>
			<span title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tName, "probeTalent@this", "", tUebergabe)]</span>
		</div>
		<div>
			[r: tEigenschaft1] &middot; [r: tEigenschaft2] &middot; [r: tEigenschaft3]
		</div>
		<div>
			[h: routine = 3 - floor( (tWert - 1) / 3 )]
			[r,if(
				eval(tEigenschaft1) >= 13 &&
				eval(tEigenschaft2) >= 13 &&
				eval(tEigenschaft3) >= 13 &&
				tWert >= 1):
			strformat("<span title='Routineprobe ab einer Probe %+d möglich. Das Ergebnis wäre %d QS'>%+d</span>", routine, ceil(round(tWert/2.0)/3.0), routine);
			"<span title='Routineprobe nicht möglich. Dazu müssen alle Eigenschaften >= 13 sein.'>-</span>"]
		</div>
		<div>
			<span title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tWert, "probeTalent@this", "", tUebergabe)]</span>
		</div>
		<div>
		</div>
	}]
	</div>

[r,if(group == "Natur" && Typus == "Kulturschaffend"),Code:{
	<div class="natureSkillContainer">
		<div>
			[h: linkOpen1 = "
			<span style='color: #eee5c8; text-decoration: none; vertical-align: middle;' title='Heil-, Gift- und Nutzpflanzen suchen'>
			<a href='"+ macroLinkText("probeKraeutersuche@this", "", "") +"'>"]
			[h: linkOpen2 = "
			<span style='color: #eee5c8; text-decoration: none; vertical-align: middle;' title='Nahrung suchen'>
			<a href='"+ macroLinkText("probeNahrungssuche@this", "", "") +"'>"]
			[h: linkClose = "</a></span>"]
			<div>
				<img src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/herb.png")]'/>
			</div>
			<div>
				[r: linkOpen1]Kräutersuche[r: linkClose] &middot; [r: linkOpen2]Nahrungssuche[r: linkClose]
			</div>
		</div>
		<div>
			[h: linkOpen1 = "<span title='Auf die Jagd nach Wild gehen'><a href='"+ macroLinkText("probeJagd@this", "", "Ansitzjagd") +"'>"]
			[h: linkOpen2 = "<span title='Auf die Jagd nach Wild gehen'><a href='"+ macroLinkText("probeJagd@this", "", "Pirschjagd") +"'>"]
			[h: linkOpen3 = "<span title='Auf die Jagd nach Wild gehen'><a href='"+ macroLinkText("probeJagd@this", "", "Fallenjagd") +"'>"]
			[h: linkClose = "</a></span>"]
			[h: link = strformat("
			%{linkOpen1}Ansitzjagd%{linkClose} &middot; %{linkOpen2}Pirschjagd%{linkClose} &middot; %{linkOpen3}Fallenjagd%{linkClose}"
			)]
			<div>
				<img src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/hunt.png")]'/>
			</div>
			<div>
				[r: link]
			</div>
		</div>
		<div>
			[h: linkOpen = "<span title='Fischen / Angeln gehen'><a href='"+ macroLinkText("probeJagd@this", "", "Angeln") +"'>"]
			[h: linkClose = "</a></span>"]
			<div>
				[r: linkOpen]<img src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/fish.png")]'/>[r: linkClose]
			</div>
			<div>
				[r: linkOpen]Fischen[r: linkClose]
			</div>
		</div>
	</div>
};{}]

</div>