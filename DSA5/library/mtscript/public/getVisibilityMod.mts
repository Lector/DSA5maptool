[h: target = arg(0)]
[h: viewer = arg(1)]

<!-- Here we get the width/height of the target in pixels, according to the map settings -->
[h: map = json.indent(getInfo("map"), 2)]
[h: visiontype = json.get(map, "vision type")]
[h: grid = json.get(map, "grid")]
[h: cellWidth = json.get(grid, "cell width")]
[h: cellHeight = json.get(grid, "cell height")]
[h: targetSize = scale(getSize(target))]
[h: width = round(cellWidth * targetSize)]
[h: height = round(cellHeight * targetSize)]

<!-- Without vision, we cannot determine any sight hindrance and abort the process. -->
[h,if(visiontype == "OFF"): return(0, 0)]

<!--
Here we check which points are visible from the observer's point of view.
For this, we temporarily set the vision to magical vision so that only walls and obstacles restrict vision.
-->
[h: sight = hasSight(viewer)]
[h: sightType = getSightType(viewer)]
[h: setSightType("Magiesinn", viewer)]
[h: setHasSight(true, viewer)]
[h: visiblePoints = canSeeToken(target, viewer)]
[h: setHasSight(sight, viewer)]
[h: setSightType(sightType, viewer)]

<!-- Here we iterate through the visible sample points and check the highest Illumination of those visible points -->
[h: maxLumens = -1000]
[h,foreach(point, visiblePoints),Code:
{
	[h: x = getTokenX(1, target)]
	[h: y = getTokenY(1, target)]
	[h,switch(point),Code:
		case "CENTER":
		{
			[x = x + round(width / 2.0)]
			[y = y + round(height / 2.0)]
		};
		case "TOP_LEFT":
		{
		};
		case "TOP_RIGHT":
		{
			[x = x + width]
		};
		case "BOTTOM_LEFT":
		{
			[y = y + height]
		};
		case "BOTTOM_RIGHT":
		{
			[x = x + width]
			[y = y + height]
		}
	]
	[h: lumens = getIllumination(x, y, getCurrentMapName(), "[]")]
	[h: maxLumens = max(maxLumens, lumens)]
}]

<!-- When its daytime and there is no magical darkness (Lumens < 0) we can see clearly and set lumens to maximum -->
[h,if(visiontype == "DAY" && maxLumens >= 0): maxLumens = 100]

<!-- Here we map our value of 0-100 to a malus between 0 and 4 -->
[h: macro.return = min(4, max(0, 4 - (maxLumens / 25.0)))]