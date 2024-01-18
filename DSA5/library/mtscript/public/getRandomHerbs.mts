[h: allHerbs = arg(0)]
[h: gelaendeKey = arg(1)]
[h: funde = arg(2)]

[h: herbHaufCount = 0]
[h: createTable("randomHerbTable", 1, 1)]
[h,foreach(krautinlist, allHerbs),code:
{
	[h: gelsuch = getProperty(gelaendeKey, krautinlist, tokenMap(krautinlist))]
	[h,if(gelsuch > 0),Code:
	{
		[h: addTableEntry("randomHerbTable", herbHaufCount, herbHaufCount + gelsuch, krautinlist)]
		[h: herbHaufCount = herbHaufCount + gelsuch]
	}]
}]
[h: setTableRoll("randomHerbTable", "d"+herbHaufCount)]

[h: kraeuter = ""]

[h,if(herbHaufCount > 0),Code:
{
	[h,for(qsIndex, 0, funde),Code:
	{
		[h: randomHerb = table("randomHerbTable")]
		[h,if(json.contains(kraeuter, randomHerb) >= 1):
			kraeuter = json.set(kraeuter, randomHerb, json.get(kraeuter, randomHerb) + 1);
			kraeuter = json.set(kraeuter, randomHerb, 1)]
	}]
};
{
	[h: kraeuter = json.set("", "Unbekanntes Kraut", funde)]
}]

[h: deleteTable("randomHerbTable")]

[h: macro.return = kraeuter]