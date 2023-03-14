[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: list = "[]"]
[h: id = 0]

<!-- Passierschlag bei gelingen -->
[h,if(hasTrait("KampfSF", "Riposte") != 0),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Riposte",
	"Mod", -2,
	"Techniken", "[Dolche, Fechtwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h: macro.return = list]