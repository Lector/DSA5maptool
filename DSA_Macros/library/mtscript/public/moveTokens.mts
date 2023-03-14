[h,if(isGM() == 0): otherMaps = getVisibleMapNames(); otherMaps = getAllMapNames()]
[h: indexOfCurrentMap = listFind(otherMaps, getCurrentMapName())]
[h,if(indexOfCurrentMap != -1): otherMaps = listDelete(otherMaps, indexOfCurrentMap)]

[h,if(listCount(otherMaps) == 0),Code:
{
	[h,macro("inputFail@this"): "noOtherMaps"]
}]

[h: actionLink = macroLinkText("moveTokensProcess@this", "")]
[dialog5("moveTokens", "width=425; height=510; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Auf andere Karte wechseln</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Karte wechseln")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;' cellpadding='1'>
					<tr>
						<td style='padding-right: 3px; text-align: right'>
							Neue Karte:
						</td>
						<td style='padding-right: 3px; text-align: left'>
							<select size='1' name='map'>
								[h: space = " "]
								[r,foreach(map, otherMaps, ""),Code:
								{
									[h: disp = getMapDisplayName(map)]
									<option value='[r: map]'>[r: disp]
									[r,if(isGM() == 1 && disp != map),Code:{[r: space]([r: map])};{}]
									</option>
								}]
							</select>
						</td>
					</tr>
				</table>
				<br>
				[h: conditions = json.set("{}", "layer", "Token", "visible", "1")]
				[h,if(isGM() == 0),Code:
				{
					[h: conditions = json.set(conditions, "owned", "self")]
				};{}]
				[h: owned = getTokens("json", conditions)]
				<input type='hidden' name='tokens' value='[r: owned]'/>
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;' cellpadding='1'>
					<tr>
						<td colspan>
							<span style="white-space: nowrap;">Folgende Tokens auf neue Karte mitnehmen:</span>
						</td>
					</tr>
					<tr>
						<td style="text-align: center;">
							<table>
								[r,foreach(tok, owned, ""),Code:
								{
								[h: selected = getSelected()]
								[h,if(isGM() == 0 && selected == "" && isOwnedByAll(tok) == 0):
									alwaysMark = 1; alwaysMark = 0]
								<tr>
									<td>
										<input type='checkbox' name='[r: tok]'
										[r,if(alwaysMark == 1 || listContains(selected, tok) != 0): 'checked']
										/>
									</td>
									<td width="100%">
										[r: getName(tok)]
									</td>
								</tr>
								}]
							</table>
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 101)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]