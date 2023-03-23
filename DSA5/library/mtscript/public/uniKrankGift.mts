[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction","com.github.lector.dsa5maptool") == 1), Code:
	{
		[ausgabeSL = "checked='checked'"]
		[ausgabePublic = ""]
	};
	{
		[ausgabeSL = ""]
		[ausgabePublic = "checked='checked'"]
	}
]

[h: actionLink = macroLinkText("uniKrankGiftProcess@this", "")]
[dialog("uniKrankGift", "width=510; height=450; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>Krankheits- bzw. Giftprobe würfeln</title>
	</head>
	<body style='font-size: 11pt;' bgcolor='#ece9d8'>
		<form action="[r:actionLink]">
			<div style="background-image: url('[r: tblImage("forms",49)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="482">
			</div>
			<div style="background-image: url('[r: tblImage("forms",50)]'); background-repeat: repeat-y; text-align: center; height: 20; margin: 0px;" width="482">
				<div style='padding: 10px 0px 5px 0px;'>
					<image src='[r: tableImage("forms", 19)]'></image>
				</div>
				
				<!--<div style='padding: 10px 35px 10px 35px; text-align: justify; font-size: 14pt;'>
					Anmerkung: Wenn ein Held vergiftet wird, muss der 
					Spielleiter für das Gift eine Giftprobe würfeln. 
					Bei dieser Probe kommt es besonders auf die Stufe 
					des Giftes an: Die drei Eigenschaften des Giftes 
					sind jeweils 10+Stufe und der Fertigkeitswert des 
					Giftes entspricht seiner Stufe. Modifiziert wird
					die Probe durch die Seelenkraft oder Zähigkeit des
					Opfers, je nachdem, was bei dem jeweiligen Gift 
					angegeben ist. Gelingt die Giftprobe, kommen die 
					vollen Auswirkungen des Giftes zum Tragen. 
					Bei Misslingen werden die Giftauswirkungen 
					abgeschwächt und die Angaben hinter dem Schrägstrich 
					der Giftwerte benutzt. Ein vergifteter Held erhält den
					Status Vergiftet.Die Regeln zu Krankheiten funktionieren 
					ähnlich wie die von Giften. Bei einer Infektion legt der Spielleiter 
					für die Krankheit eine Krankheitsprobe ab. Bei dieser Probe kommt es besonders auf die Stufe der Krankheit an: 
					Die drei Eigenschaften der Krankheit sind jeweils 10+Stufe und der Fertigkeitswert der Krankheit entspricht ihrer Stufe. 
					Modifiziert wird die Probe durch die Seelenkraft oder Zähigkeit des Opfers, je nachdem, was bei der jeweiligen Krankheit 
					angegeben ist. Gelingt die Krankheitsprobe, kommen die vollen Auswirkungen der Krankheit zum Tragen. Bei Misslingen werden 
					die Symptome abgeschwächt und die Angaben hinter dem Schrägstrich der Krankheitswerte benutzt. Die Krankheit bricht immer 
					erst nach einer bestimmten Zeit, der sogenannten Inkubationszeit aus. Dies ist der Zeitraum zwischen Ansteckung und Ausbruch 
					der Krankheit. Ein kranker Held erhält den Status Krank.
				</div>-->
			
				<table style='border-spacing: 0px;'>
					<tr>
						<td>
							<table style='border-spacing: 0px; font-size: 12pt;'>
								<tr>
									<td>
										Name:
									</td>
									<td>
										<input type="text" name="tName" size="16" maxlength="30" value="Gift- o. Krankheitsname">
									</td>
								</tr>
								<tr>
									<td>
										Werte:
									</td>
									<td style='padding-left: 0px;'>
										<table style='border-spacing: 0px;'>	
											<tr>
												<td>
													10
												</td>
												<td>
													/
												</td>
												<td>
													10
												</td>
												<td>
													/
												</td>
												<td>
													10
												</td>
											</tr>
										</table>
									</td>
								</tr>
								<tr>
									<td>
										Gift-/Krankheitsstufe:
									</td>
									<td>
										<input type="text" name="tWert" size="3" maxlength="3" value="">
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 5px 0px 7px 0px;'>
					<tr>
						<td>
							[h: button = strformat("<html><img src='%s'></html>",tableImage("forms", 11))]
							<input type="submit" name="action" value="[r: button]">
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 5px 0px 10px 0px;' cellpadding='0'>
					<tr>
						<td style='border-right: 1px solid #939393; padding-right: 5px;'>
							Ausgabe
						</td>
						<td style='padding-left: 5px;'>
							<input type="radio" name="chat" value="1" [r: ausgabePublic]>
						</td>
						<td>
							öffentlich
						</td>
						<td style='padding-left: 5px;'>
							<input type="radio" name="chat" value="2" [r: ausgabeSL]>
						</td>
						<td>
							Spielleiter
						</td>
						<td style='padding-left: 5px;'>
							<input type="radio" name="chat" value="3">
						</td>
						<td>
							Privat &amp; Spielleiter
						</td>
						<td style='padding-left: 5px;'>
							<input type="radio" name="chat" value="4">
						</td>
						<td>
							Privat
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 4px 0px 6px 0px; font-size: 1pt;' width='410'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin-bottom: 5px;'>
					<tr>
						<td valign='top'>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td style='font-weight: bold; border-right: 1px solid #939393; padding-right: 6px;'>
										Modifikatoren
									</td>
								</tr>
							</table>
						</td>
						<td valign='top'>
							<table cellpadding='1'>
								<tr>
									<td>
										<input type="radio" name="resistenz" value="SKAktiv" checked='checked'>
									</td>
									<td>
										Probe gegen Seelenkraft
									</td>
									<td style='text-align: right; padding-left: 3px;'>
										[h: aktSK = SK + getStrProp(TempMod, "sk")]												
										[h,if(aktSK < SK): eigColor = "#ff3333"; eigColor = "#1a1918"]
										[h,if(aktSK > SK): eigColor = "#0099ff"]	
										<span style='color: [r: eigColor];'>[r: aktSK]</span>
									</td>
									<td width='5'>
										&nbsp;
									</td>
									
								</tr>
								<tr>
									<td>
										<input type="radio" name="resistenz" value="ZKAktiv">
									</td>
									<td>
										Probe gegen Zähigkeit
									</td>
									<td style='text-align: right; padding-left: 3px;'>
										[h: aktZK = ZK + getStrProp(TempMod, "zk")]												
										[h,if(aktZK < ZK): eigColor = "#ff3333"; eigColor = "#1a1918"]
										[h,if(aktZK > ZK): eigColor = "#0099ff"]	
										<span style='color: [r: eigColor];'>[r: aktZK]</span>
									</td>
									<td width='5'>
										&nbsp;
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
			<div style="background-image: url('[r: tblImage("forms",51)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="482">
			</div>
		</form>
	</body>
</html>
}]