[h: oldInfo = json.get(macro.args, "old")]
[h: newInfo = json.get(macro.args, "new")]

<!-- When we enter a new round we clear all -->
[h: iniList = getInitiativeList()]
[h, if(json.get(newInfo, "round") != json.get(oldInfo, "round") && json.get(macro.args, "direction") == "NEXT"),
	foreach(tok, json.get(iniList, "tokens"), ""),Code:{

	[h: id = json.get(tok, "tokenId")]
	[h,token(id): VTinKR = 0]
}]

[h: newToken = json.get(newInfo, "token")]
[h,if(isNPC(newToken)),Code:
{
	<!-- GM should impersonate the current NPC -->
	[h: impersonate(newToken)]
	[h: selectTokens(newToken)]
};
{
	<!-- when a PC has initiative the GMs impersonate gets cleared -->
	[h: impersonate("")]
	<!-- Now we determine an owner for the PC and impersonate the owner onto the token.
	Since this macro is called for the GM only we have to call this via execLink -->
	[h: owners = getOwners("json", newToken)]
	[h,if(json.length(owners) == 1),Code:{
		[h: owner = json.get(owners, 0)]
		[h: link = macroLinkText("impersonateToken@this", "none", newToken, owner)]
		[h: execLink(link, 0, owner)]
	}]
}]