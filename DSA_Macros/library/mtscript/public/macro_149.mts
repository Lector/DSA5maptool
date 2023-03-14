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

[h: target = json.get(uebergabe, "target")]

[h: schadensmod = json.get(uebergabe, "schadenmod")]

[h: entfernung = json.get(uebergabe, "entfernung")]
[h,if(entfernung == "-100"),Code:{
	[h,macro("inputFail@Lib:macros"): "zuWeitWeg"]
};{}]
[h,if(entfernung > 0): schadensmod = schadensmod + 1]
[h,if(entfernung < 0): schadensmod = schadensmod - 1]

[h: uebergabe = json.set(uebergabe, "schadenmod", schadensmod)]

[h: waffe = resolveFK(getFernkampfwaffe(FKWaffe))]
[h: tp = json.get(waffe, "TP")]
[h: uebergabe = json.set(uebergabe, "tp", tp)]
[h: angriffSchadenProcess(uebergabe, waffe, target)]