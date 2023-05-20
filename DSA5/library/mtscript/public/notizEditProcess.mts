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
[h: closeDialog("notizEdit")]

[h: nTitel = json.get(uebergabe, "nTitel")]
[h: nTitel = replace(nTitel, ";", "")]
[h: nTitel = replace(nTitel, "=", "")]
[h: nText = json.get(uebergabe, "nText")]
[h: nText = replace(nText, ";", "")]
[h: nText = replace(nText, "=", "")]
[h: nNum = json.get(uebergabe, "notizNummer")]
[h: Notizen = setStrProp(Notizen, strformat("n%{nNum}Titel"), nTitel)]
[h: Notizen = setStrProp(Notizen, strformat("n%{nNum}Text"), nText)]

[h,macro("noticeSelf@this"): "notizEdit"]
[h: refreshFrame(currentToken())]