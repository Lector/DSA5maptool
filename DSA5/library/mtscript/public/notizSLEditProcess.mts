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
[h: closeDialog("notizSLEdit")]

[h: nText = json.get(uebergabe, "chatField")]
[h: setGMNotes(nText)]

[h: tokenName = getName()]
[h: ausgabe = strformat("
	<b>%s</b> hat SL-Notizen hinzugefügt oder geändert.
", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/scroll2.png"))]
[h: ausgabe = border(tokenName, ausgabe)]

[h,macro("noticeSelf@this"): "notizSLEdit"]
[h,if(isGM() == 0), Code:
{
	[h: sendTo("Gm", ausgabe)]
}]
[h: refreshFrame(currentToken())]