[h: info = json.indent(getInfo("map"), 2)]
[h: grid = json.get(info, "grid")]
[h: cellWidth = json.get(grid, "cell width")]
[h: cellHeight = json.get(grid, "cell height")]
[h: visiontype = json.get(info, "vision type")]

<!-- Expose view when a token has moved -->
[h,if(visiontype != "OFF"): exposeView(currentToken())]

[h: hasIni = hasInitiative(currentToken())]
[h,if(getLibProperty("OptFacing", "com.github.lector.dsa5maptool") == 1 && hasIni == 1),Code:
{
	[h: smoothed = smoothPath(macro.args, max(cellWidth, cellHeight) / 2.0))]
	[h: from = json.get(smoothed, json.length(smoothed) - 2)]
	[h: to = json.get(smoothed, json.length(smoothed) - 1)]
	[h,if(from == to && json.length(macro.args) >= 2),Code:
	{
		[h: from = json.get(macro.args, json.length(macro.args) - 2)]
		[h: to = json.get(macro.args, json.length(macro.args) - 1)]
	}]
	[h,if(from != to),Code:{
		[h: xdir = json.get(to, "x") - json.get(from, "x")]
		[h: ydir = json.get(to, "y") - json.get(from, "y")]
		[h: len = sqrt(sqr(xdir) + sqr(ydir))]
		[h: xdir = xdir / len]
		[h: ydir = ydir / len]
		[h: angle = round(math.atan2(-ydir, xdir))]
		[h: setTokenFacing(angle, currentToken())]
	}]
}]


<!-- Wenn die Funktionalität nicht fertig ist brechen wir ab -->
[h: abort(getLibProperty("OptRestrictMovement", "com.github.lector.dsa5maptool"))]

<!-- abort when GM -->
[h: abort(!isGM())]

<!-- revert move when multiple tokens are moved -->
[h, if (tokens.moveCount != 1), CODE: {
    [h: tokens.denyMove = 1]
    [h: broadcast("Bitte nur 1 Token auf einmal bewegen", getPlayerName())]
};
{
	[h: tokenID = listGet(getSelected(), 0)]
	
	<!-- get move number of moved token -->
	[h: usedMove = getMoveCount()]
	<!-- abort when total move is 0 -->
	[h: abort(usedMove)]
	
	<!-- abort when initiative panel does not contain the moving token -->
	[h: abort(hasInitiative(tokenID))]
	
	<!-- set maximum allowed movement -->
	[h: maxMove = getGS(tokenID)]
	
	<!-- revert move when moved over the move limit -->
	[h, if(usedMove > maxMove), CODE: {
	    [h: tokens.denyMove = 1]
	    [h: broadcast("Du hast dich zu weit bewegt! Deine aktuelle GS beträgt " + maxMove + ".", getPlayerName())]
	};{
		[h: abort(0)]
	}]
}]