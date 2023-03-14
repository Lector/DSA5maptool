[h: uebergabe = macro.args]
[h: id = listGet(uebergabe, 0)]
[h: tChoice = listGet(uebergabe, 1)]
[h: switchToken(id)]

[dialog("meisterbogenTokenTalente", "width=324; height=500; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Talente
		</title>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 10pt; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",67)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="300">
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",68)]'); background-repeat: repeat-y; margin: 0px; text-align: center;" width="300">
			<table style='border-spacing: 0px;'>
				<tr>
					<td>
						<a href="[r: macroLinkText("gotoToken@Lib:macros2", "", id)]"><image src='[r: getTokenImage(30)]' border="0" alt="Zum Token wechseln und ausw&auml;hlen"></image></a>
					</td>
					<td style='font-weight: bold;'>
						[r: getName()]
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-top: 10px; border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; font-weight: bold;' width='200'>
				<tr>
					<td style='text-align: center;'>
						[r,if(tChoice == "Koerper"), Code:
							{
								<span style='color: #bbbbba;'>K&ouml;rper</span>
							};
							{
								<span style='color: #eee5c8; text-decoration: none;' title='K&ouml;rpertalente aufrufen'>[r: macroLink("K&ouml;rper", "meisterbogenTokenTalente@Lib:macros2", "", strformat("%s, Koerper", id))]</span>				
							}
						]	
						&middot;
						[r,if(tChoice == "Gesellschaft"), Code:
							{
								<span style='color: #bbbbba;'>Gesellschaft</span>
							};
							{
								<span style='color: #eee5c8; text-decoration: none;' title='Gesellschaftstalente aufrufen'>[r: macroLink("Gesellschaft", "meisterbogenTokenTalente@Lib:macros2", "", strformat("%s, Gesellschaft", id))]</span>				
							}
						]
						&middot;
						[r,if(tChoice == "Natur"), Code:
							{
								<span style='color: #bbbbba;'>Natur</span>
							};
							{
								<span style='color: #eee5c8; text-decoration: none;' title='Naturtalente aufrufen'>[r: macroLink("Natur", "meisterbogenTokenTalente@Lib:macros2", "", strformat("%s, Natur", id))]</span>				
							}
						]
						&middot;
						[r,if(tChoice == "Wissen"), Code:
							{
								<span style='color: #bbbbba;'>Wissen</span>
							};
							{
								<span style='color: #eee5c8; text-decoration: none;' title='Wissenstalente aufrufen'>[r: macroLink("Wissen", "meisterbogenTokenTalente@Lib:macros2", "", strformat("%s, Wissen", id))]</span>				
							}
						]
					</td>
				</tr>
				<tr>
					<td style='text-align: center;'>
						[r,if(tChoice == "Handwerk"), Code:
							{
								<span style='color: #bbbbba;'>Handwerk</span>
							};
							{
								<span style='color: #eee5c8; text-decoration: none;' title='Handwerkstalente aufrufen'>[r: macroLink("Handwerk", "meisterbogenTokenTalente@Lib:macros2", "", strformat("%s, Handwerk", id))]</span>				
							}
						]
						&middot;
						[r,if(tChoice == "Kampftechniken"), Code:
							{
								<span style='color: #bbbbba;'>Kampf</span>
							};
							{
								<span style='color: #eee5c8; text-decoration: none;' title='Kampftalente aufrufen'>[r: macroLink("Kampf", "meisterbogenTokenTalente@Lib:macros2", "", strformat("%s, Kampftechniken", id))]</span>				
							}
						]
						&middot;
						[r,if(tChoice == "Gaben"), Code:
							{
								<span style='color: #bbbbba;'>Gaben</span>
							};
							{
								<span style='color: #eee5c8; text-decoration: none;' title='Gaben aufrufen'>[r: macroLink("Gaben", "meisterbogenTokenTalente@Lib:macros2", "", strformat("%s, Gaben", id))]</span>				
							}
						]
					</td>
				</tr>
			</table>
			<table style='border-spacing: 0px; margin-top: 10px;' width='200'>
				[h: tBaum = eval(tChoice)]
				[Foreach(tDaten, tBaum,""), Code:
				{
					[h,if(tChoice == "Kampftechniken"),Code:
					{
						[h: tName = json.get(tDaten, "Name")]
						[h: tWert = json.get(tDaten, "FW")]
					};{
						[h: tName = json.get(tDaten, "Talent")]
						[h: tWert = json.get(tDaten, "Talentwert")]
					}]
					<tr>
						<td width='170'>
							[r: tName]
						</td>
						<td style='text-align: right;' width='30'>
							[r: tWert]
						</td>
					</tr>
				}]
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",69)]'); background-repeat: no-repeat; height: 28; margin: 0px;" width="300">
		<div>
	</body>
</html>
}]