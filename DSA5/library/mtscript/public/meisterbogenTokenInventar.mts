[h: id = macro.args]
[h: switchToken(id)]

[h: ausgabeB1 = ""]
[h: ausgabeB2 = ""]
[h: ausgabeB3 = ""]
[h: ausgabeB4 = ""]
[h: ausgabeB5 = ""]
[h: gewichtB1 = 0]
[h: gewichtB2 = 0]
[h: gewichtB3 = 0]
[h: gewichtB4 = 0]
[h: gewichtB5 = 0]

[h,foreach(item, Inventar,""), Code:
	{
		[gesGewichtItem = json.get(item, "anzahl") * json.get(item, "gewicht")]
		[ausgabe = strformat("%sx %s", json.get(item, "anzahl"), json.get(item, "gegenstand"))]
		[switch(json.get(item, "behaelter")), Code:
			case "1":
				{
					[gewichtB1 = gewichtB1 + gesGewichtItem]
					[ausgabeB1 = listAppend(ausgabeB1, ausgabe)]
				};
			case "2":
				{
					[gewichtB2 = gewichtB2 + gesGewichtItem]
					[ausgabeB2 = listAppend(ausgabeB2, ausgabe)]
				};
			case "3":
				{
					[gewichtB3 = gewichtB3 + gesGewichtItem]
					[ausgabeB3 = listAppend(ausgabeB3, ausgabe)]
				};
			case "4":
				{
					[gewichtB4 = gewichtB4 + gesGewichtItem]
					[ausgabeB4 = listAppend(ausgabeB4, ausgabe)]
				};
			case "5":
				{
					[gewichtB5 = gewichtB5 + gesGewichtItem]
					[ausgabeB5 = listAppend(ausgabeB5, ausgabe)]
				};
			default:
				{
					[ausgabe = ausgabe]
				}
		]
	}
]

[dialog("meisterbogenTokenInventar", "width=455; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Inventar &amp; Vermögen
		</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 10pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",48)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="431">
		</div>
		<div class="box-middle" width="431">
			<table style='border-spacing: 0px;'>
				<tr>
					<td>
						<a href="[r: macroLinkText("gotoToken@this", "", id)]"><image src='[r: getTokenImage(30)]' border="0" alt="Zum Token wechseln und auswählen"></image></a>
					</td>
					<td style='font-weight: bold;'>
						[r: getName()]
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-top: 5px;' width='405' cellpadding='2'>
				<tr>
					<td style='font-weight: bold;'>
						Geldbeutel:
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td style='text-align: center;' width='101'>
									Dukaten: [r: json.get(InventarMisc, "dukaten")]
								</td>
								<td style='text-align: center;' width='101'>
									Silbertaler: [r: json.get(InventarMisc, "silbertaler")]
								</td>
								<td style='text-align: center;' width='101'>
									Heller: [r: json.get(InventarMisc, "heller")]
								</td>
								<td style='text-align: center;' width='102'>
									Kreuzer: [r: json.get(InventarMisc, "kreuzer")]
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px; margin-top: 10px;' cellpadding='0'>
							<tr>
								<td style='font-weight: bold;' width='300'>
									[r: json.get(InventarMisc, "behaelter1")]:
								</td>
								<td style='text-align: right;' width='100'>
									([r: gewichtB1] U)
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td style='padding-left: 10px;'>
						[r,if(ausgabeB1 == ""): output = "Kein Inventar vorhanden"; output = ausgabeB1]
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px; margin-top: 5px;' cellpadding='0'>
							<tr>
								<td style='font-weight: bold;' width='300'>
									[r: json.get(InventarMisc, "behaelter2")]:
								</td>
								<td style='text-align: right;' width='100'>
									([r: gewichtB2] U)
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td style='padding-left: 10px;'>
						[r,if(ausgabeB2 == ""): output = "Kein Inventar vorhanden"; output = ausgabeB2]
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px; margin-top: 5px;' cellpadding='0'>
							<tr>
								<td style='font-weight: bold;' width='300'>
									[r: json.get(InventarMisc, "behaelter3")]:
								</td>
								<td style='text-align: right;' width='100'>
									([r: gewichtB3] U)
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td style='padding-left: 10px;'>
						[r,if(ausgabeB3 == ""): output = "Kein Inventar vorhanden"; output = ausgabeB3]
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px; margin-top: 5px;' cellpadding='0'>
							<tr>
								<td style='font-weight: bold;' width='300'>
									[r: json.get(InventarMisc, "behaelter4")]:
								</td>
								<td style='text-align: right;' width='100'>
									([r: gewichtB4] U)
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td style='padding-left: 10px;'>
						[r,if(ausgabeB4 == ""): output = "Kein Inventar vorhanden"; output = ausgabeB4]
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px; margin-top: 5px;' cellpadding='0'>
							<tr>
								<td style='font-weight: bold;' width='300'>
									[r: json.get(InventarMisc, "behaelter5")]:
								</td>
								<td style='text-align: right;' width='100'>
									([r: gewichtB5] U)
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td style='padding-left: 10px;'>
						[r,if(ausgabeB5 == ""): output = "Kein Inventar vorhanden"; output = ausgabeB5]
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",50)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="431">
		<div>
	</body>
</html>
}]