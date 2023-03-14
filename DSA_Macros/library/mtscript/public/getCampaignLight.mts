[h: light = arg(0)]

[h: cmp = json.indent(getInfo("campaign"), 2)]
[h: dsalights = json.get(json.get(cmp, "light sources"), "DSA")]

[h,foreach(dsalight, dsalights),if(light == json.get(dsalight, "name")),Code:
{
	[h: return(0, dsalight)]
}]

[h: macro.return = ""]