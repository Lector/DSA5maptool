[h: switchToken(arg(0))]

[h: rs = resolveRS(currentToken(), getRuestung(Ruestungen, RuestungAktiv))]
<div class="panel-round">
	<div class="row-container">
		<!--<td style='padding: 0px 0px 7px 6px;' valign='bottom'>
			[h: portrait = getTokenPortrait(100)]
			<image src='[r, if(portrait != ""): portrait; getTokenImage(100)]'/>
		</td>-->
		<div>
			<div class="heading">
				Rüstungsschutz
			</div>
			<div class="armor-table">
				<div>
					Gesamt:
				</div>
				<div>
					[h: temprs = getStrProp(TempMod, "rs")]
					[h,if(temprs < 0): eigColor = "#ff3333"; eigColor = "#eee5c8"]
					[h,if(temprs > 0): eigColor = "#0099ff"]
					<span style='color: [r: eigColor];'>[r: json.get(rs, "RS")]</span>
				</div>
				<div></div>
				<div></div>
				<div>
					Kopf:
				</div>
				<div>
					<span style='color: [r: eigColor];'>[r: json.get(rs, "RSKopf")]</span>
				</div>
				<div>
					Torso:
				</div>
				<div>
					<span style='color: [r: eigColor];'>[r: json.get(rs, "RSTorso")]</span>
				</div>
				<div>
					Linker Arm:
				</div>
				<div>
					<span style='color: [r: eigColor];'>[r: json.get(rs, "RSArmLinks")]</span>
				</div>
				<div>
					Rechter Arm:
				</div>
				<div>
					<span style='color: [r: eigColor];'>[r: json.get(rs, "RSArmRechts")]</span>
				</div>
				<div>
					Linkes Bein:
				</div>
				<div>
					<span style='color: [r: eigColor];'>[r: json.get(rs, "RSBeinLinks")]</span>
				</div>
				<div>
					Rechtes Bein:
				</div>
				<div>
					<span style='color: [r: eigColor];'>[r: json.get(rs, "RSBeinRechts")]</span>
				</div>
			</div>
		</div>
		<div>
			<div class="heading">
				Abzüge
			</div>
			<div class="stat-table">
				<div>
					Belastung:
				</div>
				<div>
					[r: json.get(rs, "BE")]
				</div>
				<div>
					INI-Abzug:
				</div>
				<div>
					[r: json.get(rs, "INI")]
				</div>
				<div>
					GS-Abzug:
				</div>
				<div>
					[r: json.get(rs, "GS")]
				</div>
			</div>
		</div>
	</div>
	
	<div class="table" id="armor"> 	
		<div>
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