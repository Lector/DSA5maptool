[h: switchToken(arg(0))]

[h: rs = resolveRS(currentToken(), getRuestung(Ruestungen, RuestungAktiv))]
<div class="panel-round">
	<div class="table" id="armor">
		<div>
			Rüstung
		</div>
		<div title="Rüstungsschutz">
			RS
		</div>
		<div title="Belastung">
			BE
		</div>
		<div title="Abzug auf Initiative">
			INI
		</div>
		<div title="Abzug auf Geschwindigkeit">
			GS
		</div>
		<div>
			&nbsp;
		</div>
		<div class="colspan2" title="Neue Rüstung hinzufügen">
			[h: addLink = macroLinkText("chareditRSAdd@this", "", currentToken())]
			<a href="[r: addLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="add"></image></a>
		</div>
		[r, Foreach(ruestung, Ruestungen, ""), Code:
		{
			[h: ruestung = resolveRS(currentToken(), ruestung)]
			[h: rName = json.get(ruestung, "Name")]
			[h: rRS = json.get(ruestung, "RS")]
			[h: rBE = json.get(ruestung, "BE")]
			[h: rINI = json.get(ruestung, "INI")]
			[h: rGS = json.get(ruestung, "GS")]
			[h: rID = json.get(ruestung, "ID")]
			<div>
				[r: rName]
			</div>
			<div>
				[r: rRS]
			</div>
			<div>
				[r: rBE]
			</div>
			<div>
				[r: rINI]
			</div>
			<div>
				[r: rGS]
			</div>
			[h,if(rID == RuestungAktiv),Code: {
				[class = "equipped"]
				[linkTitle = "title='Diese Ruestung ist angelegt.'"]
				[link = "&#10003;"]
			};{
				[class = ""]
				[linkTitle = "title='Diese Ruestung anlegen.'"]
				[link = macroLink("&#10063;", "changeRS@this", "", json.append(currentToken(), rID))]
			}]
			<div class="[r: class]">
				<span [r: linkTitle]>[r: link]</span>
			</div>
			<div title="[r: rName] editieren">
				[h: editLink = macroLinkText("quickeditRS@this", "", json.append("[]", currentToken(), rID))]
				<a href="[r: editLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEditSmall.png")]' border="0" alt="edit"></image></a>
			</div>
			<div title="[r: rName] löschen">
				[h: deleteLink = macroLinkText("chareditRSDelProcess@this", "", json.append("[]", currentToken(), rID))]
				<a href="[r: deleteLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesRemoveSmall.png")]' border="0" alt="del"></image></a>
			</div>
		}]
	</div>
</div>