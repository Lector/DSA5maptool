[h: switchToken(arg(0))]

<!-- Da wir im Falle von Entrueckung Erschwerleichternisse geben je nachdem
ob das Talent der Gottheit gefaellt machen wir hier einen Haken
in dem wir letztes eintragen koennen -->

[h: skill = arg(1)]
[h: gefallen = wohlgefallen(currentToken(), skill)]
[h: checked = ""]
[h,if(gefallen == 1): checked = "checked='checked'"]

[if(Trance == 2 || Entrueckung > 0), Code:
	{
		<tr>
			<td>
				<input type="checkbox" name="wohlgefallen[r:skill]" value="1" [r:checked]/>
			</td>
			<td colspan=2>
				Der Gottheit wohlgefällig
			</td>
		</tr>
	};
	{
		<input type="hidden" name="wohlgefallen[r:skill]" value="0"/>
	}
]