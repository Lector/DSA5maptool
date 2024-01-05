[h: switchToken(arg(0))]
[h: airborne = isAirborne(currentToken())]

[h: actionLink = macroLinkText("impersonateAnimalFormProcess@this", "")]
[dialog5("chareditImpersonateAnimalForm", "width=500; height=600; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: getName(currentToken())] verkörpern</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Tiergestalt")]
                <table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
                        <td>
                            Wer schlüpft in die Tiergestalt?
                        </td>
						<td>
							<select size="1" name="shapeShifter">
                                [h: conditions = json.set("{}", "layer", "Token")]
                                [h,if(isGM() == 0),Code:
                                {
                                    [h: conditions = json.set(conditions, "owned", "self")]
                                }]
                                [h: owned = getTokens("json", conditions)]
                                [r,foreach(tok, owned, ""),Code:{
                                    [h: owners = getOwners(",", tok)]
                                    [h: directlyOwned = listContains(owners, getPlayerName())]
                                    [h: visible = getVisible(tok)]
                                    [h,if(isGM() == 1 || (visible == 1 && directlyOwned > 0)): hasRights = 1; hasRights = 0]
                                    [r,if(getProperty("Typus", tok) == "Kulturschaffend" && hasRights == 1),Code:
                                    {
                                        <option value="[r: tok]">[r: getName(tok)]</option>
                                    }]
                                }]
                            </select>
						</td>
					</tr>
				</table>
                <table style='border-spacing: 0px; margin: 12px auto 0px auto;'>
                    <tr>
                        <td>
                            QS*2 Punkte dürfen noch auf körperliche Eigenschaften verteilt werden.
                        </td>
                    </tr>
                </table>
                <table style='border-spacing: 0px; margin: 12px auto 0px auto;'>
                    [h: props = "['FF', 'GE', 'KO', 'KK']"]
                    [r,foreach(prop, props, ""),Code:{
					<tr>
						<td>
                            [r: upper(prop)]:
                        </td>
                        <td>
                            [r: getProperty(prop, currentToken())]
                        </td>
                        <td>
                            <select name='[r: lower(prop)]'>
                            [r,for(i,0,13,1,""),Code:{
                                <option value=[r:i] [r,if(i==0):selected='selected']>[r: strformat("%+d",i)]</option>
                            }]
                            </select>
                        </td>
                    </tr>
                }]
                </table>
				
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Tiergestalt verkörpern</td>
									</tr>
								</table>
							</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="token" value="[r: currentToken()]">
			</form>
		</div>
	</body>
</html>
}]