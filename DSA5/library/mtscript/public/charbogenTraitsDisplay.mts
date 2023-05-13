[h: switchToken(arg(0))]

[h: imageVorteile = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/schriftVorteile.png")]
[h: imageNachteile = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/schriftNachteile.png")]
[h: imageAllgemeineSF = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/schriftAllgemeineSF.png")]

<div class="panel">
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