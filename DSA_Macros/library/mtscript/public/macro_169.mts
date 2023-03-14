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

<td valign=top>
	<div class="label">
		Zone
	</div>
</td>
<td valign='top'>
	<select size="1" name="zone">
		<option selected="selected" value="Zufall">Ungezielt</option>
		[h: zonen = trefferzonen(arg(0))]
		[r,foreach(zone, zonen, ""),Code:
		{
			[h: mod = getZoneMod(zone, arg(1), arg(2))]
			<option value='[r: zone]'>[r: zone] ([r: mod])</option>
		}]
	</select>
</td>