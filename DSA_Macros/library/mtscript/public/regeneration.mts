[h,macro("abfrageImpersonate@this"): ""]

[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h,if(isNPC() == 1 && getLibProperty("OptHideNSCAction", "com.github.naxos84.macros") == 1), Code:
	{
		[ausgabeSL = "checked='checked'"]
		[ausgabePublic = ""]
	};
	{
		[ausgabeSL = ""]
		[ausgabePublic = "checked='checked'"]
	}
]
[h,if(getState("Krank") == 1 || getState("Vergiftet") == 1 ), Code:
	{
		[StatusKrankVergiftet = "checked='checked'"]
	};
	{
		[StatusKrankVergiftet = ""]
	}
]

[h: lepmod = 0]
[h: aspmod = 0]
[h: kapmod = 0]

[h,if(hasTrait("KarmaleSF", "Tradition (Tsakirche)") != 0): lepmod = lepmod + 2]

[h: lepmod = lepmod
	+ getTraitLevel("Vorteile", "Verbesserte Regeneration (Lebensenergie)")
	- getTraitLevel("Nachteile", "Schlechte Regeneration (Lebensenergie)")]

[h: aspmod = aspmod
	+ getTraitLevel("Vorteile", "Verbesserte Regeneration (Astralenergie)")
	- getTraitLevel("Nachteile", "Schlechte Regeneration (Astralenergie)")
	+ getTraitLevel("MagieSF", "Magische Regeneration")]

[h: kapmod = kapmod
	+ getTraitLevel("Vorteile", "Verbesserte Regeneration (Karmaenergie)")
	- getTraitLevel("Nachteile", "Schlechte Regeneration (Karmaenergie)")]

[h: lepmodView = lepmod]
[h,if(lepmod > 0): lepmodView = " +" + lepmod]
[h,if(lepmod == 0): lepmodView = ""]

[h: aspmodView = aspmod]
[h,if(aspmod > 0): aspmodView = " +" + aspmod]
[h,if(aspmod == 0): aspmodView = ""]

[h: kapmodView = kapmod]
[h,if(kapmod > 0): kapmodView = " +" + kapmod]
[h,if(kapmod == 0): kapmodView = ""]

[h,if(MaxAsP > 0): regAEactive = "checked='checked'"; regAEactive = ""]

[h,if(hasTrait("MagieSF", "Meisterliche Regeneration") != 0), Code:
	{
		[aeRegWactive = ""]
		[aeRegMRactive = "checked='checked'"]
		[aeRegMRwert = 4]
	};
	{
		[aeRegWactive = "checked='checked'"]
		[aeRegMRactive = ""]
		[aeRegMRwert = 0]
	}
]

[h,if(MaxKaP > 0): regKEactive = "checked='checked'"; regKEactive = ""]

[h,if(hasTrait("KarmaleSF", "Stabile Regeneration") != 0), Code:
	{
		[keRegWactive = ""]
		[keRegSRactive = "checked='checked'"]
		[keRegSRwert = 4]
	};
	{
		[keRegWactive = "checked='checked'"]
		[keRegSRactive = ""]
		[keRegSRwert = 0]
	}
]

[h: actionLink = macroLinkText("regenerationProcess@this", "")]
[dialog5("regeneration", "width=548; height=794; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Energie-Regeneration</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Regeneration")]
				<table style='border-spacing: 0px; margin: 8px 0px 2px 0px; font-size: 1pt;' width='432'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				
				<div width='432' style='text-align: left; margin-left: 40px'>
					<table style='border-spacing: 0px;'>
						<tr>
							<td valign='middle' width='17'>
								<input type='checkbox' name='regLE' value='1' checked='checked'>
							</td>
							<td style='font-weight: bold;'>
								Lebensenergie
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								+
							</td>
							<td>
								<input type='text' name='leBonus' size='2' maxlength='2' value=''>
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								-
							</td>
							<td>
								<input type='text' name='leMalus' size='2' maxlength='2' value=''>
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								[r: lepmodView]
							</td>
						</tr>
					</table>
					<table style='border-spacing: 0px; margin-top: 0px; margin-left: 18px'>
						<tr>
							<td>
								<input type='radio' name='regLEtyp' value='1d6' checked='checked'/> 
							</td>
							<td>
								Auswürfeln (1W6)
							</td>
							<td width=200>&nbsp;</td>
						</tr>
						<tr>
							<td>
								<input type='radio' name='regLEtyp' value='1000'/>
							</td>
							<td colspan=2>
								Alle LeP regenerieren
							</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' name='krankVergiftet' value='1' [r: StatusKrankVergiftet]>
							</td>
							<td colspan=2>
								Held ist erkrankt / vergiftet (keine LeP)
							</td>
						</tr>
					</table>
				</div>

				[r,if(MaxAsP > 0),Code:{

				<table style='border-spacing: 0px; margin: 8px 0px 2px 0px; font-size: 1pt;' width='432'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>

				<div width='432' style='text-align: left; margin-left: 40px'>
				
					<table style='border-spacing: 0px;'>
						<tr>
							<td valign='middle' width='17'>
								<input type='checkbox' name='regAE' value='1' [r: regAEactive]>
							</td>
							<td style='font-weight: bold;'>
								Astralenergie
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								+
							</td>
							<td>
								<input type='text' name='aeBonus' size='2' maxlength='2' value=''>
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								-
							</td>
							<td>
								<input type='text' name='aeMalus' size='2' maxlength='2' value=''>
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								[r: aspmodView]
							</td>
						</tr>
					</table>
					<table style='border-spacing: 0px; margin-left: 18px'>
						<tr>
							<td>
								<input type='radio' name='regAEtyp' value='1d6' [r: aeRegWactive]>
							</td>
							<td>
								Auswürfeln (1W6)
							</td>
							<td width='20'>
								&nbsp;
							</td>
						</tr>
						[r,if(aeRegMRwert != 0),Code:{
						<tr>
							<td>
								<input type='radio' name='regAEtyp' value='4' [r: aeRegMRactive]>
							</td>
							<td>
								Meisterliche Regeneration ([r: aeRegMRwert])
							</td>
						</tr>
						};{}]

						<tr>
							<td>
								<input type='radio' name='regAEtyp' value='1000'>
							</td>
							<td>
								Alle AsP regenerieren
							</td>
						</tr>
					</table>
					<table style='border-spacing: 0px; margin-left: 18px'>
						[r,macro("probeEisen@this"): currentToken()]
					</table>
				</div>};{}]

				[r,if(MaxKaP > 0),Code:{

				<table style='border-spacing: 0px; margin: 6px 0px 2px 0px; font-size: 1pt;' width='432'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>


				<div width='432' style='text-align: left; margin-left: 40px'>
				
					<table style='border-spacing: 0px;'>
						<tr>
							<td valign='middle' width='17'>
								<input type='checkbox' name='regKE' value='1' [r: regKEactive]>
							</td>
							<td style='font-weight: bold;'>
								Karmaenergie
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								+
							</td>
							<td>
								<input type='text' name='keBonus' size='2' maxlength='2' value=''>
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								-
							</td>
							<td>
								<input type='text' name='keMalus' size='2' maxlength='2' value=''>
							</td>
							<td width='10'>
								&nbsp;
							</td>
							<td>
								[r: kapmodView]
							</td>
						</tr>
					</table>
					<table style='border-spacing: 0px; margin-left:18px;'>
						<tr>
							<td>
								<input type='radio' name='regKEtyp' value='1d6' [r: KERegWactive]>
							</td>
							<td>
								Auswürfeln (1W6)
							</td>
						</tr>
						[r,if(keRegSRwert != 0),Code:{
						<tr>
							<td>
								<input type='radio' name='regKEtyp' value='4' [r: keRegSRactive]>
							</td>
							<td>
								Stabile Regeneration ([r: keRegSRwert])
							</td>
						</tr>
						};{}]
						<tr>
							<td>
								<input type='radio' name='regKEtyp' value='1000'>
							</td>
							<td>
								Alle KaP regenerieren
							</td>
						</tr>
					</table>
				</div>};{}]

				<table style='border-spacing: 0px; margin: 6px 0px 2px 0px; font-size: 1pt;' width='432'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>

				<div width='432' style='text-align: left; margin-left: 58px'>
					<table style='border-spacing: 0px; margin-top: 0px;'>
						<tr>
							<td style='font-weight: bold;' colspan=2>
								Generell
							</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' name='Lagerplatz' value='-1'>
							</td>
							<td>
								<span title='Misslungene Probe auf Wildnisleben (Lagersuche)'>Schlechter Lagerplatz (-1)</span>
							</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' name='Nachtruhe' value='-1'>
							</td>
							<td>
								<span title='z.B. Wache halten / Ruhestoerung'>Unterbrechung der Nachtruhe (-1)</span>
							</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' name='Nachtruhe' value='-2'>
							</td>
							<td>
								<span title='z.B. Hundswache, naechtlicher Ueberfall'>Längere Unterbrechung der Nachtruhe (-2)</span>
							</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' name='Unterkunft' value='1'>
							</td>	
							<td>
								<span title='z.B. Einzelzimmer'>Gute Unterkunft (+1)</span>
							</td>
						</tr>
						<tr>
							<td>
								<input type='checkbox' name='Umgebung' value='1'>
							</td>	
							<td>
								<span title='feucht, kalt'>Schlechte Umgebung (Reg. halbiert)</span>
							</td>
						</tr>
						<tr>	
							<td>
								<input type='checkbox' name='UmgebungRegKomplett' value='1'>
							</td>	
							<td>
								<span title='extrem schlechtes Wetter'>Furchtbare Umgebung (keine Reg.)</span>
							</td>
						</tr>
					</table>
				</div>

				<table style='border-spacing: 0px; margin: 6px 0px 2px 0px; font-size: 1pt;' width='432'>
					<tr>
						<td style='border-top: 1px solid #7b5547;'>
							&nbsp;
						</td>
					</tr>
				</table>
				
				<table style='border-spacing: 0px; padding: 0px; margin: 11px auto 11px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 53)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				
				[r,macro("probeChat@this"): currentToken()]
				
				<input type="hidden" name="lepmod" value="[r: lepmod]"/>
				<input type="hidden" name="aspmod" value="[r: aspmod]"/>
				<input type="hidden" name="kapmod" value="[r: kapmod]"/>
			</form>
		</div>
	</body>
</html>
}]