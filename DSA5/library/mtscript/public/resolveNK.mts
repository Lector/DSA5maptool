[h,if(isGM() == 1 && hasImpersonated() == 0 && json.length(macro.args) < 2), Code:
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
[h,if(json.length(macro.args) >= 2): switchToken(arg(1))]

[h: waffe = arg(0)]
[h: id = json.get(waffe, "ID")]
[h: at = json.get(waffe, "AT")]
[h: pa = json.get(waffe, "PA")]
[h: tp = json.get(waffe, "TP")]
[h: wName = json.get(waffe, "Name")]

[h: technikName = json.get(waffe, "Technik")]
[h: technik = getTechnik(technikName, currentToken())]

<!-- AT-PA-Malis bei Stangenwaffen sinken um 1 wenn Hylailos-Stil aktiv ist -->
[h: hylailos = hasTrait("KampfSF", "Hylailos-Stil", 1, currentToken())]
[h,if(technikName == "Stangenwaffen" && hylailos > 0),Code:
{
	[if(at < 0): at = at + 1]
	[if(pa < 0): pa = pa + 1]
}]

<!-- Bonus aus MU und der Leiteigenschaft rechnen wir nur an wenn eine Kampftechnik angegeben ist
Wenn dies nicht der Fall ist gehen wir davon aus dass es sich um eine Kreatur handelt,
deren Gesamt AT/PA bereits in der Waffe eingetragen ist-->
[h,if(!json.isEmpty(technik)),Code: {
	[fw = json.get(technik, "FW")]
	[at = at + fw + max(0, floor((getMU(currentToken()) - 8) / 3.0))]
	[pa = pa + ceil(fw / 2.0)]
}]

[h: at = at + getStrProp(TempMod, "at")]
[h: pa = pa + getStrProp(TempMod, "pa")]

[h: tpbonus = 0]
[h: pabonus = 0]
[h, Foreach(ls, json.get(waffe, "LS"), ""), Code:
{
	[h: lwert = 0]
	[h: l = json.get(ls, "L")]
	[h,if(l == "FF"): lwert = getFF(currentToken())]
	[h,if(l == "GE"): lwert = getGE(currentToken())]
	[h,if(l == "KK"): lwert = getKK(currentToken())]
	[h: pabonus = max(pabonus, floor((lwert - 8) / 3.0))]
	[h: tpbonus = max(tpbonus, lwert - json.get(ls, "S"))]
}]
[h: pa = pa + pabonus]

[h: hauptWaffeName = json.get(getNahkampfwaffe(HauptHand), "Name")]
[h: nebenWaffeName = json.get(getNahkampfwaffe(NebenHand), "Name")]

[h: einhaendig = hasTrait("KampfSF", "Einhändiger Kampf", 1, currentToken())]

<!-- Einhaendiger Kampf rechnen wir an wenn folgende Bedingungen erfuellt sind -->
<!-- SF ist aktiviert -->
<!-- Die Waffe ist nicht die "Waffenlos", sondern eine "richtige" Waffe -->
<!-- Die Waffe muss ausgerüstet sein -->
<!-- In der anderen Waffe muss "Waffenlos" ausgeruestet sein -->
[h,if(einhaendig == 1
	&& json.get(waffe, "Name") != "Waffenlos"
	&& (HauptHand == id || NebenHand == id)
	&& (hauptWaffeName == "Waffenlos" || nebenWaffeName == "Waffenlos")
),Code:
{
	[at = at + 1]
	[pa = pa + 1]
	[tpbonus = tpbonus + 1]
};{}]

[h: baliho = hasTrait("KampfSF", "Baliho-Stil", 1, currentToken())]
[h,if(baliho > 0 && Reittier != ""): tpbonus = tpbonus + 1]
[h: ritter = hasTrait("KampfSF", "Ritter des alten Wegs-Stil", 1, currentToken())]
[h,if(ritter > 0 && Reittier != ""): tpbonus = tpbonus + 1]
[h: born = hasTrait("KampfSF", "Bornländisches Raufen", 1, currentToken())]
[h,if(born > 0 && wName == "Waffenlos"): tpbonus = tpbonus + 1]

<!-- Wird eine 1h-Waffe 2-haendig gefuehrt gibt es +1 TP und -1 PA sofern es kein/e Dolch/Fechtwaffe ist -->
[h,if(HauptHand == NebenHand && HauptHand == id
	&& listContains("Fechtwaffen, Dolche, Raufen", technikName) == 0 && technikName != ""
	&& json.get(waffe, "Zweihand") == 0
),Code:
{
	[pa = pa - 1]
	[tpbonus = tpbonus + 1]
};{}]

<!-- Bei Schilden wird der PA-Bonus verdoppelt -->
[h,if(json.get(waffe, "Technik") == "Schilde"): pa = pa + json.get(waffe, "PA")]

<!-- Wird ein Schild / Pariewaffe in der Nebenhand geführt gibt es einen PA-Bonus -->
[h,if(HauptHand == id),Code:{
	[h: parierSchildBonus = 0]
	[h: nWaffe = getNahkampfwaffe(NebenHand, currentToken())]
	[h: nTechnik = json.get(nWaffe, "Technik")]
	[h,if(nTechnik == "Schilde"),Code:
	{	
		<!-- Wird als Nebenwaffe ein Schild geführt,
		berechnet sich der passive Schildbonus OHNE die verdopplung des PA-Mods -->
		<!-- Da resolveNK den PA-Mod bei Schilden verdoppelt rufen wir hier KEIN resolveNK auf -->
		[h,if(technikName != "Schilde"):
			parierSchildBonus = max(json.get(nWaffe, "PA"), json.get(nWaffe, "Parierwaffe"))]
	};
	{
		[h: parierWaffeBonus = json.get(nWaffe, "Parierwaffe")]
		[h,if(parierWaffeBonus != 0): parierSchildBonus = parierWaffeBonus + hasTrait("KampfSF", "Klingenfänger", 1, currentToken())]
	}]
	[h: pa = pa + parierSchildBonus)]
};{}]

<!-- Sofern man nicht Beidhaendig ist, ist die Parade mit der Nebenhand um 4 erschwert.
	Dies gilt nicht fuer Schilde -->
[h: beidhaendig = hasTrait("Vorteile", "Beidhändig", 1, currentToken())]
[h,if(NebenHand == id &&
HauptHand != id &&
technikName != "Schilde" &&
technikName != "" &&
beidhaendig == 0): pa = pa - 4]

[h,if(getState("Blutrausch") == 1): tpbonus = tpbonus + 4]

[h,if(Schwarm == 1),Code:
{
	[h: bonus = floor((SchwarmAnzahl - SchwarmGG) / SchwarmGG)]
	[h: at = at + min(10, bonus)]
	[h: pa = pa - bonus]
	[h: tpbonus = tpbonus + min(5, bonus)]
};{}]

[h,if(tpbonus > 0): tp = tp + "+" + tpbonus]

[h: waffe = json.set(waffe, "AT", at)]
[h: waffe = json.set(waffe, "PA", pa)]
[h: waffe = json.set(waffe, "TP", tp)]
[h: macro.return = waffe]