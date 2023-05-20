[h: params = arg(0)]
[h: tok = json.get(params, "token")]

[h,if(isGM() == 1 && hasImpersonated() == 0 && tok == ""), Code:
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

[h,if(tok != ""): switchToken(tok)]

[h: chat = json.get(params, "chat")]

[h,if(json.get(params, "direkteingabe") == ""): direkteingabe = 0; direkteingabe = json.get(params, "direkteingabe")]
[h,if(json.get(params, "wBonus") == ""): wBonus = 0; wBonus = json.get(params, "wBonus")]
[h,if(json.get(params, "wMalus") == ""): wMalus = 0; wMalus = json.get(params, "wMalus")]

[h,if(isNumber(wBonus) == 0 || isNumber(wMalus) == 0 || isNumber(direkteingabe) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(wBonus != round(wBonus) || wMalus != round(wMalus) || direkteingabe != round(direkteingabe)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(wBonus < 0 || wMalus < 0 || direkteingabe < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("changeEnergie")]

[h,if(json.get(params, "eingabeTyp") == 0), Code:
	{
		[ergebnis = direkteingabe]
		[ergebnisTitle = "Direkteingabe"]
	};
	{
		[wAnzahl = json.get(params, "wAnzahl")]
		[wTyp = json.get(params, "wTyp")]
		[wMod = wBonus - wMalus]
		[if(wMod > 0): wModVorzeichen = "&#43;"; wModVorzeichen = ""]
		[ergebnis = roll(wAnzahl, wTyp) + wMod]
		[if(ergebnis < 0): ergebnis = 0]
		[if(wMod == 0): wMod = ""]
		[ergebnisTitle = strformat("%sW%s%s%s", wAnzahl, wTyp, wModVorzeichen, wMod)]
	}
]

[h: subtext = ""]

[h: energieTyp = json.get(params, "energieTyp")]
[h,switch(energieTyp), Code:
	case "lePlus": {
		[if(LeP < 0), Code:
			{
				[if(LeP + ergebnis > MaxLeP): ergebnis = MaxLeP + abs(LeP)]
			};
			{
				[if(LeP + ergebnis > MaxLeP): ergebnis = MaxLeP - LeP]
			}
		]
		[LeP = LeP + ergebnis]
		[chatTitle = "Lebensenergie"]
		[chatTyp = "LeP"]
		[chatText = "Erhaltene Energie:"]
		[chatImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/lifePlus.png")]
		[chatColor = "#1d5c2f"]
	};
	case "leMinus": {
		[LeP = LeP - ergebnis]
		[chatTitle = "Lebensenergie"]
		[chatTyp = "LeP"]
		[chatText = "Verlorene Energie:"]
		[chatImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/lifeMinus.png")]
		[chatColor = "#a42b1e"]
	};
	case "spPlus": {
		[if(SchipsAktuell + ergebnis > SchipsMax): ergebnis = SchipsMax - SchipsAktuell]
		[SchipsAktuell = SchipsAktuell + ergebnis]
		[chatTitle = "Schicksalspunkte"]
		[chatTyp = "SchiP"]
		[chatText = "Erhaltene Schicksalspunkte:"]
		[chatImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/fatePlus.png")]
		[chatColor = "#1d5c2f"]
	};
	case "spMinus": {
		[if(SchipsAktuell - ergebnis < 0): ergebnis = SchipsAktuell]
		[SchipsAktuell = SchipsAktuell - ergebnis]
		[chatTitle = "Schicksalspunkte"]
		[chatTyp = "SchiP"]
		[chatText = "Verlorene Schicksalspunkte:"]
		[chatImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/fateMinus.png")]
		[chatColor = "#a42b1e"]
	};
	case "aePlus": {
		[if(AsP + ergebnis > MaxAsP): ergebnis = MaxAsP - AsP]
		[AsP = AsP + ergebnis]
		[chatTitle = "Astralenergie"]
		[chatTyp = "AsP"]
		[chatText = "Erhaltene Energie:"]
		[chatImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/magicPlus.png")]
		[chatColor = "#1d5c2f"]
	};
	case "aeMinus": {
		[if(hasTrait("Nachteile", "Schwacher Astralkörper") == 1),Code:{
			[ergebnis = ergebnis + 1]
			[satext = "<b>Schwacher Astralkörper</b><br>Es wurde 1 AsP zusätzlich abgezogen."]
			[subtext = subtext + subtext(satext)]
		};{}]
		[if(AsP - ergebnis < 0): ergebnis = AsP]
		[if(hasTrait("Nachteile", "Lästige Mindergeister") == 1),Code:{
			[dice = 1d20]
			[mgtext = "<b>Lästige Mindergeister</b><br>1W20: "+dice+" - "]
			[if(dice <= ergebnis): mgtext = mgtext + "Es erscheinen Mindergeister und belästigen dich"; mgtext = mgtext + "Es erscheinen keine Mindergeister"]
			[h: subtext = subtext + subtext(mgtext)]
		};{}]
		[AsP = AsP - ergebnis]
		[chatTitle = "Astralenergie"]
		[chatTyp = "AsP"]
		[chatText = "Verlorene Energie:"]
		[chatImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/magicMinus.png")]
		[chatColor = "#a42b1e"]
	};
	case "kePlus": {
		[if(KaP + ergebnis > MaxKaP): ergebnis = MaxKaP - KaP]
		[KaP = KaP + ergebnis]
		[chatTitle = "Karmaenergie"]
		[chatTyp = "KeP"]
		[chatText = "Erhaltene Energie:"]
		[chatImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/karmaPlus.png")]
		[chatColor = "#1d5c2f"]
	};
	case "keMinus": {
		[if(hasTrait("Nachteile", "Schwacher Karmalkörper") == 1),Code:{
			[ergebnis = ergebnis + 1]
			[sktext = "<b>Schwacher Karmalkörper</b><br>Es wurde 1 KaP zusätzlich abgezogen"]
			[subtext = subtext + subtext(sktext)]
		}]
		[if(KaP - ergebnis < 0): ergebnis = KaP]
		[KaP = KaP - ergebnis]
		[chatTitle = "Karmaenergie"]
		[chatTyp = "KeP"]
		[chatText = "Verlorene Energie:"]
		[chatImage = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/karmaMinus.png")]
		[chatColor = "#a42b1e"]
	}
]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin-top: 3px; font-weight: bold; white-space: nowrap;'>
	<tr>
		<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle'>
			<img src='%s'>
		</td>
		<td valign='middle'>
			%s
		</td>
		<td width='10'>
			&nbsp;
		</td>
		<td style='font-size: 20pt; text-align: center; color: %s;' valign='middle'>
			<span title='%s'>%s %s</span>
		</td>
	</tr>
</table>",
chatImage, chatText, chatColor, ergebnisTitle, ergebnis, chatTyp)]

[h: ausgabe = ausgabe + subtext + show(checkZustand(currentToken()))]

[h: ausgabe = border(chatTitle, ausgabe)]

[h: sendTo(chat, ausgabe)]

[h: refreshFrame(currentToken())]