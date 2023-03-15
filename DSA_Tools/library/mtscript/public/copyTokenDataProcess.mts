[h: uebergabe = macro.args]

[h: playerName = getPlayerName()]
[h: qToken = getSelected()]
[h: qTokenName = getName(qToken)]
[h: zToken = json.get(uebergabe, "zToken")]
[h: zTokenName = getName(zToken)]
[h: cTokenbilder = json.get(uebergabe, "cTokenbilder")]
[h: cInventar = json.get(uebergabe, "cInventar")]
[h: cNotizen = json.get(uebergabe, "cNotizen")]
[h: cOptions = json.get(uebergabe, "cOptions")]
[h: cEnergie = json.get(uebergabe, "cEnergie")]
[h: cNahkampf = json.get(uebergabe, "cNahkampf")]
[h: cFernkampf = json.get(uebergabe, "cFernkampf")]
[h: cRuestung = json.get(uebergabe, "cRuestung")]
[h: cTemp = json.get(uebergabe, "cTemp")]
[h: cStatus = json.get(uebergabe, "cStatus")]

[h,if(listCount(qToken) != 1), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "copyTokenDataSelect"]
	};{}
]
[h,if(qToken == zToken), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "copyTokenDataEqual"]
	};{}
]
[h,if(isOwner(playerName, qToken) == 0 && isGM() == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "copyTokenDataOwner"]
	};{}
]
[h,if(cTokenbilder != 1 && cInventar != 1 && cNotizen != 1 && cOptions != 1 && cEnergie != 1 && cNahkampf != 1 && cFernkampf != 1 && cRuestung != 1 && cTemp != 1 && cStatus != 1), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "copyTokenDataOption"]
	};{}
]

[h: closeDialog("copyTokenData")]

[h,token(qToken), code: 
	{
		[pTokenbild = getTokenImage()]
		[pPortrait = getTokenPortrait()]
		[pHandout = getTokenHandout()]
		
		[pInventar = Inventar]
		[pInventarMisc = InventarMisc]
		
		[pNotizen = Notizen]
		
		[pPlayerOpt = PlayerOpt]
		
		[pTempMod = TempMod]
		
		<!-- Da diese Funktion oft genutzt wird um neu importierte und gesteigerte Charaktere auf den aktuellen Stand zu bringen gehen wir wie folgt vor -->
		<!-- Da sich die Maximalen Lep/AsP/... gesteigert haben könnten merken wir uns nur was fehlt und ziehen diesen Wert dann vom neuen Maximum ab -->
		[if(LeP < MaxLeP): pLE = MaxLeP - LeP; pLE = 0]
		[if(SchipsAktuell < SchipsMax): pSchips = SchipsMax - SchipsAktuell; pSchips = 0]
		[if(AsP < MaxAsP): pAE = MaxAsP - AsP; pAE = 0]
		[if(KaP < MaxKaP): pKE = MaxKaP - KaP; pKE = 0]
		
		[pNahkampfwaffen = Nahkampfwaffen]
		[pHauptHand = HauptHand]
		[pNebenHand = NebenHand]
		
		[pFernkampfwaffen = Fernkampfwaffen]
		[pFKWaffe = FKWaffe]
		
		[pRuestungen = Ruestungen]
		[pRuestungAktiv = RuestungAktiv]
		
		[pSchmerzMod = SchmerzMod]
		[pBelastungMod = BelastungMod]
		[pFurcht = Furcht]
		[pVerwirrung = Verwirrung]
		[pParalyse = Paralyse]
		[pBetaeubung = Betaeubung]
		[pUeberanstrengung = Ueberanstrengung]
		[pEntrueckung = Entrueckung]
		[pTrance = Trance]
		[pBaumartig = getState("Baumartig")]
		[pBewegungsunfaehig = getState("Bewegungsunfähig")]
		[pBewusstlos = getState("Bewusstlos")]
		[pBlind = getState("Blind")]
		[pBlutend = getState("Blutend")]
		[pBlutrausch = getState("Blutrausch")]
		[pBrennend = getState("Brennend")]
		[pEingeengt = getState("Eingeengt")]
		[pFixiert = getState("Fixiert")]
		[pHoerig = getState("Hörig")]
		[pKrank = getState("Krank")]
		[pLiegend = getState("Liegend")]
		[pStumm = getState("Stumm")]
		[pTaub = getState("Taub")]
		[pUnsichtbar = getState("Unsichtbar")]
		[pVergiftet = getState("Vergiftet")]
		[pVersteinert = getState("Versteinert")]
		[pUeberrascht = getState("Überrascht")]
		[pUeblergeruch = getState("Übler Geruch")]
	}
]

[h: switchToken(zToken)]
[h,if(cTokenbilder == 1), Code:
	{
		[setTokenImage(pTokenbild)]
		[setTokenPortrait(pPortrait)]
		[setTokenHandout(pHandout)]
	};{}
]
[h,if(cInventar == 1), Code:
	{
		[Inventar = pInventar]
		[InventarMisc = pInventarMisc]
	};{}
]
[h,if(cNotizen == 1): Notizen = pNotizen]
[h,if(cOptions == 1), Code:
	{
		[PlayerOpt = pPlayerOpt]
	};{}
]
[h,if(cTemp == 1): TempMod = pTempMod]
[h,if(cNahkampf == 1), Code:
	{
		[Nahkampfwaffen = pNahkampfwaffen]
		[HauptHand = pHauptHand]
		[NebenHand = pNebenHand]
	};{}
]
[h,if(cFernkampf == 1), Code:
	{
		[Fernkampfwaffen = pFernkampfwaffen]
		[FKWaffe = pFKWaffe]
	};{}
]
[h,if(cRuestung == 1), Code:
	{
		[Ruestungen = pRuestungen]
		[RuestungAktiv = pRuestungAktiv]
	};{}
]
[h,if(cEnergie == 1), Code:
	{
		[LeP = MaxLeP - pLE]
		[SchipsAktuell = SchipsMax - pSchips]
		[AsP = MaxAsP - pAE]
		[KaP = MaxKaP - pKE]
	};{}
]
[h,if(cStatus == 1), Code:
	{
		[SchmerzMod = pSchmerzMod]
		[BelastungMod = pBelastungMod]
		[Furcht = pFurcht]
		[Verwirrung = pVerwirrung]
		[Paralyse = pParalyse]
		[Betaeubung = pBetaeubung]
		[Ueberanstrengung = pUeberanstrengung]
		[Entrueckung = pEntrueckung]
		[Trance = pTrance]
		
		[setState("Baumartig", pBaumartig)]
		[setState("Bewegungsunfähig", pBewegungsunfaehig)]
		[setState("Bewusstlos", pBewusstlos)]
		[setState("Blind", pBlind)]
		[setState("Blutend", pBlutend)]
		[setState("Blutrausch", pBlutrausch)]
		[setState("Brennend", pBrennend)]
		[setState("Eingeengt", pEingeengt)]
		[setState("Fixiert", pFixiert)]
		[setState("Hörig", pHoerig)]
		[setState("Krank", pKrank)]
		[setState("Liegend", pLiegend)]
		[setState("Stumm", pStumm)]
		[setState("Taub", pTaub)]
		[setState("Unsichtbar", pUnsichtbar)]
		[setState("Vergiftet", pVergiftet)]
		[setState("Versteinert", pVersteinert)]
		[setState("Überrascht", pUeberrascht)]
		[setState("Übler Geruch", pUeblergeruch)]
	};{}
]
[h,if(cEnergie == 1 || cStatus == 1),Code:
{
	[h,macro("checkZustand@lib:com.github.naxos84.macros"): zToken]
};{}]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin-top: 3px;'>
	<tr>
		<td style='text-align:center; padding: 0px; margin-right: 18px' valign='middle' width='40'>
			<img src='%s'>
		</td>
		<td style='text-align: left; font-weight: normal;' valign='middle'>
			Die ausgew&auml;hlten Tokendaten wurden von <b><i>%s</i></b> zu <b><i>%s</i></b> kopiert.
		</td>
	</tr>
</table>",
tableImage("chat", 82), qTokenName, zTokenName)]
[h: ausgabe = border("Tokendaten &uuml;bertragen", ausgabe)]

[h: broadcast(ausgabe, playerName)]