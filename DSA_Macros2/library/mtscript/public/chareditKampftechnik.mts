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

[h: actionLink = macroLinkText("chareditKampftechnikProcess@this", "")]
[dialog5("chareditKampftechnik", "width=931; height=812; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Kampftechniken editieren</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.naxos84.macros2/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Kampftechniken")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					[h: num = 0]
					[Foreach(tDaten, Kampftechniken,""), Code:
						{
							[h: tName = json.get(tDaten, "Name")]	
							[h: leit = json.get(tDaten, "L")]
							[h: tE1 = json.get(leit, 0)]
							[h,if(json.length(leit) == 2): tE2 = json.get(leit, 1); tE2 = ""]
							[h: tWert = json.get(tDaten, "FW")]
							<tr>
								<td>
									<input type='text' name='[r: strformat("f%sName", num)]' size='20' maxlength='50' value='[r: tName]'>
								</td>
								<td>
									&nbsp;
								</td>
								<td>
									[h: sMU = ""]
									[h: sKL = ""]
									[h: sIN = ""]
									[h: sCH = ""]
									[h: sFF = ""]
									[h: sGE = ""]
									[h: sKO = ""]
									[h: sKK = ""]
									[h: sEmpty = ""]
									[h,switch(tE1):
										case "MU": sMU = "selected='selected'";
										case "KL": sKL = "selected='selected'";
										case "IN": sIN = "selected='selected'";
										case "CH": sCH = "selected='selected'";
										case "FF": sFF = "selected='selected'";
										case "GE": sGE = "selected='selected'";
										case "KO": sKO = "selected='selected'";
										case "KK": sKK = "selected='selected'";
										default: sEmpty = "selected='selected'"
									]
									<select name='[r: strformat("f%sE1", num)]' size='1'>
										<option [r: sMU]>MU</option>
										<option [r: sKL]>KL</option>
										<option [r: sIN]>IN</option>
										<option [r: sCH]>CH</option>
										<option [r: sFF]>FF</option>
										<option [r: sGE]>GE</option>
										<option [r: sKO]>KO</option>
										<option [r: sKK]>KK</option>
										<option [r: sEmpty]>--</option>
									</select>
								</td>
								<td>
									/
								</td>
								<td>
									[h: sMU = ""]
									[h: sKL = ""]
									[h: sIN = ""]
									[h: sCH = ""]
									[h: sFF = ""]
									[h: sGE = ""]
									[h: sKO = ""]
									[h: sKK = ""]
									[h: sEmpty = ""]
									[h,switch(tE2):
										case "MU": sMU = "selected='selected'";
										case "KL": sKL = "selected='selected'";
										case "IN": sIN = "selected='selected'";
										case "CH": sCH = "selected='selected'";
										case "FF": sFF = "selected='selected'";
										case "GE": sGE = "selected='selected'";
										case "KO": sKO = "selected='selected'";
										case "KK": sKK = "selected='selected'";
										default: sEmpty = "selected='selected'"
									]
									<select name='[r: strformat("f%sE2", num)]' size='1'>
										<option [r: sMU]>MU</option>
										<option [r: sKL]>KL</option>
										<option [r: sIN]>IN</option>
										<option [r: sCH]>CH</option>
										<option [r: sFF]>FF</option>
										<option [r: sGE]>GE</option>
										<option [r: sKO]>KO</option>
										<option [r: sKK]>KK</option>
										<option [r: sEmpty]>--</option>
									</select>
								</td>
								<td>
									&nbsp;
								</td>
								<td>
									<input type='text' name='[r: strformat("f%sWert", num)]' size='2' maxlength='2' value='[r: tWert]'>
								</td>
							</tr>
							[h: num = num + 1]
						}
					]
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 112)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
			</div>
			<div style="background-image: url('[r: tblImage("forms",135)]'); background-repeat: no-repeat; height: 21; margin: 0px;" width="906">
			</div>
			<input type='hidden' name='tAnzahl' value='[r: num]'>
		</form>
	</body>
</html>
}]