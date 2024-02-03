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
			[r: probeInfo(currentToken(), "Pflanzenkunde")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r: probeBelastung(currentToken(), "Pflanzenkunde")]
					[r: probeParalyse(currentToken(), "Natur", "Pflanzenkunde")]
					[r: probeMirakel(currentToken(), "Pflanzenkunde")]
					[r: probeGottgefaellig(currentToken(), "Pflanzenkunde")]
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
			[r: probeInfo(currentToken(), "Sinnesschärfe")]
		</td>
		
		<td valign=top style="padding-left: 20; white-space: nowrap;">
			<table>
				<tr>
					[r: probeBelastung(currentToken(), "Sinnesschärfe")]
					[r: probeParalyse(currentToken(), "Koerper", "Sinnesschärfe")]
					[r: probeMirakel(currentToken(), "Sinnesschärfe")]
					[r: probeGottgefaellig(currentToken(), "Sinnesschärfe")]
				</tr>
			</table>
		</td>
	</tr>
</table>

<hr/>