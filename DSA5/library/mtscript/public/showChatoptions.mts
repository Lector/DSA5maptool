[dialog5("showChatoptions", "width=524; height=481; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Chatbefehle
		</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/charsheet.css?cachelib=false'/>
	</head>
	<body>
		<div class="panel-ornament">
			<table style='border-spacing: 0px; font-size: 12pt; font-weight: bold; margin-bottom: 10px;' cellpadding='0'> 
				<tr>
					<td>
						&nbsp;
					</td>
					<td style='text-align: center; border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 2px 0px 3px 0px;'>
						Schriftformatierung
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-bottom: 10px;'> 
				<tr>
					<td style='text-align: center;' width='145'>
						&lt;b&gt;<b>Fetter Text</b>&lt;/b&gt;
					</td>
					<td style='text-align: center;' width='145'>
						&lt;i&gt;<i>Kursiver Text</i>&lt;/i&gt;
					</td>
					<td style='text-align: center;' width='145'>
						&lt;u&gt;<u>Unterstrichener Text</u>&lt;/u&gt;
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; font-size: 12pt; font-weight: bold; margin: 10px 0px 10px 0px;' cellpadding='0'> 
				<tr>
					<td>
						&nbsp;
					</td>
					<td style='text-align: center; border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 2px 0px 3px 0px;'>
						Emoticons / Smilies
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px;'>
				<tr>
					<td valign='top'>
						<table style='border-spacing: 0px;'>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:)
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/smile.png")]></img>
								</td>
								<td>
									Lächeln
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:D
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/grin.png")]></img>
								</td>
								<td>
									Grinsen
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									,)
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/twinkle.png")]></img>
								</td>
								<td>
									Zwinkern
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									,D
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/twinkleGrin.png")]></img>
								</td>
								<td>
									Zwinkern (grinsend)
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									xD
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/laugh.png")]></img>
								</td>
								<td>
									Lachen
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									xP
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/laughTongue.png")]></img>
								</td>
								<td>
									Lachen (Zunge raus)
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									^^
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/smirk.png")]></img>
								</td>
								<td>
									Schmunzeln
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									^_^
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/giggle.png")]></img>
								</td>
								<td>
									Kichern
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									8)
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/cool.png")]></img>
								</td>
								<td>
									Cool
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:(
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/sad.png")]></img>
								</td>
								<td>
									Traurig
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:c
								</td>
								<td>
								<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/crying.png")]></img>
								</td>
								<td>
									Weinend
								</td>
							</tr>
						</table>
					</td>
					<td width='25'>
						&nbsp;
					</td>
					<td valign='top'>
						<table style='border-spacing: 0px;'>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									x(
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/angry.png")]></img>
								</td>
								<td>
									Verärgert
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:0
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/shocked.png")]></img>
								</td>
								<td>
									Geschockt
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:o
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/surprised.png")]></img>
								</td>
								<td>
									überrascht
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									Oo
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/irritated.png")]></img>
								</td>
								<td>
									Irritiert
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:#
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/confused.png")]></img>
								</td>
								<td>
									Verwirrt
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:*
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/skeptical.png")]></img>
								</td>
								<td>
									Skeptisch
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:|
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/speechless.png")]></img>
								</td>
								<td>
									Sprachlos
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									x|
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/annoyed.png")]></img>
								</td>
								<td>
									Genervt
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									x0
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/ouch.png")]></img>
								</td>
								<td>
									Ouch!
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									&gt;=)
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/spiteful.png")]></img>
								</td>
								<td>
									Gehässig
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									&gt;=D
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/vicious.png")]></img>
								</td>
								<td>
									Boshaft
								</td>
							</tr>
						</table>
					</td>
					<td width='25'>
						&nbsp;
					</td>
					<td valign='top'>
						<table style='border-spacing: 0px;'>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									-_-
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/tired.png")]></img>
								</td>
								<td>
									Müde
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									^-^
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/shy.png")]></img>
								</td>
								<td>
									Schüchtern
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									+)
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/greed.png")]></img>
								</td>
								<td>
									Gierig
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									=:)
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/crazy.png")]></img>
								</td>
								<td>
									Verrückt
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:x
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/silent.png")]></img>
								</td>
								<td>
									Lippen versiegelt
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									0:)
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/angle.png")]></img>
								</td>
								<td>
									Engel
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									3:)
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/devil.png")]></img>
								</td>
								<td>
									Teufel
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									&lt;3
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/heart.png")]></img>
								</td>
								<td>
									Herz
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:dh:
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/thumbUp.png")]></img>
								</td>
								<td>
									Daumen hoch
								</td>
							</tr>
							<tr>
								<td style='font-weight: bold; text-align: center;'>
									:dr:
								</td>
								<td>
									<img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/smilies/thumbDown.png")]></img>
								</td>
								<td>
									Daumen runter
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</div>
	</body>
</html>
}]