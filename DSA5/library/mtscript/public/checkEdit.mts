[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) == 0), Code:
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

[h,if(json.length(macro.args) > 0): switchToken(arg(0))]
[h,if(json.length(macro.args) > 1): check = arg(1); check = ""]
[h: blind = 0]
[h,if(check == ""),Code:{
	[verb = "anlegen"]
};{
	[verb = "bearbeiten"]
	[h,if(json.get(check, "Blind") == 1): blind = 1]
}]

[h: js = ""]
[h,for(i, 0, 7, 1),Code:{
	[h: js = js + strformat("
	function resizeTextarea%{i}() {
		var textarea = document.getElementById('text'+%{i});
		textarea.style.height = 'auto';
		textarea.style.height = (textarea.scrollHeight+2) + 'px';
	}")]
}]
[h: js = js + "
window.addEventListener('load', function(event) {
	resizeTextarea0();
	resizeTextarea1();
	resizeTextarea2();
	resizeTextarea3();
	resizeTextarea4();
	resizeTextarea5();
	resizeTextarea6();
});"]

[h: actionLink = macroLinkText("checkEditProcess@this", "")]
[dialog5("checkEdit", "width=600; height=700; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: getName(currentToken())] - Probe [r: verb]</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
		<script>
			[r: js]
  		</script>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Probe "+verb)]
				<div class="table-container">
					[r,for(j, 1, 3, 1, ""),Code:{
					[h: subCheck = ""]
					[h,if(check != ""),Code:{
						[h: subChecks = json.get(check, "Checks")]
						[h,if(json.length(subChecks) >= j): subCheck = json.get(subChecks, j-1)]
					}]
					<div>[r,if(j==2): "Alternative "]Probe:</div>
					<div>
						<select size=1 name="skill[r:j]">
							[h: skills = getSkills()]
							[h: defaultSkill = ""]
							[h,if(j == 1): defaultSkill = "Sphärenkunde"]
							[h,if(subCheck != ""): defaultSkill = json.get(subCheck, "Skill")]
							[r,if(j > 1): '<option value="" [r,if("" == defaultSkill): "selected"]></option>']
							[r,foreach(skill, skills, ""),Code:{
								<option value="[r: skill]" [r,if(skill == defaultSkill): "selected"]>[r: skill]</option>
							}]
						</select>

						[h: defaultSpec = ""]
						[h,if(j==1): defaultSpec = "Sphärenwesen"]
						[h,if(subCheck != ""): defaultSpec = json.get(subCheck, "Spec")]
						(<input type="text" name="spec[r:j]" value='[r: defaultSpec]'/>)

						<select name="mod[r:j]" size="1">
							[h,if(subCheck == ""): default = 0; default = json.get(subCheck, "Mod")]
							[r,for(i,-10,11,1,""),Code:{
								[h: i = -i]
								<option value='[r:i]' [r,if(i==default):'selected']>[r: strformat("%+d",i)]</option>
							}]
						</select>
					</div>
					}]
				</div>
				<div class="table-container">
					<div>
						Fehlschlag:
					</div>
					<div>
						[h: label = ""]
						[h,if(check != ""),Code:{
							[h: fail = json.get(check, "Fail")]
							[h: label = json.get(fail, "Info")]
						}]
						<textarea name="fail" id="text0" rows="1" cols="50" oninput="resizeTextarea0()"
						placeholder="Was ein Held erfährt wenn seine Probe misslingt.">[r: label]</textarea>
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
						<textarea name="qs[r:i]" id="text[r:i]" rows="1" cols="50" oninput="resizeTextarea[r:i]()"
						placeholder="Was ein Held erfährt wenn er mindestens QS[r:i] erwürfelt.">[r: label]</textarea>
					</div>
                    }]
				</div>
				<div class="table-container">
					<div>
						<input type="checkbox" name="blind" [r,if(blind == 1): "checked"]/>
					</div>
					<div>
						<span title="Geheime Proben werden verdeckt vom Spieler gewürfelt.
Spieler bekommen die Probe nur angezeigt falls sie gelingt.
Für fehlgeschlagene Proben können folglich auch keine SchiPs eingesetzt werden.">Geheime Probe</span>
					</div>
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