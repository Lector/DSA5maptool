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

[h: actionLink = macroLinkText("notizSLEditProcess@this", "")]
[dialog5("notizSLEdit", "width=424; height=387; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Notizen für den Spielleiter</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				<div style='padding: 10px 0px 5px 0px;'>
					<image src='[r: tableImage("forms", 119)]'></image>
				</div>
				<table style='border-spacing: 0px; font-size: 12pt;' width='400'>
					<tr>
						<td width='48'>
							&nbsp;
						</td>
						<td style='text-align: center; padding-bottom: 10px;'>
							Hier kannst du wichtige Charakterinformationen für den Spielleiter eintragen. Wenn du dir unsicher bist was du hier eintragen sollst, frage den Spielleiter.
						</td>
						<td width='48'>
							&nbsp;
						</td>
					</tr>
					<tr>
						<td width='48'>
							&nbsp;
						</td>
						<td style='text-align: center;'>
							<textarea name='chatField' cols='40' rows='4'>[r: getGMNotes()]</textarea>
						</td>
						<td width='48'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; padding: 0px; margin: 10px auto 5px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 101)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]