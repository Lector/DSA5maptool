[h: broadcast("Macros add on onInit")]

[h: defineFunction("sendToPublic", "sendToPublic@this")]
[h: defineFunction("sendToGM", "sendToGM@this")]
[h: defineFunction("sendToSelfGM", "sendToSelfGM@this")]
[h: defineFunction("sendToSelf", "sendToSelf@this")]
[h: defineFunction("sendTo", "sendTo@this")]

[h: defineFunction("exposeView", "exposeView@this")]

[h: defineFunction("inputFail", "inputFail@this")]
[h: defineFunction("border", "border@this")]
[h: defineFunction("header", "header@this")]
[h: defineFunction("subtext", "subtext@this")]
[h: defineFunction("dieColor", "dieColor@this")]
[h: defineFunction("propertyColor", "propertyColor@this")]
[h: defineFunction("romanNumeral", "romanNumeral@this")]
[h: defineFunction("groesse", "groesse@this")]
[h: defineFunction("scale", "scale@this")]
[h: defineFunction("trefferzonenmodell", "trefferzonenmodell@this")]
[h: defineFunction("trefferzone", "trefferzone@this")]
[h: defineFunction("trefferzonen", "trefferzonen@this")]
[h: defineFunction("typen", "typen@this")]
[h: defineFunction("sightForTypus", "sightForTypus@this")]
[h: defineFunction("merkmale", "merkmale@this")]
[h: defineFunction("aspekte", "aspekte@this")]
[h: defineFunction("compare", "compare@this")]

[h: defineFunction("roll1d20", "roll1d20@this")]
[h: defineFunction("roll3d20", "roll3d20@this")]
[h: defineFunction("rollSkill", "rollSkill@this")]
[h: defineFunction("show1d20", "show1d20@this")]
[h: defineFunction("show3d20", "show3d20@this")]
[h: defineFunction("getTarget", "getTarget@this")]
[h: defineFunction("lookAt", "lookAt@this")]
[h: defineFunction("isBehind", "isBehind@this")]
[h: defineFunction("getIllumination", "getIllumination@this")]
[h: defineFunction("getCampaignLight", "getCampaignLight@this")]
[h: defineFunction("getNahkampftechniken", "getNahkampftechniken@this")]
[h: defineFunction("getFernkampftechniken", "getFernkampftechniken@this")]
[h: defineFunction("getATBasisManoever", "getATBasisManoever@this")]
[h: defineFunction("getATSpezialManoever", "getATSpezialManoever@this")]
[h: defineFunction("getFKBasisManoever", "getFKBasisManoever@this")]
[h: defineFunction("getFKSpezialManoever", "getFKSpezialManoever@this")]
[h: defineFunction("getPASpezialManoever", "getPASpezialManoever@this")]
[h: defineFunction("getZoneMod", "getZoneMod@this")]
[h: defineFunction("getReachMod", "getReachMod@this")]
[h: defineFunction("getCrampedMod", "getCrampedMod@this")]
[h: defineFunction("getBelastungsTalente", "getBelastungsTalente@this")]
[h: defineFunction("wohlgefallen", "wohlgefallen@this")]
[h: defineFunction("buildManoeverOptions", "buildManoeverOptions@this")]
[h: defineFunction("usesHands", "usesHands@this")]

[h: defineFunction("getTechnik", "getTechnik@this")]
[h: defineFunction("getRuestung", "getRuestung@this")]
[h: defineFunction("getNahkampfwaffe", "getNahkampfwaffe@this")]
[h: defineFunction("getFernkampfwaffe", "getFernkampfwaffe@this")]

[h: defineFunction("resolveRS", "resolveRS@this")]
[h: defineFunction("resolveNK", "resolveNK@this")]
[h: defineFunction("resolveFK", "resolveFK@this")]
[h: defineFunction("resolveManoever", "resolveManoever@this")]
[h: defineFunction("noMeleeWeapon", "noMeleeWeapon@this")]

[h: defineFunction("getTraitLevel", "getTraitLevel@this")]
[h: defineFunction("hasTrait", "hasTrait@this")]
[h: defineFunction("tokenMap", "tokenMap@this")]
[h: defineFunction("getWS", "getWS@this")]
[h: defineFunction("schmerzStufe", "schmerzStufe@this")]
[h: defineFunction("hasInitiative", "hasInitiative@this")]

[h: defineFunction("getMU", "getMU@this")]
[h: defineFunction("getKL", "getKL@this")]
[h: defineFunction("getIN", "getIN@this")]
[h: defineFunction("getCH", "getCH@this")]
[h: defineFunction("getFF", "getFF@this")]
[h: defineFunction("getGE", "getGE@this")]
[h: defineFunction("getKO", "getKO@this")]
[h: defineFunction("getKK", "getKK@this")]
[h: defineFunction("getSK", "getSK@this")]
[h: defineFunction("getZK", "getZK@this")]
[h: defineFunction("getGS", "getGS@this")]
[h: defineFunction("getINI", "getINI@this")]
[h: defineFunction("getAW", "getAW@this")]
[h: defineFunction("findSkill", "findSkill@this")]
[h: defineFunction("getMount", "getMount@this")]

[h: defineFunction("probeZone", "probeZone@this")]

[h: defineFunction("probeSicht", "probeSicht@this")]
[h: defineFunction("probeATSingleProcess", "probeATSingleProcess@this")]
[h: defineFunction("angriffSchadenProcess", "angriffSchadenProcess@this")]
[h: defineFunction("takeDamage", "takeDamage@this")]
[h: defineFunction("showTakeDamage", "showTakeDamage@this")]
[h: defineFunction("woundEffect", "woundEffect@this")]
[h: defineFunction("showWoundEffect", "showWoundEffect@this")]
[h: defineFunction("weaponDamage", "weaponDamage@this")]
[h: defineFunction("showWeaponDamage", "showWeaponDamage@this")]
[h: defineFunction("schadenWaffeProcess", "schadenWaffeProcess@this")]
[h: defineFunction("schadenErhaltenProcess", "schadenErhaltenProcess@this")]
[h: defineFunction("show", "show@this")]
[h: defineFunction("rollDefense", "rollDefense@this")]
[h: defineFunction("showDefense", "showDefense@this")]
[h: defineFunction("rollAttack", "rollAttack@this")]
[h: defineFunction("showAttack", "showAttack@this")]
[h: defineFunction("skillRollTitle", "skillRollTitle@this")]
[h: defineFunction("modReason", "modReason@this")]

[h: defineFunction("scatter", "scatter@lib:com.github.naxos84.macros2")]

[h: defineFunction("getRandomHerbs", "getRandomHerbs@lib:com.github.naxos84.wildnis")]

[h: message = "
<h1>Willkommen beim DSA5 Regelsatz für maptools</h1><br>
Neu hier? Hier gehts zum <a href='https://www.youtube.com/watch?v=1GhtRMBgSWY'>Videotutorial</a>. Dort wird alles erklärt.<br/><br>
<b>Für Spieler</b>: Unter <b>Fenster &#8594; Kampagne</b> findet ihr eure Würfelfunktionen<br>
<b>Für Spielleiter</b>: Unter <b>Fenster &#8594; SL</b> findet ihr alle Funktionen zum Spielleiten<br/><br>
Übrigens: In der <a href='https://optolith.app/'>Optolith Heldenverwaltung</a> könnt ihr eure Helden jetzt auch für Maptools exportieren. Diese Datei könnt ihr dann einfach hier per Drag & Drop auf die Karte ziehen.<br/>
<br><h3>Wichtige Shortcuts:</h3>
<table>
	<!--<tr>
		<th>
			F2
		</th>
		<td valign=middle>
			Verkörpern
		</td>
	</tr>-->
	<tr>
		<th>
			F3
		</th>
		<td valign=middle>
			Nahkampfattacke
		</td>
	</tr>
	<tr>
		<th>
			Shift + F3
		</th>
		<td valign=middle>
			Schaden im Nahkampf
		</td>
	</tr>
	<tr>
		<th>
			F4
		</th>
		<td valign=middle>
			Fernkampfattacke
		</td>
	</tr>
	<tr>
		<th>
			Shift + F4
		</th>
		<td valign=middle>
			Schaden im Fernkampf
		</td>
	</tr>
	<tr>
		<th>
			F5
		</th>
		<td valign=middle>
			Parade
		</td>
	</tr>
	<tr>
		<th>
			F6
		</th>
		<td valign=middle>
			Ausweichen
		</td>
	</tr>
	<tr>
		<th>
			F9
		</th>
		<td valign=middle>
			Zur nächsten Initiative-Phase
		</td>
	</tr>
</table>"]

[h: broadcast(message, getPlayerName())]