[h,macro("abfrageImpersonate@this"): ""]

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

[dialog5("tempMod", "width=500; height=547; temporary=1; closebutton=0; noframe=0"):{

[h: actionLink = macroLinkText("tempModProcess@this", "")]

<html>
	<head>
		<title>Tempor&auml;re Effekte</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Temporäre Effekte")]
				Trage bei den gewünschten Eigenschaften den Wert ein, um den du diese zeitweise erhöhen oder senken möchtest.
				<br>
				<table style='border-spacing: 0px; padding: 5px; margin: 10px auto 0px auto;'>
					<tr>
						<td width='100'>
							Mut:
						</td>
						<td width='40'>
							<input type="text" name="tModMU" size="3" maxlength="3" value="[r: getStrProp(TempMod, "mu")]">
						</td>
						<td width='30'>
							&nbsp;
						</td>
						<td width='110'>
							Attacke:
						</td>
						<td width='40'>
							<input type="text" name="tModAT" size="3" maxlength="3" value="[r: getStrProp(TempMod, "at")]">
						</td>
					</tr>
					<tr>
						<td>
							Klugheit:
						</td>
						<td>
							<input type="text" name="tModKL" size="3" maxlength="3" value="[r: getStrProp(TempMod, "kl")]">
						</td>
						<td>
							&nbsp;
						</td>
						<td>
							Parade:
						</td>
						<td>
							<input type="text" name="tModPA" size="3" maxlength="3" value="[r: getStrProp(TempMod, "pa")]">
						</td>
					</tr>
					<tr>
						<td>
							Intuition:
						</td>
						<td>
							<input type="text" name="tModIN" size="3" maxlength="3" value="[r: getStrProp(TempMod, "in")]">
						</td>
						<td>
							&nbsp;
						</td>
						<td>
							Ausweichen / VW:
						</td>
						<td>
							<input type="text" name="tModAW" size="3" maxlength="3" value="[r: getStrProp(TempMod, "aw")]">
						</td>
					</tr>
					<tr>
						<td>
							Charisma:
						</td>
						<td>
							<input type="text" name="tModCH" size="3" maxlength="3" value="[r: getStrProp(TempMod, "ch")]">
						</td>
						<td>
							&nbsp;
						</td>
						<td>
							INI:
						</td>
						<td>
							<input type="text" name="tModINI" size="3" maxlength="3" value="[r: getStrProp(TempMod, "ini")]">
						</td>
					</tr>
					<tr>
						<td>
							Fingerfertigkeit:
						</td>
						<td>
							<input type="text" name="tModFF" size="3" maxlength="3" value="[r: getStrProp(TempMod, "ff")]">
						</td>
						<td>
							&nbsp;
						</td>
						<td>
							Geschwindigkeit:
						</td>
						<td>
							<input type="text" name="tModGS" size="3" maxlength="3" value="[r: getStrProp(TempMod, "gs")]">
						</td>
					</tr>
					<tr>
						<td>
							Gewandheit:
						</td>
						<td>
							<input type="text" name="tModGE" size="3" maxlength="3" value="[r: getStrProp(TempMod, "ge")]">
						</td>
						<td>
							&nbsp;
						</td>
						<td>
							SK:
						</td>
						<td>
							<input type="text" name="tModSK" size="3" maxlength="3" value="[r: getStrProp(TempMod, "sk")]">
						</td>
					</tr>
					<tr>
						<td>
							Konstitution:
						</td>
						<td>
							<input type="text" name="tModKO" size="3" maxlength="3" value="[r: getStrProp(TempMod, "ko")]">
						</td>
						<td>
							&nbsp;
						</td>
						<td>
							ZK:
						</td>
						<td>
							<input type="text" name="tModZK" size="3" maxlength="2" value="[r: getStrProp(TempMod, "zk")]">
						</td>
					</tr>
					<tr>
						<td>
							K&ouml;rperkraft:
						</td>
						<td>
							<input type="text" name="tModKK" size="3" maxlength="3" value="[r: getStrProp(TempMod, "kk")]">
						</td>
						<td>
							&nbsp;
						</td>
						<td>
							R&uuml;stungsschutz:
						</td>
						<td>
							<input type="text" name="tModRS" size="3" maxlength="2" value="[r: getStrProp(TempMod, "rs")]">
						</td>
					</tr>
					<tr>
						<td>
							Alle l&ouml;schen:
						</td>
						<td>
							<input type="checkbox" name="delAll" value="ok">
						</td>
					</tr>
					<tr>
						<td colspan=4 style='text-align: center'>
						[h: button = tableImage("forms", 9)]
						<button style="margin: 16px 0px 0px 0px;" type="submit">
							<img src="[r:button]"/>
						</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]