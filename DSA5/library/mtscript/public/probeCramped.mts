[h: switchToken(arg(0))]
[h: weapons = arg(1)]
[h: target = arg(2)]
[h: action = arg(3)]

[h: js = ""]
[h,for(i, 0, json.length(weapons), 1, ""),Code:{
	[h: weapon = json.get(weapons, i)]
	[h,if(json.type(weapon) == "ARRAY"),Code:{
		[h: mod = getCrampedMod(currentToken(), json.get(weapon, 0), target, action) + " / " + getCrampedMod(currentToken(), json.get(weapon, 1), target, action)]
	};{
		[h: mod = getCrampedMod(currentToken(), weapon, target, action)]
	}]
	[h: js = js + strformat("
	function labelCramped%{i}() {
		document.getElementById('cramped').innerText = '%{mod}';
	}")]
}]
[h: js = js + "
window.addEventListener('load', function(evt) {
	labelCramped0();"]
[h,for(i, 0, json.length(weapons), 1, ""): js = js + strformat("
	document.getElementById('waffe%{i}').addEventListener('change', function(evt) {
		labelCramped%{i}();
	});")]
[h: js = js + "});"]

<script>[r: js]</script>

<tr>
	<td>
		<input type='checkbox' name='beengt' [r,if(getState("Eingeengt") == 1),Code:{ checked='checked' };{}]>
	</td>
	<td>
		Beengte Verhältnisse (<label id='cramped'>0</label>)
	</td>
</tr>