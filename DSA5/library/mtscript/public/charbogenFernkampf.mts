[h: switchToken(arg(0))]

<div class="panel">
	<table>
		<tr style='text-align: center;'>
			<td style='text-align: left;'>
				Fernkampfwaffe
			</td>
			<td>
				RW
			</td>
			<td>
				TP
			</td>
			<td>
				LZ
			</td>
			<td>
				FK
			</td>
			<td>
				&nbsp;
			</td>
		</tr>
		[r, Foreach(waffe, Fernkampfwaffen, ""), Code:
		{
			[h: waffe = resolveFK(waffe)]
			[h: wID = json.get(waffe, "ID")]
			[h: wName = json.get(waffe, "Name")]
			[h: wRW = json.get(waffe, "RW1") + "&middot;" + json.get(waffe, "RW2") + "&middot;" + json.get(waffe, "RW3")]
			[h: wTP = replace(json.get(waffe, "TP"),"d","W")]
			[h: wLZ = json.get(waffe, "Ladezeit")]
			[h: wFK = json.get(waffe, "FK")]
			<tr style='font-weight: normal; text-align: center; border-top: 1px solid #eee5c8;'>
				<td style='text-align: left;'>
					<span style='color: #eee5c8; text-decoration: none;' title='Diese Waffe editieren'>[r: macroLink(wName, "quickeditFernkampfwaffe@this", "", wID)]</span>
				</td>
				<td>
					<span style='text-decoration: none;'>[r: wRW]</span>
				</td>
				<td>
					[h: tpParams = setStrProp("typ=fk", "id", wID)]
					[h: tpLink = macroLink(wTP, "schadenWaffe@this", "", json.append(currentToken(), tpParams))]
					[h: linkTitle = "Schaden mit dieser Waffe verursachen"]
					<span style='color: #eee5c8; text-decoration: none;' title='[r: linkTitle]'>[r: tpLink]</span>
				</td>
				<td>
					<span style='color: #eee5c8; text-decoration: none;' title='Ladezeit in Aktionen'>[r: wLZ]</span>
				</td>
				<td>
					[h: atLink = macroLink(wFK, "probeFK@this", "", json.append(currentToken(), wID))]
					[h: linkTitle = "Mit dieser Waffe angreifen"]
					<span style='color: #eee5c8; text-decoration: none;' title='[r: linkTitle]'>[r: atLink]</span>
				</td>
				[h,if(wID == FKWaffe),Code:
				{
					[bg = "bgcolor='#eee5c8'"]
					[fc = "#3d1919"]
					[linkTitle = "title='Diese Waffe ist ausgerüstet.'"]
					[link = "&#10003;"]
				};
				{
					[bg = ""]
					[fc = "#eee5c8"]
					[linkTitle = "title='Diese Waffe ausrüsten.'"]
					[link = macroLink("&#10063;", "changeFKWeapon@this", "", json.append(currentToken(), wID))]
				}]
				<td [r: bg]>
					<span style='color: [r: fc]; text-decoration: none;' [r: linkTitle]>[r: link]</span>
				</td>
			</tr>
		}]
	</table>
</div>