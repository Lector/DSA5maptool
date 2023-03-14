[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h,switch(uebergabe),Code:
	case "Vorteile": {
		[fTitle = "Vorteile editieren"]
		[fHeader = "Vorteile"]
	};
	case "Nachteile": {
		[fTitle = "Nachteile editieren"]
		[fHeader = "Nachteile"]
	};
	case "AllgemeineSF": {
		[fTitle = "Allgemeine Sonderfertigkeiten editieren"]
		[fHeader = "Allgemeine SF"]
	};
	case "KampfSF": {
		[fTitle = "Kampfsonderfertigkeiten editieren"]
		[fHeader = "Kampf SF"]
	};
	case "MagieSF": {
		[fTitle = "Magische Sonderfertigkeiten editieren"]
		[fHeader = "Magische SF"]
	};
	case "KarmaleSF": {
		[fTitle = "Karmale Sonderfertigkeiten editieren"]
		[fHeader = "Karmale SF"]
	};
	default: {
		[fTitle = "Sonderfertigkeiten editieren"]
		[fHeader = "Sonderfertigkeiten"]
	}
]

[h: actionLink = macroLinkText("chareditTraitProcess@this", "")]
[dialog5("chareditTrait", "width=931; height=812; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>[r: fTitle]</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header(fHeader)]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					[h: num = 0]
					[h: tBaum = eval(uebergabe)]
					[h: options = json.append("[]","<option value=0 >&nbsp;</option>")]
					[h, for(i, 1, 21): options = json.append(options, "<option value="+i+" >"+romanNumeral(i)+"</option>")]
					[Foreach(tDaten, tBaum,""), Code:
					{
						[h: tName = json.get(tDaten, "Name")]
						[h: tStufe = json.get(tDaten, "Stufe")]
						<tr>
							<td>
								<input type='text' name='[r: strformat("f%sName", num)]' size='40' maxlength='100' value='[r: tName]'>
							</td>
							<td>
								&nbsp;
							</td>
							<td>
								[h: selectedOption = replace(json.get(options, tStufe), " >", " selected='selected'>")]
								[h: currentOptions = json.set(options, tStufe, selectedOption)]
								<select name='[r: strformat("f%sStufe", num)]' size='1'>
									[r,foreach(option, currentOptions, ""): option]
								</select>
							</td>
							<td>
								[h: params = setStrProp("", "list", uebergabe)]
								[h: params = setStrProp(params, "index", num)]
								[h: params = setStrProp(params, "frame", "chareditTrait@this")]
								[h: params = setStrProp(params, "noticeKey", "chareditTraitDel")]
								[h: link = macroLink("<img src='"+tableImage("misc", 7)+"' border=0 alt='Eintrag l&ouml;schen'/>", "chareditTraitDelProcess@this", "", params)]
								[r: link]
							</td>
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
				<input type='hidden' name='tArt' value='[r: uebergabe]'/>
				<input type='hidden' name='tAnzahl' value='[r: num]'/>
			</form>
		</div>
	</body>
</html>
}]