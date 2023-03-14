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

[h: ruestung = json.get(uebergabe, "ruestung")]

[h: typ = json.get(uebergabe, "typ")]

[h,if(typ == "zone"), Code:
{
	[rskopf = json.get(uebergabe, "rskopf")]
	[rstorso = json.get(uebergabe, "rstorso")]
	[rsarmlinks = json.get(uebergabe, "rsla")]
	[rsarmrechts = json.get(uebergabe, "rsra")]
	[rsbeinlinks = json.get(uebergabe, "rslb")]
	[rsbeinrechts = json.get(uebergabe, "rsrb")]

	[if(isNumber(rskopf) == 0 || isNumber(rstorso) == 0 || isNumber(rsarmlinks) == 0 || isNumber(rsarmrechts) == 0 || isNumber(rsbeinlinks) == 0 || isNumber(rsbeinrechts) == 0), Code: {
		[macro("inputFail@Lib:macros"): "numText"]
	};{}]

	[if(rskopf != round(rskopf) || rstorso != round(rstorso) || rsarmlinks != round(rsarmlinks) || rsarmrechts != round(rsarmrechts) || rsbeinlinks != round(rsbeinlinks) || rsbeinrechts != round(rsbeinrechts)), Code: {
		[macro("inputFail@Lib:macros"): "numInteger"]
	};{}]

	[if(rskopf < 0 || rstorso < 0 || rsarmlinks < 0 || rsarmrechts < 0 || rsbeinlinks < 0 || rsbeinrechts < 0), Code: {
		[macro("inputFail@Lib:macros"): "numNegative"]
	};{}]

	[rs = round((rskopf + rstorso*5 + rsarmlinks*2 + rsarmrechts*2 + rsbeinlinks*2 + rsbeinrechts*2) / 14.0)]
};
{
	[rs = json.get(uebergabe, "rsgesamt")]

	[if(isNumber(rs) == 0), Code: {
		[macro("inputFail@Lib:macros"): "numText"]
	};{}]

	[if(rs != round(rs)), Code: {
		[macro("inputFail@Lib:macros"): "numInteger"]
	};{}]

	[if(rs < 0), Code: {
		[macro("inputFail@Lib:macros"): "numNegative"]
	};{}]
	
	[rskopf = rs]
	[rstorso = rs]
	[rsarmlinks = rs]
	[rsarmrechts = rs]
	[rsbeinlinks = rs]
	[rsbeinrechts = rs]
}]

[h: rName = json.get(uebergabe, "rsname")]
[h, if(rName == ""): rName = "Unbekannte R&uuml;stung"; rName = rName]
[h: be = json.get(uebergabe, "be")]
[h, if(json.get(uebergabe, "beini") == "on"): rini = -1; rini = 0]
[h, if(json.get(uebergabe, "begs") == "on"): rgs = -1; rgs = 0]

[h: index = json.indexOf(Ruestungen, ruestung)]
[h: Ruestungen = json.remove(Ruestungen, index)]
[h: ruestung = json.set("{}", "ID", json.get(ruestung, "ID"), "Name", rName, "RS", rs, "RSKopf", rskopf, "RSTorso", rstorso, "RSArmLinks", rsarmlinks, "RSArmRechts", rsarmrechts, "RSBeinLinks", rsbeinlinks, "RSBeinRechts", rsbeinrechts, "BE", be, "INI", rini, "GS", rgs, "Typ", typ)]
[h: Ruestungen = json.append(Ruestungen, ruestung)]
[h: Ruestungen = json.sort(Ruestungen, "a", "ID")]

[h: closeDialog("quickeditRS")]

[h,macro("noticeSelf@Lib:macros"): "quickeditRS"]
[h,macro("refreshFrame@Lib:macros"): ""]