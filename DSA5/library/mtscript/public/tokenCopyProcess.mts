[h: uebergabe = macro.args]

[h: copyNum = getStrProp(uebergabe, "copyNum")]
[h: tID = getStrProp(uebergabe, "tokenID")]

[h,if(copyNum == ""), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noInput"]
	};{}
]
[h,if(isNumber(copyNum) == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numText"]
	};{}
]
[h,if(copyNum != round(copyNum)), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numInteger"]
	};{}
]
[h,if(copyNum < 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "numNegative"]
	};{}
]
[h: closeDialog("tokenCopy")]

[h: tName = getName(tID)]
[h: cloneNum = 0]
[h: updates = "{name: '[r: tName] - [r: cloneNum = cloneNum + 1]'}"]
[h: cloneNum = 0]
[h: copyToken(tID, copyNum, "", updates)]

[h,macro("noticeSelf@lib:com.github.lector.dsa5maptool"): "tokenCopy"]
[h,macro("refreshFrame@lib:com.github.lector.dsa5maptool"): ""]