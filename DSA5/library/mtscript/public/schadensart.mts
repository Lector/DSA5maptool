[h,if(isGM() == 1 && hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@this"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: uebergabe = arg(0)]

[h: typ = "TP"]
[h: zone = "zufall"]
[h,if(uebergabe != ""),Code:{
	[typ = json.get(uebergabe, "Schadensart")]
	[zone = json.get(uebergabe, "Zone")]
};{}]

[h,if(typ == ""): typ = "TP"]
[h: cTP = ""]
[h: cSP = ""]
[h,switch(typ):
	case "TP": cTP = "checked='checked'";
	case "SP": cSP = "checked='checked'";
	default: cTP = ""
]

		<td valign='top'>
			<div class='label'>
				Schadensart
			</div>
		</td>
		<td>
			<table style='border-spacing: 0px;' cellpadding='1'>
				<tr>
					<td>
						<input type='radio' name='schadenArt' value='TP' [r: cTP]>
					</td>
					<td>
						Trefferpunkte (TP)
					</td>
				</tr>
				<tr>
					<td>
						<input type='radio' name='schadenArt' value='SP' [r: cSP]>
					</td>
					<td>
						Schadenspunkte (SP)
					</td>
				</tr>
				<tr>
					<td>
						<input type='checkbox' name='kritischDK' value='1'>
					</td>
					<td>
						Empfindlichkeit (TP verdoppelt)
					</td>
				</tr>
				<tr>
					<td>
						<input type='checkbox' name='Schadensresistenz' value='1'>
					</td>
					<td>
						Resistenz (Schaden halbiert)
					</td>
				</tr>
				<tr>
					<td colspan=2>
						[r,macro("selectZone@this"): zone]
					</td>
				</tr>
			</table>
		</td>