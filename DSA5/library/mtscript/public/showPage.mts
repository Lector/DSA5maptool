[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
	};{
		[selectID = currentToken()]
		}
]
[r: "Selection Change for showPage"]

[r: html.frame5("MyPersonalTest", "lib://com.github.lector.dsa5maptool/index.html?cachelib=false", "value=" + selectID)];
