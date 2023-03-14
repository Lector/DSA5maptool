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
			<table style='border-spacing: 0px; margin-left: 9px;' width='416'>
				<tr style='text-align: center;'>
					<td style='text-align: left;' width='150'>
						Fernkampfwaffe
					</td>
					<td width='30'>
						RW
					</td>
					<td width='50'>
						TP
					</td>
					<td width='30'>
						LZ
					</td>
					<td width='30'>
						FK
					</td>
					<td width='22'>
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
							<span style='color: #eee5c8; text-decoration: none;' title='Diese Waffe editieren'>[r: macroLink(wName, "quickeditFernkampfwaffe@lib:com.github.naxos.Macros2", "", wID)]</span>
						</td>
						<td>
							<span style='text-decoration: none;'>[r: wRW]</span>
						</td>
						<td>
							[h: tpParams = setStrProp("typ=fk", "id", wID)]
							[h: tpLink = macroLink(wTP, "schadenWaffe@Lib:macros", "", tpParams)]
							[h: linkTitle = "Schaden mit dieser Waffe verursachen"]
							<span style='color: #eee5c8; text-decoration: none;' title='[r: linkTitle]'>[r: tpLink]</span>
						</td>
						<td>
							<span style='color: #eee5c8; text-decoration: none;' title='Ladezeit in Aktionen'>[r: wLZ]</span>
						</td>
						<td>
							[h: atLink = macroLink(wFK, "probeFK@Lib:macros", "", wID)]
							[h: linkTitle = "Mit dieser Waffe angreifen"]
							<span style='color: #eee5c8; text-decoration: none;' title='[r: linkTitle]'>[r: atLink]</span>
						</td>
						[h,if(wID == FKWaffe),Code:
						{
							[bg = "bgcolor='#eee5c8'"]
							[fc = "#3d1919"]
							[linkTitle = "title='Diese Waffe ist ausger&uuml;stet.'"]
							[link = "&#10003;"]
						};
						{
							[bg = ""]
							[fc = "#eee5c8"]
							[linkTitle = "title='Diese Waffe ausr&uuml;sten.'"]
							[link = macroLink("&#10063;", "changeFKWeapon@Lib:macros", "", wID)]
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