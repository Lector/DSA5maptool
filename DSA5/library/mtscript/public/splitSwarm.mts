[h,if(isGM() == 0),Code:
{
	[h,macro("inputFail@this"): "gm"]
};{}]

[h,if(hasImpersonated() == 0), Code:
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

[h,if(Schwarm == 0),Code:{
	[h,macro("inputFail@this"): "noSwarm"]
}]
[h: maxSplit = floor(SchwarmAnzahl / SchwarmGG)]
[h,if(maxSplit < 2),Code:{
	[h,macro("inputFail@this"): "swarmTooSmallToSplit"]
}]

[h: actionLink = macroLinkText("splitSwarmProcess@this", "")]
[dialog5("splitSwarm", "width=467; height=350; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Schwarmwesen aufteilen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Schwarm aufteilen")]
				<table style='border-spacing: 0px;' cellpadding='3'>
					<tr>
						<td valign='middle'>
							In wieviele Teilschwärme aufteilen:
						</td>
						<td valign='middle' colspan=4>
							<select size='1' name='count'>
								[r,for(i, 2, maxSplit + 1, 1, ""),Code:
								{
									<option value=[r:i]>[r:i]</option>
								}]
							</select>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 12px 0px 0px 0px; font-size: 1pt;' width='360'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 8px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Schwarm aufteilen</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				<input type='hidden' name='token' value='[r: currentToken()]'/>
			</form>
		</div>
	</body>
</html>
}]