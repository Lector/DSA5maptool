[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]
[h: closeDialog("notizAdd")]

[h: nTitel = json.get(uebergabe, "nTitel")]
[h: nTitel = replace(nTitel, ";", "")]
[h: nTitel = replace(nTitel, "=", "")]
[h: nText = json.get(uebergabe, "nText")]
[h: nText = replace(nText, ";", "")]
[h: nText = replace(nText, "=", "")]

[h: nAnzahlNeu = getStrProp(Notizen, "nAnzahl") + 1]
[h: Notizen = setStrProp(Notizen, "nAnzahl", nAnzahlNeu)]
[h: Notizen = setStrProp(Notizen, strformat("n%{nAnzahlNeu}Titel"), nTitel)]
[h: Notizen = setStrProp(Notizen, strformat("n%{nAnzahlNeu}Text"), nText)]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "notizAdd"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]