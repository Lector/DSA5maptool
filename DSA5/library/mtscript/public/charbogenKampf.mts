[h: switchToken(arg(0))]

[h: PlayerOpt = setStrProp(PlayerOpt, "openFrame", "2")]
[h: plus = strformat("<image src='%s' border='0'/>", tableImage("misc", 6))]
[h: minus = strformat("<image src='%s' border='0'/>", tableImage("misc", 7))]

[frame("charbogen", "width=517; height=700; temporary=1; input=0; noframe=0"):{
<html>
	<head>
		<title>
			Charakterbogen - Kampf
		</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
	</head>
	<body style="background-image: url('[r: tblImage("mainTheme",66)]'); font-size: 12pt; font-weight: bold; color: #eee5c8;">
		<div style="background-image: url('[r: tblImage("mainTheme",1)]'); background-repeat: no-repeat; height: 122; margin: 0px;" width="500">
			<div style='margin-top: 18px; font-size: 22pt; text-align: center;' width='500'>
				<span style='color: #eee5c8; text-decoration: none;' title='Zum Charaktertoken wechseln'>[r: macroLink(getName(), "gotoToken@this", "", currentToken())]</span>
			</div>
			<table style='border-spacing: 0px; margin-top: 3px;' width='500'>
				<tr>
					<td width='58'>
						&nbsp;
					</td>
					<td width='383'>
						[r,macro("charsheetNavigation@this"): json.append(currentToken(), 1)]
					</td>
					<td width='59'>
						&nbsp;
					</td>
				</tr>
			</table>
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",2)]'); margin: 0px;" width="500">
			<table style='border-spacing: 0px;' width='500'>
				<tr>
					<td width='14'>
						&nbsp;
					</td>
					<td style="background-image: url('[r: tblImage("mainTheme",21)]'); background-repeat: no-repeat; height: 90;" width='471'>
						[r,macro("eigLeiste@this"): currentToken()]
					</td>
					<td>
						&nbsp;
					</td>
				</tr>
			</table>	
			<table style='border-spacing: 0px; padding: 0px;' width='500' cellpadding='0' cellspacing='0'>
				<tr>
					<td width='144'>
						&nbsp;
					</td>
					<td style='padding: 0px; height: 33;' width='20'>
						LE:
					</td>
					<td style='padding: 0px; text-align: center;' width='40'>		
						[r: LeP]/[r: MaxLeP]<br>
						<span style='color: #eee5c8; text-decoration: none;' title='LeP addieren'>[r: macroLink(plus, "changeEnergie@this", "", "lePlus")]</span>
						&nbsp;
						<span style='color: #eee5c8; text-decoration: none;' title='LeP subtrahieren'>[r: macroLink(minus, "changeEnergie@this", "", "leMinus")]</span>
					</td>
					<td width='152'>
						<table style="background-image: url('[r: tblImage("mainTheme",39)]'); background-repeat: no-repeat; border-spacing: 0px;" width='152'>
							<tr>
							[h,if(MaxLeP <=0): barMaxLeP = 1; barMaxLeP = MaxLeP]
							[h: barLE = round(1.5 * (LeP / (barMaxLeP / 100)))]
								<td style="background-image: url('[r: tblImage("mainTheme",40)]'); background-repeat: no-repeat; height: 33; padding: 0px;" width="[r: barLE]">						
								</td>
								<td style='padding: 0px;'>
									&nbsp;
								</td>
							</tr>
						</table>
					</td>
					<td width='144'>
						&nbsp;
					</td>
				</tr>
			</table>	
			[r,macro("charbogenRuestung@this"): currentToken()]
			[r,macro("charbogenNahkampf@this"): currentToken()]
			[r,if(json.length(Fernkampfwaffen) > 0),Code:
			{
				[macro("charbogenFernkampf@this"): currentToken()]
			}]
			<table style='border-spacing: 0px; margin-top: 13px;' width='500'>
				<tr>
					<td width='28'>
						&nbsp;
					</td>
					<td width='443'>			
						<table style='border-spacing: 0px;' width='443'>				
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",54)]'); background-repeat: no-repeat; height: 28;" width='443'>
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",55)]'); background-repeat: repeat-y; padding-left: 10px; padding-right: 10px; height: 28; font-weight: normal;">
									<div style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='417'>
										KAMPFSONDERFERTIGKEITEN
									</div>
									[r,macro("charbogenTraits@this"): KampfSF]
								</td>
							</tr>
							<tr>
								<td style="background-image: url('[r: tblImage("mainTheme",56)]'); background-repeat: no-repeat; height: 28;">
								</td>
							</tr>
						</table>					
					</td>
					<td width='29'>
						&nbsp;
					</td>
				</tr>
			</table>
			[r,if(TrefferzonenModell == 0),Code:
			{
				[r,macro("charbogenMount@this"): currentToken()]	
			}]	
		</div>
		<div style="background-image: url('[r: tblImage("mainTheme",3)]'); background-repeat: no-repeat; height: 34; margin: 0px;" width="500">
		</div>
	</body>
</html>
}]