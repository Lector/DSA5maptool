[h: switchToken(arg(0))]
[h: group = arg(1)]

<tr>
	<td width='25'>
		&nbsp;
	</td>
	<td style="background-image: url('[r: tblImage("mainTheme",23)]'); background-repeat: repeat-y;" width='450'>
		<table style='border-spacing: 0px;' width='450'>
			<tr>
				<td width='16'>
					&nbsp;
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; height: 23;' width='170'>
					KAMPFTECHNIK
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: center' width='100'>
					Leiteig.
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: center;' width='50'>
					KTW
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: center;' width='40'>
					AT
				</td>
				<td style='border-top: 1px solid #eee5c8; border-bottom: 1px solid #eee5c8; text-align: center;' width='40'>
					PA
				</td>
				<td>
					&nbsp;
				</td>
			</tr>
		</table>
		<table style='border-spacing: 0px; margin-top: 5px;' width='450'>						
		[h: tBaum = eval(group)]
		[Foreach(tDaten, tBaum,""), CODE:
		{
			[h: tName = json.get(tDaten, "Name")]
			[h: tWert = json.get(tDaten, "FW")]
			[h: leit = ""]
			[h: maxleit = 0]
			[h,foreach(l, json.get(tDaten, "L"), ""),Code:
			{
				[h: maxleit = max(maxleit, eval(l))]
				[h: leit = ListAppend(leit, l, " &middot; ")]
			}]
			[h,if(leit == "FF"): atleit = FF; atleit = MU]
			[h: atbonus = max(0, floor((atleit - 8) / 3.0))]
			[h: at = tWert + atbonus]
			[h,if(leit == "FF"): pa = "-"; pa = ceil(tWert / 2.0) + max(0, floor((maxleit - 8) / 3.0))]
			<tr>
				<td style='padding-left: 15px;' width='186'>
					[r: tName]
				</td>
				<td style='text-align: center' width='100'>
					[r: leit]
				</td>
				<td style='text-align: center;' width='50'>
					[r: tWert]
				</td>
				<td style='text-align: center;' width='40'>
					[r: at]
				</td>
				<td style='text-align: center;' width='40'>
					[r: pa]
				</td>
				<td>
					&nbsp;
				</td>
			</tr>
		}]
		</table>
	</td>
	<td>
		&nbsp;
	</td>
</tr>