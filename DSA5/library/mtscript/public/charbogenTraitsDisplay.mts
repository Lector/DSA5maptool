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

[h: imageVorteile = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/schriftVorteile.png")]
[h: imageNachteile = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/schriftNachteile.png")]
[h: imageAllgemeineSF = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/schriftAllgemeineSF.png")]

<div class="panel" style="display: flex;flex-direction: column;align-items:center; justify-content:center;">
	<div class="heading">
		<image src=[r: imageVorteile]></image>
	</div>
	<div>
		[r,macro("charbogenTraits@this"): Vorteile]
	</div>
	<div class="heading">
		<image src=[r: imageNachteile]></image>
	</div>
	<div>
		[r,macro("charbogenTraits@this"): Nachteile]
	</div>
	<div class="heading">
		<image src=[r: imageAllgemeineSF]></image>
	</div>
	<div>
		[r,macro("charbogenTraits@this"): AllgemeineSF]
	</div>
</div>