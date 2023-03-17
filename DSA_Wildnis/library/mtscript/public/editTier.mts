[h,if(isGM() == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "gm"]
	};{}
]

[h,if(hasImpersonated() == 0 && json.length(macro.args) == 0), Code:
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
[h,if(json.length(macro.args) > 0): switchToken(arg(0))]

[h: tier = currentToken()]

[h: actionLink = macroLinkText("editTierProcess@this", "")]
[dialog5("jagdEdit", "width=600; height=500; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Jagdwild anpassen</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.naxos84.macros2/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Tier anpassen")]
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td colspan=2>
							Jagdmodifikator:
						</td>
						<td>
							<select size=1 name='[r: tier]_mod'>
								[r,for(i,10,-11,-1),Code:
								{
									<option value="[r:i]" [r,if(i==JagdMod): "selected"]>[r: strformat("%+d",i)]</option>
								}]
							</select>
						</td>
					</tr>
					<tr>
						<td colspan=2>
							Rationen:
						</td>
						<td>
							<input type='text' name='[r: tier]_rationen' size='15' maxlength='15' value='[r: Rationen]'/>
						</td>
					</tr>
					<tr>
						<td colspan=2>
							Fleisch:
						</td>
						<td>
							<select size=1 name='[r: tier]_quali'>
								<option value=0 [r,if(Fleischquali == 0):"selected";""]>Ungenießbar</option>
								<option value=1 [r,if(Fleischquali == 1):"selected";""]>Zäh</option>
								<option value=2 [r,if(Fleischquali == 2):"selected";""]>Mittelmäßig</option>
								<option value=3 [r,if(Fleischquali == 3):"selected";""]>Hochwertig</option>
							</select>
						</td>
					</tr>
					<tr>
						<td colspan=2>
							Sonstige Beute:
						</td>
						<td>
							<textarea name='[r: tier]_beute' rows="5" cols="40">[r: decode(SonstigeBeute)]</textarea>
						</td>
					</tr>
					<tr>
						<td valign=top style="padding-top: 7px;" colspan=2>
							Vorkommen:
						</td>
						<td>
							<table>
								<tr>
									<td>
										<input type="checkbox" name='[r: tier]_land' [r,if(Land == 1):'checked']/>
									</td>
									<td>
										<span title='kann mittels Pirsch- und Ansitzjagd erlegt werden'>An Land</span>
									</td>
								</tr>
								<tr>
									<td>
										<input type="checkbox" name='[r: tier]_wasser' [r,if(Wasser == 1):'checked']/>
									</td>
									<td>
										<span title='kann mittels Fischen und Angeln erlegt werden'>Im Wasser</span>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<table style='margin: 10px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 112)]
							<button type="submit" name="action">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				<input type='hidden' name='token' value='[r: tier]'/>
			</form>
		</div>
	</body>
</html>
}]