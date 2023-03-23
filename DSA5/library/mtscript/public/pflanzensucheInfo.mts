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
			[r,macro("probeInfo@lib:com.github.lector.dsa5maptool"): json.append(currentToken(), "Pflanzenkunde")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r,macro("probeBelastung@lib:com.github.lector.dsa5maptool"): "Pflanzenkunde"]
					[r,macro("probeParalyse@lib:com.github.lector.dsa5maptool"): json.append("Natur", "Pflanzenkunde")]
					[r,macro("probeMirakel@lib:com.github.lector.dsa5maptool"): "Pflanzenkunde"]
					[r,macro("probeGottgefaellig@lib:com.github.lector.dsa5maptool"): "Pflanzenkunde"]
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
			[r,macro("probeInfo@lib:com.github.lector.dsa5maptool"): json.append(currentToken(), "Sinnesschärfe")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r,macro("probeBelastung@lib:com.github.lector.dsa5maptool"): "Sinnesschärfe"]
					[r,macro("probeParalyse@lib:com.github.lector.dsa5maptool"): json.append("Koerper", "Sinnesschärfe")]
					[r,macro("probeMirakel@lib:com.github.lector.dsa5maptool"): "Sinnesschärfe"]
					[r,macro("probeGottgefaellig@lib:com.github.lector.dsa5maptool"): "Sinnesschärfe"]
				</tr>
			</table>
		</td>
	</tr>
</table>

<hr/>