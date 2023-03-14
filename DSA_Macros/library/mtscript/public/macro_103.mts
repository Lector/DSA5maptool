[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 2), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]

[h: stufe = arg(0)]
[h,if(json.length(macro.args) >= 2): switchToken(arg(1))]

[h,if(MaxLeP <= 10):
	array = json.append("[]", floor(MaxLeP * 0.8), floor(MaxLeP * 0.6), floor(MaxLeP * 0.4), floor(MaxLeP * 0.2));
	array = json.append("[]", floor(MaxLeP * 0.75), floor(MaxLeP * 0.5), floor(MaxLeP * 0.25), 5)]
[h: array = json.sort(array, "desc")]
[h,for(i, 1, 4),Code:{
	[h: prev = json.get(array, i-1)]
	[h: current = json.get(array, i)]
	[h,if(current >= prev): array = json.set(array, i, prev - 1)]
}]
[h: macro.return = max(0, json.get(array, stufe - 1))]