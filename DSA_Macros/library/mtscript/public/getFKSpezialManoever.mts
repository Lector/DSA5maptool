[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: list = "[]"]
[h: id = 0]
[h: mount = Reittier]

[h: eisenhagel = getTraitLevel("KampfSF", "Eisenhagel")]
[h,if(eisenhagel >= 1 && mount == ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Eisenhagel (1. Wurf)",
	"Mod", 0,
	"Techniken", "[Wurfwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]

	[manoever = json.set("{}",
	"ID", id,
	"Name", "Eisenhagel (2. Wurf)",
	"Mod", -2,
	"Techniken", "[Wurfwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]

	[h,if(eisenhagel >= 2),Code:
	{
		[manoever = json.set("{}",
		"ID", id,
		"Name", "Eisenhagel (3. Wurf)",
		"Mod", -4,
		"Techniken", "[Wurfwaffen]")]
		[id = id + 1]
		[list = json.append(list, manoever)]
	}]
}]

[h: macro.return = list]