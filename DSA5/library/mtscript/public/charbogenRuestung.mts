[h: switchToken(arg(0))]

<div class="panel">
	[h: rs = resolveRS(currentToken(), getRuestung(Ruestungen, RuestungAktiv))]
	[h: temprs = getStrProp(TempMod, "rs")]
	[h,if(temprs < 0): eigColor = "#ff3333"; eigColor = "#eee5c8"]
	[h,if(temprs > 0): eigColor = "#0099ff"]
	<table>
		<tr>
			<td style='padding: 0px 0px 7px 6px;' valign='bottom'>
				[h: portrait = getTokenPortrait(100)]
				<image src='[r, if(portrait != ""): portrait; getTokenImage(100)]'/>
			</td>
			<td>
				<table style='padding-left: 5px;'>
					<tr>
						<td>
							Gesamt:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							<span style='color: [r: eigColor];'>[r: json.get(rs, "RS")]</span>
						</td>
					</tr>
					<tr>
						<td>
							Belastung:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							[r: json.get(rs, "BE")]
						</td>
					</tr>
					<tr>
						<td>
							INI-Abzug:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							[r: json.get(rs, "INI")]
						</td>
					</tr>
					<tr>
						<td>
							GS-Abzug:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							[r: json.get(rs, "GS")]
						</td>
					</tr>
				</table>
			</td>
			<td width=30>
				&nbsp;
			</td>
			<td>
				<!-- <div style='border-bottom: 1px solid #eee5c8; border-top: 1px solid #eee5c8; padding: 3px 0px 4px 3px; margin-left: 5px;' width='157'>
					<image src='[r: tableImage("mainTheme", 34)]'></image>
				</div>-->
				<table>
					<tr>
						<td style='padding-left: 5px;'>
							Kopf:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							<span style='color: [r: eigColor];'>[r: json.get(rs, "RSKopf")]</span>
						</td>
						<td style='padding-left: 7px;'>
							Torso:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							<span style='color: [r: eigColor];'>[r: json.get(rs, "RSTorso")]</span>
						</td>
					</tr>
					<tr>
						<td style='padding-left: 5px;'>
							Linker Arm:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							<span style='color: [r: eigColor];'>[r: json.get(rs, "RSArmLinks")]</span>
						</td>
						<td style='padding-left: 7px;'>
							Rechter Arm:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							<span style='color: [r: eigColor];'>[r: json.get(rs, "RSArmRechts")]</span>
						</td>
					</tr>
					<tr>
						<td style='padding-left: 5px;'>
							Linkes Bein:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							<span style='color: [r: eigColor];'>[r: json.get(rs, "RSBeinLinks")]</span>
						</td>
						<td style='padding-left: 7px;'>
							Rechtes Bein:
						</td>
						<td style='text-align: center; padding-left: 0px;'>
							<span style='color: [r: eigColor];'>[r: json.get(rs, "RSBeinRechts")]</span>
						</td>
					</tr>
				</table>									
			</td>
		</tr>
	</table>
	
	<div class="equip-table" id="armor"> 	
		<div style='text-align: left;'>
			Rüstung
		</div>
		<div>
			RS
		</div>
		<div>
			Belastung
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
		[r, Foreach(ruestung, Ruestungen, ""), Code:
		{
			[h: rName = json.get(ruestung, "Name")]
			[h: rRS = json.get(ruestung, "RS")]
			[h: rBE = json.get(ruestung, "BE")]
			[h: rINI = json.get(ruestung, "INI")]
			[h: rGS = json.get(ruestung, "GS")]
			[h: rID = json.get(ruestung, "ID")]
			[h: editMacroLink = macroLink(rName, "quickeditRS@this", "", rID)]
			<div>
				<span title='Diese Rüstung editieren'>[r: editMacroLink]</span>
			</div>
			<div>
				[r: rRS]
			</div>
			<div>
				[r: rBE]
			</div>
			<div>
				[r: rINI]
			</div>
			<div>
				[r: rGS]
			</div>
			[h,if(rID == RuestungAktiv),Code: {
				[class = "equipped"]
				[linkTitle = "title='Diese Ruestung ist angelegt.'"]
				[link = "&#10003;"]
			};{
				[class = ""]
				[linkTitle = "title='Diese Ruestung anlegen.'"]
				[link = macroLink("&#10063;", "changeRS@this", "", json.append(currentToken(), rID))]
			}]
			<div class="[r: class]">
				<span [r: linkTitle]>[r: link]</span>
			</div>
		}]
	</div>
</div>