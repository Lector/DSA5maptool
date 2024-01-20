[h: switchToken(arg(0))]
[h: hands = usesHands(currentToken())]

<div class="panel-round">
	<!--<div class="heading">
		<img src="[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/swordAndShield.png")]">
		Nahkampfwaffen
	</div>-->
	<div class="table" id=[r,if(hands): "melee"; "meleeNoHands"]>
		<div>Nahkampfwaffe</div>
		<div>RW</div>
		<div>Schaden</div>
		<div>AT</div>
		<div>PA</div>
		[r,if(hands),Code:{
		<div class="colspan2" title="Waffen ausrüsten. Links Haupthand. Rechts Nebenhand">
			<!--<image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/swordAndShield.png")]' alt="equip"></image>-->
		</div>
		}]
		<div class="colspan2" title="Neue Nahkampfwaffe hinzufügen">
			[h: addLink = macroLinkText("chareditNahkampfwaffeAdd@this", "", currentToken())]
			<a href="[r: addLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesAdd.png")]' border="0" alt="add"></image></a>
		</div>
		[r, Foreach(waffe, Nahkampfwaffen, ""), Code:
		{
		[h: waffe = resolveNK(currentToken(), waffe)]
		[h: wID = json.get(waffe, "ID")]
		[h: wName = json.get(waffe, "Name")]
		[h,if(json.get(waffe, "Zweihand") != 0): wName = wName + " (2h)"]
		[h: wRW = json.get(waffe, "RW")]
		[h: wTP = replace(getDamage(waffe),"d","W")]
		[h: wTP = replace(wTP,"\\+0","")]
		[h: damageType = getDamageType(waffe)]
		[h: wAT = json.get(waffe, "AT")]
		[h: wPA = json.get(waffe, "PA")]
		<div>
			[r: wName]
		</div>
		<div>
			[h: rwtext = ""]
			[h,if(wRW == 1): rwtext = "Kurz"]
			[h,if(wRW == 2): rwtext = "Mittel"]
			[h,if(wRW == 3): rwtext = "Lang"]
			[h,if(wRW == 4): rwtext = "Überlang"]
			[r: rwtext]
		</div>
		<div>
			[h: tpParams = json.append(currentToken(), setStrProp("typ=nk", "id", wID))]
			[h: tpLink = macroLink(wTP + " " + damageType, "schadenWaffe@this", "", tpParams)]
			[h: linkTitle = "Schaden mit dieser Waffe verursachen"]
			<span title='[r: linkTitle]'>[r: tpLink]</span>
		</div>
		<div>
			[r: wAT]
		</div>
		<div>
			[r: wPA]
		</div>
		[h,if(wID == HauptHand),Code:
		{
			[h: bg = "style='background: #eee5c8'"]
			[h: fc = "#3d1919"]
			[h: linkTitle = "title='Diese Waffe ist mit dem Schwertarm ausgerüstet.'"]
			[h: link = "&#10003;"]
		};
		{
			[h: bg = ""]
			[h: fc = "#eee5c8"]
			[h: linkTitle = "title='Diese Waffe mit dem Schwertarm ausrüsten'"]
			[h: link = macroLink("&#10063;", "changeHauptHand@this", "", json.append(currentToken(), wID))]
		}]
		[r,if(hands),Code:{
		<div [r: bg]>
			<span style='color: [r: fc];' [r: linkTitle]>[r: link]</span>
		</div>
		}]
		[h,if(wID == NebenHand),Code:
		{
			[h: bg = "style='background: #eee5c8'"]
			[h: fc = "#3d1919"]
			[h: linkTitle = "title='Diese Waffe ist mit dem Schildarm ausgerüstet.'"]
			[h: link = "&#10003;"]
		};
		{
			[h: bg = ""]
			[h: fc = "#eee5c8"]
			[h: linkTitle = "title='Diese Waffe mit dem Schildarm ausrüsten.'"]
			[h: link = macroLink("&#10063;", "changeNebenHand@this", "", json.append(currentToken(), wID))]
		}]
		[r,if(hands),Code:{
		<div [r: bg]>
			<span style='color: [r: fc];' [r: linkTitle]>[r: link]</span>
		</div>
		}]
		<div title="[r: wName] editieren">
			[h: editLink = macroLinkText("quickeditNahkampfwaffe@this", "", json.append("[]", currentToken(), wID))]
			<a href="[r: editLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesEditSmall.png")]' border="0" alt="edit"></image></a>
		</div>
		<div title="[r: wName] löschen">
			[h: deleteLink = macroLinkText("chareditNahkampfwaffeDelProcess@this", "", json.append("[]", currentToken(), wID))]
			<a href="[r: deleteLink]"><image src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/notesRemoveSmall.png")]' border="0" alt="del"></image></a>
		</div>
		}]
	</div>
</div>