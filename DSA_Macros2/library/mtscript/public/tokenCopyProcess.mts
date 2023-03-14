[h: uebergabe = macro.args]

[h: copyNum = getStrProp(uebergabe, "copyNum")]
[h: tID = getStrProp(uebergabe, "tokenID")]

[h,if(copyNum == ""), Code:
	{
		[h,macro("inputFail@Lib:macros"): "noInput"]
	};{}
]
[h,if(isNumber(copyNum) == 0), Code:
	{
		[h,macro("inputFail@Lib:macros"): "numText"]
	};{}
]
[h,if(copyNum != round(copyNum)), Code:
	{
		[h,macro("inputFail@Lib:macros"): "numInteger"]
	};{}
]
[h,if(copyNum < 0), Code:
	{
		[h,macro("inputFail@Lib:macros"): "numNegative"]
	};{}
]
[h: closeDialog("tokenCopy")]

[h: tName = getName(tID)]
[h: cloneNum = 0]
[h: updates = "{name: '[r: tName] - [r: cloneNum = cloneNum + 1]'}"]
[h: cloneNum = 0]
[h: copyToken(tID, copyNum, "", updates)]

[h,macro("noticeSelf@Lib:macros"): "tokenCopy"]
[h,macro("refreshFrame@Lib:macros"): ""]