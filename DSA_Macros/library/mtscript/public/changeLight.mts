[h,macro("abfrageImpersonate@this"): ""]

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

[h: currentLights = getLights("DSA", "json")]
[h: currentLight = ""]
[h: currentQS = ""]
[h,if(json.length(currentLights) != 0),Code:{
	[h: currentLightName = json.get(currentLights, 0)]
	[h: currentLight = substring(currentLightName, 0, length(currentLightName) - 2)]
	[h: hasCurrentLightQS = endsWith(substring(currentLight, 0, length(currentLight) - 1), "QS")]
	[h,if(hasCurrentLightQS == 1),Code:{
		[currentQS = substring(currentLight, length(currentLight)-1)]
		[currentLight = substring(currentLight, 0, length(currentLight)-4)]
	}]
};{}]

[h: cmp = json.indent(getInfo("campaign"), 2)]
[h: dsalights = json.get(json.get(cmp, "light sources"), "DSA")]
[h: dsalights = json.sort(dsalights, "descending", "max range")]
[h: dsalights = json.sort(dsalights, "ascending", "name")]
[h: lights = "[]"]
[h: lightnames = "[]"]
[h: qs = "[]"]
[h,for(i, 0, json.length(dsalights)),Code:{
	[h: light = json.get(dsalights, i)]
	[h: origName = json.get(light, "name")]
	[h: lname = substring(origName, 0, length(origName) - 2)]
	[h: hasQS = endsWith(substring(lname, 0, length(lname) - 1), "QS")]
	[h,if(hasQS == 1): lname = substring(lname, 0, length(lname) - 4)]
	[h,if(json.contains(lightnames, lname) == 0), Code:{
		[h: lightnames = json.append(lightnames, lname)]
		[h: lights = json.append(lights, json.set(light, "name", lname))]
		[h: qs = json.append(qs, hasQS)]
	};{}]
}]
[h: lights = json.sort(lights, "ascending", "name")]

[h: actionLink = macroLinkText("changeLightProcess@this", "")]
[dialog5("changeLight", "width=425; height=622; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Lichtquelle bearbeiten</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Lichtquelle")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;' cellpadding='1'>
					[h,if(currentLight == ""): checked = "checked='checked'"; checked = ""]
					<tr>
						<td>
							<input type="radio" name="lightname" value="" [r:checked]/>
						</td>
						<td colspan=2>
							Keine Lichtquelle (0)
						</td>
					</tr>
					[r,for(i, 0, json.length(lights), 1, ""),Code:{
					[h: light = json.get(lights, i)]
					[h: lightname = json.get(light, "name")]
					[h: hasQS = json.get(qs, i)]
					[h,if(currentLight == lightname):checked = "checked='checked'"; checked = ""]
					<tr>
						<td>
							<input type="radio" name="lightname" value="[r: lightname]" [r:checked]/>
						</td>
						<td [r,if(hasQS == 0): "colspan=2"]>
							<span style="white-space: nowrap;">[r: lightname]</span>
							[r,if(hasQS == 0): "("+json.get(light, "max range") * 4+")"]
							</td>
							[r,if(hasQS == 1),Code:{
							<td style="margin: 0px 0px 0px 4px">
								<select size="1" name=[r: replace(lightname, " ", "_")+"_QS"]>
									<!--Da wir hier keinen weiteren Code-Block machen dürfen
									selectieren wir das richtige Element über einen str-replace-->
									[h: options = ""]
									[h,for(j, 1, 7, 1, ""): options = options+"<option value="+j+">QS"+j+"</option>"] 
									[h,if(currentLight == lightname && currentQS != ""):
										options = replace(options, "value="+currentQS, "selected value="+currentQS)]
									[r: options]
								</select>
							</td>
							}]
					</tr>
					}]
				</table>
				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
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