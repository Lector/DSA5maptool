[h: switchToken(arg(0))]

<div class="panel">
	<table>
		<tr style='text-align: center;'>
			<td style='text-align: left;'>
				Nahkampfwaffe
			</td>
			<td>
				RW
			</td>
			<td>
				TP
			</td>
			<td>
				AT
			</td>
			<td>
				PA
			</td>
			[h,if(Linkshaender == 1),Code:
			{
				[h: hauptBG = "bgcolor='#eee5c8'"]
				[h: nebenBG = ""]
				[h: hauptFC = "#3d1919"]
				[h: nebenFC = "#eee5c8"]
				[h: hauptTitle = "title='Der Held ist Linkshänder'"]
				[h: nebenTitle = "title='Den Helden zum Rechtshänder machen'"]
				[h: hauptLink = "Links"]
				[h: nebenLink = macroLink("Rechts", "changeLinkshaender@this", "", currentToken())]
			};
			{
				[h: hauptBG = "bgcolor='#eee5c8'"]
				[h: nebenBG = ""]
				[h: hauptFC = "#3d1919"]
				[h: nebenFC = "#eee5c8"]
				[h: hauptTitle = "title='Der Held ist Rechtshänder'"]
				[h: nebenTitle = "title='Den Helden zum Linkshänder machen'"]
				[h: hauptLink = "Rechts"]
				[h: nebenLink = macroLink("Links", "changeLinkshaender@this", "", currentToken())]
			}]
			<td [r: hauptBG]>
				<span style='color: [r: hauptFC]; text-decoration: none;' [r: hauptTitle]>[r: hauptLink]</span>
			</td>
			<td [r: nebenBG]>
				<span style='color: [r: nebenFC]; text-decoration: none;' [r: nebenTitle]>[r: nebenLink]</span>
			</td>
		</tr>
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
			<tr style='font-weight: normal; text-align: center; border-top: 1px solid #eee5c8;'>
				<td style='text-align: left;'>
					[h: namefield = macroLink(wName, "quickeditNahkampfwaffe@this", "", wID)]
					<span style='color: #eee5c8; text-decoration: none;' title='Diese Waffe editieren'>[r: namefield]</span>
				</td>
				<td>
				[h: rwtext = ""]
				[h,if(wRW == 1): rwtext = "Kurz"]
				[h,if(wRW == 2): rwtext = "Mittel"]
				[h,if(wRW == 3): rwtext = "Lang"]
				[h,if(wRW == 4): rwtext = "überlang"]
					<span style='text-decoration: none;'>[r: rwtext]</span>
				</td>
				<td>
					[h: tpParams = setStrProp("typ=nk", "id", wID)]
					[h: tpLink = macroLink(wTP, "schadenWaffe@this", "", tpParams)]
					[h: linkTitle = "Schaden mit dieser Waffe verursachen"]
					<span style='color: #eee5c8; text-decoration: none;' title='[r: linkTitle]'>[r: tpLink]</span>
				</td>
				<td>
					[r: wAT]
				</td>
				<td>
					[r: wPA]
				</td>
				
				[h,if(wID == HauptHand),Code:
				{
					[h: bg = "bgcolor='#eee5c8'"]
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
				<td [r: bg]>
					<span style='color: [r: fc]; text-decoration: none;' [r: linkTitle]>[r: link]</span>
				</td>
				
				[h,if(wID == NebenHand),Code:
				{
					[h: bg = "bgcolor='#eee5c8'"]
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
				<td [r: bg]>
					<span style='color: [r: fc]; text-decoration: none;' [r: linkTitle]>[r: link]</span>
				</td>
			</tr>
		}]
	</table>
</div>