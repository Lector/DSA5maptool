[h: switchToken(arg(0))]

<div class="panel-ornament">
	<div class="heading">Reittier</div>
	<div class="equip-table" id="mount">
		<div>
			&nbsp;
		</div>
		<div>
			&nbsp;
		</div>
		<div>
			INI
		</div>
		<div>
			GS
		</div>
		<div>
			&nbsp;
		</div>
		<div>
			&nbsp;
		</div>
		<div>
			Unberitten
		</div>
		<div>
			[r: getINI(currentToken())]
		</div>
		<div>
			[r: getGS(currentToken())]
		</div>
		[h,if(Reittier == ""),Code:
		{
			[h: class = "equipped"]
			[h: linkTitle = "title='Du bist zu Fuß unterwegs'"]
			[h: link = "&#10003;"]
		};
		{
			[h: class = ""]
			[h: linkTitle = "title='Vom Reittier absteigen'"]
			[h: link = macroLink("&#10063;", "changeMount@this", "", json.append(currentToken(), ""))]
		}]
		<div class="[r: class]">
			<span [r: linkTitle]>[r: link]</span>
		</div>
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
				<div>
					&nbsp;<img src="[r: getTokenImage(50, mount)]"/>
				</div>
				<div>
					[h: namefield = macroLink(getName(mount), "selectToken@this", "", mount)]
					<span title='[r: getName(mount)] markieren'>[r: namefield]</span>
				</div>
				<div>
					[r: getINI(mount)]
				</div>
				<div>
					[r: getGS(mount)]
				</div>
				[h,if(mount == Reittier): class = "equipped"; class = ""]
				[h,if(mount == Reittier): linkTitle = "title='Du sitzt gerade auf diesem Reittier'"; linkTitle = "title='Auf diesem Reittier aufsitzen'"]
				[h,if(mount == Reittier): link = "&#10003;"; link = macroLink("&#10063;", "changeMount@this", "", json.append(currentToken(), mount))]
				<div class="[r: class]">
					<span [r: linkTitle]>[r: link]</span>
				</div>
			}]
		}]
	</div>
</div>