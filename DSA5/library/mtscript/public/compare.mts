[h: token1 = arg(0)]
[h: token2 = arg(1)]
[h: toCompare = arg(2)]

[h: similiar = 1]

[h,if(similiar == 1 && getPropertyType(token1) != getPropertyType(token2)): similiar = 0]
[h,if(similiar == 1),foreach(propName, toCompare),Code:{
	[h: prop1 = getProperty(propName, token1)]
	[h: prop2 = getProperty(propName, token2)]
	[h,if(prop1 != prop2),Code:{
		[h: similiar = 0]
	}]
}]

[h: macro.return = similiar]