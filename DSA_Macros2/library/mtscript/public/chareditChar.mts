[h: switchToken(arg(0))]

[h: linkEigenschaften = macroLink('Basis- &amp; Eigenschaftswerte', 'chareditEigenschaften@Lib:macros2', '')]
[h: linkTraitAdd =  macroLink('Vorteil / Nachteil / SF hinzuf&uuml;gen', 'chareditTraitAdd@Lib:macros2', '')]
[h: linkVorteile = macroLink('Vorteile', 'chareditTrait@Lib:macros2', '', 'Vorteile')]
[h: linkNachteile = macroLink('Nachteile', 'chareditTrait@Lib:macros2', '', 'Nachteile')]
[h: linkSFAllgemein = macroLink('Allgemeine Sonderfertigkeiten', 'chareditTrait@Lib:macros2', '', 'AllgemeineSF')]
[h: linkAddFertigkeit = macroLink('Fertigkeit hinzuf&uuml;gen', 'chareditTalentAdd@Lib:macros2', '')]
[h: linkKoerper = macroLink('K&ouml;rperliche Fertigkeiten', 'chareditTalent@Lib:macros2', '', 'Koerper')]
[h: linkGesellschaft = macroLink('Gesellschaftliche Fertigkeiten', 'chareditTalent@Lib:macros2', '', 'Gesellschaft')]
[h: linkNatur = macroLink('Naturfertigkeiten', 'chareditTalent@Lib:macros2', '', 'Natur')]
[h: linkWissen = macroLink('Wissensfertigkeiten', 'chareditTalent@Lib:macros2', '', 'Wissen')]
[h: linkHandwerk = macroLink('Handwerkliche Fertigkeiten', 'chareditTalent@Lib:macros2', '', 'Handwerk')]
[h: linkCopyTokenData =  macroLink('Tokendaten von anderem<br>Token &uuml;bertragen', 'copyTokenData@Lib:tools', '')]
[h: linkJagd = macroLink('Jagdwerte', 'editTier@lib:com.github.naxos.Wildnis', '', currentToken())]
[h: linkEditKampf = macroLink('Kampftechniken editieren', 'chareditKampftechnik@Lib:macros2', '', '')]
[h: linkSFKampf = macroLink('Kampfsonderfertigkeiten', 'chareditTrait@Lib:macros2', '', 'KampfSF')]
[h: linkAddNK =  macroLink('Nahkampfwaffe hinzuf&uuml;gen', 'chareditNahkampfwaffeAdd@Lib:macros2', '')]
[h: linkEditNK = macroLink('Nahkampfwaffe editieren', 'chareditNahkampfwaffe@Lib:macros2', '')]
[h: linkDelNK = macroLink('Nahkampfwaffe l&ouml;schen', 'chareditNahkampfwaffeDel@Lib:macros2', '')]
[h: linkAddFK = macroLink('Fernkampfwaffe hinzuf&uuml;gen', 'chareditFernkampfwaffeAdd@Lib:macros2', '')]
[h: linkEditFK = macroLink('Fernkampfwaffe editieren', 'chareditFernkampfwaffe@Lib:macros2', '')]
[h: linkDelFK = macroLink('Fernkampfwaffe l&ouml;schen', 'chareditFernkampfwaffeDel@Lib:macros2', '')]
[h: linkAddRS = macroLink('Gesamtr&uuml;stung hinzuf&uuml;gen', 'chareditRSAdd@Lib:macros2', '')]
[h: linkAddZoneRS = macroLink('Zonenr&uuml;stung hinzuf&uuml;gen', 'chareditRSZoneAdd@Lib:macros2', '')]
[h: linkEditRS = macroLink('R&uuml;stung editieren', 'chareditRS@Lib:macros2', '')]
[h: linkDelRS = macroLink('R&uuml;stung l&ouml;schen', 'chareditRSDel@Lib:macros2', '')]
[h: linkAddZauber = macroLink('Zauber hinzuf&uuml;gen', 'chareditMagieAdd@Lib:macros2', '', 'Zauber')]
[h: linkEditZauber = macroLink('Zauber editieren', 'chareditTalent@Lib:macros2', '', 'Zauber')]
[h: linkAddRitual = macroLink('Ritual hinzuf&uuml;gen', 'chareditMagieAdd@Lib:macros2', '', 'Rituale')]
[h: linkEditRitual = macroLink('Rituale editieren', 'chareditTalent@Lib:macros2', '', 'Rituale')]
[h: linkAddMagischeHandlung = macroLink(MagischeHandlungenSingular+' hinzuf&uuml;gen', 'chareditMagieAdd@Lib:macros2', '', 'MagischeHandlungen')]
[h: linkEditMagischeHandlung = macroLink(MagischeHandlungenPlural+' editieren', 'chareditTalent@Lib:macros2', '', 'MagischeHandlungen')]
[h: linkSFMagie = macroLink('Magische Sonderfertigkeiten', 'chareditTrait@Lib:macros2', '', 'MagieSF')]
[h: linkAddLiturgie = macroLink('Liturgie hinzuf&uuml;gen', 'chareditLiturgieAdd@Lib:macros2', '')]
[h: linkEditLiturgie = macroLink('Liturgien editieren', 'chareditTalent@Lib:macros2', '', 'Liturgien')]
[h: linkAddZeremonie = macroLink('Zeremonie hinzuf&uuml;gen', 'chareditZeremonienAdd@Lib:macros2', '')]
[h: linkEditZeremonie = macroLink('Zeremonien editieren', 'chareditTalent@Lib:macros2', '', 'Zeremonien')]
[h: linkSFKarmal = macroLink('Karmale Sonderfertigkeiten', 'chareditTrait@Lib:macros2', '', 'KarmaleSF')]


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