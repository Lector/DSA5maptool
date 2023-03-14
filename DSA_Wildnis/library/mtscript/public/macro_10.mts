[h: switchToken(arg(0))]
[h: gelaendekunden = decode(arg(1))]

[h: snippet = "var text = '';"]
[h,for(i, 0, json.length(gelaendekunden), 1, ""),Code:
{
	[h: gel = json.get(gelaendekunden, i)]
	[h: snippet = snippet + strformat("
	if(index == %{i}) text = '%s';
	if(text == '') text = 'Geländekunde';
	label.innerText = text;
	if(index == %{i}) checkbox.checked = 
	",
	gel)]
	[h: sf = strformat("Geländekunde (%{gel})")]
	[h: trait = hasTrait("AllgemeineSF", sf)]
	[h,if(trait > 0):
		snippet = snippet + "true;");
		snippet = snippet + "false;")]
}]

[h: js = strformat("
function labelGelaendekunde()
{
	for(i=0; i<%d; i++)
	{
		var selected = gegend.options[i].selected;
		if(selected) index = i;
	}
	var label = document.getElementById('gelaendeLabel');
	var checkbox = document.getElementById('gelaende');
	%{snippet}
}

window.addEventListener('load', function(evt) {
	var gegend = document.getElementById('gegend');
	gegend.addEventListener('change', function(evt) {
		labelGelaendekunde();
	});
	labelGelaendekunde();
});", 
json.length(gelaendekunden))]
<script>[r: js]</script>

<tr>
	<td width=20>
		<input type="checkbox" id='gelaende' value="1" name="geländekunde"/>
	</td>
	<td colspan=2>
		<label id='gelaendeLabel'>Gel&auml;ndekunde</label><label> (+1)</label>
	</td>
</tr>