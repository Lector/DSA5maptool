[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos84.macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]
[h: closeDialog("inventarContainerEdit")]

[h,if(json.get(uebergabe, "cName") == ""): cName = "Beh&auml;lter"; cName = json.get(uebergabe, "cName")]
[h: InventarMisc = json.set(InventarMisc, strformat("behaelter%s", json.get(uebergabe, "numContainer")), cName)]
[h,macro("inventar@this"): ""]