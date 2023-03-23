[h,macro("abfrageImpersonate@this"): ""]

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

[h: actionLink = macroLinkText("changeZustandProcess@this", "")]
[dialog5("changeZustand", "width=425; height=500; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Zustände bearbeiten</title>
		<link rel='stylesheet' type='text/css' href='lib://this/styles/base.css?cachelib=false'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]">
				[r: header("Zustände")]
				<table style='border-spacing: 0px;' cellpadding='1'>
					<tr>
						<td/>
						<td style='padding-right: 3px; text-align: center'>
							<b>0</b>
						</td>
						<td style='padding-right: 3px; text-align: center'>
							<b>I</b>
						</td>
						<td style='padding-right: 3px; text-align: center'>
							<b>II</b>
						</td>
						<td style='padding-right: 3px; text-align: center'>
							<b>III</b>
						</td>
						<td style='padding-right: 3px; text-align: center'>
							<b>IV</b>
						</td>
						<td style='padding-right: 3px; text-align: center'>
							&nbsp;
						</td>
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							<span title='Ist nichts anderes genannt, verliert der Held nach jeweils 4 Stunden eine Stufe Schmerz'>Schmerz:</span>
						</td>
						[h: i=0]
						[while(i<=4,""), Code:
							{
								[h, if(Schmerz == i): check="&#10003;" ; check=""]
								<td style='padding-right: 3px; text-align: center'>
									[r:check]
								</td>
								[h: i=i+1]
							}
						]
						<td>
							<select name='schmerzmod'>
							[h: i=-4]
							[while(i<=4,""), Code:
								{
									[h, if(SchmerzMod == i): check="selected='selected'" ; check=""]
									<option [r:check] value=[r: i]>[r: strformat("%+x", i)]</option>
									[h: i=i+1]
								}
							]
							</select>
						</td>
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							Belastung:
						</td>
						[h: i=0]
						[while(i<=4,""), Code:
							{
								[h, if(Belastung == i): check="&#10003;" ; check=""]
								<td style='padding-right: 3px; text-align: center'>
									[r:check]
								</td>
								[h: i=i+1]
							}
						]
						<td>
							<select name='belastungmod'>
							[h: i=-4]
							[while(i<=4,""), Code:
								{
									[h, if(BelastungMod == i): check="selected='selected'" ; check=""]
									<option [r:check] value=[r: i]>[r: strformat("%+x", i)]</option>
									[h: i=i+1]
								}
							]
							</select>
						</td>
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							<span title='Ist der Auslöser nicht mehr vorhanden, baut sich die Furcht alle 5 Minuten um 1 Stufe ab, so nichts anderes angegeben ist.'>Furcht:</span>
						</td>
						[h: i=0]
						[while(i<=4,""), Code:
							{
								[h, if(Furcht == i): check="checked='checked'" ; check=""]
								<td>
									<input type='radio' name='furcht' value='[r:i]' [r:check]/>
								</td>
								[h: i=i+1]
							}
						]
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							<span title='Ist nichts anderes angegeben, baut sich Verwirrung jede Stunde um 1 Stufe ab.'>Verwirrung:</span>
						</td>
						[h: i=0]
						[while(i<=4,""), Code:
							{
								[h, if(Verwirrung == i): check="checked='checked'" ; check=""]
								<td>
									<input type='radio' name='verwirrung' value='[r:i]' [r:check]/>
								</td>
								[h: i=i+1]
							}
						]
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							<span title='Paralyse baut sich, sofern nichts anderes angegeben ist, jede halbe Stunde um 1 Stufe ab.'>Paralyse:</span>
						</td>
						[h: i=0]
						[while(i<=4,""), Code:
							{
								[h, if(Paralyse == i): check="checked='checked'" ; check=""]
								<td>
									<input type='radio' name='paralyse' value='[r:i]' [r:check]/>
								</td>
								[h: i=i+1]
							}
						]
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							<span title='Jede Stufe Betäubung verschwindet, so nichts anderes angegeben ist, nach einer Ruhephase von 3 Stunden'>Betäubung:</span>
						</td>
						[h: i=0][while(i<=4,""), Code:
							{
								[h, if(Betaeubung == i): check="checked='checked'" ; check=""]
								<td>
									<input type='radio' name='betaeubung' value='[r:i]' [r:check]/>
								</td>
								[h: i=i+1]
							}
						]
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							<span title='überanstrengung baut sich nach 6 Stunden Schlaf um 1 Stufe ab.'>überanstrengung:</span>
						</td>
						[h: i=0]
						[while(i<=4,""), Code:
							{
								[h, if(Ueberanstrengung == i): check="checked='checked'" ; check=""]
								<td>
									<input type='radio' name='ueberanstrengung' value='[r:i]' [r:check]/>
								</td>
								[h: i=i+1]
							}
						]
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							<span title='Die Entrückung baut sich jede Stunde um 1 ab.'>Entrückung:</span>
						</td>
						[h: i=0]
						[while(i<=4,""), Code:
							{
								[h, if(Entrueckung == i): check="checked='checked'" ; check=""]
								<td>
									<input type='radio' name='entrueckung' value='[r:i]' [r:check]/>
								</td>
								[h: i=i+1]
							}
						]
					</tr>
					<tr>
						<td style='padding-right: 3px; height: 25'>
							<span title='Trance baut sich alle 24 Stunden um 1 Stufe ab'>Trance:</span>
						</td>
						[h: i=0]
						[while(i<=4,""), Code:
							{
								[h, if(Trance == i): check="checked='checked'" ; check=""]
								<td>
									<input type='radio' name='trance' value='[r:i]' [r:check]/>
								</td>
								[h: i=i+1]
							}
						]
					</tr>
				</table>
				<table style='border-spacing: 0px; margin: 11px auto 8px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 101)]
							<button type="submit">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</body>
</html>
}]