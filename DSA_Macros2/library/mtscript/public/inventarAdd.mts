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

[h: actionLink = macroLinkText("inventarAddProcess@this", "")]
[dialog5("inventarAdd", "width=425; height=410; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Gegenstand hinzufügen</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.naxos84.macros2/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]"  method="json">
				[r: header("Gegenstand")]
				<table style='border-spacing: 0px;'>
					<tr>
						<td>
							Anzahl:
						</td>
						<td>
							<input type='text' name='iAnzahl' size='2' maxlength='2' value='1'>
						</td>
					</tr>
					<tr>
						<td>
							Gegenstand:
						</td>
						<td>
							<input type='text' name='iItem' size='10' maxlength='40' value=''>
						</td>
					</tr>
					<tr>
						<td>
							Einzelgewicht (S):
						</td>
						<td>
							<input type='text' name='iGewicht' size='5' maxlength='5' value=''>
						</td>
					</tr>
					<tr>
						<td valign='top'>
							Beschreibung:
						</td>
						<td>
							<textarea name='iBeschreibung' cols='10' rows='4'></textarea>
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
				<input type='hidden' name='numContainer' value='[r: num]'>
			</form>
		</div>
	</body>
</html>
}]