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

[h,if(json.get(uebergabe, "oMU") == ""): nMU = MU; nMU = json.get(uebergabe, "oMU")]
[h,if(json.get(uebergabe, "oKL") == ""): nKL = KL; nKL = json.get(uebergabe, "oKL")]
[h,if(json.get(uebergabe, "oIN") == ""): nIN = IN; nIN = json.get(uebergabe, "oIN")]
[h,if(json.get(uebergabe, "oCH") == ""): nCH = CH; nCH = json.get(uebergabe, "oCH")]
[h,if(json.get(uebergabe, "oFF") == ""): nFF = FF; nFF = json.get(uebergabe, "oFF")]
[h,if(json.get(uebergabe, "oGE") == ""): nGE = GE; nGE = json.get(uebergabe, "oGE")]
[h,if(json.get(uebergabe, "oKO") == ""): nKO = KO; nKO = json.get(uebergabe, "oKO")]
[h,if(json.get(uebergabe, "oKK") == ""): nKK = KK; nKK = json.get(uebergabe, "oKK")]
[h,if(json.get(uebergabe, "oSK") == ""): nSK = SK; nSK = json.get(uebergabe, "oSK")]
[h,if(json.get(uebergabe, "oZK") == ""): nZK = ZK; nZK = json.get(uebergabe, "oZK")]
[h,if(json.get(uebergabe, "oAW") == ""): nAW = AW; nAW = json.get(uebergabe, "oAW")]

[h,if(json.get(uebergabe, "oName") == ""): nName = getName(); nName = json.get(uebergabe, "oName")]
[h,if(json.get(uebergabe, "oAktionen") == ""): nAktionen = Aktionen; nAktionen = json.get(uebergabe, "oAktionen")]
[h,if(json.get(uebergabe, "oTrefferzonenmodell") == ""): nTrefferzonenmodell = Trefferzonenmodell; nTrefferzonenmodell = json.get(uebergabe, "oTrefferzonenmodell")]
[h,if(json.get(uebergabe, "oTypus") == ""): nTypus = Typus; nTypus = json.get(uebergabe, "oTypus")]

[h,if(json.get(uebergabe, "oGS") == ""): nGS = GS; nGS = json.get(uebergabe, "oGS")]
[h,if(json.get(uebergabe, "oINI") == ""): nINI = INI; nINI = json.get(uebergabe, "oINI")]
[h,if(json.get(uebergabe, "oAPgesamt") == ""): nAPgesamt = APgesamt; nAPgesamt = json.get(uebergabe, "oAPgesamt")]
[h,if(json.get(uebergabe, "oAPverfuegbar") == ""): nAPverfuegbar = APverfuegbar; nAPverfuegbar = json.get(uebergabe, "oAPverfuegbar")]
[h,if(json.get(uebergabe, "oAPausgegeben") == ""): nAPausgegeben = APausgegeben; nAPausgegeben = json.get(uebergabe, "oAPausgegeben")]
[h,if(json.get(uebergabe, "oLE") == ""): nLE = MaxLeP; nLE = json.get(uebergabe, "oLE")]
[h,if(json.get(uebergabe, "oAE") == ""): nAE = MaxAsP; nAE = json.get(uebergabe, "oAE")]
[h,if(json.get(uebergabe, "oKE") == ""): nKE = MaxKaP; nKE = json.get(uebergabe, "oKE")]
[h,if(json.get(uebergabe, "oSchipsMax") == ""): nSchipsMax = SchipsMax; nSchipsMax = json.get(uebergabe, "oSchipsMax")]
[h: checkZustand(currentToken())]

[h,if(isNumber(nMU) == 0 || isNumber(nGS) == 0 || isNumber(nINI) == 0 || isNumber(nAW) == 0 || isNumber(nSchipsMAX) == 0 || isNumber(nKL) == 0 || isNumber(nIN) == 0 || isNumber(nCH) == 0 || isNumber(nFF) == 0 || isNumber(nGE) == 0 || isNumber(nKO) == 0 || isNumber(nKK) == 0 || isNumber(nSK) == 0 || isNumber(nZK) == 0 || isNumber(nAPgesamt) == 0 || isNumber(nAPverfuegbar) == 0 || isNumber(nLE) == 0 || isNumber(nAPausgegeben) == 0 || isNumber(nAE) == 0 || isNumber(nKE) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(nMU != round(nMU) || nAW != round(nAW) || nINI != round(nINI) || nSchipsMax != round(nSchipsMax) || nKL != round(nKL) || nIN != round(nIN) || nCH != round(nCH) || nFF != round(nFF) || nGE != round(nGE) || nKO != round(nKO) || nKK != round(nKK) || nSK != round(nSK) || nZK != round(nZK) || nAPgesamt != round(nAPgesamt) || nAPverfuegbar != round(nAPverfuegbar) || nLE != round(nLE) || nAPausgegeben != round(nAPausgegeben) || nAE != round(nAE) || nKE != round(nKE)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(nMU < 0 || nGS < 0 || nAW < 0 || nINI < 0 || nSchipsMax < 0 || nKL < 0 || nIN < 0 || nCH < 0 || nFF < 0 || nGE < 0 || nKO < 0 || nKK < 0 || nAPgesamt < 0 || nAPverfuegbar < 0 || nLE < 0 || nAPausgegeben < 0 || nAE < 0 || nKE < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("chareditEigenschaften")]

[h: MU = nMU]
[h: KL = nKL]
[h: IN = nIN]
[h: CH = nCH]
[h: FF = nFF]
[h: GE = nGE]
[h: KO = nKO]
[h: KK = nKK]
[h: SK = nSK]
[h: ZK = nZK]
[h: APgesamt = nAPgesamt]
[h: APverfuegbar = nAPverfuegbar]
[h: APausgegeben = nAPausgegeben]
[h: AW = nAW]
[h: setName(nName)]
[h: Aktionen = nAktionen]
[h: Trefferzonenmodell = nTrefferzonenmodell]
[h: Typus = nTypus]
[h: setSightType(sightForTypus(Typus))]
[h: INI = nINI]
[h: GS = nGS]
[h,if(MaxLeP < nLE || MaxLeP > nLE): LeP = nLE]
[h,if(MaxAsP < nAE || MaxAsP > nAE): AsP = nAE]
[h,if(MaxKaP < nKE || MaxKaP > nKE): KaP = nKE]
[h: MaxLeP = nLE]
[h: SchipsMax = nSchipsMax]
[h: MaxAsP = nAE]
[h: MaxKaP = nKE]

[h: LeP = min(LeP, MaxLeP)]
[h: SchipsAktuell = min(SchipsAktuell, SchipsMax)]
[h: AsP = min(AsP, MaxAsP)]
[h: KaP = min(KaP, MaxKaP)]

[h,macro("noticeSelf@this"): "chareditEigenschaften"]
[h: refreshFrame(currentToken())]