[h: switchToken(arg(0))]
[h: gruppe = arg(1)]
[h: skill = arg(2)]
<!-- Falls Bewegung oder Sprache wichtig sind wird die Paralyse-Stufe als Erschwernis gegeben.
Dies wird vorausgewaehlt falls es ein Koerper oder Gesellschaftstalent ist.-->
[if(Paralyse > 0), Code:
{
	<tr>
		<td>
			[h,if(gruppe == "Koerper" || gruppe == "Gesellschaft" || gruppe == "Natur"): check = "checked='checked'"; check = ""]
			<input type="checkbox" name="bewegungsprache[r:skill]" value="1" [r:check]/>
		</td>
		<td colspan=2>
			Bewegung oder Sprache betroffen? (-[r: Paralyse] wegen Paralyse)
		</td>
	</tr>
};
{
	<input type="hidden" name="bewegungsprache[r:skill]" value = "0"/>
}]