[h: switchToken(arg(0))]

<div class="panel-ornament">
	<div class="heading">Fernkampfwaffen</div>
	<div class="equip-table" id="ranged">
		<div>
			Fernkampfwaffe
		</div>
		<div>
			RW
		</div>
		<div>
			TP
		</div>
		<div>
			LZ
		</div>
		<div>
			FK
		</div>
		<div>
			&nbsp;
		</div>
		[r, Foreach(waffe, Fernkampfwaffen, ""), Code:
		{
			[h: waffe = resolveFK(waffe)]
			[h: wID = json.get(waffe, "ID")]
			[h: wName = json.get(waffe, "Name")]
			[h: wRW = json.get(waffe, "RW1") + "&middot;" + json.get(waffe, "RW2") + "&middot;" + json.get(waffe, "RW3")]
			[h: wTP = replace(json.get(waffe, "TP"),"d","W")]
			[h: wLZ = json.get(waffe, "Ladezeit")]
			[h: wFK = json.get(waffe, "FK")]
				<div>
					<span title='Diese Waffe editieren'>[r: macroLink(wName, "quickeditFernkampfwaffe@this", "", wID)]</span>
				</div>
				<div>
					[r: wRW]
				</div>
				<div>
					[h: tpParams = setStrProp("typ=fk", "id", wID)]
					[h: tpLink = macroLink(wTP, "schadenWaffe@this", "", json.append(currentToken(), tpParams))]
					[h: linkTitle = "Schaden mit dieser Waffe verursachen"]
					<span title='[r: linkTitle]'>[r: tpLink]</span>
				</div>
				<div>
					<span title='Ladezeit in Aktionen'>[r: wLZ]</span>
				</div>
				<div>
					[h: atLink = macroLink(wFK, "probeFK@this", "", json.append(currentToken(), wID))]
					[h: linkTitle = "Mit dieser Waffe angreifen"]
					<span title='[r: linkTitle]'>[r: atLink]</span>
				</div>
				[h,if(wID == FKWaffe),Code:
				{
					[class = "equipped"]
					[linkTitle = "title='Diese Waffe ist ausgerüstet.'"]
					[link = "&#10003;"]
				};
				{
					[class=""]
					[linkTitle = "title='Diese Waffe ausrüsten.'"]
					[link = macroLink("&#10063;", "changeFKWeapon@this", "", json.append(currentToken(), wID))]
				}]
				<div class="[r: class]">
					<span [r: linkTitle]>[r: link]</span>
				</div>
		}]
	</div>
</div>