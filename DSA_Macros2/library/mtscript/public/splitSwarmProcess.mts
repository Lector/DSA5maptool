[h: params = macro.args]

[h: tok = json.get(params, "token")]
[h: switchToken(tok)]
[h: cnt = json.get(params, "count")]

[h,for(i, 0, cnt, 1, ""),Code:
{
	[newTok = copyToken(tok)]
	[life = round(LeP / (cnt-i))]
	[h,token(newTok),Code:
	{
		[MaxLeP = life]
		[LeP = life]
		[h,macro("checkZustand@lib:com.github.naxos84.macros"): newTok]
	}]
	[LeP = LeP - life]
}]
[h: removeToken(tok)]
[h,macro("noticeSelf@lib:com.github.naxos84.macros"): "swarmSplit"]
[h: closeDialog("splitSwarm")]