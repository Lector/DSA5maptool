[h: waffe = arg(0)]
[h: rwgegner = arg(1)]

[h: rw = -max(0, (rwgegner - json.get(waffe, "RW")) * 2)]
[h,if(Schwarm == 1),Code:{
	<!-- Gegnerschwärme bekommen keine Erschwerniss auf Reichweiten im Nahkampf -->
	[rw = 0]
}]

[h: macro.return = rw]