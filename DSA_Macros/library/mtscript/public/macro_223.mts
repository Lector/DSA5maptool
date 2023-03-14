[h: switchToken(arg(0))]
[h: target = arg(1)]
[h: action = arg(2)]

[h: cramped1 = getCrampedMod(currentToken(), getNahkampfwaffe(HauptHand), target, action)]
[h: cramped2 = getCrampedMod(currentToken(), getNahkampfwaffe(NebenHand), target, action)]

[h: js = strformat("
function labelCramped1() {
	document.getElementById('cramped').innerText = '%{cramped1}';
}
function labelCramped2() {
	document.getElementById('cramped').innerText = '%{cramped2}';
}
function labelCrampedDual() {
	document.getElementById('cramped').innerText = '%{cramped1} / %{cramped2}';
}
window.addEventListener('load', function(evt) {
	if(document.getElementById('waffe1').checked){
		labelCramped1();
	}else{
		labelCramped2();
	}
	document.getElementById('waffe1').addEventListener('change', function() {
        labelCramped1();
    });
	document.getElementById('waffe2').addEventListener('change', function() {
        labelCramped2();
    });
    document.getElementById('waffe3').addEventListener('change', function() {
        labelCrampedDual();
    });
})
")]
<script>[r: js]</script>

<tr>
	<td>
		<input type='checkbox' name='beengt' [r,if(getState("Eingeengt") == 1),Code:{ checked='checked' };{}]>
	</td>
	<td>
		Beengte Verh&auml;ltnisse (<label id='cramped'>0</label>)
	</td>
</tr>