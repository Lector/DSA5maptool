[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = macro.args]
[h: closeDialog("notizSLEdit")]

[h: nText = json.get(uebergabe, "chatField")]
[h: setGMNotes(nText)]

[h: tokenName = getName()]
[h: ausgabe = strformat("
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; text-align: center; margin: 0px; height: 77;' width='425'>
	<table style='border-spacing: 0px; margin-top: 36px;'>
		<tr>
			<td>
				SL-Notizen
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: repeat-y; color: #441e13; font-size: 12pt; text-align: center; margin: 0px;' width='425'>
	<table style='border-spacing: 0px; margin-top: 3px;'>
		<tr>
			<td width='18'>
				&nbsp;
			</td>
			<td style='text-align:center;' valign='middle' width='63'>
				<img src='%s'>
			</td>
			<td valign='middle'>
				<b>%s</b> hat SL-Notizen hinzugef&uuml;gt oder ge&auml;ndert.
			<td width='15'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>
</div>
<div style='background-image: url(%s); background-repeat: no-repeat; color: #441e13; font-size: 12pt; font-weight: bold; margin: 0px; height: 19;' width='425'>
</div>
", tableImage("chat", 41), tableImage("chat", 42), tableImage("chat", 28), tokenName, tableImage("chat", 43))]

[h,macro("noticeSelf@Lib:macros"): "notizSLEdit"]
[h,if(isGM() == 0), Code:
	{
		[h,macro("sendToGM@Lib:macros"): ausgabe]
	};{}
]
[h,macro("refreshFrame@Lib:macros"): ""]