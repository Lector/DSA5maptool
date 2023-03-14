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

[h: preselected = arg(0)]

<select name='zone' size=1>
	[h: zonen = trefferzonen(Trefferzonenmodell)]
	
	[h,if(getLibProperty("OptWunden", "this") != 0),Code:
	{
		[zufallChecked = "selected='selected'"]
		[gesamtChecked = ""]
	};
	{
		[zufallChecked = ""]
		[gesamtChecked = "selected='selected'"]
	}]
	[h,if(preselected != ""),Code:{
		[if(json.contains(zonen, preselected) == 1),Code:
		{
			[zufallChecked = ""]
			[gesamtChecked = ""]
		}]
	}]
	<option value='zufall' [r:zufallChecked]>
		Zuf&auml;llige Zone
	</option>
	<option value='gesamt' [r: gesamtChecked]>
		Keine Zone
	</option>
	
	[r,foreach(zone, zonen, ""),Code:
	{
	[h,if(zone == preselected): checked = "selected='selected'"; checked = ""]
	<option value='[r: zone]' [r:checked]>
		[r: zone]
	</option>
	}]
</select>