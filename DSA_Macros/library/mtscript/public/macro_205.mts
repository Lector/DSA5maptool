[h: params = arg(0)]

[h: output = strformat("
<td style='text-align:center; padding: 0px 12px 0px 8px' valign='middle' rowspan=3>
	<img src='%s'/>
</td>
<td rowspan=3></td>
%s",
tableImage("chat", 70),
show3d20(params))]

[h: macro.return = output]