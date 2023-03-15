[h: uebergabe = macro.args]

[h,if(uebergabe == "all"), Code:
	{
		[newList = '[]']
		[chatNotice = "Alle Weblinks wurden gel&ouml;scht."]
	};
	{
		[linklist = getLibProperty("Weblinks", "com.github.naxos84.tools")]
		[newlist = json.remove(linklist, uebergabe)]
		[chatNotice = "Der ausgew&auml;hlte Weblink wurde gel&ouml;scht."]
	}
]
[h: setLibProperty("Weblinks", newList, "com.github.naxos84.tools")]

[h,if(isFrameVisible("meisterbogen") == 1 && getLibProperty\("SLframe","com.github.naxos84.macros") == 6), Code:
	{
		[h,macro("meisterbogenTools@lib:com.github.naxos84.macros2"): ""]
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
				%s
			<td width='15'>
				&nbsp;
			</td>
			<td width='18'>
				&nbsp;
			</td>
		</tr>
	</table>
", tableImage("chat", 28), chatNotice)]

[h: ausgabe = border("Weblinks", ausgabe)]

[h: broadcast(ausgabe, "gm")]