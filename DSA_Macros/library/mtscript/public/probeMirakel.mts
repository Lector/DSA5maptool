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

[h: skill = arg(0)]

<!-- Falls der Held KaP hat gehen wir davon aus dass er das Talent Mirakeln kann und
bieten eine Checkbox hierfuer an. KaP werden (noch) NICHT automatisch abgezogen. -->
[if(MaxKaP > 0), Code:
{
	<tr>
		<td>
			<input type="checkbox" name="MirakelTalent[r:skill]" value="2"/>
		</td>
		<td colspan=2>
			Mirakel (+2 FW f&uuml;r 4 KaP)
		</td>
	</tr>
};
{
	<input type="hidden" name="MirakelTalent[r:skill]" value="0"/>
}]