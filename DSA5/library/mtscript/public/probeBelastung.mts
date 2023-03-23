[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: tname = arg(0)]

<!-- Die aktuelle Stufe der Belastung bieten wir als Erschwernis an
und machen den Haken falls es beim Talent ueblicherweise relevant ist -->
[if(Belastung > 0), Code:
{
	<!-- Der Haken fuer die Belastungserschwernis wird
	nur bei bestimmten Talenten angehakt -->
	[h: talenteMitBelastung = getBelastungsTalente()]
	<tr>
		<td>
			<input type="checkbox" name="Belastung[r:tname]" value="1"
			[r,if(listContains(talenteMitBelastung, tname)):"checked='checked'"]/>
			<input type="hidden" name="BelastungAuswahl[r:tname]" value="1"/>
		</td>
		<td colspan=2>
			Belastung (-[r: Belastung])
		</td>
	</tr>
};
{
	<input type="hidden" name="Belastung[r:tname]" value = "0"/>
}]