[h: tok = arg(0)]
[h: switchToken(tok)]

[h: imWasser = -2]
[h: unterWasser = -6]
[h,if(hasTrait("KampfSF", "Kampf im Wasser", 1, tok) != 0), Code:
{
	[h: imWasser = 0]
	[h: unterWasser = -4]
};{}]
[h,if(hasTrait("KampfSF", "Unterwasserkampf", 1, tok) != 0), Code:
{
	[h: imWasser = 0]
	[h: unterWasser = 0]
};{}]
[h,if(hasTrait("KampfSF", "Prem-Stil", 1, tok) != 0), Code:
{
	[h: imWasser = min(0, imWasser + 4)]
	[h: unterWasser = min(0, unterWasser + 4)]
}]

<tr>
	<td>
		<input type='radio' name='wasser' value='0' checked='checked'>
	</td>
	<td>
		Kein Wasser (0)
	</td>
</tr>
<tr>
	<td>
		<input type='radio' name='wasser' value='[r: imWasser]'>
	</td>
	<td>
		Hüfthohes Wasser ([r: imWasser])
	</td>
</tr>
<tr>
	<td>
		<input type='radio' name='wasser' value='[r: unterWasser]'>
	</td>
	<td>
		Unter Wasser ([r: unterWasser])
	</td>
</tr>