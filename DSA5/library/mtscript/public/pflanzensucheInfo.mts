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
			[r,macro("probeInfo@this"): json.append(currentToken(), "Pflanzenkunde")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r,macro("probeBelastung@this"): "Pflanzenkunde"]
					[r,macro("probeParalyse@this"): json.append("Natur", "Pflanzenkunde")]
					[r,macro("probeMirakel@this"): "Pflanzenkunde"]
					[r,macro("probeGottgefaellig@this"): "Pflanzenkunde"]
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
			[r,macro("probeInfo@this"): json.append(currentToken(), "Sinnesschärfe")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r,macro("probeBelastung@this"): "Sinnesschärfe"]
					[r,macro("probeParalyse@this"): json.append("Koerper", "Sinnesschärfe")]
					[r,macro("probeMirakel@this"): "Sinnesschärfe"]
					[r,macro("probeGottgefaellig@this"): "Sinnesschärfe"]
				</tr>
			</table>
		</td>
	</tr>
</table>

<hr/>