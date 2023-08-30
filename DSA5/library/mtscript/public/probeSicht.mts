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

[h,switch(arg(0)),Code:
	case "at":{
		[text4 = "AT halbiert"]
		[dunkel4 = "/2"]
	};
	case "pa":{
		[text4 = "PA sinkt auf 1"]
		[dunkel4 = "=1"]
	};
	case "aw":{
		[text4 = "AW sinkt auf 1"]
		[dunkel4 = "=1"]
	};
	case "vt":{
		[text4 = "VT sinkt auf 1"]
		[dunkel4 = "=1"]
	};
	case "fk":{
		[text4 = "FK sinkt auf 1"]
		[dunkel4 = "=1"]
	}
]
[h,if(arg(0) == "fk"): mul = 2; mul = 1]
<td valign=top>
	<div class="label">
		Sicht
	</div>
</td>
<td style="padding-left: 1px;" valign="top">
	<table cellpadding="1">
		
		[h: dunkelsicht = getTraitLevel("Vorteile", "Dunkelsicht")]
		
		[h,switch(dunkelsicht),Code:
		case 1:
		{
			[h: dunkel1 = 0]
			[h: dunkel2 = -1]
			[h: dunkel3 = -2]
		};
		case 2:
		{
			[h: dunkel1 = 0]
			[h: dunkel2 = 0]
			[h: dunkel3 = 0]
		};
		default:
		{
			[h: dunkel1 = -1]
			[h: dunkel2 = -2]
			[h: dunkel3 = -3]
		}]
		
		[h,if(hasTrait("Nachteile", "Nachtblind") != 0), Code:
		{
			[h: dunkel1 = -2]
			[h: dunkel2 = -3]
			[h: dunkel3 = dunkel4]
			[h: text3 = text4]
		};
		{
			[h: text3 = dunkel3 * mul]
		}]

		[h,if(arg(0) != "fk"),Code:
		{
			[h,switch(getTraitLevel("KampfSF", "Blindkampf")),Code:
			case 1:
			{
				[dunkel4 = dunkel3]
				[text4 = text3]
				[dunkel3 = dunkel2]
				[text3 = dunkel2 * mul]
				[dunkel2 = dunkel1]
				[dunkel1 = 0]
			};
			case 2:
			{
				[dunkel4 = dunkel2]
				[text4 = dunkel2 * mul]
				[dunkel3 = dunkel1]
				[text3 = dunkel1 * mul]
				[dunkel2 = 0]
				[dunkel1 = 0]
			};
			default:{}]
		};{}]
		
		[h,if(isNumber(dunkel1)): dunkel1 = dunkel1 * mul]
		[h,if(isNumber(dunkel2)): dunkel2 = dunkel2 * mul]
		[h,if(isNumber(dunkel3)): dunkel3 = dunkel3 * mul]
		[h,if(isNumber(dunkel4)): dunkel4 = dunkel4 * mul]

		[h: checked0 = ""]
		[h: checked1 = ""]
		[h: checked2 = ""]
		[h: checked3 = ""]
		[h: checked4 = ""]
		[h: illumination = 0]
		[h: target = getTarget(currentToken())]
		[h,if(target != ""): illumination = getIllumination(target, currentToken())]
		[h,if(getState("Blind") == 1 || hasTrait("Nachteile", "Blind") == 1): illumination = 4]
		[h,switch(illumination):
			case 0: checked0 = "checked";
			case 1: checked1 = "checked";
			case 2: checked2 = "checked";
			case 3: checked3 = "checked";
			case 4: checked4 = "checked";
		]
		
		
		<tr>
			<td>
				<input type="radio" name="sicht" value="0" [r: checked0]>
			</td>
			<td>
				Stufe 0: Sicht klar & ungestört (0)
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="sicht" value="[r:dunkel1]" [r: checked1]>
			</td>
			<td>
				Stufe 1: leichte Störung der Sicht ([r:dunkel1])
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="sicht" value="[r:dunkel2]" [r: checked2]>
			</td>
			<td>
				Stufe 2: Ziel als Silhouette erkennbar ([r:dunkel2])
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="sicht" value="[r:dunkel3]" [r: checked3]>
			</td>
			<td>
				Stufe 3: Ziel schemenhaft erkennbar ([r:text3])
			</td>
		</tr>
		<tr>
			<td>
				<input type="radio" name="sicht" value="[r:dunkel4]" [r:checked4]>
			</td>
			<td>
				Stufe 4: Ziel unsichtbar ([r: text4])
			</td>
		</tr>
	</table>
</td>