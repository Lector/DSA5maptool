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

[h: nNum = macro.args]

[h: actionLink = macroLinkText("notizEditProcess@this", "")]
[dialog5("notizEdit", "width=424; height=335; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Notiz &auml;ndern</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Notiz")]
				<table style='border-spacing: 0px; font-size: 12pt;' width='400'>
					<tr>
						<td width='48'>
							&nbsp;
						</td>
						<td valign='middle'>
							Notiztitel:
						</td>
						<td>
							<input type='text' name='nTitel' size='30' maxlength='30' value='[r: getStrProp(Notizen, strformat("n%{nNum}Titel"))]'>
						</td>
						<td width='48'>
							&nbsp;
						</td>
					</tr>
					<tr>
						<td width='48'>
							&nbsp;
						</td>
						<td valign='top'>
							Notiztext:
						</td>
						<td>
							<textarea name='nText' cols='31' rows='3'>[r: getStrProp(Notizen, strformat("n%{nNum}Text"))]</textarea>
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
				<input type="hidden" name="notizNummer" value="[r: nNum]">
			</form>
		</div>
	</body>
</html>
}]