[h: switchToken(arg(0))]

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
			[h: rs = resolveRS(getRuestung(RuestungAktiv))]
			[h: temprs = getStrProp(TempMod, "rs")]
			[h,if(temprs < 0): eigColor = "#ff3333"; eigColor = "#eee5c8"]
			[h,if(temprs > 0): eigColor = "#0099ff"]
			<table style='border-spacing: 0px;'>
				<tr>
					<td style='padding: 0px 0px 7px 6px;' valign='bottom'>
						[h: portrait = getTokenPortrait(100)]
						<image src='[r, if(portrait != ""): portrait; getTokenImage(100)]'/>
					</td>
					<td>
						<table style='padding-left: 5px;'>
							<tr>
								<td>
									Gesamt:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									<span style='color: [r: eigColor];'>[r: json.get(rs, "RS")]</span>
								</td>
							</tr>
							<tr>
								<td>
									Belastung:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									[r: json.get(rs, "BE")]
								</td>
							</tr>
							<tr>
								<td>
									INI-Abzug:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									[r: json.get(rs, "INI")]
								</td>
							</tr>
							<tr>
								<td>
									GS-Abzug:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									[r: json.get(rs, "GS")]
								</td>
							</tr>
						</table>
					</td>
					<td width=30>
						&nbsp;
					</td>
					<td>
						<!-- <div style='border-bottom: 1px solid #eee5c8; border-top: 1px solid #eee5c8; padding: 3px 0px 4px 3px; margin-left: 5px;' width='157'>
							<image src='[r: tableImage("mainTheme", 34)]'></image>
						</div>-->
						<table>
							<tr>
								<td style='padding-left: 5px;'>
									Kopf:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									<span style='color: [r: eigColor];'>[r: json.get(rs, "RSKopf")]</span>
								</td>
								<td style='padding-left: 7px;'>
									Torso:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									<span style='color: [r: eigColor];'>[r: json.get(rs, "RSTorso")]</span>
								</td>
							</tr>
							<tr>
								<td style='padding-left: 5px;'>
									Linker Arm:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									<span style='color: [r: eigColor];'>[r: json.get(rs, "RSArmLinks")]</span>
								</td>
								<td style='padding-left: 7px;'>
									Rechter Arm:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									<span style='color: [r: eigColor];'>[r: json.get(rs, "RSArmRechts")]</span>
								</td>
							</tr>
							<tr>
								<td style='padding-left: 5px;''>
									Linkes Bein:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									<span style='color: [r: eigColor];'>[r: json.get(rs, "RSBeinLinks")]</span>
								</td>
								<td style='padding-left: 7px;'>
									Rechtes Bein:
								</td>
								<td style='text-align: center; padding-left: 0px;'>
									<span style='color: [r: eigColor];'>[r: json.get(rs, "RSBeinRechts")]</span>
								</td>
							</tr>
						</table>									
					</td>
				</tr>
			</table>
			
			<table style='border-spacing: 0px; margin-left: 9px;' width='416'> 	
				<tr style='text-align: center;'>
					<td style='text-align: left;'>
						Rüstung
					</td>
					<td width='30'>
						RS
					</td>
					<td width='30'>
						Belastung
					</td>
					<td width='30'>
						INI
					</td>
					<td width='30'>
						GS
					</td>
					<td width='30'>
						&nbsp;
					</td>
				</tr>
				[r, Foreach(ruestung, Ruestungen, ""), Code:
				{
					[h: rName = json.get(ruestung, "Name")]
					[h: rRS = json.get(ruestung, "RS")]
					[h: rBE = json.get(ruestung, "BE")]
					[h: rINI = json.get(ruestung, "INI")]
					[h: rGS = json.get(ruestung, "GS")]
					[h: rID = json.get(ruestung, "ID")]
					[h: editMacroLink = macroLink(rName, "quickeditRS@this", "", rID)]

					<tr style='font-weight: normal; text-align: center; border-top: 1px solid #eee5c8;'>
						[h: ausgabe = "<span style='color: #eee5c8; text-decoration: none;' title='Diese Ruestung editieren'>" + editMacroLink + "</span>"]
						<td style='text-align: left;'>
							[r: ausgabe]
						</td>
						<td>
							[r: rRS]
						</td>
						<td>
							[r: rBE]
						</td>
						<td>
							[r: rINI]
						</td>
						<td>
							[r: rGS]
						</td>
						[h,if(rID == RuestungAktiv): bg = "bgcolor='#eee5c8'"; bg = ""]
						[h,if(rID == RuestungAktiv): fc = "#3d1919"; fc = "#eee5c8"]
						[h,if(rID == RuestungAktiv): linkTitle = "title='Diese Ruestung ist angelegt.'"; linkTitle = "title='Diese Ruestung anlegen.'"]
						[h,if(rID == RuestungAktiv): link = "&#10003;"; link = macroLink("&#10063;", "changeRS@this", "", rID)]
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