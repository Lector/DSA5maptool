[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 1), Code:
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
[h,if(json.length(macro.args) >= 1): switchToken(arg(0))]

[h: ae = ae()]
[h: rs = resolveRS(getRuestung(RuestungAktiv, currentToken()), currentToken())]
[h: aktGS = round((GS + getStrProp(TempMod, "gs") + json.get(rs, "GS") - Belastung - Schmerz) * (1 - 0.25 * Paralyse))]
[h,if(getState("Liegend") == 1): aktGS = min(1, aktGS)]
[h,if(getState("Handlungsunf"+ae+"hig") == 1 || getState("Bewusstlos") == 1): aktGS = 0]
[h: macro.return = aktGS]