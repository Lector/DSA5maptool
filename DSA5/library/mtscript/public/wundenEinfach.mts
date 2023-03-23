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

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction", "com.github.lector.dsa5maptool") == 1), Code:
	{
		[ausgabeSL = "checked='checked'"]
		[ausgabePublic = ""]
	};
	{
		[ausgabeSL = ""]
		[ausgabePublic = "checked='checked'"]
	}
]

[h: actionLink = macroLinkText("wundenEinfachProcess@this", "")]
[dialog("wundenEinfach", "width=466; height=331; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>Wunden heilen oder hinzufügen</title>
	</head>
	<body style='font-size: 11pt;' bgcolor='#ece9d8'>
		<form action="[r:actionLink]">
			<div style="background-image: url('[r: tblImage("forms",16)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="442">
			</div>
			<div style="background-image: url('[r: tblImage("forms",17)]'); background-repeat: repeat-y; text-align: center; font-size: 12pt; color: #000000; height: 20; margin: 0px;" width="442">
				<div style='padding: 10px 0px 6px 0px;'>
					<image src='[r: tableImage("forms", 94)]'></image>
				</div>		
				<table style='border-spacing: 0px;' cellpadding='1'>
					<tr>
						<td>
							<input type='radio' name='wAction' value='1' checked='checked'>
						</td>
						<td style='padding-right: 5px;'>
							Anzahl zu heilende Wunden:
						</td>
						<td>
							<select name='wZahl' size='1'>
							<option selected='selected'>0</option>
							[h: num = 1]
							[count(Wunden, ""), Code:
								{
									[r: strformat("<option>%{num}</option>")]
									[h: num = num + 1]
								}
							]
						</td>
					</tr>
					<tr>
						<td>
							<input type='radio' name='wAction' value='2'>
						</td>
						<td style='padding-right: 5px;'>
							Eine Wunde verursachen
						</td>
						<td>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 9px 0px 8px 0px;'>
						<td>
							[h: button = strformat("<html><img src='%s'></html>",tableImage("forms", 96))]
							<input type="submit" name="action" value="[r: button]">
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; font-size: 11pt; margin: 3px 0px 9px 0px;' cellpadding='0'>
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
					</tr>
				</table>
			</div>
			<div style="background-image: url('[r: tblImage("forms",18)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="442">
			</div>
		</form>
	</body>
</html>
}]