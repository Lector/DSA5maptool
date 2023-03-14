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

[h: level = getTraitLevel("KampfSF", "Wuchtschlag")]
[h,for(i, 1, level+1, 1, ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Wuchtschlag "+romanNumeral(i),
	"Mod", -i*2,
	"TPMod", "+"+i*2,
	"Techniken", "[Hiebwaffen, Kettenwaffen, Raufen, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h: level = getTraitLevel("KampfSF", "Finte")]
[h,for(i, 1, level+1, 1, ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Finte "+romanNumeral(i),
	"Mod", -i,
	"VT", "-"+i*2,
	"Techniken", "[Dolche, Fechtwaffen, Hiebwaffen, Peitschen, Raufen, Schwerter, Stangenwaffen, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h: level = getTraitLevel("KampfSF", "Präziser Stich")]
[h,for(i, 1, level+1, 1, ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Präziser Stich "+romanNumeral(i),
	"Mod", -i*2,
	"TPMod", "+"+i*2,
	"Techniken", "[Dolche, Fechtwaffen]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h: level = getTraitLevel("KampfSF", "Unterlaufen")]
[h,for(i, 1, level+1, 1, ""),Code:
{
	[manoever = json.set("{}",
	"ID", id,
	"Name", "Unterlaufen "+romanNumeral(i),
	"Mod", "+min(-getStrProp(uebergabe, 'rw'), "+i*2+")",
	"Passierschlag", "1"),
	"Techniken", "[Dolche, Fechtwaffen, Hiebwaffen, Kettenwaffen, Raufen, Schilde, Schwerter, Zweihandhiebwaffen, Zweihandschwerter]")]
	[id = id + 1]
	[list = json.append(list, manoever)]
}]

[h: macro.return = list]