[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

<table style='border-spacing: 0px; margin-top: 15px;' width='500'>
	<tr>
		<td width='28'>
			&nbsp;
		</td>
		<td style="background-image: url('[r: tblImage("mainTheme",54)]'); background-repeat: no-repeat; height: 28;" width='443'>																	
		</td>
		<td width='29'>
			&nbsp;
		</td>
	</tr>
	<tr>
		<td>
			&nbsp;
		</td>
		<td style="background-image: url('[r: tblImage("mainTheme",55)]'); background-repeat: repeat-y;">
			<!--<table style='border-spacing: 0px; margin-left: 9px;' width='416'>
				<tr>
					<td width='50'>
						<image src='[r: tableImage("mainTheme", 62)]'></image>
					</td>
					<td>
						<div style='border-bottom: 1px solid #eee5c8; border-top: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='200'>
							<image src='[r: tableImage("mainTheme", 63)]'></image>
						</div>
					</td>
				</tr>
			</table>-->
			<table style='border-spacing: 0px; margin-left: 9px;' width='416'>
				<tr style='text-align: center;'>
					<td style='text-align: left;'>
						Nahkampfwaffe
					</td>
					<td width='30'>
						RW
					</td>
					<td width='50'>
						TP
					</td>
					<td width='30'>
						AT
					</td>
					<td width='30'>
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
					<td width='40' [r: hauptBG]>
						<span style='color: [r: hauptFC]; text-decoration: none;' [r: hauptTitle]>[r: hauptLink]</span>
					</td>
					<td width='40' [r: nebenBG]>
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
							[h: namefield = macroLink(wName, "quickeditNahkampfwaffe@lib:com.github.naxos84.macros2", "", wID)]
							<span style='color: #eee5c8; text-decoration: none;' title='Diese Waffe editieren'>[r: namefield]</span>
						</td>
						<td>
						[h: rwtext = ""]
						[h,if(wRW == 1): rwtext = "Kurz"]
						[h,if(wRW == 2): rwtext = "Mittel"]
						[h,if(wRW == 3): rwtext = "Lang"]
						[h,if(wRW == 4): rwtext = "&Uuml;berlang"]
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
							[h: linkTitle = "title='Diese Waffe ist mit dem Schwertarm ausger&uuml;stet.'"]
							[h: link = "&#10003;"]
						};
						{
							[h: bg = ""]
							[h: fc = "#eee5c8"]
							[h: linkTitle = "title='Diese Waffe mit dem Schwertarm ausr&uuml;sten'"]
							[h: link = macroLink("&#10063;", "changeHauptHand@this", "", wID)]
						}]
						<td [r: bg]>
							<span style='color: [r: fc]; text-decoration: none;' [r: linkTitle]>[r: link]</span>
						</td>
						
						[h,if(wID == NebenHand),Code:
						{
							[h: bg = "bgcolor='#eee5c8'"]
							[h: fc = "#3d1919"]
							[h: linkTitle = "title='Diese Waffe ist mit dem Schildarm ausger&uuml;stet.'"]
							[h: link = "&#10003;"]
						};
						{
							[h: bg = ""]
							[h: fc = "#eee5c8"]
							[h: linkTitle = "title='Diese Waffe mit dem Schildarm ausr&uuml;sten.'"]
							[h: link = macroLink("&#10063;", "changeNebenHand@this", "", wID)]
						}]
						<td [r: bg]>
							<span style='color: [r: fc]; text-decoration: none;' [r: linkTitle]>[r: link]</span>
						</td>
					</tr>
				}]
			</table>
		</td>
		<td>
			&nbsp;
		</td>
	</tr>
	<tr>
		<td>
			&nbsp;
		</td>
		<td style="background-image: url('[r: tblImage("mainTheme",56)]'); background-repeat: no-repeat; height: 28;">																
		</td>
		<td>
			&nbsp;
		</td>
	</tr>
</table>