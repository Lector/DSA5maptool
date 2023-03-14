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

[h: uebergabe = arg(0)]
[h: waffe = arg(1)]
[h: typ = arg(2)]

[h: ladezeit = json.get(waffe, "Ladezeit")]
[h,if(getStrProp(uebergabe, "PA1") != ""),Code:
{
	[h: alle = getPASpezialManoever()]
	[h,if(getStrProp(uebergabe, "ManName") == ""): uebergabe = setStrProp(uebergabe, "ManName", "PA")]
};
{
	[h,if(isNumber(ladezeit) != 0),Code:
	{
		[h,if(typ == "basis"): alle = getFKBasisManoever(); alle = getFKSpezialManoever()]
		[h,if(getStrProp(uebergabe, "ManName") == ""): uebergabe = setStrProp(uebergabe, "ManName", "FK")]
	};
	{
		[h,if(typ == "basis"): alle = getATBasisManoever(); alle = getATSpezialManoever()]
		[h,if(getStrProp(uebergabe, "ManName") == ""): uebergabe = setStrProp(uebergabe, "ManName", "AT")]
	}]
}]

[h: man = getStrProp(uebergabe, typ)]
[h: uebergabe = setStrProp(uebergabe, typ, 0)]

[h,if(man != -1),Code:
{
	[h: man = json.get(alle, man)]
	[h: technik = json.get(waffe, "Technik")]
	[h: techniken = json.get(man, "Techniken")]
	[h,if(technik == "" || json.contains(techniken, technik) > 0),Code:
	{
		[h: mod = json.get(man, "Mod")]
		[h: uebergabe = setStrProp(uebergabe, typ, mod)]
		[h: uebergabe = setStrProp(uebergabe, typ + "Name", json.get(man, "Name"))]
		[h: uebergabe = setStrProp(uebergabe, "ManName", json.get(man, "Name"))]
		[h: uebergabe = setStrProp(uebergabe, "VTMod", getStrProp(uebergabe, "VTMod") + json.get(man, "VT"))]
		[h: uebergabe = setStrProp(uebergabe, "ManPassierschlag", getStrProp(uebergabe, "ManPassierschlag") + json.get(man, "Passierschlag"))]
		
		[h: oppText = json.get(man, "OpponentText")]
		[h,if(oppText != ""): uebergabe = setStrProp(uebergabe, "OpponentText", listAppend(getStrProp(uebergabe, "OpponentText"), oppText, "<br>"))]
		
		[h: oppStates = json.get(man, "OpponentStatus")]
		[h: currentOppStates = getStrProp(uebergabe, "OpponentStatus")]
		[h,if(currentOppStates != ""): oppStates = json.merge(oppStates, currentOppStates)]
		[h,if(oppStates != ""): uebergabe = setStrProp(uebergabe, "OpponentStatus", oppStates)]
		
		[h: tp = json.get(man, "TP")]
		[h,if(tp != ""): uebergabe = setStrProp(uebergabe, "tp", tp)]
		[h: tpmod = json.get(man, "TPMod")]
		[h,if(tpmod != ""): uebergabe = setStrProp(uebergabe, "schadensbonus", getStrProp(uebergabe, "schadensbonus") + tpmod)]
		
		[h: typ = json.get(man, "SchadensTyp")]
		[h: aktTyp = getStrProp(uebergabe, "schadenArt")]
		[h,if(aktTyp == ""): aktTyp = "TP"]
		[h,if(typ == ""): typ = aktTyp]
		[h: uebergabe = setStrProp(uebergabe, "schadenArt", typ)]
	};
	{}]
};
{}]

[h: macro.return = uebergabe]