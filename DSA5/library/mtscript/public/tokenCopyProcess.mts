[h: uebergabe = macro.args]

[h: copyNum = json.get(uebergabe, "copyNum")]
[h: tID = json.get(uebergabe, "tokenID")]

[h,if(copyNum == ""): inputFail("noInput")]
[h,if(isNumber(copyNum) == 0): inputFail("numText")]
[h,if(copyNum != round(copyNum)): inputFail("numInteger")]
[h,if(copyNum < 0): inputFail("numNegative")]
[h: closeDialog("tokenCopy")]

[h: tName = getName(tID)]
[h: cloneNum = 0]
[h: updates = "{name: '[r: tName] - [r: cloneNum = cloneNum + 1]'}"]
[h: cloneNum = 0]
[h: copyToken(tID, copyNum, "", updates)]

[h: noticeSelf("tokenCopy")]
[h: refreshFrame(tID)]