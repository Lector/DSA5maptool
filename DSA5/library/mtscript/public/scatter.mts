[h: tokenID = arg(0)]
[h: switchToken(tokenID)]
[h,if(Schwarm != 1),Code:
{
	[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noSwarm"]
};{}]

[h: tokenIni = ""]
[h,if(hasInitiative(tokenID) == 1): tokenIni = getInitiative(tokenID)]
[h: cnt = ceil(LeP / SchwarmEinzelLeP)]
[h: schwarmLeP = LeP]
[h: changes = json.set("{}", "label", "")]
[h: newTokens = copyToken(tokenID, cnt, getCurrentMapname(), changes)]
[h,if(cnt == 1): newTokens = json.append("[]", newTokens)]
[h,for(i, 0, cnt, 1, ""),Code:{
	[h: newToken = json.get(newTokens, i)]
	[h: switchToken(newToken)]
	[h: MaxLeP = SchwarmEinzelLeP]
	[h: LeP = min(MaxLeP, schwarmLeP)]
	[h: schwarmLeP = schwarmLeP - LeP]
	[h: Schwarm = 0]
	[h: SchwarmAnzahl = 1]
	[h,if(tokenIni != ""),Code:{
		[h: addToInitiative(0, tokenIni)]
	}]
	[h,macro("checkZustand@lib:com.github.lector.dsa5maptool"): currentToken()]
}]
[h: removeToken(tokenID)]