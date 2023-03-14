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

[h: uebergabe = macro.args]
<tr>
	<td width='25'>
		&nbsp;
	</td>
	<td style="background-image: url('[r: tblImage("mainTheme",23)]'); background-repeat: repeat-y;" width='450'>
		<table style='border-spacing: 0px;' width='450'>
			<tr>
				<td width='16'>
					&nbsp;
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; height: 23;' width='260'>
					FERTIGKEIT
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: center;' width='60' colspan=5>
					PROBE
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: center;' width='30'>
					<span title="Routineprobe">R</span>
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: right;' width='30'>
					FW
				</td>
				<td>
					&nbsp;
				</td>
			</tr>
		
		[h: tBaum = eval(uebergabe)]
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
			[h: tUebergabe = listAppend(tUebergabe, uebergabe)]
			<tr>
				<td></td>
				<td style='padding-left: 5px;'>
					<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tName, "probeTalent@this", "", tUebergabe)]</span>
				</td>

				<td style='font-weight: normal; text-align: center;' width='20'>
					[r: tEigenschaft1]
				</td>
				<td style='text-align: center;'  width='5'>
					&middot;
				</td>
				<td style='font-weight: normal; text-align: center;' width='20'>
					[r: tEigenschaft2]
				</td>
				<td style='text-align: center;'  width='5'>
					&middot;
				</td>
				<td style='font-weight: normal; text-align: center;' width='20'>
					[r: tEigenschaft3]
				</td>

				<td style='text-align: center;'>
					[h: routine = 3 - floor( (tWert - 1) / 3 )]
					[r,if(
						eval(tEigenschaft1) >= 13 &&
						eval(tEigenschaft2) >= 13 &&
						eval(tEigenschaft3) >= 13 &&
						tWert >= 1):
					strformat("<span title='Routineprobe ab einer Probe %+d möglich. Das Ergebnis wäre %d QS'>%+d</span>", routine, ceil(round(tWert/2.0)/3.0), routine);
					"<span title='Routineprobe nicht möglich. Dazu müssen alle Eigenschaften >= 13 sein.'>-</span>"]
				</td>
				<td style='text-align: right;'>
					<span style='color: #eee5c8; text-decoration: none;' title='Probe auf &quot;[r: tName]&quot; ablegen'>[r: macroLink(tWert, "probeTalent@this", "", tUebergabe)]</span>
				</td>
				<td>
					&nbsp;
				</td>
			</tr>
		}]
		[r,if(uebergabe == "Natur" && Typus == "Kulturschaffend"),Code:{
			<tr></tr>
			<tr>
				<td></td>
				<td colspan=8>
					[h: linkOpen1 = "
					<span style='color: #eee5c8; text-decoration: none; vertical-align: middle;' title='Heil-, Gift- und Nutzpflanzen suchen'>
					<a href='"+ macroLinkText("probeKraeutersuche@lib:com.github.naxos.Wildnis", "", "") +"'>"]
					[h: linkOpen2 = "
					<span style='color: #eee5c8; text-decoration: none; vertical-align: middle;' title='Nahrung suchen'>
					<a href='"+ macroLinkText("probeNahrungssuche@lib:com.github.naxos.Wildnis", "", "") +"'>"]
					[h: linkClose = "</a></span>"]
					<table>
						<tr>
							<td>
								<img border=0 src='[r: tableImage("campaignButtons", 76)]'/>
							</td>
							<td>
								[r: linkOpen1]Kr&auml;utersuche[r: linkClose] &middot; [r: linkOpen2]Nahrungssuche[r: linkClose]
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td></td>
				<td colspan=8>
					[h: linkOpen1 = "
					<span style='color: #eee5c8; text-decoration: none; vertical-align: middle;' title='Auf die Jagd nach Wild gehen'>
					<a href='"+ macroLinkText("probeJagd@lib:com.github.naxos.Wildnis", "", "Ansitzjagd") +"'>"]
					[h: linkOpen2 = "
					<span style='color: #eee5c8; text-decoration: none; vertical-align: middle;' title='Auf die Jagd nach Wild gehen'>
					<a href='"+ macroLinkText("probeJagd@lib:com.github.naxos.Wildnis", "", "Pirschjagd") +"'>"]
					[h: linkOpen3 = "
					<span style='color: #eee5c8; text-decoration: none; vertical-align: middle;' title='Auf die Jagd nach Wild gehen'>
					<a href='"+ macroLinkText("probeJagd@lib:com.github.naxos.Wildnis", "", "Fallenjagd") +"'>"]
					[h: linkClose = "</a></span>"]
					[h: link = strformat("
					%{linkOpen1}Ansitzjagd%{linkClose} &middot; %{linkOpen2}Pirschjagd%{linkClose} &middot; %{linkOpen3}Fallenjagd%{linkClose}"
					)]
					<table>
						<tr>
							<td>
								<img border=0 src='[r: tableImage("campaignButtons", 77)]'/>
							</td>
							<td>
								[r: link]
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td></td>
				<td colspan=8>
					[h: linkOpen = "
					<span style='color: #eee5c8; text-decoration: none; vertical-align: middle;' title='Fischen / Angeln gehen'>
					<a href='"+ macroLinkText("probeJagd@lib:com.github.naxos.Wildnis", "", "Angeln") +"'>"]
					[h: linkClose = "</a></span>"]
					<table>
						<tr>
							<td>
								[r: linkOpen]<img border=0 src='[r: tableImage("campaignButtons", 78)]'/>[r: linkClose]
							</td>
							<td>
								[r: linkOpen]Fischen[r: linkClose]
							</td>
						</tr>
					</table>
				</td>
			</tr>
		};{}]
		</table>
	</td>
	<td>
		&nbsp;
	</td>
</tr>