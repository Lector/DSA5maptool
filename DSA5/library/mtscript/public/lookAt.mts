[h: from = arg(0)]
[h: to = arg(1)]

[h,token(from),Code:
{
	[h: fromX = getTokenX() + getTokenWidth() / 2.0]
	[h: fromY = getTokenY() + getTokenHeight() / 2.0]
}]
[h,token(to),Code:
{
	[h: toX = getTokenX() + getTokenWidth() / 2.0]
	[h: toY = getTokenY() + getTokenHeight() / 2.0]
}]

[h: x = toX - fromX]
[h: y = toY - fromY]

[h: len = math.sqrt(x*x + y*y)]

[h,if(len != 0),Code:
{
	[h: x = x / len]
	[h: y = y / len]
};{}]

[h: vector = json.set("{}", "X", x, "Y", y)]

[h: macro.return = vector]