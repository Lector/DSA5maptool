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
<!-- 0 + weil die Werte sonst als Text aneinandergeklatscht werden -->
[h: fk = 0 + json.get(waffe, "FK")]

[h: technikName = json.get(waffe, "Technik")]
[h: technik = getTechnik(technikName, currentToken())]
<!-- Bonus aus MU und der Leiteigenschaft rechnen wir nur an wenn eine Kampftechnik angegeben ist
Wenn dies nicht der Fall ist gehen wir davon aus dass es sich um eine Kreatur handelt, deren Gesamt AT/PA bereits in der Waffe eingetragen ist-->
[h,if(!json.isEmpty(technik)),Code: {
	[fw = json.get(technik, "FW")]
	[fk = fk + fw + max(0, floor((getFF(currentToken()) - 8) / 3.0))]
}]
[h: waffe = json.set(waffe, "FK", fk)]

[h: schnellladen = hasTrait("KampfSF", "Schnellladen ("+technikName+")", 1, currentToken())]
[h,if(schnellladen == 1),Code:{
	[h: ladezeit = json.get(waffe, "Ladezeit")]
	[if(technikName == "Armbrüste"): ladezeit = round(ladezeit / 2.0); ladezeit = ladezeit - 1]
	[h: waffe = json.set(waffe, "Ladezeit", ladezeit)]
}]

[h: macro.return = waffe]