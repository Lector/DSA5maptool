[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: fSpecial = ""]
[h: delete = 0]
[h,switch(uebergabe),Code:
	case "Koerper": {
		[fTitle = "Körperliche Fertigkeiten editieren"]
		[fHeader = "Körper"]
	};
	case "Wissen": {
		[fTitle = "Wissensfertigkeiten editieren"]
		[fHeader = "Wissen"]
	};
	case "Handwerk": {
		[fTitle = "Handwerkliche Fertigkeiten editieren"]
		[fHeader = "Handwerk"]
	};
	case "Natur": {
		[fTitle = "Naturfertigkeiten editieren"]
		[fHeader = "Natur"]
	};
	case "Gaben": {
		[fTitle = "Gaben editieren"]
		[fHeader = "Gaben"]
	};
	case "Gesellschaft": {
		[fTitle = "Gesellschaftliche Fertigkeiten editieren"]
		[fHeader = "Gesellschaft"]
	};
	case "Zauber": { 
		[fTitle = "Zauber editieren"]
		[fHeader = "Zauber"]
		[fSpecial = "Merkmal"]
		[delete = 1]
	};
	case "Rituale": {
		[fTitle = "Rituale editieren"]
		[fHeader = "Rituale"]
		[fSpecial = "Merkmal"]
		[delete = 1]
	};
	case "MagischeHandlungen": {
		[fTitle = MagischeHandlungenPlural+" editieren"]
		[fHeader = MagischehandlungenPlural]
		[fSpecial = "Merkmal"]
		[delete = 1]
	};
	case "Liturgien": {
		[fTitle = "Liturgien editieren"]
		[fHeader = "Liturgien"]
		[fSpecial = "Aspekt"]
		[delete = 1]
	};
	case "Zeremonien": {
		[fTitle = "Zeremonien editieren"]
		[fHeader = "Zeremonien"]
		[fSpecial = "Aspekt"]
		[delete = 1]
	};
	default: {
		[fTitle = "Talente &amp; Zauber editieren"]
		[fHeader = "Tokeneditor"]
	}
]

[h: actionLink = macroLinkText("chareditTalentProcess@this", "")]
[dialog5("chareditTalent", "width=931; height=812; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: fTitle]</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header(fHeader)]
				[r,if(uebergabe == "MagischeHandlungen"),Code:
				{
				<table style="margin: 0px auto 0px auto;">
					<tr>
						<td>Singular:</td>
						<td>
							<input type='text' name='singular' value='[r: MagischeHandlungenSingular]'/>
						</td>
						<td>Plural:</td>
						<td>
							<input type='text' name='plural' value='[r: MagischeHandlungenPlural]'/>
						</td>
					</tr>
				</table>
				};{}]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					[h: num = 0]
					[h: tBaum = eval(uebergabe)]
					[Foreach(tDaten, tBaum,""), Code:
					{
						[h: tName = json.get(tDaten, "Talent")]	
						[h: tProbe = json.get(tDaten, "Probe")]
						[h: tE1 = json.get(tProbe, "Eigenschaft1")]
						[h: tE2 = json.get(tProbe, "Eigenschaft2")]
						[h: tE3 = json.get(tProbe, "Eigenschaft3")]
						[h: tWert = json.get(tDaten, "Talentwert")]
						
						[h,if(fSpecial == "Merkmal"),Code:
						{
							[h: merkmal = json.get(tDaten, "Merkmal")]
							[h: sAntimagie = '']
							[h: sDaemonisch = '']
							[h: sEinfluss = '']
							[h: sElementar = '']
							[h: sHeilung = '']
							[h: sHellsicht = '']
							[h: sIllusion = '']
							[h: sSphaeren = '']
							[h: sObjekt = '']
							[h: sTelekinese = '']
							[h: sTemporal = '']
							[h: sVerwandlung = '']
							[h,if(merkmal == "Antimagie"): sAntimagie = "selected='selected'"]
							[h,if(merkmal == "Dämonisch"): sDaemonisch = "selected='selected'"]
							[h,if(merkmal == "Einfluss"): sEinfluss = "selected='selected'"]
							[h,if(merkmal == "Elementar"): sElementar = "selected='selected'"]
							[h,if(merkmal == "Heilung"): sHeilung = "selected='selected'"]
							[h,if(merkmal == "Hellsicht"): sHellsicht = "selected='selected'"]
							[h,if(merkmal == "Illusion"): sIllusion = "selected='selected'"]
							[h,if(merkmal == "Sphären"): sSphaeren = "selected='selected'"]
							[h,if(merkmal == "Objekt"): sObjekt = "selected='selected'"]
							[h,if(merkmal == "Telekinese"): sTelekinese = "selected='selected'"]
							[h,if(merkmal == "Temporal"): sTemporal = "selected='selected'"]
							[h,if(merkmal == "Verwandlung"): sVerwandlung = "selected='selected'"]
						};{}]
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
								[h,switch(tE3):
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
								<select name='[r: strformat("f%sE3", num)]' size='1'>
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
							[r,if(fSpecial == "Merkmal"),Code:
							{
							<td>
								<select name='[r: strformat("f%sMerkmal", num)]'>
									<option >&nbsp;</option>
									<option [r: sAntimagie]>Antimagie</option>
									<option [r: sDaemonisch]>Dämonisch</option>
									<option [r: sEinfluss]>Einfluss</option>
									<option [r: sElementar]>Elementar</option>
									<option [r: sHeilung]>Heilung</option>
									<option [r: sHellsicht]>Hellsicht</option>
									<option [r: sIllusion]>Illusion</option>
									<option [r: sSphaeren]>Sphären</option>
									<option [r: sObjekt]>Objekt</option>
									<option [r: sTelekinese]>Telekinese</option>
									<option [r: sTemporal]>Temporal</option>
									<option [r: sVerwandlung]>Verwandlung</option>
								</select>
							</td>
							}]
							[r,if(delete == 1),Code:
							{
							<td>
								[h: params = setStrProp("", "list", uebergabe)]
								[h: params = setStrProp(params, "index", num)]
								[h: params = setStrProp(params, "frame", "chareditTalent@this")]
								[h: params = setStrProp(params, "noticeKey", "chareditTraitDel")]
								[h: link = macroLink("<img src='"+tableImage("misc", 7)+"' border=0 alt='Eintrag l&ouml;schen'/>", "chareditTraitDelProcess@this", "", params)]
								[r: link]
							</td>
							};{}]
						</tr>
						[h: num = num + 1]
					}]
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
				<input type='hidden' name='tArt' value='[r: uebergabe]'>
				<input type='hidden' name='tAnzahl' value='[r: num]'>
			</form>
		</div>
	</body>
</html>
}]