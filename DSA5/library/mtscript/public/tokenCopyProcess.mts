[h: uebergabe = macro.args]

[h: copyNum = getStrProp(uebergabe, "copyNum")]
[h: tID = getStrProp(uebergabe, "tokenID")]

[h,if(copyNum == ""), Code:
	{
		[h,macro("inputFail@this"): "noInput"]
	};{}
]
[h,if(isNumber(copyNum) == 0), Code:
	{
		[h,macro("inputFail@this"): "numText"]
	};{}
]
[h,if(copyNum != round(copyNum)), Code:
	{
		[h,macro("inputFail@this"): "numInteger"]
	};{}
]
[h,if(copyNum < 0), Code:
	{
		[h,macro("inputFail@this"): "numNegative"]
	};{}
]
[h: closeDialog("tokenCopy")]

[h: tName = getName(tID)]
[h: cloneNum = 0]
[h: updates = "{name: '[r: tName] - [r: cloneNum = cloneNum + 1]'}"]
[h: cloneNum = 0]
[h: copyToken(tID, copyNum, "", updates)]

[h,macro("noticeSelf@this"): "tokenCopy"]
[h: refreshFrame(currentToken())]