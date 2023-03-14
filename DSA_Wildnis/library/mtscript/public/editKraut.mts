[h,if(isGM() == 0), Code:
	{
		[h,macro("inputFail@Lib:macros"): "gm"]
	};{}
]
[h,if(hasImpersonated() == 0), Code:
	{
		[selectID = getSelected()]
		[if(listCount(selectID) != 1), Code:
			{
				[h,macro("inputFail@Lib:macros"): "gmSelectFail"]
			};{}
		]
		[switchToken(selectID)]
	};{}
]

[h: kraut = currentToken()]

[h: actionLink = macroLinkText("editKrautProcess@this", "")]
[dialog5("krautEdit", "width=600; height=760; temporary=1; closebutton=0; noframe=0"):{
<html>
	<head>
		<title>Kräutersuche anpassen</title>
		<link rel='stylesheet' type='text/css' href='lib://macros/macro/style'/>
	</head>
	<body>
		<div class="border">
			<form action="[r:actionLink]" method="json">
				[r: header("Kraut anpassen")]
				<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
					<tr>
						<td colspan=2>
							Name:
						</td>
						<td>
							<input type='text' name='[r: kraut]_name' size='40' maxlength='100' value='[r: getName(kraut)]'>
						</td>
					</tr>
					<!--<tr>
						<td width=20>
							<input type='checkbox' name='[r: kraut]_active' value='1' [r,if(Aktiv == 1): 'checked']/>
						</td>
						<td colspan=2>
							Aktiv
						</td>
					</tr>-->
					<tr>
						<td colspan=2>
							Suchschwierigkeit:
						</td>
						<td>
							<table>
								<tr>
									<td>
										[h: options = ""]
										[h, for(i, -10, 11),Code:{
											[selected = ""]
											[h,if(i == Suchschwierigkeit): selected = "selected"]
											[options = "<option value="+i+" "+selected+">"+i+"</option>" + options)]
										}]
										<select name='[r: kraut]_such'>[r: options]</select>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td colspan=2>
							Bestimmungsschwierigkeit:
						</td>
						<td>
							<table>
								<tr>
									<td>
										[h: options = ""]
										[h, for(i, -10, 11),Code:{
											[selected = ""]
											[h,if(i == Bestimmungsschwierigkeit): selected = "selected"]
											[options = "<option value="+i+" "+selected+">"+i+"</option>" + options)]
										}]
										<select name='[r: kraut]_bestimmung'>[r: options]</select>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td colspan=2 style='white-space: nowrap;'>
							Anwendungen (QS1 - QS6):
						</td>
						[h: options1 = ""]
						[h, for(i, 1, 11),Code:{
							[selected = ""]
							[h,if(i == listGet(Anwendungen, 0)): selected = "selected"]
							[options1 = options1 + "<option value="+i+" "+selected+">"+i+"</option>")]
						}]
						[h: options2 = ""]
						[h, for(i, 1, 11),Code:{
							[selected = ""]
							[h,if(i == listGet(Anwendungen, 1)): selected = "selected"]
							[options2 = options2 + "<option value="+i+" "+selected+">"+i+"</option>")]
						}]
						[h: options3 = ""]
						[h, for(i, 1, 11),Code:{
							[selected = ""]
							[h,if(i == listGet(Anwendungen, 2)): selected = "selected"]
							[options3 = options3 + "<option value="+i+" "+selected+">"+i+"</option>")]
						}]
						[h: options4 = ""]
						[h, for(i, 1, 11),Code:{
							[selected = ""]
							[h,if(i == listGet(Anwendungen, 3)): selected = "selected"]
							[options4 = options4 + "<option value="+i+" "+selected+">"+i+"</option>")]
						}]
						[h: options5 = ""]
						[h, for(i, 1, 11),Code:{
							[selected = ""]
							[h,if(i == listGet(Anwendungen, 4)): selected = "selected"]
							[options5 = options5 + "<option value="+i+" "+selected+">"+i+"</option>")]
						}]
						[h: options6 = ""]
						[h, for(i, 1, 11),Code:{
							[selected = ""]
							[h,if(i == listGet(Anwendungen, 5)): selected = "selected"]
							[options6 = options6 + "<option value="+i+" "+selected+">"+i+"</option>")]
						}]
						<td>
							<table>
								<tr>
									<td>
										<select name='[r: kraut]_anwendung1'>[r: options1]</select>
									</td>
									<td>,</td>
									<td>
										<select name='[r: kraut]_anwendung2'>[r: options2]</select>
									</td>
									<td>,</td>
									<td>
										<select name='[r: kraut]_anwendung3'>[r: options3]</select>
									</td>
									<td>,</td>
									<td>
										<select name='[r: kraut]_anwendung4'>[r: options4]</select>
									</td>
									<td>,</td>
									<td>
										<select name='[r: kraut]_anwendung5'>[r: options5]</select>
									</td>
									<td>,</td>
									<td>
										<select name='[r: kraut]_anwendung6'>[r: options6]</select>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<th colspan=3 align="left" style='padding: 20px 0 5px 0;'>
							Typ
						</th>
					</tr>
					<tr>
						<td colspan=1 width=20>
							[h: checked = ""]
							[h,if(Heilpflanze == 1): checked = "checked"]
							<input type='checkbox' name='[r: kraut]_heil' [r: checked] value="1"/>
						</td>
						<td colspan=2>Heilpflanze</td>
					</tr>
					<tr>
						<td colspan=1>
							[h: checked = ""]
							[h,if(Giftpflanze == 1): checked = "checked"]
							<input type='checkbox' name='[r: kraut]_gift' [r: checked] value="1"/>
						</td>
						<td colspan=2>Giftpflanze</td>
					</tr>
					<tr>
						<td colspan=1>
							[h: checked = ""]
							[h,if(Nutzpflanze == 1): checked = "checked"]
							<input type='checkbox' name='[r: kraut]_nutz' [r: checked] value="1"/>
						</td>
						<td colspan=2>Nutzpflanze</td>
					</tr>
				[r,macro("inputVorkommen@this"): kraut]
				</table>
				<table style='border-spacing: 0px; margin: 10px auto 10px auto;'>
					<tr>
						<td>
							[h: button = tableImage("forms", 112)]
							<button type="submit" name="action">
								<img src="[r: button]"/>
							</button>
						</td>
					</tr>
				</table>
				
			<input type='hidden' name='token' value='[r: kraut]'/>
			</form>
		</div>
	</body>
</html>
}]