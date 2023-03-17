[h: id = macro.args]

[h: tokenMap = getTokenMap(id)]
[h: x = getTokenX(0, id, tokenMap)]
[h: y = getTokenY(0, id, tokenMap)]
[h,if(getCurrentMapName() != tokenMap): moveTokenFromMap(id, tokenMap, x, y)]

[h: switchToken(id)]
[h: tokenName = getName()]
[h: hNum = substring(tokenName, lastIndexOf(tokenName, " ")+1, length(tokenName))]

[h: actionLink = macroLinkText("handoutEditProcess@this", "")]
[dialog5("handoutEdit", "width=587; height=583; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Handout erstellen oder editieren</title>
		<link rel='stylesheet' type='text/css' href='lib://com.github.naxos84.macros2/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Handout editieren")]		
				<table style='border-spacing: 0px; padding: 5px;' width='500'>
					<tr>
						<td style='font-weight: bold;'>
							Handout-Titel:
						</td>
						<td>
							<input type='text' name='hTitle' size='50' maxlength='40' value='[r: getLabel()]'>
						</td>
					</tr>
					<tr>
						<td style='font-weight: bold;'>
							Kurzbeschreibung:
						</td>
						<td>
							<input type='text' name='hShort' size='50' maxlength='100' value='[r: getNotes()]'>
						</td>
					</tr>
					<tr>
						<td style='font-weight: bold;' valign='top'>
							Inhalt:
						</td>
						<td>
							<textarea name='hContent' cols='50' rows='10'>[r: getGMNotes()]</textarea>
						</td>
					</tr>
					<tr>
						<td style='font-weight: bold;' valign='top'>
							Textformatierung:
							<br><span style='font-weight:normal;'>(nur im Inhalt)</span>
						</td>
						<td>
							#b# <b>Fetter Text</b> #/b# - #i# <i>Kursiver Text</i> #/i# - #u# <u>Unterstrichener Text</u> #/u#
							<br>#br# = Zeilenumbruch (Beispiel: Zeile 1 #br# Zeile 2 #br# Zeile 3)
						</td>
					</tr>
					<tr>
						<td style='font-weight: bold;' valign='top'>
							Bild hinzufügen:
						</td>
						<td>
							Um ein Bild hinzuzufügen, doppelklicke auf das Handout-Token Nr. [r: hNum], wähle<br>im sich öffnenden Fenster den Registerreiter &quot;Config&quot, und ziehe ein Bild von deinem Computer unten rechts auf das Feld &quot;Handout&quot;. Um das Bild zu ändern, führe die gleichen Schritte nochmal aus.
						</td>
					</tr>
				</table>
				<table style='border-spacing: 0px; padding: 0px; margin: 5px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 101)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="hTokenName" value="[r: tokenName]">
				<input type="hidden" name="hTokenNum" value="[r: hNum]">
				<input type="hidden" name="hTokenID" value="[r: id]">
			</form>
		</div>
	</body>
</html>
}]

[h,if(getCurrentMapName() != tokenMap): moveTokenToMap(id, tokenMap, x, y)]