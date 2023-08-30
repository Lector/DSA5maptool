[h: switchToken(arg(0))]
[h: weapons = arg(1)]
[h: bound = getState("Fixiert", currentToken())]

<tr>
    <td>
        <input type='checkBox' name='fixiert' value='-4' [r,if(bound == 1): 'checked']/>
    </td>
    <td>
        Fixiert (<label id='bound'>0</label>)
    </td>
</tr>

[h: js = strformat("
function labelBound() {
    const weapon = Array.from(document.getElementsByName('waffe')).find(w => w.checked)?.value || 0;
    const label = document.getElementById('bound');
    if(isNaN(weapon)) label.innerText = 0; else label.innerText = -4;
}")]

[h: js = js + "
window.addEventListener('load', function(evt) {
	labelBound();"]
[h,for(i, 0, json.length(weapons), 1, ""): js = js + strformat("
	document.getElementById('waffe%{i}').addEventListener('change', function(evt) {
		labelBound();
	});")]
[h: js = js + "});"]

<script>[r: js]</script>