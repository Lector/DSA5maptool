[h: list = arg(0)]
[h: rs = ""]
[h, Foreach(item, list, ""), Code:
{
	[if(json.get(item, "ID") == arg(1)): rs = item]
}]
[h: macro.return = rs]