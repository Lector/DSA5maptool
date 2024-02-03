[h: switchToken(arg(0))]
[h: tname = arg(1)]

<!-- Hoeherer sozialer Stand gibt bei bestimmten Gesellschaftstalente +1 oder -1 -->
[h: stand = "0"]
[h,if(tname == "Bekehren & Überzeugen"): stand = "+1"]
[h,if(tname == "Betören"): stand = "+1"]
[h,if(tname == "Einschüchtern"): stand = "+1"]
[h,if(tname == "Etikette"): stand = "+1"]
[h,if(tname == "Überreden"): stand = "+1"]
[h,if(tname == "Gassenwissen"): stand = "-1"]
[h,if(tname == "Handel"): stand = "-1"]
[if(stand != "0"), Code:
{
	<!-- Bei gewissen Vorteilen wird der Haken vorbelegt -->
	<!-- TODO: Gildenmagier werden nicht erkannt weil noch ihr Spezialzauber im Namen der SF steht... -->
	[h: checked = ""]
	[h: trait =
		hasTrait("Vorteile", "Adel", 1, currentToken()) +
		hasTrait("Vorteile", "Drachentöter", 1, currentToken()) + 
		hasTrait("Vorteile", "Basiliskentöter", 1, currentToken()) +
		hasTrait("Vorteile", "Geweihter", 1, currentToken())
	]
	[h,if(trait > 0): checked = "checked"]
	[h,if(trait == 0), foreach(sf, MagieSF, ""),Code:{
		[h: sfName = json.get(sf, "Name")]
		[h,if(startsWith(sfName, "Tradition (Gildenmagier)")): checked = "checked"]
	}]
	
	<tr>
		<td>
			<input type="checkbox" name="stand" value="[r:stand]" [r: checked]/>
		</td>
		<td colspan=2>
			Höherer sozialer Stand ([r: strformat("%+d", stand)])
		</td>
	</tr>
};
{
	<input type="hidden" name="stand" value="0"/>
}]