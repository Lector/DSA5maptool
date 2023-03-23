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

[h: notizNummer = macro.args]
[h: notizenZahl = getStrProp(Notizen, "nAnzahl")]

[h: toOverwriteNumber = notizNummer]
[h: toCopyNumber = toOverwriteNumber + 1]
[h: workingNumber = notizenZahl - toOverwriteNumber]

[h,count(workingNumber),CODE:
	{
		[h: copyTitel = getStrProp(Notizen, strformat("n%{toCopyNumber}Titel"))]
		[h: Notizen = setStrProp(Notizen, strformat("n%{toOverwriteNumber}Titel"), copyTitel)]
		
		[h: copyInhalt = getStrProp(Notizen, strformat("n%{toCopyNumber}Text"))]
		[h: Notizen = setStrProp(Notizen, strformat("n%{toOverwriteNumber}Text"), copyInhalt)]
		
		[h: toOverwriteNumber = toOverwriteNumber + 1]
		[h: toCopyNumber = toCopyNumber + 1]
	}
]

[h: Notizen = deleteStrProp(Notizen, strformat("n%{notizenZahl}Titel"))]
[h: Notizen = deleteStrProp(Notizen, strformat("n%{notizenZahl}Text"))]

[h: newAnzahlNotizen = notizenZahl - 1]
[h: Notizen = setStrProp(Notizen, "nAnzahl", newAnzahlNotizen)]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "notizDel"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]