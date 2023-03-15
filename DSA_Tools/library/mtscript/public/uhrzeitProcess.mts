[h: uebergabe = macro.args]

[h: uhrNeu = json.get(uebergabe, "fUhr")]
[h: options = getLibProperty("KalenderOpt", "com.github.naxos84.tools")]

[h,if(getStrProp(options, "uhr") == 0), code: 
	{
		[h,macro("inputFail@lib:com.github.naxos84.macros"): "uhrzeit"]
	};{}
]

[h: options = setStrProp(options, "uhrzeit", uhrNeu)]
[h: setLibProperty("KalenderOpt", options, "com.github.naxos84.tools")]
[h: kalender = "Zwoelfgoettlicher Kalender")]

[h: tableIndex = number(substring(uhrNeu, 0, 2))]
[h: tableIndex = math.mod(tableIndex, 12)]
[h,if(tableIndex == 0): tableIndex = 12]
[h: idUhr = findToken("Aktuelle Uhrzeit")]
[h: mapName = getCurrentMapName()]
[h,if(idUhr == ""),Code:
{
	[mapName = "Spieltisch"]
	[idUhr = findToken("Aktuelle Uhrzeit", mapName)]
}]

[h,token(idUhr): setTokenImage(tableImage("uhr", tableIndex), idUhr, mapName)]

[h,switch(uhrNeu), code:
	case "00.00 Uhr":
		{
			[info = "00.00 Uhr - 00.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Praiosstunde (Geisterstunde):<br>"+info; info = info]
		};
	case "01.00 Uhr":
		{
			[info = "01.00 Uhr - 01.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Rondrastunde:<br>"+info; info = info]
		};
	case "02.00 Uhr":
		{
			[info = "02.00 Uhr - 02.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Efferdsstunde:<br>"+info; info = info]
		};
	case "03.00 Uhr":
		{
			[info = "03.00 Uhr - 03.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Traviastunde:<br>"+info; info = info]
		};
	case "04.00 Uhr":
		{
			[info = "04.00 Uhr - 04.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Boronsstunde:<br>"+info; info = info]
		};
	case "05.00 Uhr":
		{
			[info = "05.00 Uhr - 05.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Hesindestunde:<br>"+info; info = info]
		};
	case "06.00 Uhr":
		{
			[info = "06.00 Uhr - 06.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Firunsstunde:<br>"+info; info = info]
		};
	case "07.00 Uhr":
		{
			[info = "07.00 Uhr - 07.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Tsastunde:<br>"+info; info = info]
		};
	case "08.00 Uhr":
		{
			[info = "08.00 Uhr - 08.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Phexensstunde:<br>"+info; info = info]
		};
	case "09.00 Uhr":
		{
			[info = "09.00 Uhr - 09.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Perainestunde:<br>"+info; info = info]
		};
	case "10.00 Uhr":
		{
			[info = "10.00 Uhr - 10.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Ingerimmsstunde:<br>"+info; info = info]
		};
	case "11.00 Uhr":
		{
			[info = "11.00 Uhr - 11.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Rahjasstunde (Weinstunde):<br>"+info; info = info]
		};
	case "12.00 Uhr":
		{
			[info = "12.00 Uhr - 12.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Praiosstunde:<br>"+info; info = info]
		};
	case "13.00 Uhr":
		{
			[info = "13.00 Uhr - 13.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Rondrastunde:<br>"+info; info = info]
		};
	case "14.00 Uhr":
		{
			[info = "14.00 Uhr - 14.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Efferdsstunde:<br>"+info; info = info]
		};
	case "15.00 Uhr":
		{
			[info = "15.00 Uhr - 15.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Traviastunde:<br>"+info; info = info]
		};
	case "16.00 Uhr":
		{
			[info = "16.00 Uhr - 16.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Boronsstunde:<br>"+info; info = info]
		};
	case "17.00 Uhr":
		{
			[info = "17.00 Uhr - 17.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Hesindestunde (Schlangenstunde):<br>"+info; info = info]
		};
	case "18.00 Uhr":
		{
			[info = "18.00 Uhr - 18.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Firunsstunde:<br>"+info; info = info]
		};
	case "19.00 Uhr":
		{
			[info = "19.00 Uhr - 19.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Tsastunde:<br>"+info; info = info]
		};
	case "20.00 Uhr":
		{
			[info = "20.00 Uhr - 20.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Phexensstunde:<br>"+info; info = info]
		};
	case "21.00 Uhr":
		{
			[info = "21.00 Uhr - 21.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Perainestunde:<br>"+info; info = info]
		};
	case "22.00 Uhr":
		{
			[info = "22.00 Uhr - 22.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Ingerimmsstunde:<br>"+info; info = info]
		};
	case "23.00 Uhr":
		{
			[info = "23.00 Uhr - 23.59 Uhr"]
			[if(kalender == "Zwoelfgoettlicher Kalender"): info = "Rahjasstunde (Rosenstunde):<br>"+info; info = info]
		};
	default:
		{}
]

[h: chatInfo =  replace(info, "<br>", " ")]
[h: info = "<span style='font-size: 12pt; font-weight: bold;'>"+info+"</span>"]
[h: setNotes(info, idUhr, mapName)]

[h: ausgabe = strformat("
<div style='background-image: url(%s); background-repeat: repeat-y; color: #441e13; font-size: 12pt; font-weight: bold; text-align: left; margin: 0px;'>
	<table style='border-spacing: 0px; padding-top: 3px; font-weight: normal;'>
		<tr>
			<td style='text-align:center; padding: 0px;' valign='middle' width='40'>
				<img src='%s'>
			</td>
			<td style='text-align: center;' valign='middle' width='300'>
				%s
			</td>
		</tr>
	</table>
</div>
", tableImage("chat", 31), tableImage("chat", 84), chatInfo)]

[h: ausgabe = border("Aktuelle Uhrzeit", ausgabe)]

[h,if(getStrProp(options, "uhrChat") == 1), code:
	{
		[h,macro("sendToPublic@lib:com.github.naxos84.macros"): ausgabe]
	};{}
]
[h,if(isFrameVisible("kalender") == 1), code:
	{
		[h,macro("kalenderMain@this"): ""]
	};{}
]