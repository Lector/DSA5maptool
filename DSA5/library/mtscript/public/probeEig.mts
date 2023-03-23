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

[h: eigenschaft = macro.args]
[h,switch(eigenschaft):
case "MU": eigName = "Mut";
case "KL": eigName = "Klugheit";
case "IN": eigName = "Intuition";
case "CH": eigName = "Charisma";
case "FF": eigName = "Fingerfertigkeit";
case "GE": eigName = "Gewandtheit";
case "KO": eigName = "Konstitution";
case "KK": eigName = "Körperkraft"
]

[h,macro("probeGetAktWert@this"): macro.args]
[h: aktWert = macro.return]

[h: actionLink = macroLinkText("probe1w20Process@this", "")]

[dialog5("probe", "width=587; height=398; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Eigenschaftsprobe würfeln</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Eigenschaftsprobe")]
				<div class="title">
					[r: eigName]
				</div>
				<table style='padding: 5px; margin: 0px auto 0px auto;'>
					<tr>
						[r,macro("probeMod@this"): ""]
						<td width='10px'>
							&nbsp;
						</td>
						<td>
							[h: button = tableImage("forms", 11)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				[r,macro("probeChat@this"): currentToken()]			
				<hr/>
				<table style='margin-bottom: 6px;'>
					<tr>
						<td valign='top'>
							<div class='label'>
								Eigenschaft
							</div>
						</td>
						<td valign='top'>	
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td>
										Kurzbezeichnung:
									</td>
									<td style='text-align: right; padding-left: 3px;'>
										[r: eigenschaft]
									</td>
								</tr>
								<tr>
									<td>
										Wert:
									</td>
									<td style='text-align: right;'>
										[r: aktWert]
									</td>
								</tr>
							</table>
						</td>
						<td width='20'>
							&nbsp;
						</td>
					</tr>
				</table>
				<input type="hidden" name="Name" value="[r: eigName]"/>
				<input type="hidden" name="Wert" value="[r: aktWert]"/>
				<input type="hidden" name="modMacro" value="probe1w20Mods@this"/>
				<input type="hidden" name="pruefwurf" value="0"/>
				<input type="hidden" name="image" value="12"/>
			</form>
		</div>
	</body>
</html>
}]