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

[h: uebergabe = macro.args]

[h,if(json.get(uebergabe, "resistenz") == "SKAktiv"), Code:
	{
		[h: mod = -getSK()]
		[h: modtext = modReason(mod, "durch SK")]
	};
	{
		[h: mod = -getZK()]
		[h: modtext = modReason(mod, "durch ZK")]
	}
]

[h,if(json.get(uebergabe, "typ") == "gift"),Code:
{
	[h: resistenz = getTraitLevel("Vorteile", "Giftresistenz")]
	[h: mod = mod - resistenz]
	[h,if(resistenz != 0): modtext = modtext + modReason(resistenz, "wegen Giftresistenz")]
	
	[h: anfaellig = getTraitLevel("Nachteile", "Giftanfällig")]
	[h: mod = mod + anfaellig]
	[h,if(anfaellig != 0): modtext = modtext + modReason(anfaellig, "weil Giftanfällig")]
};{
	[h: resistenz = getTraitLevel("Vorteile", "Krankheitsresistenz")]
	[h: mod = mod - resistenz]
	[h,if(resistenz != 0): modtext = modtext + modReason(resistenz, "wegen Krankheitsresistenz")]
	
	[h: anfaellig = getTraitLevel("Nachteile", "Krankheitsanfällig")]
	[h: mod = mod + anfaellig]
	[h,if(anfaellig != 0): modtext = modtext + modReason(anfaellig, "weil Giftanfällig")]
}]

[h: ergebnis = json.set("", "mod", mod)]
[h: ergebnis = json.set(ergebnis, "modText", modtext)]

[h: macro.return = ergebnis]