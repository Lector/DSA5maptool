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

[h: actionLink = macroLinkText("probeKrankGiftProcess@Lib:macros", "")]
[dialog5("probe", "width=510; height=415; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Krankheits- bzw. Giftprobe w&uuml;rfeln</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Gift / Krankheit")]
				
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
			
				<table style='border-spacing: 0px; margin: 0px auto 0px auto'>
					<tr>
						<td>
							Name:
						</td>
						<td>
							<input type="text" name="Name" size="16" maxlength="30" value="Gift oder Krankheit">
						</td>
					</tr>
					<!--<tr>
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
					</tr>-->
					<tr>
						<td>
							Stufe:
						</td>
						<td>
							<input type="text" name="Wert" size="3" maxlength="3" value="">
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 5px auto 7px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 11)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@Lib:macros"): currentToken()]
				<hr/>
				<table style='border-spacing: 0px; margin-bottom: 5px;'>
					<tr>
						<td valign='top'>
							<div class='label'>
								Modifikatoren
							</div>
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
										Probe gegen Z&auml;higkeit
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

						<td width="20">
							&nbsp;
						</td>

						<td valign='top'>
							<div class='label'>
								Typ
							</div>
						</td>
						<td valign='top'>
							<table cellpadding='1'>
								<tr>
									<td>
										<input type="radio" name="typ" value="gift" checked='checked'>
									</td>
									<td>
										Gift
									</td>
								</tr>
								<tr>
									<td>
										<input type="radio" name="typ" value="krankheit">
									</td>
									<td>
										Krankheit
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" name="image" value="85"/>
				<input type="hidden" name="modMacro" value="probeKrankGiftMods@Lib:macros"/>
			</form>
		</div>
	</body>
</html>
}]