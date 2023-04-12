[h: oldInfo = json.get(macro.args, "old")]
[h: newInfo = json.get(macro.args, "new")]

[h: iniList = getInitiativeList()]
[h,if(json.get(newInfo, "round") != json.get(oldInfo, "round") && json.get(macro.args, "direction") == "NEXT"), foreach(tok, json.get(iniList, "tokens"), ""),Code:{
	[h: id = json.get(tok, "tokenId")]
	[h,token(id): VTinKR = 0]
}]


[h: newToken = json.get(newInfo, "token")]
[h,if(isNPC(newToken)),Code:
{
	[h: impersonate(newToken)]
	[h: selectTokens(newToken)]
};
{
	[h: impersonate("")]
	[h: owners = getOwners("json", newToken)]
	[h,if(json.length(owners) == 1),Code:{
		[h: owner = json.get(owners, 0)]
		[h: link = macroLinkText("impersonate@this", "none", newToken, owner)]
		[h: execLink(link, 0, owner)]
	}]
}]