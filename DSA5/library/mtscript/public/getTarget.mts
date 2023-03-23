[h: selected = getSelected()]

[h,if(listCount(selected) == 0): target = ""]
[h,if(listCount(selected) == 1): target = selected]
[h,if(listCount(selected) > 1): target = listGet(selected, 0)]
[h,if(arg(0) == target): target = ""]
[h,if(target != ""),Code:
{
	[if(getPropertyType(target) != "Basic"): target = ""]
};{}]
[h: macro.return = target]