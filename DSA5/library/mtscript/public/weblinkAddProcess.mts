[h: uebergabe = macro.args]

[h: lName = json.get(uebergabe, "fLinkname")]
[h: lName = upper(lName, 1)]
[h: lAdress = json.get(uebergabe, "fLinkadress")]

[h,if(lName == "" || lAdress == "" || lAdress == "http://"), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "noInput"]
	};{}
]
[h,if(startsWith(lAdress, "http://") == 0), Code:
	{
		[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "wrongLink"]
	};{}
]
[h: linklist = getLibProperty("Weblinks", "com.github.lector.dsa5maptool")]
[h,foreach(link, linklist, ""), CODE:
	{
		[if(json.get(link, "linkname") == lName), Code:
			{
				[h,macro("inputFail@lib:com.github.lector.dsa5maptool"): "linkDouble"]
			}
		]
	}
]
[h: closeDialog("weblinkAdd")]

[h: newLink = json.set("{}", "linkname", lName, "linkadress", lAdress)]
[h: newList = json.append(linklist, newLink)]
[h: newList = json.sort(newList, "asc", "linkname")]
[h: setLibProperty("Weblinks", newList, "com.github.lector.dsa5maptool")]

[h,if(isFrameVisible("meisterbogen") == 1 && getLibProperty("SLframe","com.github.lector.dsa5maptool") == 6), Code:
	{
		[h,macro("meisterbogenTools@this"): ""]
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
				Der neue Weblink wurde hinzugefügt.
			<td width='15'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>
", data.getStaticData("com.github.lector.dsa5maptool", "/public/images/chat/scroll.png"))]

[h: ausgabe = border("Weblinks", ausgabe)]

[h: broadcast(ausgabe, "gm")]