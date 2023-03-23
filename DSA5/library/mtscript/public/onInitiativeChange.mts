[h: newInfo = json.get(macro.args, "new")]
[h: newToken = json.get(newInfo, "token")]

[h,if(isGM()),Code:
{
	[h,if(isNPC(newToken)),Code:
	{
		[h: impersonate(newToken)]
		[h: selectTokens(newToken)]
	};
	{
		[h: impersonate("")]
	}]
}]