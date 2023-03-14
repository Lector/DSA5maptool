[h: uebergabe = macro.args]

[h: lName = json.get(uebergabe, "fLinkname")]
[h: lName = upper(lName, 1)]
[h: lAdress = json.get(uebergabe, "fLinkadress")]

[h,if(lName == "" || lAdress == "" || lAdress == "http://"), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos.Macros"): "noInput"]
	};{}
]
[h,if(startsWith(lAdress, "http://") == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.naxos.Macros"): "wrongLink"]
	};{}
]
[h: linklist = getLibProperty("Weblinks", "this")]
[h,foreach(link, linklist, ""), CODE:
	{
		[if(json.get(link, "linkname") == lName), Code:
			{
				[h,macro("inputFail@lib:com.github.naxos.Macros"): "linkDouble"]
			}
		]
	}
]
[h: closeDialog("weblinkAdd")]

[h: newLink = json.set("{}", "linkname", lName, "linkadress", lAdress)]
[h: newList = json.append(linklist, newLink)]
[h: newList = json.sort(newList, "asc", "linkname")]
[h: setLibProperty("Weblinks", newList, "this")]

[h,if(isFrameVisible("meisterbogen") == 1 && getLibProperty("SLframe", "lib:com.github.naxos.Macros") == 6), Code:
	{
		[h,macro("meisterbogenTools@lib:com.github.naxos.Macros2"): ""]
	};{}
]

[h: ausgabe = strformat("
	<table style='border-spacing: 0px; margin-top: 3px;'>
		<tr>
			<td width='18'>
				&nbsp;
			</td>
			<td style='text-align:center;' valign='middle' width='70'>
				<img src='%s'>
			</td>
			<td valign='middle'>
				Der neue Weblink wurde hinzugef&uuml;gt.
			<td width='15'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>
", tableImage("chat", 28))]

[h: ausgabe = border("Weblinks", ausgabe)]

[h: broadcast(ausgabe, "gm")]