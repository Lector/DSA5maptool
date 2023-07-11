[h: switchToken(arg(0))]
[h: airborne = isAirborne(currentToken())]

[h: actionLink = macroLinkText("chareditImprovePetProcess@this", "")]
[dialog5("chareditImprovePet", "width=500; height=600; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Beschwörung verbessern</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Tier ausbilden")]
				<table style='border-spacing: 0px; margin: 12px auto 0px auto;'>
					<tr>
						<td colspan=2>
							Welchen Ausbildungsaufsatz soll [r: getName()] erhalten?
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="herding"/>
						</td>
						<td>
							<span title='+1 MU
+1 IN
+1 GE
+1 VW
+4 Körperbeherrschung
+6 Sinnesschärfe
Tricks: Ablegen, Komm, Laut, Sitz, Treiben'>
								Hütetier
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="hunting"/>
						</td>
						<td>
							<span title='+1 GE
+1 KO
+1 AT
[r,if(airborne == 0),Code:{+8 Fährtensuchen
+6 Körperbeherrschung};{+8 Sinnesschärfe
+6 Fliegen}]
Tricks: Apport, Fass I, Laut, Still, Such'>
								Jagdtier
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="combat"/>
						</td>
						<td>
							<span title='+1 MU
+1 KK
+2 AT
+1 TP
+20 % LeP
+4 Einschüchtern
Tricks: Aus, Fass I+II'>
								Kampftier
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="mount" checked/>
						</td>
						<td>
							<span title='Das Tier gilt nicht mehr als unausgebildet, darüber hinaus kann ein Reittier einen weiteren Ausbildungsaufsatz erhalten (z. B. Renntier). Außerdem ist es, je nach Tierart, in der Lage, ein bis zwei Personen mit leichtem Gepäck zu tragen.'>
								Reittier
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="racing"/>
						</td>
						<td>
							<span title='+2 GE
+2 KO
+25 % GS
+8 Körperbeherrschung
Tricks: Komm, Sitz'>
								Renntier
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="tracking1"/>
						</td>
						<td>
							<span title='+1 KL
+2 IN
+1 GE
+8 Fährtensuchen'>
								Suchtier (Variante Fährtensuche)
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="tracking2"/>
						</td>
						<td>
							<span title='+1 KL
+2 IN
+1 GE
+8 Sinnesschärfe'>
								Suchtier (Variante Sinnesschärfe)
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="drafting"/>
						</td>
						<td>
							<span title='+2 KK
+2 KO
+25 % LeP
Tier kann Gewicht in Höhe von (Eigenes Gewicht / 100 x KK) tragen (gilt nur für Tiere ohne den Zusatz k bei KK).
Falls vorhanden, wird stattdessen das Gewicht aus der Sonderregel Packesel verdoppelt.'>
								Trage- oder Zugtier
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="guarding"/>
						</td>
						<td>
							<span title='+2 MU
+1 IN
+1 AT
+2 VW
+6 Einschüchtern
Tricks: Ablegen, Komm, Laut, Sitz, Wache'>
								Wachtier
							</span>
						</td>
					</tr>
					<tr>
						<td>
							<input type="radio" name="improvement" value="circus1"/>
						</td>
						<td>
							<span title='+2 FF
+2 GE
+8 Gaukeleien
+6 Klettern
Tricks: 4 Kunststücke nach Wahl'>
								Zirkustier (Variante Klettern)
							</span>
						</td>
					</tr>
					<tr>
					<td>
						<input type="radio" name="improvement" value="circus2"/>
					</td>
					<td>
						<span title='+2 FF
+2 GE
+8 Gaukeleien
+6 Körperbeherrschung
Tricks: 4 Kunststücke nach Wahl'>
							Zirkustier (Variante Körperbeherrschung)
						</span>
					</td>
				</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Tier ausbilden</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="token" value="[r: currentToken()]">
			</form>
		</div>
	</body>
</html>
}]