[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.Macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]

[h: d = json.get(InventarMisc, "dukaten")]
[h: s = json.get(InventarMisc, "silbertaler")]
[h: h = json.get(InventarMisc, "heller")]
[h: k = json.get(InventarMisc, "kreuzer")]

[h,switch(uebergabe),code:
	case "kreuzer":
		{
			[k = k - 1]
			[if(k == -1), Code:
				{
					[k = 9]
					[h = h - 1]
				};{}
			]
			[if(h == -1), Code:
				{
					[h = 9]
					[s = s - 1]
				};{}
			]
			[if(s == -1), Code:
				{
					[s = 9]
					[d = d - 1]
				};{}
			]
			[if(d == -1), Code:
				{
					[k = 0]
					[h = 0]
					[s = 0]
					[d = 0]
				};{}
			]
		};
	case "heller":
		{
			[h = h - 1]
			[if(h == -1), Code:
				{
					[h = 9]
					[s = s - 1]
				};{}
			]
			[if(s == -1), Code:
				{
					[s = 9]
					[d = d - 1]
				};{}
			]
			[if(d == -1), Code:
				{
					[h = 0]
					[s = 0]
					[d = 0]
				};{}
			]
		};
	case "silbertaler":
		{
			[s = s - 1]
			[if(s == -1), Code:
				{
					[s = 9]
					[d = d - 1]
				};{}
			]
			[if(d == -1), Code:
				{
					[s = 0]
					[d = 0]
				};{}
			]
		};
	case "dukat":
		{
			[if(d != 0): d = d - 1]
		}
]

[h: InventarMisc = json.set(InventarMisc, "dukaten", d)]
[h: InventarMisc = json.set(InventarMisc, "silbertaler", s)]
[h: InventarMisc = json.set(InventarMisc, "heller", h)]
[h: InventarMisc = json.set(InventarMisc, "kreuzer", k)]

[h,macro("inventar@this"): ""]