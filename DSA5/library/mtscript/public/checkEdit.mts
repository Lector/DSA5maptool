[h: switchToken(arg(0))]
[h,if(json.length(macro.args) > 1): check = arg(1); check = ""]

[h: actionLink = macroLinkText("checkEditProcess@this", "")]
[dialog5("checkEdit", "width=600; height=800; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: getName(currentToken())] Probe hinzufügen</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Neue Probe")]
				<table style='margin: 0px auto 0px auto;'>
					<tr>
						<td>
							<table style='border-spacing: 0px;' cellpadding='1'>
								<tr>
									<td style='padding-right: 3px;'>
										Talent:
									</td>
									<td>
										<select size=1 name="skill">
                                        [h: skills = getSkills()]
										[h,if(check == ""): default = "Sinnesschärfe"; default = json.get(check, "Skill")]
                                        [r,foreach(skill, skills, ""),Code:{
                                            <option value="[r: skill]" [r,if(skill == default): "selected"]>[r: skill]</option>
                                        }]
                                        </select>
									</td>
								</tr>
								<tr>
									<td style='padding-right: 3px;'>
										Anwendungsgebiet:
									</td>
									<td>
										<input type="text" name="spec" [r,if(check != ""): "value='"+json.get(check, "Spec")+"'"]/>
									</td>
								</tr>
                                [r,for(i,1,7,1,""),Code:{
                                <tr>
									<td style='padding-right: 3px;'>
										QS[r:i]+:
									</td>
									<td>
                                        [h: label = ""]
                                        [h,if(check != ""),Code:{
                                            [h: qs = json.get(check, strformat("QS%{i}"))]
                                            [h: label = json.get(qs, "Info")]
                                        }]
										<textarea name="qs[r:i]" rows="4" cols="50">[r: label]</textarea>
									</td>
								</tr>    
                                }]
                            </table>
							<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
								<tr>
									<td>
										<button type="submit">
											<table>
												<tr>
													<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
													<td>Probe anlegen</td>
												</tr>
											</table>
										</button>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
				<input type="hidden" name="token" value="[r: currentToken()]"/>
                <input type="hidden" name="check" value="[r: encode(check)]"/>
			</form>
		</div>
	</body>
</html>
}]