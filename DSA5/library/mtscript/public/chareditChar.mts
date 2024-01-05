[h: switchToken(arg(0))]

[h: linkEigenschaften = macroLink('Basis- &amp; Eigenschaftswerte', 'chareditEigenschaften@this', '', currentToken())]
[h: linkImpersonateAnimalForm = macroLink('Tiergestalt verkörpern', 'impersonateAnimalForm@this', '', json.append("[]", "", currentToken()))]
[h: linkImproveSummons = macroLink('Beschwörung verbessern', 'chareditImproveSummons@this', '', currentToken())]
[h: linkImprovePet = macroLink('Ausbildungsaufsatz', 'chareditImprovePet@this', '', currentToken())]
[h: linkTraitAdd =  macroLink('Vorteil / Nachteil / SF hinzufügen', 'chareditTraitAdd@this', '', json.append("[]", currentToken()))]
[h: linkVorteile = macroLink('Vorteile', 'chareditTrait@this', '', json.append(currentToken(), 'Vorteile'))]
[h: linkNachteile = macroLink('Nachteile', 'chareditTrait@this', '', json.append(currentToken(), 'Nachteile'))]
[h: linkSFAllgemein = macroLink('Allgemeine Sonderfertigkeiten', 'chareditTrait@this', '', json.append(currentToken(), 'AllgemeineSF'))]
[h: linkAddFertigkeit = macroLink('Fertigkeit hinzufügen', 'chareditTalentAdd@this', '')]
[h: linkKoerper = macroLink('Körperliche Fertigkeiten', 'chareditTalent@this', '', json.append(currentToken(), 'Koerper'))]
[h: linkGesellschaft = macroLink('Gesellschaftliche Fertigkeiten', 'chareditTalent@this', '', json.append(currentToken(), 'Gesellschaft'))]
[h: linkNatur = macroLink('Naturfertigkeiten', 'chareditTalent@this', '', json.append(currentToken(), 'Natur'))]
[h: linkWissen = macroLink('Wissensfertigkeiten', 'chareditTalent@this', '', json.append(currentToken(), 'Wissen'))]
[h: linkHandwerk = macroLink('Handwerkliche Fertigkeiten', 'chareditTalent@this', '', json.append(currentToken(), 'Handwerk'))]
[h: linkCopyTokenData =  macroLink('Tokendaten von anderem<br>Token übertragen', 'copyTokenData@this', '')]
[h: linkJagd = macroLink('Jagdwerte', 'editTier@this', '', currentToken())]
[h: linkEditKampf = macroLink('Kampftechniken editieren', 'chareditKampftechnik@this', '', currentToken())]
[h: linkSFKampf = macroLink('Kampfsonderfertigkeiten', 'chareditTrait@this', '', json.append(currentToken(), 'KampfSF'))]
[h: linkAddNK =  macroLink('Nahkampfwaffe hinzufügen', 'chareditNahkampfwaffeAdd@this', '', currentToken())]
[h: linkEditNK = macroLink('Nahkampfwaffe editieren', 'chareditNahkampfwaffe@this', '', currentToken())]
[h: linkDelNK = macroLink('Nahkampfwaffe löschen', 'chareditNahkampfwaffeDel@this', '', currentToken())]
[h: linkAddFK = macroLink('Fernkampfwaffe hinzufügen', 'chareditFernkampfwaffeAdd@this', '', currentToken())]
[h: linkEditFK = macroLink('Fernkampfwaffe editieren', 'chareditFernkampfwaffe@this', '', currentToken())]
[h: linkDelFK = macroLink('Fernkampfwaffe löschen', 'chareditFernkampfwaffeDel@this', '', currentToken())]
[h: linkAddRS = macroLink('Gesamtrüstung hinzufügen', 'chareditRSAdd@this', '', currentToken())]
[h: linkAddZoneRS = macroLink('Zonenrüstung hinzufügen', 'chareditRSZoneAdd@this', '', currentToken())]
[h: linkEditRS = macroLink('Rüstung editieren', 'chareditRS@this', '', currentToken())]
[h: linkDelRS = macroLink('Rüstung löschen', 'chareditRSDel@this', '', currentToken())]
[h: linkAddZauber = macroLink('Zauber hinzufügen', 'chareditMagieAdd@this', '', json.append(currentToken(), 'Zauber'))]
[h: linkEditZauber = macroLink('Zauber editieren', 'chareditTalent@this', '', json.append(currentToken(), 'Zauber'))]
[h: linkAddRitual = macroLink('Ritual hinzufügen', 'chareditMagieAdd@this', '', json.append(currentToken(), 'Rituale'))]
[h: linkEditRitual = macroLink('Rituale editieren', 'chareditTalent@this', '', json.append(currentToken(), 'Rituale'))]
[h: linkAddMagischeHandlung = macroLink(MagischeHandlungenSingular+' hinzufügen', 'chareditMagieAdd@this', '', json.append(currentToken(), 'MagischeHandlungen'))]
[h: linkEditMagischeHandlung = macroLink(MagischeHandlungenPlural+' editieren', 'chareditTalent@this', '', json.append(currentToken(), 'MagischeHandlungen'))]
[h: linkSFMagie = macroLink('Magische Sonderfertigkeiten', 'chareditTrait@this', '', json.append(currentToken(), 'MagieSF'))]
[h: linkAddLiturgie = macroLink('Liturgie hinzufügen', 'chareditLiturgieAdd@this', '', currentToken())]
[h: linkEditLiturgie = macroLink('Liturgien editieren', 'chareditTalent@this', '', json.append(currentToken(), 'Liturgien'))]
[h: linkAddZeremonie = macroLink('Zeremonie hinzufügen', 'chareditZeremonienAdd@this', '', currentToken())]
[h: linkEditZeremonie = macroLink('Zeremonien editieren', 'chareditTalent@this', '', json.append(currentToken(), 'Zeremonien'))]
[h: linkSFKarmal = macroLink('Karmale Sonderfertigkeiten', 'chareditTrait@this', '', json.append(currentToken(), 'KarmaleSF'))]


[dialog5("chareditMain", "width=1000; height=500; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Charakter-/Tokeneditor</title>
		[r: linkGoogleFonts()]
		<link rel='stylesheet' type='text/css' href='lib://com.github.lector.dsa5maptool/styles/base.css?cachelib=false'/>
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
						[r,if(listContains('Chimäre, Daimonid, Dämon, Elementar, Pflanzenchimäre', Typus) > 0),Code:{
						<tr>
							<td>
								[r: linkImproveSummons]
							</td>
						</tr>
						}]
						[r,if(listContains('Drache, Tier, Übernatürliches Wesen', Typus) > 0),Code:{
						<tr>
							<td>
								[r: linkImprovePet]
							</td>
						</tr>
						}]
						[r,if(Typus == "Tiergestalt"),Code:{
						<tr>
							<td>
								[r: linkImpersonateAnimalForm]
							</td>
						</tr>
						}]
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