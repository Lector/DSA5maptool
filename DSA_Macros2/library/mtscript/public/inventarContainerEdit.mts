[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: num = macro.args]

[h: actionLink = macroLinkText("inventarContainerEditProcess@this", "")]
[dialog5("inventarContainerEdit", "width=425; height=296; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Behälter umbenennen</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.naxos84.macros2/styles/base.css?cachelib=false'/>
	</head>
	<body style='font-size: 12pt;' bgcolor='#ece9d8'>
		<div class="border">
			<form action="[r:actionLink]"  method="json">
				[r: header("Behälter")]
				<table style='border-spacing: 0px;'>
					<tr>
						<td>
							Bezeichnung eingeben:
						</td>
						<td>
							<input type='text' name='cName' size='16' maxlength='30' value='[r: json.get(InventarMisc, strformat("behaelter%s", num))]'>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 13px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 112)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="numContainer" value="[r: num]">
			</form>
		</div>
	</body>
</html>
}]