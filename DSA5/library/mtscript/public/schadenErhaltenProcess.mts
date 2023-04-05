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
[h: chat = json.get(uebergabe, "chat")]

[h,if(json.get(uebergabe, "schadenEingabe") == ""): schadenEingabe = 0; schadenEingabe = json.get(uebergabe, "schadenEingabe")]
[h,if(json.get(uebergabe, "wBonus") == ""): wBonus = 0; wBonus = json.get(uebergabe, "wBonus")]
[h,if(json.get(uebergabe, "wMalus") == ""): wMalus = 0; wMalus = json.get(uebergabe, "wMalus")]
[h: wAnzahl = json.get(uebergabe, "wAnzahl")]
[h: wTyp = json.get(uebergabe, "wTyp")]
[h: zone = json.get(uebergabe, "zone")]
[h: status = json.get(uebergabe, "status")]
[h: failText = json.get(uebergabe, "failText")]

[h: ruestungMod = json.get(uebergabe, "ruestungMod")]

[h,if(isNumber(schadenEingabe) == 0 || isNumber(wBonus) == 0 || isNumber(wMalus) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(schadenEingabe != round(schadenEingabe) || wBonus != round(wBonus) || wMalus != round(wMalus)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(schadenEingabe < 0 || wBonus < 0 || wMalus < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("schadenErhalten")]

[h: wMod = 0]
[h: schaden = 0]
[h,if(json.get(uebergabe, "wSchaden") == 0), Code:
{
	[schaden = schadenEingabe]
};
{
	[wMod = wBonus - wMalus]
	[if(wMod >= 0): schaden = wAnzahl+"d"+wTyp]
}]
[h: mul = 1]
[h,if(json.get(uebergabe, "kritischDK") == "1"): mul = mul * 2]
[h,if(json.get(uebergabe, "Schadensresistenz") == "1"): mul = mul * 0.5)]
[h: schadensArt = json.get(uebergabe, "schadenArt")]

[h: damageResult = takeDamage(currentToken(), schaden, wMod, zone, schadensArt, mul, status, failText)]

[h: damageResult =json.set(damageResult, "Chat", chat)]

[h: sendTo(chat, border("Schaden erhalten", show(damageResult)))]

[h,macro("refreshFrame@this"): ""]