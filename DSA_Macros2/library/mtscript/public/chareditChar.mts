[h: switchToken(arg(0))]

[h: linkEigenschaften = macroLink('Basis- &amp; Eigenschaftswerte', 'chareditEigenschaften@this', '')]
[h: linkTraitAdd =  macroLink('Vorteil / Nachteil / SF hinzuf&uuml;gen', 'chareditTraitAdd@this', '')]
[h: linkVorteile = macroLink('Vorteile', 'chareditTrait@this', '', 'Vorteile')]
[h: linkNachteile = macroLink('Nachteile', 'chareditTrait@this', '', 'Nachteile')]
[h: linkSFAllgemein = macroLink('Allgemeine Sonderfertigkeiten', 'chareditTrait@this', '', 'AllgemeineSF')]
[h: linkAddFertigkeit = macroLink('Fertigkeit hinzuf&uuml;gen', 'chareditTalentAdd@this', '')]
[h: linkKoerper = macroLink('K&ouml;rperliche Fertigkeiten', 'chareditTalent@this', '', 'Koerper')]
[h: linkGesellschaft = macroLink('Gesellschaftliche Fertigkeiten', 'chareditTalent@this', '', 'Gesellschaft')]
[h: linkNatur = macroLink('Naturfertigkeiten', 'chareditTalent@this', '', 'Natur')]
[h: linkWissen = macroLink('Wissensfertigkeiten', 'chareditTalent@this', '', 'Wissen')]
[h: linkHandwerk = macroLink('Handwerkliche Fertigkeiten', 'chareditTalent@this', '', 'Handwerk')]
[h: linkCopyTokenData =  macroLink('Tokendaten von anderem<br>Token &uuml;bertragen', 'copyTokenData@lib:com.github.naxos84.tools', '')]
[h: linkJagd = macroLink('Jagdwerte', 'editTier@lib:com.github.naxos84.wildnis', '', currentToken())]
[h: linkEditKampf = macroLink('Kampftechniken editieren', 'chareditKampftechnik@this', '', '')]
[h: linkSFKampf = macroLink('Kampfsonderfertigkeiten', 'chareditTrait@this', '', 'KampfSF')]
[h: linkAddNK =  macroLink('Nahkampfwaffe hinzuf&uuml;gen', 'chareditNahkampfwaffeAdd@this', '')]
[h: linkEditNK = macroLink('Nahkampfwaffe editieren', 'chareditNahkampfwaffe@this', '')]
[h: linkDelNK = macroLink('Nahkampfwaffe l&ouml;schen', 'chareditNahkampfwaffeDel@this', '')]
[h: linkAddFK = macroLink('Fernkampfwaffe hinzuf&uuml;gen', 'chareditFernkampfwaffeAdd@this', '')]
[h: linkEditFK = macroLink('Fernkampfwaffe editieren', 'chareditFernkampfwaffe@this', '')]
[h: linkDelFK = macroLink('Fernkampfwaffe l&ouml;schen', 'chareditFernkampfwaffeDel@this', '')]
[h: linkAddRS = macroLink('Gesamtr&uuml;stung hinzuf&uuml;gen', 'chareditRSAdd@this', '')]
[h: linkAddZoneRS = macroLink('Zonenr&uuml;stung hinzuf&uuml;gen', 'chareditRSZoneAdd@this', '')]
[h: linkEditRS = macroLink('R&uuml;stung editieren', 'chareditRS@this', '')]
[h: linkDelRS = macroLink('R&uuml;stung l&ouml;schen', 'chareditRSDel@this', '')]
[h: linkAddZauber = macroLink('Zauber hinzuf&uuml;gen', 'chareditMagieAdd@this', '', 'Zauber')]
[h: linkEditZauber = macroLink('Zauber editieren', 'chareditTalent@this', '', 'Zauber')]
[h: linkAddRitual = macroLink('Ritual hinzuf&uuml;gen', 'chareditMagieAdd@this', '', 'Rituale')]
[h: linkEditRitual = macroLink('Rituale editieren', 'chareditTalent@this', '', 'Rituale')]
[h: linkAddMagischeHandlung = macroLink(MagischeHandlungenSingular+' hinzuf&uuml;gen', 'chareditMagieAdd@this', '', 'MagischeHandlungen')]
[h: linkEditMagischeHandlung = macroLink(MagischeHandlungenPlural+' editieren', 'chareditTalent@this', '', 'MagischeHandlungen')]
[h: linkSFMagie = macroLink('Magische Sonderfertigkeiten', 'chareditTrait@this', '', 'MagieSF')]
[h: linkAddLiturgie = macroLink('Liturgie hinzuf&uuml;gen', 'chareditLiturgieAdd@this', '')]
[h: linkEditLiturgie = macroLink('Liturgien editieren', 'chareditTalent@this', '', 'Liturgien')]
[h: linkAddZeremonie = macroLink('Zeremonie hinzuf&uuml;gen', 'chareditZeremonienAdd@this', '')]
[h: linkEditZeremonie = macroLink('Zeremonien editieren', 'chareditTalent@this', '', 'Zeremonien')]
[h: linkSFKarmal = macroLink('Karmale Sonderfertigkeiten', 'chareditTrait@this', '', 'KarmaleSF')]


[dialog5("chareditMain", "width=1000; height=500; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Charakter-/Tokeneditor</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<div class="border">
		[r: header("Tokeneditor")]
		<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
			<tr>
				<td valign='top'>
					<table style='border-spacing: 4px;'>
						<tr>
							<td>
								[r: linkEigenschaften]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkTraitAdd]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkVorteile]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkNachteile]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkSFAllgemein]
							</td>
						</tr>
						<tr>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td>
								[r: linkAddFertigkeit]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkKoerper]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkGesellschaft]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkNatur]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkWissen]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkHandwerk]
							</td>
						</tr>
						<tr>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td>
								[r: linkCopyTokenData]
							</td>
						</tr>
					</table>
				</td>
				<td width='50'>
					&nbsp;
				</td>
				<td valign='top'>
					<table style='border-spacing: 4px;'>
						<tr>
							<td>
								[r: linkEditKampf]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkSFKampf]
							</td>
						</tr>
						<tr>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td>
								[r: linkAddNK]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkEditNK]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkDelNK]
							</td>
						</tr>
						<tr>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td>
								[r: linkAddFK]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkEditFK]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkDelFK]
							</td>
						</tr>
						<tr>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td>
								[r: linkAddRS]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkAddZoneRS]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkEditRS]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkDelRS]
							</td>
						</tr>
					</table>
				</td>
				<td width='50'>
					&nbsp;
				</td>
				<td valign='top'>
					<table style='border-spacing: 4px;'>
						<tr>
							<td>
								[r: linkAddZauber]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkEditZauber]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkAddRitual]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkEditRitual]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkAddMagischeHandlung]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkEditMagischeHandlung]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkSFMagie]
							</td>
						</tr>
						<tr>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td>
								[r: linkAddLiturgie]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkEditLiturgie]
							</td>
						</tr>
						
						<tr>
							<td>
								[r: linkAddZeremonie]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkEditZeremonie]
							</td>
						</tr>
						<tr>
							<td>
								[r: linkSFKarmal]
							</td>
						</tr>
						[r,if(isGM() == 1),Code:
						{
						<tr>
							<td>
								&nbsp;
							</td>
						</tr>
						<tr>
							<td>
								[r: linkJagd]
							</td>
						<tr>}]
					</table>
				</td>
			</tr>
		</table>
	</div>
</html>
}]