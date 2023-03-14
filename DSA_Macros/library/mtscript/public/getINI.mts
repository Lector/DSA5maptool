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

[h: base = INI]
[h: mount = getMount(currentToken())]
[h,if(mount != ""),token(mount): base = INI]
[h: rs = resolveRS(getRuestung(RuestungAktiv, currentToken()), currentToken())]
[h: macro.return = base + getStrProp(TempMod, "INI") - Belastung + json.get(rs, "INI")]