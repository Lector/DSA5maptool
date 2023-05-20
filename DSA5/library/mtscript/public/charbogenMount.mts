[h: switchToken(arg(0))]

<div class="panel">
	<div class="heading">Reittier</div>
	<table>
		<tr style='text-align: center;'>
			<td></td>
			<td></td>
			<td>
				INI
			</td>
			<td>
				GS
			</td>
			<td>
			</td>
		</tr>

		<tr style='font-weight: normal; text-align: center; border-top: 1px solid #eee5c8;'>
			<td></td>
			<td style='text-align: left;'>
				Unberitten
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
				[h: link = macroLink("&#10063;", "changeMount@this", "", json.append(currentToken(), ""))]
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
					[h: link = macroLink("&#10063;", "changeMount@this", "", json.append(currentToken(), mount))]
				}]
				<td [r: bg]>
					<span style='color: [r: fc]; text-decoration: none;' [r: linkTitle]>[r: link]</span>
				</td>
			</tr>
			}]
		}]
	</table>
</div>