[h: switchToken(arg(0))]
[h,if(json.length(macro.args) > 1): check = arg(1); check = ""]
[h,if(check == ""): verb = "anlegen"; verb = "bearbeiten"]

[h: actionLink = macroLinkText("checkEditProcess@this", "")]
[dialog5("checkEdit", "width=600; height=850; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: getName(currentToken())] - Probe [r: verb]</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Probe "+verb)]
				<div class="table-container">
					<div>Talent:</div>
					<div>
						<select size=1 name="skill">
						[h: skills = getSkills()]
						[h,if(check == ""): default = "Sinnesschärfe"; default = json.get(check, "Skill")]
						[r,foreach(skill, skills, ""),Code:{
							<option value="[r: skill]" [r,if(skill == default): "selected"]>[r: skill]</option>
						}]
						</select>
					</div>
					<div>Anwendungsgebiet:</div>
					<div>
						<input type="text" name="spec" [r,if(check != ""): "value='"+json.get(check, "Spec")+"'"]/>
					</div>		
					<div>
						Modifikator:
					</div>
					<div>
						<select name="mod" size="1">
							[h,if(check == ""): default = 0; default = json.get(check, "Mod")]
							[r,for(i,-10,11,1,""),Code:{
								[h: i = -i]
								<option value='[r:i]' [r,if(i==default):'selected']>[r: strformat("%+d",i)]</option>
							}]
						</select>
					</div>
					[r,for(i,1,7,1,""),Code:{
					<div>
						QS[r:i]+:
					</div>
					<div>
						[h: label = ""]
						[h,if(check != ""),Code:{
							[h: qs = json.get(check, strformat("QS%{i}"))]
							[h: label = json.get(qs, "Info")]
						}]
						<textarea name="qs[r:i]" rows="4" cols="50">[r: label]</textarea>
					</div>  
                    }]
				</div>
				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
					<tr>
						<td>
							<button type="submit">
								<table>
									<tr>
										<td><img src=[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/hand.png")]/></td>
										<td>Probe [r: verb]</td>
									</tr>
								</table>
							</button>
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