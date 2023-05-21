[h: switchToken(arg(0))]

<div class="panel">
	<div class="heading">
		<img src="[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/swordAndShield.png")]">
		Nahkampfwaffen
	</div>
	<div class="equip-table" id="melee">
		<div>Nahkampfwaffe</div>
		<div>RW</div>
		<div>TP</div>
		<div>AT</div>
		<div>PA</div>
		[h,if(Linkshaender == 1),Code:
		{
			[h: hauptTitle = "title='Der Held ist Linkshänder'"]
			[h: nebenTitle = "title='Den Helden zum Rechtshänder machen'"]
			[h: hauptLink = "Links"]
			[h: nebenLink = macroLink("Rechts", "changeLinkshaender@this", "", currentToken())]
		};
		{
			[h: hauptTitle = "title='Der Held ist Rechtshänder'"]
			[h: nebenTitle = "title='Den Helden zum Linkshänder machen'"]
			[h: hauptLink = "Rechts"]
			[h: nebenLink = macroLink("Links", "changeLinkshaender@this", "", currentToken())]
		}]
		<div class='equipped'>
			<span [r: hauptTitle]>[r: hauptLink]</span>
		</div>
		<div>
			<span [r: nebenTitle]>[r: nebenLink]</span>
		</div>
		[r, Foreach(waffe, Nahkampfwaffen, ""), Code:
		{
		[h: waffe = resolveNK(waffe)]
		[h: wID = json.get(waffe, "ID")]
		[h: wName = json.get(waffe, "Name")]
		[h,if(json.get(waffe, "Zweihand") != 0): wName = wName + " (2h)"]
		[h: wRW = json.get(waffe, "RW")]
		[h: wTP = replace(json.get(waffe, "TP"),"d","W")]
		[h: wAT = json.get(waffe, "AT")]
		[h: wPA = json.get(waffe, "PA")]
		<div>
			[h: namefield = macroLink(wName, "quickeditNahkampfwaffe@this", "", wID)]
			<span title='Diese Waffe editieren'>[r: namefield]</span>
		</div>
		<div>
			[h: rwtext = ""]
			[h,if(wRW == 1): rwtext = "Kurz"]
			[h,if(wRW == 2): rwtext = "Mittel"]
			[h,if(wRW == 3): rwtext = "Lang"]
			[h,if(wRW == 4): rwtext = "überlang"]
				<span style='text-decoration: none;'>[r: rwtext]</span>
		</div>
		<div>
			[h: tpParams = json.append(currentToken(), setStrProp("typ=nk", "id", wID))]
			[h: tpLink = macroLink(wTP, "schadenWaffe@this", "", tpParams)]
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
		<div [r: bg]>
			<span style='color: [r: fc];' [r: linkTitle]>[r: link]</span>
		</div>
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
		<div [r: bg]>
			<span style='color: [r: fc];' [r: linkTitle]>[r: link]</span>
		</div>
		}]
	</div>
</div>