[h: switchToken(arg(0))]
[h: group = arg(1)]


<div class="panel-round">
	<div class="equip-table" id="combatTechnique">
		<div>
			KAMPFTECHNIK
		</div>
		<div>
			Leiteig.
		</div>
		<div>
			KTW
		</div>
		<div>
			AT
		</div>
		<div>
			PA
		</div>
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
			<div >
				[r: tName]
			</div>
			<div>
				[r: leit]
			</div>
			<div>
				[r: tWert]
			</div>
			<div>
				[r: at]
			</div>
			<div>
				[r: pa]
			</div>
		}]
	</div>
</div>