[h: switchToken(arg(0))]


<table style='border-spacing: 0px; margin-top: 15px;' width='500'>
	<tr>
		<td width='28'>
			&nbsp;
		</td>
		<td style="background-image: url('[r: tblImage("mainTheme",54)]'); background-repeat: no-repeat; height: 28;" width='443'>																	
		</td>
		<td width='29'>
			&nbsp;
		</td>
	</tr>
	<tr>
		<td>
			&nbsp;
		</td>
		<td style="background-image: url('[r: tblImage("mainTheme",55)]'); background-repeat: repeat-y;">
			<!--<table style='border-spacing: 0px; margin-left: 9px;' width='416'>
				<tr>
					<td width='50'>
						<image src='[r: tableImage("mainTheme", 62)]'></image>
					</td>
					<td>
						<div style='border-bottom: 1px solid #eee5c8; border-top: 1px solid #eee5c8; padding: 3px 0px 3px 3px;' width='200'>
							<image src='[r: tableImage("mainTheme", 63)]'></image>
						</div>
					</td>
				</tr>
			</table>-->
			<table style='border-spacing: 0px; margin-left: 9px;' width='416'>
				<tr style='text-align: center;'>
					<td width='0%'></td>
					<td style='text-align: left;'>
						Reittier
					</td>
					<td width='30'>
						INI
					</td>
					<td width='30'>
						GS
					</td>
					<td width='30'>
					</td>
				</tr>

				<tr style='font-weight: normal; text-align: center; border-top: 1px solid #eee5c8;'>
					<td></td>
					<td style='text-align: left;'>
						Keines
					</td>
					<td>
						[r: getINI(currentToken())]
					</td>
					<td>
						[r: getGS(currentToken())]
					</td>
					[h,if(Reittier == ""),Code:
					{
						[h: bg = "bgcolor='#eee5c8'"]
						[h: fc = "#3d1919"]
						[h: linkTitle = "title='Du bist zu Fuß unterwegs'"]
						[h: link = "&#10003;"]
					};
					{
						[h: bg = ""]
						[h: fc = "#eee5c8"]
						[h: linkTitle = "title='Vom Reittier absteigen'"]
						[h: link = macroLink("&#10063;", "changeMount@this", "", "")]
					}]
					<td [r: bg]>
						<span style='color: [r: fc]; text-decoration: none;' [r: linkTitle]>[r: link]</span>
					</td>
				</tr>
				[h,if(isGM() == 1),Code:
				{
					[h: mounts = getTokens("json", json.set("{}", "propertyType", "Basic"))]
				};
				{
					[h: mounts = getTokens("json", json.set("{}", "propertyType", "Basic", "owned", "["+getPlayerName()+"]"))]
					[h: mounts = json.union(mounts, getTokens("json", json.set("{}", "propertyType", "Basic", "owned", "byall")))]
				}]
				[h,if(Reittier != "" && json.contains(mounts, Reittier) == 0): mounts = json.append(mounts, Reittier)]
				[r, Foreach(mount, mounts, ""),Code:
				{
					[h: mountSize = groesse(getSize(mount))]
					[h: currentSize = groesse(getSize(currentToken()))]
					<!-- Kleinere Wesen und Humanoide werden ausgeschlossen -->
					[r,if(mountSize >= currentSize && getProperty("Trefferzonenmodell", mount) != 0), Code:
					{
					<tr style='font-weight: normal; text-align: center; border-top: 1px solid #eee5c8;'>
						<td style='text-align: left;'>
							<img src="[r: getTokenImage(50, mount)]"/>
						</td>
						<td style='text-align: left;'>
							[h: namefield = macroLink(getName(mount), "selectToken@this", "", mount)]
							<span style='color: #eee5c8; text-decoration: none;' title='[r: getName(mount)] markieren'>[r: namefield]</span>
						</td>
						<td>
							[r: getINI(mount)]
						</td>
						<td>
							[r: getGS(mount)]
						</td>
						[h,if(mount == Reittier),Code:
						{
							[h: bg = "bgcolor='#eee5c8'"]
							[h: fc = "#3d1919"]
							[h: linkTitle = "title='Du sitzt gerade auf diesem Reittier'"]
							[h: link = "&#10003;"]
						};
						{
							[h: bg = ""]
							[h: fc = "#eee5c8"]
							[h: linkTitle = "title='Auf diesem Reittier aufsitzen'"]
							[h: link = macroLink("&#10063;", "changeMount@this", "", mount)]
						}]
						<td [r: bg]>
							<span style='color: [r: fc]; text-decoration: none;' [r: linkTitle]>[r: link]</span>
						</td>
					</tr>
					};{}]
				}]
			</table>
		</td>
		<td>
			&nbsp;
		</td>
	</tr>
	<tr>
		<td>
			&nbsp;
		</td>
		<td style="background-image: url('[r: tblImage("mainTheme",56)]'); background-repeat: no-repeat; height: 28;">																
		</td>
		<td>
			&nbsp;
		</td>
	</tr>
</table>