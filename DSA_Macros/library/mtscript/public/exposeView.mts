[h: switchToken(arg(0))]
[h,if(json.length(macro.args) > 1): mapName = arg(1); mapName = getCurrentMapName()]

[h,if(hasSight() == 1),Code:
{
	[h: '<!-- Wenn die entsprechende Einstellung aktiv ist löschen wir bisher aufgedeckten Kriegsnebel -->']
	[h: hideFOW = getLibProperty("RestoreFogOfWarOnMove", "com.github.lector.dsa5maptools")]
	[h,if(hideFOW == 1): restoreFOW()]
	[h: toReveal = "[" + currentToken() + "]"]
	<!-- Wenn sich ein Token mit Lichtquelle bewegt müssen alle ihre Sicht updaten -->
	<!-- Wenn vorher der Kriegsnebel verdeckt wurde müssen auch alle ihre Sicht updaten -->
	[h: lights = getLights("DSA", ",", currentToken())]
	[h,if(lights != "" || hideFOW == 1):
		toReveal = getTokens("json")]
	[h: exposeFOW(mapName, toReveal, "json")]
}]