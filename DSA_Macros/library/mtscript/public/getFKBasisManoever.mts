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

[h: level = getTraitLevel("KampfSF", "Präziser Schuss/Wurf")]
[h,for(i, 1, level+1, 1, ""),Code:
{
	[h: manoever = json.set("{}",
	"ID", id,
	"Name", "Präziser Schuss/Wurf " + romanNumeral(i),
	"Mod", -i*2,
	"TPMod", "+" + i*2,
	"Techniken", "[Armbrüste, Blasrohre, Bögen, Diskusse, Schleudern, Wurfwaffen]")]
	[h: id = id + 1]
	[h: list = json.append(list, manoever)]
}]

[h: macro.return = list]