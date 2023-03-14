[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[switchToken(selectID)]
	};{}
]

<table style='margin: 0px auto 0px auto;'>
	<tr>
		<td valign=top>
			<div class="label">
				Pflanzenkunde
			</div>
		</td>
		<td valign=top style="white-space: nowrap;">
			[r,macro("probeInfo@Lib:macros"): json.append(currentToken(), "Pflanzenkunde")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r,macro("probeBelastung@Lib:macros"): "Pflanzenkunde"]
					[r,macro("probeParalyse@Lib:macros"): json.append("Natur", "Pflanzenkunde")]
					[r,macro("probeMirakel@Lib:macros"): "Pflanzenkunde"]
					[r,macro("probeGottgefaellig@Lib:macros"): "Pflanzenkunde"]
				</tr>
			</table>
		</td>
	</tr>
</table>

<hr/>

<table style='margin: 0px auto 0px auto;'>
	<tr>
		<td valign=top>
			<div class="label">
				Sinnesschärfe<br>(Suche)
			</div>
		</td>
		<td valign=top style="white-space: nowrap;">
			[r,macro("probeInfo@Lib:macros"): json.append(currentToken(), "Sinnesschärfe")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r,macro("probeBelastung@Lib:macros"): "Sinnesschärfe"]
					[r,macro("probeParalyse@Lib:macros"): json.append("Koerper", "Sinnesschärfe")]
					[r,macro("probeMirakel@Lib:macros"): "Sinnesschärfe"]
					[r,macro("probeGottgefaellig@Lib:macros"): "Sinnesschärfe"]
				</tr>
			</table>
		</td>
	</tr>
</table>

<hr/>