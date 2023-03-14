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

[h: num = macro.args]

[h: newList = '[]']
[h,foreach(item, Inventar,""), Code:
	{
		[if(json.get(item, "behaelter") != num): newList = json.append(newList, item)]
	}
]
[h: Inventar = newList]
[h,macro("inventar@Lib:macros2"): ""]