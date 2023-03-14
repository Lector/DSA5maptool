[h: info = json.indent(getInfo("map"), 2)]
[h: visiontype = json.get(info, "vision type")]

[h,if(visiontype != "OFF"): exposeView(currentToken())]

<!-- Wenn die Funktionalität nicht fertig ist brechen wir ab -->
[h: abort(getLibProperty("OptRestrictMovement", "Lib:macros"))]

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
	    [h: broadcast("Du hast dich zu weit bewegt! Deine aktuelle GS betr&auml;gt " + maxMove + ".", getPlayerName())]
	};{
		[h: abort(0)]
	}]
}]