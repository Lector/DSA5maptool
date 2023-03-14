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
						<table style='border-spacing: 0px;'>
							<tr style='text-align: center;'>
								<td width='22'>
									&nbsp;
								</td>
								<td width='57'>
									[h: aktMU = getMU()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Mut&quot; ablegen'>[r: macroLink("MU: ", "probeEig@Lib:macros", "", "MU")]</span>
									[h,if(aktMU < MU): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktMU > MU): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Mut&quot; ablegen'>[r: macroLink(aktMU, "probeEig@Lib:macros", "", "MU")]</span>
								</td>
								<td width='57'>
									[h: aktKL = getKL()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Klugheit&quot; ablegen'>[r: macroLink("KL: ", "probeEig@Lib:macros", "", "KL")]</span>
									[h,if(aktKL < KL): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktKL > KL): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Klugheit&quot; ablegen'>[r: macroLink(aktKL, "probeEig@Lib:macros", "", "KL")]</span>
								</td>
								<td width='57'>
									[h: aktIN = getIN()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Intuition&quot; ablegen'>[r: macroLink("IN: ", "probeEig@Lib:macros", "", "IN")]</span>
									[h,if(aktIN < IN): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktIN > IN): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Intuition&quot; ablegen'>[r: macroLink(aktIN, "probeEig@Lib:macros", "", "IN")]</span>
								</td>
								<td width='57'>
									[h: aktCH = getCH()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Charisma&quot; ablegen'>[r: macroLink("CH: ", "probeEig@Lib:macros", "", "CH")]</span>
									[h,if(aktCH < CH): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktCH > CH): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Charisma&quot; ablegen'>[r: macroLink(aktCH, "probeEig@Lib:macros", "", "CH")]</span>
								</td>
								<td width='57'>
									[h: aktFF = getFF()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Fingerfertigkeit&quot; ablegen'>[r: macroLink("FF: ", "probeEig@Lib:macros", "", "FF")]</span>
									[h,if(aktFF < FF): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktFF > FF): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Fingerfertigkeit&quot; ablegen'>[r: macroLink(aktFF, "probeEig@Lib:macros", "", "FF")]</span>
								</td>
								<td width='57'>
									[h: aktGE = getGE()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Gewandheit&quot; ablegen'>[r: macroLink("GE: ", "probeEig@Lib:macros", "", "GE")]</span>
									[h,if(aktGE < GE): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktGE > GE): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Gewandheit&quot; ablegen'>[r: macroLink(aktGE, "probeEig@Lib:macros", "", "GE")]</span>
								</td>
								<td width='57'>
									[h: aktKO = getKO()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;Konstitution&quot; ablegen'>[r: macroLink("KO: ", "probeEig@Lib:macros", "", "KO")]</span>
									[h,if(aktKO < KO): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktKO > KO): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;Konstitution&quot; ablegen'>[r: macroLink(aktKO, "probeEig@Lib:macros", "", "KO")]</span>
								</td>
								<td width='57'>
									[h: aktKK = getKK()]
									<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;K&ouml;rperkraft&quot; ablegen'>[r: macroLink("KK: ", "probeEig@Lib:macros", "", "KK")]</span>
									[h,if(aktKK < KK): eigColor = "#ff3333"; eigColor = "#eee5c8"]
									[h,if(aktKK > KK): eigColor = "#0099ff"]
									<span style='color: [r: eigColor]; text-decoration: none;' title='Probe auf &quot;K&ouml;rperkraft&quot; ablegen'>[r: macroLink(aktKK, "probeEig@Lib:macros", "", "KK")]</span>
								</td>
								<td width='22'>
									&nbsp;
								</td>
							</tr>
						</table>