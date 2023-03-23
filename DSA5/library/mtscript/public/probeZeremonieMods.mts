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

[h: uebergabe = macro.args]

[h,macro("probeLiturgieMods@this"): uebergabe]

[h: mod = json.get(macro.return, "mod")]
[h: bonus = json.get(macro.return, "bonus")]
[h: modtext = json.get(macro.return, "modtext")]

[h: ritualplatz = json.get(uebergabe, "Ort")]
[h,if(json.get(uebergabe, "Hilfsmittel") == 1): hilfsmittel = 1; hilfsmittel = 0]
[h: zeit = json.get(uebergabe, "zeit")]

[h: modGefestigterZeremonieablauf = ritualplatz + zeit]
[h,if(hasTrait("KarmaleSF", "Gefestigter Zeremonieablauf") == 1 && modGefestigterZeremonieablauf < 0), Code:
{
	[modGefestigterZeremonieablauf = modGefestigterZeremonieablauf + 1]
	[modtext = modtext + modReason(1, "wegen SF Gefestigter Zeremonieablauf")]
}]
			
[h: mod = mod + hilfsmittel
			  + modGefestigterZeremonieablauf]

[h: returnValue = json.set(uebergabe, "mod", mod)]
[h: returnValue = json.set(returnValue, "bonus", bonus)]
[h: returnValue = json.set(returnValue, "modtext", modtext)]

[h: macro.return = returnValue]