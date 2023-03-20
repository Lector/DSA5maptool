[h,if(arg(0) != ""): macro.return = strformat("
<table style='border-spacing: 0px; margin-top: 8px; margin-left: 14px; margin-right: 14px' align='left'>
	<tr>
		<td valign='top' style='margin-right: 10px'>
			<img src='%s'>
		</td>
		<td style='font-weight: normal' valign='middle'>
			%s
		</td>
	</tr>
</table>",
data.getStaticData("com.github.naxos84.macros2", "/public/images/chat/probeZusatz.png"), arg(0)); macro.return = ""]