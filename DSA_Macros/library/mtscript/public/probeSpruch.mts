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

[h: uebergabe = macro.args]

[h: modwert = getStrProp(uebergabe, "Wert")]
[h: bezeichnung = getStrProp(uebergabe, "Bezeichnung")]

[h,if(bezeichnung == "Liturgie" || bezeichnung == "Zeremonie"),Code:
{
	[h: sfgroup = "KarmaleSF"]
	[h: improVerbal = "Improvisierte Liturgie (Gebet)"]
	[h: improNonVerbal = "Improvisierte Liturgie (Gesten)"]
	[h: parallel = 0]
	[h: routine = "Routinierte Liturgiewiederholung"]
	[h: arkan = 0]
};
{
	[h: sfgroup = "MagieSF"]
	[h: improVerbal = "Improvisationszauberei (Formel)"]
	[h: improNonVerbal = "Improvisationszauberei (Gesten)"]
	[h: parallel = hasTrait(sfgroup, "Parallelzauberei")]
	[h: routine = "Routinierte Zauberwiederholung"]
	[h: arkan = 1]
}]

[h,if(hasTrait(sfgroup, improNonVerbal) == 1): modGeste = -1; modGeste = -2]
[h,if(hasTrait(sfgroup, improVerbal) == 1): modFormel = -1; modFormel = -2]
[h: wiederholung = hasTrait(sfgroup, routine)]
[h: ModAnzahl = floor(modwert / 4.0)] 

[r,if(bezeichnung != "Magische Handlung"),Code:{
<td valign='top'>
	<div class='label'>
		Modifikationen<br>
		([r: ModAnzahl] m&ouml;glich)
	</div>
</td>
<td valign='top'>
	<table style='border-spacing: 0px;' cellpadding='1'>
		<tr>
			<td valign='middle'>
				Kosten:
			</td>
			<td>
				<select size='1' name="Kosten">
					<option value="+1">Verdoppeln (+1)</option>
					<option value="0" selected="selected">Normal</option>
					<option value="-1">Halbieren (-1)</option>
				</select>
			</td>
		</tr>
		<tr>
			<td valign='middle'>
				[r: bezeichnung]dauer:
			</td>
			<td>
				<select size='1' name="Dauer">
					<option value="+1">Verdoppeln (+1)</option>
					<option value="0" selected="selected">Normal</option>
					<option value="-1">Halbieren (-1)</option>
				</select>
			</td>
		</tr>
	</table>
	<table style='border-spacing: 0px;' cellpadding='1'>
		<tr>
			<td>
				<input type="checkbox" name="Reichweite" value="-1">
			</td>
			<td >
				Reichweite erh&ouml;hen (-1)							
			</td>
		</tr>
		<tr>
			<td>
				<input type="checkbox" name="Gesteweglassen" value="[r: modGeste]">
			</td>
			<td >
				Geste weglassen ([r: modGeste])	
			</td>
		</tr>
		<tr>
			<td>
				<input type="checkbox" name="Formelweglassen" value="[r: modFormel]">
			</td>
			<td >
				Formel weglassen ([r: modFormel])
			</td>
		</tr>
	</table>
</td>
<td width='20'>
	&nbsp;
</td>
};{}]
<td valign='top'>
	<div class='label'>
		Umst&auml;nde
	</div>
</td>
<td valign='top'>
	<table style='border-spacing: 0px;' cellpadding='1'>
		<tr>
			<td valign='middle'>
				Aufrechterhalten:
			</td>
			<td>
				<select name='Aufrecht' size='1'>
					<option selected='selected' value="0">Nichts</option>
					<option value="-[r: 1 - parallel]">1 Zauber / Liturgie (-[r: 1 - parallel])</option>
					<option value="-[r: 2 - parallel]">2 Zauber / Liturgie (-[r: 2 - parallel])</option>
					<option value="-[r: 3 - parallel]">3 Zauber / Liturgie (-[r: 3 - parallel])</option>
					<option value="-[r: 4 - parallel]">4 Zauber / Liturgie (-[r: 4 - parallel])</option>
					<option value="-[r: 5 - parallel]">5 Zauber / Liturgie (-[r: 5 - parallel])</option>
				</select>
			</td>
		</tr>
		<tr>
			<td valign='middle'>
				Fehlversuche vorher:<br>
			</td>
			<td>
				<select name='Fehlversuche' size='1'>
				<option selected='selected' value="0">Keine</option>
				<option value="-[r: 1 - wiederholung]">1 (-[r: 1 - wiederholung])</option>
				<option value="-[r: 2 - wiederholung]">2 (-[r: 2 - wiederholung])</option>
				<option value="-[r: 3 - wiederholung]">3 (-[r: 3 - wiederholung])</option>
				<option value="-[r: 4 - wiederholung]">4 (-[r: 4 - wiederholung])</option>
				<option value="-[r: 5 - wiederholung]">5 (-[r: 5 - wiederholung])</option>
				</select>
			</td>
		</tr>
		[r,if(arkan == 1),Code:{
			[r,macro("probeEisen@this"): currentToken()]
		};{}]
		[r,if(bezeichnung == "Zauber" || bezeichnung == "Ritual"),Code:{
	</table>
	<table style='border-spacing: 0px;' cellpadding='1'>
		<tr>
			<td style='padding-left: 0px;'>
				<input type='checkbox' name='Fremdtradition' value='-2'>
			</td>
			<td>
				Zauber aus Fremdtradition (-2)
			</td>
		</tr>
		
		};{}]
		<!--<tr>
			<td>
				<table style='border-spacing: 0px;' cellpadding='1'>
					<tr>
						<td style='padding-left: 0px;'>
							<input type='checkbox' name='Lieblingszauber' value='2'>
						</td>
						<td>
							Lieblingszauber? (+2 FP)
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td>
				&nbsp;
			</td>
		</tr>
		<tr>
			<td>
				<table style='border-spacing: 0px;' cellpadding='1'>
					<tr>								
						<td valign='middle'>
							Zauber geht gegen SK
						</td>
						<td>
							<select name='sk' size='1'>
							<option>-10</option>
							<option>-9</option>
							<option>-8</option>
							<option>-7</option>
							<option>-6</option>
							<option>-5</option>
							<option>-4</option>
							<option>-3</option>
							<option>-2</option>
							<option>-1</option>
							<option selected='selected'>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
							</select>
						</td>
					</tr>
				</table>
			</td>
		</tr>
		<tr>
			<td>
				<table style='border-spacing: 0px;' cellpadding='1'>
					<tr>
						<td valign='middle'>
							Zauber geht gegen ZK
						</td>
						<td>
							<select name='zk' size='1'>
							<option>-10</option>
							<option>-9</option>
							<option>-8</option>
							<option>-7</option>
							<option>-6</option>
							<option>-5</option>
							<option>-4</option>
							<option>-3</option>
							<option>-2</option>
							<option>-1</option>
							<option selected='selected'>0</option>
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
							<option>9</option>
							<option>10</option>
							</select>
						</td>
					</tr>
				</table>
			</td>
		</tr>-->
	</table>
</td>