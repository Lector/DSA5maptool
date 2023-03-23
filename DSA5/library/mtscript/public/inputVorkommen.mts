[h: switchToken(arg(0))]
[h: kraut = arg(0)]

<tr>
	<th colspan=3 align="left" style='padding: 20px 0 5px 0;'>
		Vorkommen
	</th>
</tr>
<tr>
	<td colspan=2><span style="white-space: nowrap;">Hoher Norden:</span></td>
	<td>
		<select name='[r: kraut]_norden'>
			<option value=0 [r,if(Norden == 0):"selected"]>Kein Vorkommen (0)</option>
			<option value=1 [r,if(Norden == 1):"selected"]>Sehr selten (1)</option>
			<option value=2 [r,if(Norden == 2):"selected"]>Selten (2)</option>
			<option value=3 [r,if(Norden == 3):"selected"]>Eher selten (3)</option>
			<option value=4 [r,if(Norden == 4):"selected"]>Gelegentlich (4)</option>
			<option value=5 [r,if(Norden == 5):"selected"]>Gewöhnlich (5)</option>
		</select>
	</td>
</tr>
<tr>
	<td colspan=2><span style="white-space: nowrap;" title='Grasländer, Heiden und Steppen'>Grasland, Steppe:</span></td>
	<td>
		<select name='[r: kraut]_steppe'>
			<option value=0 [r,if(Steppe == 0):"selected"]>Kein Vorkommen (0)</option>
			<option value=1 [r,if(Steppe == 1):"selected"]>Sehr selten (1)</option>
			<option value=2 [r,if(Steppe == 2):"selected"]>Selten (2)</option>
			<option value=3 [r,if(Steppe == 3):"selected"]>Eher selten (3)</option>
			<option value=4 [r,if(Steppe == 4):"selected"]>Gelegentlich (4)</option>
			<option value=5 [r,if(Steppe == 5):"selected"]>Gewöhnlich (5)</option>
		</select>
	</td>
</tr>
<tr>
	<td colspan=2><span title='Sümpfe, Marschen und Moore'>Sümpfe:</span></td>
	<td>
		<select name='[r: kraut]_sumpf'>
			<option value=0 [r,if(Sumpf == 0):"selected"]>Kein Vorkommen (0)</option>
			<option value=1 [r,if(Sumpf == 1):"selected"]>Sehr selten (1)</option>
			<option value=2 [r,if(Sumpf == 2):"selected"]>Selten (2)</option>
			<option value=3 [r,if(Sumpf == 3):"selected"]>Eher selten (3)</option>
			<option value=4 [r,if(Sumpf == 4):"selected"]>Gelegentlich (4)</option>
			<option value=5 [r,if(Sumpf == 5):"selected"]>Gewöhnlich (5)</option>
		</select>
	</td>
</tr>
<tr>
	<td colspan=2>Wälder:</td>
	<td>
		<select name='[r: kraut]_wald'>
			<option value=0 [r,if(Wald == 0):"selected"]>Kein Vorkommen (0)</option>
			<option value=1 [r,if(Wald == 1):"selected"]>Sehr selten (1)</option>
			<option value=2 [r,if(Wald == 2):"selected"]>Selten (2)</option>
			<option value=3 [r,if(Wald == 3):"selected"]>Eher selten (3)</option>
			<option value=4 [r,if(Wald == 4):"selected"]>Gelegentlich (4)</option>
			<option value=5 [r,if(Wald == 5):"selected"]>Gewöhnlich (5)</option>
		</select>
	</td>
</tr>
<tr>
	<td colspan=2>Regenwälder:</td>
	<td>
		<select name='[r: kraut]_dschungel'>
			<option value=0 [r,if(Dschungel == 0):"selected"]>Kein Vorkommen (0)</option>
			<option value=1 [r,if(Dschungel == 1):"selected"]>Sehr selten (1)</option>
			<option value=2 [r,if(Dschungel == 2):"selected"]>Selten (2)</option>
			<option value=3 [r,if(Dschungel == 3):"selected"]>Eher selten (3)</option>
			<option value=4 [r,if(Dschungel == 4):"selected"]>Gelegentlich (4)</option>
			<option value=5 [r,if(Dschungel == 5):"selected"]>Gewöhnlich (5)</option>
		</select>
	</td>
</tr>
<tr>
	<td colspan=2>Gebirge:</td>
	<td>
		<select name='[r: kraut]_gebirge'>
			<option value=0 [r,if(Gebirge == 0):"selected"]>Kein Vorkommen (0)</option>
			<option value=1 [r,if(Gebirge == 1):"selected"]>Sehr selten (1)</option>
			<option value=2 [r,if(Gebirge == 2):"selected"]>Selten (2)</option>
			<option value=3 [r,if(Gebirge == 3):"selected"]>Eher selten (3)</option>
			<option value=4 [r,if(Gebirge == 4):"selected"]>Gelegentlich (4)</option>
			<option value=5 [r,if(Gebirge == 5):"selected"]>Gewöhnlich (5)</option>
		</select>
	</td>
</tr>
<tr>
	<td colspan=2><span title='Wüstenrandgebiete und Wüsten'>Wüsten:</span></td>
	<td>
		<select name='[r: kraut]_wueste'>
			<option value=0 [r,if(Wueste == 0):"selected"]>Kein Vorkommen (0)</option>
			<option value=1 [r,if(Wueste == 1):"selected"]>Sehr selten (1)</option>
			<option value=2 [r,if(Wueste == 2):"selected"]>Selten (2)</option>
			<option value=3 [r,if(Wueste == 3):"selected"]>Eher selten (3)</option>
			<option value=4 [r,if(Wueste == 4):"selected"]>Gelegentlich (4)</option>
			<option value=5 [r,if(Wueste == 5):"selected"]>Gewöhnlich (5)</option>
		</select>
	</td>
</tr>
<tr>
	<td colspan=2>Maraskan:</td>
	<td>
		<select name='[r: kraut]_maraskan'>
			<option value=0 [r,if(Maraskan == 0):"selected"]>Kein Vorkommen (0)</option>
			<option value=1 [r,if(Maraskan == 1):"selected"]>Sehr selten (1)</option>
			<option value=2 [r,if(Maraskan == 2):"selected"]>Selten (2)</option>
			<option value=3 [r,if(Maraskan == 3):"selected"]>Eher selten (3)</option>
			<option value=4 [r,if(Maraskan == 4):"selected"]>Gelegentlich (4)</option>
			<option value=5 [r,if(Maraskan == 5):"selected"]>Gewöhnlich (5)</option>
		</select>
	</td>
</tr>