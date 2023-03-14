[h: tname = arg(0)]

<!-- Hoeherer sozialer Stand gibt bei bestimmten Gesellschaftstalente +1 oder -1
Der Haken muss aktuell immer manuell gesetzt werden.
Evtl. koennten wir ihn bei Adel/Drachentoeter/Basiliskentoeter auch automatisch eintragen.-->
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
	<tr>
		<td>
			<input type="checkbox" name="stand" value="[r:stand]"/>
		</td>
		<td colspan=2>
			H&ouml;herer sozialer Stand ([r:stand])
		</td>
	</tr>
};
{
	<input type="hidden" name="stand" value="0"/>
}]