[h: tokenId = arg(0)]
[h: barIdentifier = arg(1)]

[h: switchToken(tokenId)]

[h,switch(barIdentifier), Code:
	case "le": {
        [h: title = "Lebenspunkte"]
        [h: maxValue = MaxLeP]
        [h: currentValue = LeP]
        [h: imageName = "barLife.png"]
        [h: increaseAction = "lePlus"]
        [h: decreaseAction = "leMinus"]
		};
	case "ae": {
        [h: title = "Astralpunkte"]
        [h: maxValue = MaxAsP]
        [h: currentValue = AsP]
        [h: imageName = "barMagic.png"]
        [h: increaseAction = "aePlus"]
        [h: decreaseAction = "aeMinus"]
		};
	case "ke": {
        [h: title = "Karmalpunkte"]
        [h: maxValue = MaxKaP]
        [h: currentValue = KaP]
        [h: imageName = "barKarma.png"]
        [h: increaseAction = "kePlus"]
        [h: decreaseAction = "keMinus"]

		};
]

[h: plus = strformat("<image src='%s' title='%{title} erhöhen' border='0'/>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/plus.png"))]
[h: minus = strformat("<image src='%s' title='%{title} senken' border='0'/>", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/forms/minus.png"))]

<div class="energyBar" title="[r: title]">
    [h,if(maxValue <=0): barMaxLeP = 1; barMaxLeP = maxValue]
    [h: barLE = round(1.5 * (currentValue / (barMaxLeP / 100)))]
    [h: imageBarEmpty = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/bar.png")]
    [h: imageBar = data.getStaticData("com.github.lector.dsa5maptool", "/public/images/mainTheme/" + imageName)]

    <!-- These inline styles are neede cause they are dynamic -->
    <div style="background-image: url('[r:imageBarEmpty]'); width: 150px; height: 33px; overflow: hidden; position: relative">
        <div style="background-image: url('[r: imageBar]'); height: 33px; width: [r: barLE];"></div>
        <div class="energyBarText">[r: currentValue]/[r: maxValue]</div>
    </div>
    <div class="energyBarModifiers">
        [r: macroLink(plus, "changeEnergie@this", "", increaseAction)]
        [r: macroLink(minus, "changeEnergie@this", "", decreaseAction)]
    </div>
</div>

