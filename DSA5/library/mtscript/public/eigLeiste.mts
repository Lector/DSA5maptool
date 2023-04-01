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
<table style='border-spacing: 0px; margin-left: 22px; margin-right: 22px;'>
	<tr>
		<td width='57'>
			[h: aktMU = getMU()]
			[h,if(aktMU < MU): className = "attribute-decreased"; className = "attribute-default"]
			[h,if(aktMU > MU): className = "attribute-increased"]
			<span>
				<a href='[r:macroLinkText("probeEig@this", "", "MU")]' class='attribute-default'>MU: <span class='[r: className]' title='Probe auf "Mut" ablegen'>[r: aktMU]</span>
				</a>
			</span>
			
		</td>
		<td width='57'>
			[h: aktKL = getKL()]
			[h,if(aktKL < KL): className = "attribute-decreased"; className = "attribute-default"]
			[h,if(aktKL > KL): className = "attribute-increased"]
			<span>
				<a href='[r:macroLinkText("probeEig@this", "", "KL")]' class='attribute-default'>KL: <span class='[r: className]' title='Probe auf "Klugheit" ablegen'>[r: aktKL]</span>
				</a>
			</span>
		</td>
		<td width='57'>
			[h: aktIN = getIN()]
			[h,if(aktIN < IN): className = "attribute-decreased"; className = "attribute-default"]
			[h,if(aktIN > IN): className = "attribute-increased"]
			<span>
				<a href='[r:macroLinkText("probeEig@this", "", "IN")]' class='attribute-default'>KL: <span class='[r: className]' title='Probe auf "Intuition" ablegen'>[r: aktKL]</span>
				</a>
			</span>
		</td>
		<td width='57'>
			[h: aktCH = getCH()]
			[h,if(aktCH < CH): className = "attribute-decreased"; className = "attribute-default"]
			[h,if(aktCH > CH): className = "attribute-increased"]
			<span>
				<a href='[r:macroLinkText("probeEig@this", "", "CH")]' class='attribute-default'>CH: <span class='[r: className]' title='Probe auf "Charisma" ablegen'>[r: aktKL]</span>
				</a>
			</span>
		</td>
		<td width='57'>
			[h: aktFF = getFF()]
			[h,if(aktFF < FF): className = "attribute-decreased"; className = "attribute-default"]
			[h,if(aktFF > FF): className = "attribute-increased"]
			<span>
				<a href='[r:macroLinkText("probeEig@this", "", "FF")]' class='attribute-default'>FF: <span class='[r: className]' title='Probe auf "Fingerfertigkeit" ablegen'>[r: aktKL]</span>
				</a>
			</span>
		</td>
		<td width='57'>
			[h: aktGE = getGE()]
			[h,if(aktGE < GE): className = "attribute-decreased"; className = "attribute-default"]
			[h,if(aktGE > GE): className = "attribute-increased"]
			<span>
				<a href='[r:macroLinkText("probeEig@this", "", "GE")]' class='attribute-default'>GE: <span class='[r: className]' title='Probe auf "Gewandheit" ablegen'>[r: aktKL]</span>
				</a>
			</span>
		</td>
		<td width='57'>
			[h: aktKO = getKO()]
			[h,if(aktKO < KO): className = "attribute-decreased"; className = "attribute-default"]
			[h,if(aktKO > KO): className = "attribute-increased"]
			<span>
				<a href='[r:macroLinkText("probeEig@this", "", "KO")]' class='attribute-default'>KO: <span class='[r: className]' title='Probe auf "Konstitution" ablegen'>[r: aktKL]</span>
				</a>
			</span>
		<td width='57'>
			[h: aktKK = getKK()]
			[h,if(aktKK < KK): className = "attribute-decreased"; className = "attribute-default"]
			[h,if(aktKK > KK): className = "attribute-increased"]
			<span>
				<a href='[r:macroLinkText("probeEig@this", "", "KK")]' class='attribute-default'>KK: <span class='[r: className]' title='Probe auf "Körperkraft" ablegen'>[r: aktKL]</span>
				</a>
			</span>
		</td>
	</tr>
</table>