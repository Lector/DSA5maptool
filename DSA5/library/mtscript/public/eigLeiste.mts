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

[h: aktMU = getMU()]
[h,if(aktMU < MU): className = "attribute-decreased"; className = "attribute-default"]
[h,if(aktMU > MU): className = "attribute-increased"]
[h: aktKL = getKL()]
[h,if(aktKL < KL): className = "attribute-decreased"; className = "attribute-default"]
[h,if(aktKL > KL): className = "attribute-increased"]
[h: aktIN = getIN()]
[h,if(aktIN < IN): className = "attribute-decreased"; className = "attribute-default"]
[h,if(aktIN > IN): className = "attribute-increased"]
[h: aktCH = getCH()]
[h,if(aktCH < CH): className = "attribute-decreased"; className = "attribute-default"]
[h,if(aktCH > CH): className = "attribute-increased"]
[h: aktFF = getFF()]
[h,if(aktFF < FF): className = "attribute-decreased"; className = "attribute-default"]
[h,if(aktFF > FF): className = "attribute-increased"]
[h: aktGE = getGE()]
[h,if(aktGE < GE): className = "attribute-decreased"; className = "attribute-default"]
[h,if(aktGE > GE): className = "attribute-increased"]
[h: aktKO = getKO()]
[h,if(aktKO < KO): className = "attribute-decreased"; className = "attribute-default"]
[h,if(aktKO > KO): className = "attribute-increased"]
[h: aktKK = getKK()]
[h,if(aktKK < KK): className = "attribute-decreased"; className = "attribute-default"]
[h,if(aktKK > KK): className = "attribute-increased"]

<div style="display:flex;justify-content:center;align-items:center;">
	<a href='[r:macroLinkText("probeEig@this", "", "MU")]' class='attribute-default' title='Probe auf "Mut" ablegen'>MU: <span class='[r: className]'>[r: aktMU]</span>
	</a>
	<a href='[r:macroLinkText("probeEig@this", "", "KL")]' class='attribute-default' title='Probe auf "Klugheit" ablegen'>KL: <span class='[r: className]'>[r: aktKL]</span>
	</a>
	<a href='[r:macroLinkText("probeEig@this", "", "IN")]' class='attribute-default' title='Probe auf "Intuition" ablegen'>KL: <span class='[r: className]'>[r: aktKL]</span>
	</a>
	<a href='[r:macroLinkText("probeEig@this", "", "CH")]' class='attribute-default' title='Probe auf "Charisma" ablegen'>CH: <span class='[r: className]'>[r: aktKL]</span>
	</a>
	<a href='[r:macroLinkText("probeEig@this", "", "FF")]' class='attribute-default' title='Probe auf "Fingerfertigkeit" ablegen'>FF: <span class='[r: className]'>[r: aktKL]</span>
	</a>
	<a href='[r:macroLinkText("probeEig@this", "", "GE")]' class='attribute-default' title='Probe auf "Gewandheit" ablegen'>GE: <span class='[r: className]'>[r: aktKL]</span>
	</a>
	<a href='[r:macroLinkText("probeEig@this", "", "KO")]' class='attribute-default' title='Probe auf "Konstitution" ablegen'>KO: <span class='[r: className]'>[r: aktKL]</span>
	</a>
	<a href='[r:macroLinkText("probeEig@this", "", "KK")]' class='attribute-default' title='Probe auf "Körperkraft" ablegen'>KK: <span class='[r: className]'>[r: aktKL]</span>
	</a>
</div>
<!-- <table style='border-spacing: 0px; margin-left: 22px; margin-right: 22px;'>
	<tr>
		<td width='57'>
			
			
			
		</td>
		<td width='57'>
			

			
		</td>
		<td width='57'>



		</td>
		<td width='57'>

			

		</td>
		<td width='57'>

			

		</td>
		<td width='57'>

			

		</td>
		<td width='57'>

			

		<td width='57'>

			

		</td>
	</tr>
</table> -->