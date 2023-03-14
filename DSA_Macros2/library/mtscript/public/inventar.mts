[h,macro("abfrageImpersonate@lib:com.github.naxos84.Macros"): ""]

[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

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

[h: numItem = 0]
[h,foreach(item, Inventar,""), Code:
	{
		[gesGewichtItem = json.get(item, "anzahl") * json.get(item, "gewicht")]
		[ausgabe = strformat("
		<tr>
			<td>
				<a href='%s'><image src='%s' border='0' alt='Gegenstand l&ouml;schen'></image></a>
			</td>
			<td>
				<a href='%s'><image src='%s' border='0' alt='Gegenstand verschieben'></image></a>
			</td>
			<td>
				<a href='%s'><image src='%s' border='0' alt='Gegenstand editieren'></image></a>
			</td>
			<td>
				<a href='%s'><image src='%s' border='0' alt='Anzahl um 1 erh&ouml;hen'></image></a>
			</td>
			<td>
				<a href='%s'><image src='%s' border='0' alt='Anzahl um 1 senken'></image></a>
			</td>
			<td width='5'>
				&nbsp;
			</td>
			<td style='text-align: center;'>
				%s
			</td>
			<td width='5'>
				&nbsp;
			</td>
			<td>
				%s
			</td>
			<td width='5'>
				&nbsp;
			</td>
			<td style='text-align: right;'>
				%s S
			</td>
			<td width='5'>
			&nbsp;
			</td>
			<td>
				%s
			</td>
		</tr>
		", macroLinkText("inventarDel@this", "", numItem), tableImage("misc", 3), macroLinkText("inventarItemMove@this", "", numItem), tableImage("misc", 11), macroLinkText("inventarItemEdit@this", "", numItem), tableImage("misc", 8), macroLinkText("inventarItemcountAdd@this", "", numItem), tableImage("misc", 6), macroLinkText("inventarItemcountSub@this", "", numItem), tableImage("misc", 7), json.get(item, "anzahl"), json.get(item, "gegenstand"), gesGewichtItem, json.get(item, "beschreibung"))]
		[switch(json.get(item, "behaelter")), Code:
			case "1":
				{
					[gewichtB1 = gewichtB1 + gesGewichtItem]
					[ausgabeB1 = ausgabeB1 + ausgabe]
				};
			case "2":
				{
					[gewichtB2 = gewichtB2 + gesGewichtItem]
					[ausgabeB2 = ausgabeB2 + ausgabe]
				};
			case "3":
				{
					[gewichtB3 = gewichtB3 + gesGewichtItem]
					[ausgabeB3 = ausgabeB3 + ausgabe]
				};
			case "4":
				{
					[gewichtB4 = gewichtB4 + gesGewichtItem]
					[ausgabeB4 = ausgabeB4 + ausgabe]
				};
			case "5":
				{
					[gewichtB5 = gewichtB5 + gesGewichtItem]
					[ausgabeB5 = ausgabeB5 + ausgabe]
				};
			default:
				{
					[ausgabe = ausgabe]
				}
		]
		[h: numItem = numItem + 1]
	}
]

[h: bFirstRow = "
<tr>
	<td>
	</td>
	<td>
	</td>
	<td>
	</td>
	<td>
	</td>
	<td>
	</td>
	<td width='5'>
		&nbsp;
	</td>
	<td style='font-weight: bold; text-align: center;'>
		Anzahl
	</td>
	<td width='5'>
		&nbsp;
	</td>
	<td style='font-weight: bold;' width='200'>
		Gegenstand
	</td>
	<td width='5'>
		&nbsp;
	</td>
	<td style='font-weight: bold;'>
		Gewicht
	</td>
	<td width='5'>
		&nbsp;
	</td>
	<td style='font-weight: bold;' width='350'>
		Beschreibung
	</td>
</tr>
"]

[dialog5("inventar", "width=971; height=653; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Inventar &amp; Verm&ouml;gen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			[r: header("Inventar")]
			[h: bGesGewicht = gewichtB1 + gewichtB2 + gewichtB3 + gewichtB4 + gewichtB5]
			[h: bGewichte = strformat("%s,%s,%s,%s,%s,%s", gewichtB1, gewichtB2, gewichtB3, gewichtB4, gewichtB5, bGesGewicht)]
			[r,macro("inventarTeil2@this"): bGewichte]
			<table style='border-spacing: 0px; margin: 0px auto 13px auto;' width='761'>
				<tr>
					<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' bgcolor='#875e34'>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' width='600'>
									[r: json.get(InventarMisc, "behaelter1")]
								</td>
								<td style='text-align: right;' width='161'>
									<a href="[r: macroLinkText("inventarAdd@this", "", "1")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="Gegenstand zu diesem Beh&auml;lter hinzuf&uuml;gen"></image></a>&nbsp;<a href="[r: macroLinkText("inventarContainerEdit@this", "", "1")]"><image src='[r: tableImage("misc", 8)]' border="0" alt="Eine neue Bezeichnung f&uuml;r diesen Beh&auml;lter eingeben"></image></a>&nbsp;<a href="[r: macroLinkText("inventarDelContainer@this", "", "1")]"><image src='[r: tableImage("misc", 3)]' border="0" alt="Alle Gegenst&auml;nde in diesem Beh&auml;lter l&ouml;schen"></image></a>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td bgcolor='#ffffff'>
						<table style='border-spacing: 0px;'>
							[r,if(ausgabeB1 != ""): output = bFirstRow + ausgabeB1; output = "<tr><td style='text-align: center;' width='761'>Kein Inventar vorhanden</td></tr>"]
						</table>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' bgcolor='#875e34'>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' width='600'>
									[r: json.get(InventarMisc, "behaelter2")]
								</td>
								<td style='text-align: right;' width='161'>
									<a href="[r: macroLinkText("inventarAdd@this", "", "2")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="Gegenstand zu diesem Beh&auml;lter hinzuf&uuml;gen"></image></a>&nbsp;<a href="[r: macroLinkText("inventarContainerEdit@this", "", "2")]"><image src='[r: tableImage("misc", 8)]' border="0" alt="Eine neue Bezeichnung f&uuml;r diesen Beh&auml;lter eingeben"></image></a>&nbsp;<a href="[r: macroLinkText("inventarDelContainer@this", "", "2")]"><image src='[r: tableImage("misc", 3)]' border="0" alt="Alle Gegenst&auml;nde in diesem Beh&auml;lter l&ouml;schen"></image></a>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td bgcolor='#ffffff'>
						<table style='border-spacing: 0px;'>
							[r,if(ausgabeB2 != ""): output = bFirstRow + ausgabeB2; output = "<tr><td style='text-align: center;' width='761'>Kein Inventar vorhanden</td></tr>"]
						</table>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' bgcolor='#875e34'>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' width='600'>
									[r: json.get(InventarMisc, "behaelter3")]
								</td>
								<td style='text-align: right;' width='161'>
									<a href="[r: macroLinkText("inventarAdd@this", "", "3")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="Gegenstand zu diesem Beh&auml;lter hinzuf&uuml;gen"></image></a>&nbsp;<a href="[r: macroLinkText("inventarContainerEdit@this", "", "3")]"><image src='[r: tableImage("misc", 8)]' border="0" alt="Eine neue Bezeichnung f&uuml;r diesen Beh&auml;lter eingeben"></image></a>&nbsp;<a href="[r: macroLinkText("inventarDelContainer@this", "", "3")]"><image src='[r: tableImage("misc", 3)]' border="0" alt="Alle Gegenst&auml;nde in diesem Beh&auml;lter l&ouml;schen"></image></a>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td bgcolor='#ffffff'>
						<table style='border-spacing: 0px;'>
							[r,if(ausgabeB3 != ""): output = bFirstRow + ausgabeB3; output = "<tr><td style='text-align: center;' width='761'>Kein Inventar vorhanden</td></tr>"]
						</table>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' bgcolor='#875e34'>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' width='600'>
									[r: json.get(InventarMisc, "behaelter4")]
								</td>
								<td style='text-align: right;' width='161'>
									<a href="[r: macroLinkText("inventarAdd@this", "", "4")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="Gegenstand zu diesem Beh&auml;lter hinzuf&uuml;gen"></image></a>&nbsp;<a href="[r: macroLinkText("inventarContainerEdit@this", "", "4")]"><image src='[r: tableImage("misc", 8)]' border="0" alt="Eine neue Bezeichnung f&uuml;r diesen Beh&auml;lter eingeben"></image></a>&nbsp;<a href="[r: macroLinkText("inventarDelContainer@this", "", "4")]"><image src='[r: tableImage("misc", 3)]' border="0" alt="Alle Gegenst&auml;nde in diesem Beh&auml;lter l&ouml;schen"></image></a>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td bgcolor='#ffffff'>
						<table style='border-spacing: 0px;'>
							[r,if(ausgabeB4 != ""): output = bFirstRow + ausgabeB4; output = "<tr><td style='text-align: center;' width='761'>Kein Inventar vorhanden</td></tr>"]
						</table>
					</td>
				</tr>
				<tr>
					<td>
						&nbsp;
					</td>
				</tr>
				<tr>
					<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' bgcolor='#875e34'>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td style='font-size: 12pt; font-weight: bold; color: #ffffff;' width='600'>
									[r: json.get(InventarMisc, "behaelter5")]
								</td>
								<td style='text-align: right;' width='161'>
									<a href="[r: macroLinkText("inventarAdd@this", "", "5")]"><image src='[r: tableImage("misc", 6)]' border="0" alt="Gegenstand zu diesem Beh&auml;lter hinzuf&uuml;gen"></image></a>&nbsp;<a href="[r: macroLinkText("inventarContainerEdit@this", "", "5")]"><image src='[r: tableImage("misc", 8)]' border="0" alt="Eine neue Bezeichnung f&uuml;r diesen Beh&auml;lter eingeben"></image></a>&nbsp;<a href="[r: macroLinkText("inventarDelContainer@this", "", "5")]"><image src='[r: tableImage("misc", 3)]' border="0" alt="Alle Gegenst&auml;nde in diesem Beh&auml;lter l&ouml;schen"></image></a>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td bgcolor='#ffffff'>
						<table style='border-spacing: 0px;'>
							[r,if(ausgabeB5 != ""): output = bFirstRow + ausgabeB5; output = "<tr><td style='text-align: center;' width='761'>Kein Inventar vorhanden</td></tr>"]
						</table>
					</td>
				</tr>
			</table>	
		</div>
	</body>
</html>
}]