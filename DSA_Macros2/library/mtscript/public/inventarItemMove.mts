[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: num = macro.args]

[h: item = json.get(Inventar, num)]

[h: cb1 = ""]
[h: cb2 = ""]
[h: cb3 = ""]
[h: cb4 = ""]
[h: cb5 = ""]
[h,switch(json.get(item, "behaelter")):
	case 1: cb1 = "checked='checked'";
    case 2: cb2 = "checked='checked'";
    case 3: cb3 = "checked='checked'";
	case 4: cb4 = "checked='checked'";
	case 5: cb5 = "checked='checked'";
	default: cb1 = "checked='checked'"
]

[h: actionLink = macroLinkText("inventarItemMoveProcess@this", "")]
[dialog5("inventarItemMove", "width=425; height=439; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Gegenstand verschieben</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Gegenstand")]
				<table style='border-spacing: 0px;'>
					<tr>
						<td>
							Gegenstand:
						</td>
						<td>
							[r: json.get(item, "gegenstand")]
						</td>
					</tr>
					<tr>
						<td>
							Anzahl:
						</td>
						<td>
							<input type='text' name='fAnzahl' size='2' maxlength='2' value='[r: json.get(item, "anzahl")]'>
						</td>
					</tr>
					<tr>
						<td style='padding-top: 5px;' valign='top'>
							Beh&auml;lter:
						</td>
						<td>
							<table style='border-spacing: 0px;'>
								<tr>
									<td style='padding-left: 0px;'>
										<input type='radio' name='bAuswahl' value='1' [r: cb1]>
									</td>
									<td>
										[r: json.get(InventarMisc, "behaelter1")]
									</td>
								</tr>
								<tr>
									<td style='padding-left: 0px;'>
										<input type='radio' name='bAuswahl' value='2' [r: cb2]>
									</td>
									<td>
										[r: json.get(InventarMisc, "behaelter2")]
									</td>
								</tr>
								<tr>
									<td style='padding-left: 0px;'>
										<input type='radio' name='bAuswahl' value='3' [r: cb3]>
									</td>
									<td>
										[r: json.get(InventarMisc, "behaelter3")]
									</td>
								</tr>
								<tr>
									<td style='padding-left: 0px;'>
										<input type='radio' name='bAuswahl' value='4' [r: cb4]>
									</td>
									<td>
										[r: json.get(InventarMisc, "behaelter4")]
									</td>
								</tr>
								<tr>
									<td style='padding-left: 0px;'>
										<input type='radio' name='bAuswahl' value='5' [r: cb5]>
									</td>
									<td>
										[r: json.get(InventarMisc, "behaelter5")]
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 13px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 154)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				<input type='hidden' name='numItem' value='[r: num]'>
			</form>
		</div>
	</body>
</html>
}]