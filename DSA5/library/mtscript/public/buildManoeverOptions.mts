[h: manoever = arg(0)]
[h: techniken = arg(1)]
[h,if(json.length(macro.args) > 2): target = arg(2); target = ""]

[r,foreach(m, manoever, ""),Code:
{
	[h: manoeverTechniques = json.get(m, "Techniken")]
	[h: possibleTechniques = json.intersection(manoeverTechniques, techniken)]

	[h: statsRequired = 1]
	[h: requiredStats = json.get(m, "RequiredOpponentStatus")]
	[h,if(requiredStats != "" && target != ""),foreach(stat, requiredStats),Code:{
		[statsRequired = min(statsRequired, getState(stat, target))]
	}]

	[if(json.length(possibleTechniques) > 0 || json.contains(techniken, "") == 1),
	if(statsRequired == 1),Code:
	{
		<option value="[r: encode(m)]">[r: json.get(m, 'Name')]</option>
	};{}]
}]