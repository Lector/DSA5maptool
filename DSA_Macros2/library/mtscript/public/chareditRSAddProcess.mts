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

[h: uebergabe = macro.args]

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
		[macro("inputFail@lib:com.github.naxos84.macros"): "numText"]
	};{}]

	[if(rskopf != round(rskopf) || rstorso != round(rstorso) || rsarmlinks != round(rsarmlinks) || rsarmrechts != round(rsarmrechts) || rsbeinlinks != round(rsbeinlinks) || rsbeinrechts != round(rsbeinrechts)), Code: {
		[macro("inputFail@lib:com.github.naxos84.macros"): "numInteger"]
	};{}]

	[if(rskopf < 0 || rstorso < 0 || rsarmlinks < 0 || rsarmrechts < 0 || rsbeinlinks < 0 || rsbeinrechts < 0), Code: {
		[macro("inputFail@lib:com.github.naxos84.macros"): "numNegative"]
	};{}]

	[rs = round((rskopf + rstorso*5 + rsarmlinks*2 + rsarmrechts*2 + rsbeinlinks*2 + rsbeinrechts*2) / 14.0)]
};
{
	[rs = json.get(uebergabe, "rsgesamt")]

	[if(isNumber(rs) == 0), Code: {
		[macro("inputFail@lib:com.github.naxos84.macros"): "numText"]
	};{}]

	[if(rs != round(rs)), Code: {
		[macro("inputFail@lib:com.github.naxos84.macros"): "numInteger"]
	};{}]

	[if(rs < 0), Code: {
		[macro("inputFail@lib:com.github.naxos84.macros"): "numNegative"]
	};{}]
	
	[rskopf = rs]
	[rstorso = rs]
	[rsarmlinks = rs]
	[rsarmrechts = rs]
	[rsbeinlinks = rs]
	[rsbeinrechts = rs]
}]

[h: rName = json.get(uebergabe, "rsname")]
[h, if(rName == ""): rName = "Unbekannte Rüstung"; rName = rName]
[h: be = json.get(uebergabe, "be")]
[h, if(json.get(uebergabe, "beini") == "on"): rini = -1; rini = 0]
[h, if(json.get(uebergabe, "begs") == "on"): rgs = -1; rgs = 0]
[h: baum = eval("Ruestungen")]
[h: id=1]
[h,Foreach(r, baum,""), CODE:
	{
		[if(json.get(r, "ID") >= id), Code:
			{
				[h: id = json.get(r, "ID") + 1]
			};{}
		]
	}
]

[h: ruestung = json.set("{}", "ID", id, "Name", rName, "RS", rs, "RSKopf", rskopf, "RSTorso", rstorso, "RSArmLinks", rsarmlinks, "RSArmRechts", rsarmrechts, "RSBeinLinks", rsbeinlinks, "RSBeinRechts", rsbeinrechts, "BE", be, "INI", rini, "GS", rgs, "Typ", typ)]
[h: Ruestungen = json.append(Ruestungen, ruestung)]
[h: Ruestungen = json.sort(Ruestungen, "a", "ID")]

[h: closeDialog("chareditRSAdd")]

[h,macro("noticeSelf@lib:com.github.naxos84.macros"): "addRS"]
[h,macro("refreshFrame@lib:com.github.naxos84.macros"): ""]

		