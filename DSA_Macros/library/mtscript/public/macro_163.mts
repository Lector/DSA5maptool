[h: from = arg(0)]
[h: to = arg(1)]

[h,token(from),Code:
{
	[h: fromX = getTokenX()]
	[h: fromY = getTokenY()]
}]
[h,token(to),Code:
{
	[h: toX = getTokenX()]
	[h: toY = getTokenY()]
}]

[h: x = toX - fromX]
[h: y = toY - fromY]

[h: len = math.sqrt(x*x + y*y)]

[h,if(len != 0),Code:
{
	[h: x = x / len]
	[h: y = y / len]
};{}]

[h: macro.return = json.set("{}", "X", x, "Y", y)]