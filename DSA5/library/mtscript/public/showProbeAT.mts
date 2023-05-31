[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
	};{
		[selectID = currentToken()]
		}
]

[r: html.frame5("probe", "lib://com.github.lector.dsa5maptool/probeAT.html?cachelib=false", "value=" + selectID)];