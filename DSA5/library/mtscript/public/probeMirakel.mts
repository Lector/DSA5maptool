[h: switchToken(arg(0))]
[h: skill = arg(1)]

<!-- Falls der Held KaP hat gehen wir davon aus dass er das Talent Mirakeln kann und
bieten eine Checkbox hierfuer an. KaP werden (noch) NICHT automatisch abgezogen. -->
[h: gefallen = wohlgefallen(currentToken(), skill)]
[if(KaP >= 4 && gefallen > 0), Code:
{
	<tr>
		<td>
			<input type="checkbox" name="MirakelTalent[r:skill]" value="2"/>
		</td>
		<td colspan=2>
			Mirakel (+2 FW für 4 KaP)
		</td>
	</tr>
};
{
	<input type="hidden" name="MirakelTalent[r:skill]" value="0"/>
}]