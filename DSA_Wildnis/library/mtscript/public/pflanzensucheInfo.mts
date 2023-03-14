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
			[r,macro("probeInfo@lib:com.github.naxos84.Macros"): json.append(currentToken(), "Pflanzenkunde")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r,macro("probeBelastung@lib:com.github.naxos84.Macros"): "Pflanzenkunde"]
					[r,macro("probeParalyse@lib:com.github.naxos84.Macros"): json.append("Natur", "Pflanzenkunde")]
					[r,macro("probeMirakel@lib:com.github.naxos84.Macros"): "Pflanzenkunde"]
					[r,macro("probeGottgefaellig@lib:com.github.naxos84.Macros"): "Pflanzenkunde"]
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
			[r,macro("probeInfo@lib:com.github.naxos84.Macros"): json.append(currentToken(), "Sinnesschärfe")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r,macro("probeBelastung@lib:com.github.naxos84.Macros"): "Sinnesschärfe"]
					[r,macro("probeParalyse@lib:com.github.naxos84.Macros"): json.append("Koerper", "Sinnesschärfe")]
					[r,macro("probeMirakel@lib:com.github.naxos84.Macros"): "Sinnesschärfe"]
					[r,macro("probeGottgefaellig@lib:com.github.naxos84.Macros"): "Sinnesschärfe"]
				</tr>
			</table>
		</td>
	</tr>
</table>

<hr/>