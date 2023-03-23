[h: uebergabe = macro.args]
[h: closeDialog("gameOptions")]

[h,if(json.get(uebergabe, "fNSCAction") == ""): setLibProperty("OptHideNSCAction", 0); setLibProperty("OptHideNSCAction", 1)]

[h,if(json.get(uebergabe, "fWunden") == "1"): setLibProperty("OptWunden", 1); setLibProperty("OptWunden", 0)]
[h,if(json.get(uebergabe, "fRestrictMovement") == "1"): setLibProperty("OptRestrictMovement", 1); setLibProperty("OptRestrictMovement", 0)]
[h,if(json.get(uebergabe, "fKeepFOW") == "1"): setLibProperty("RestoreFogOfWarOnMove", 0); setLibProperty("RestoreFogOfWarOnMove", 1)]
[h,if(json.get(uebergabe, "fSpieltisch") == "1"): setLibProperty("WildnisSpieltisch", 1); setLibProperty("WildnisSpieltisch", 0)]

[h: ausgabe = strformat("
<table style='border-spacing: 0px; margin-top: 3px; font-weight:bold'>
	<tr>
		<td style='text-align:center; padding: 0px;' valign='middle' width='40'>
			<img src='%s'>
		</td>
		<td width='25'>
			&nbsp;
		</td>
		<td valign='middle'>
			Die aktuellen Spieleinstellungen wurden vom Spielleiter geändert.
		</td>
	</tr>
</table>",
tableImage("chat", 79))]

[h: ausgabe = border("Spieleinstellungen", ausgabe)]

[h: broadcast(ausgabe)]