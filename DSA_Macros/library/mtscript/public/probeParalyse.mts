[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: gruppe = arg(0)]
[h: skill = arg(1)]
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