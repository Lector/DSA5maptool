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

[h: zone = macro.args]

[dialog("changeZoneImage", "width=1124; height=741; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Zonenbild &auml;ndern
		</title>
	</head>
	<body style='font-size: 12pt; color: #939393;' bgcolor='#252525'>
		<div style="background-image: url('[r: tblImage("forms",1)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="1100">
		</div>
		<div style="background-image: url('[r: tblImage("forms",2)]'); background-repeat: repeat-y; margin: 0px; text-align: center;" width="1100">
			<div style='padding: 5px 0px 10px 0px;'>
				<image src='[r: tableImage("forms", 4)]'></image>
			</div>
			<table style='border-spacing: 0px;' cellpadding='10' width='1040'>
				<tr style='text-align: center;'>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 1")]'><image src='[r: tableImage("zonenChars", 1)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Achazkrieger
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 2")]'><image src='[r: tableImage("zonenChars", 2)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Al&#39;Anfanerin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 3")]'><image src='[r: tableImage("zonenChars", 3)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Alchimistin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 4")]'><image src='[r: tableImage("zonenChars", 4)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Angroschgeweihter
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 5")]'><image src='[r: tableImage("zonenChars", 5)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Auelfe
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 6")]'><image src='[r: tableImage("zonenChars", 6)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Draconiterin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 7")]'><image src='[r: tableImage("zonenChars", 7)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Einbrecherin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 8")]'><image src='[r: tableImage("zonenChars", 8)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Entdecker
					</td>
				</tr>
				<tr style='text-align: center;'>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 9")]'><image src='[r: tableImage("zonenChars", 9)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						F&auml;hnrich
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 10")]'><image src='[r: tableImage("zonenChars", 10)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Gjalskerl&auml;nderin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 11")]'><image src='[r: tableImage("zonenChars", 11)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Goblin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 12")]'><image src='[r: tableImage("zonenChars", 12)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Hochstaplerin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 13")]'><image src='[r: tableImage("zonenChars", 13)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Kampfmagier
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 14")]'><image src='[r: tableImage("zonenChars", 14)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Kartographin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 15")]'><image src='[r: tableImage("zonenChars", 15)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Katzenhexe
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 16")]'><image src='[r: tableImage("zonenChars", 16)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Krieger
					</td>
				</tr>
				<tr style='text-align: center;'>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 17")]'><image src='[r: tableImage("zonenChars", 17)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Kr&ouml;tenhexe
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 18")]'><image src='[r: tableImage("zonenChars", 18)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Magier
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 19")]'><image src='[r: tableImage("zonenChars", 19)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Norbardin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 20")]'><image src='[r: tableImage("zonenChars", 20)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Piratin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 21")]'><image src='[r: tableImage("zonenChars", 21)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Praiosgeweihte
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 22")]'><image src='[r: tableImage("zonenChars", 22)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Ritter
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 23")]'><image src='[r: tableImage("zonenChars", 23)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Rondrageweihter
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 24")]'><image src='[r: tableImage("zonenChars", 24)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Sch&uuml;tze
					</td>
				</tr>
				<tr style='text-align: center;'>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 25")]'><image src='[r: tableImage("zonenChars", 25)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Schwarzmagierin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 26")]'><image src='[r: tableImage("zonenChars", 26)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Schwertgesellin
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 27")]'><image src='[r: tableImage("zonenChars", 27)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Thorwaler
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 28")]'><image src='[r: tableImage("zonenChars", 28)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Waldelf
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 29")]'><image src='[r: tableImage("zonenChars", 29)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Zibilya
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 30")]'><image src='[r: tableImage("zonenChars", 30)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Zwerg
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 31")]'><image src='[r: tableImage("zonenChars", 31)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Zwergens&ouml;ldner
					</td>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 32")]'><image src='[r: tableImage("zonenChars", 32)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Zant
					</td>
				</tr>
				<tr style='text-align: center;'>
					<td width='130'>
						<a href='[r: macroLinkText("changeZoneImageProcess@Lib:macros", "", zone+", 33")]'><image src='[r: tableImage("zonenChars", 33)]' border='0' alt='Dieses Bild ausw&auml;hlen'></image></a>	
						<br>
						Ork
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("forms",3)]'); background-repeat: no-repeat; height: 20; margin: 0px;" width="1100">
		</div>
	</body>
</html>
}]