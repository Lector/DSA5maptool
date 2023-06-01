[h: kalenderDaten = getLibProperty("KalenderMain", "com.github.lector.dsa5maptool")]

[h: t1check = ""]
[h: t2check = ""]
[h: t3check = ""]
[h: t4check = ""]
[h: t5check = ""]
[h: t6check = ""]
[h: t7check = ""]
[h: t8check = ""]
[h: t9check = ""]
[h: t10check = ""]
[h: t11check = ""]
[h: t12check = ""]
[h: t13check = ""]
[h: t14check = ""]
[h: t15check = ""]
[h: t16check = ""]
[h: t17check = ""]
[h: t18check = ""]
[h: t19check = ""]
[h: t20check = ""]
[h: t21check = ""]
[h: t22check = ""]
[h: t23check = ""]
[h: t24check = ""]
[h: t25check = ""]
[h: t26check = ""]
[h: t27check = ""]
[h: t28check = ""]
[h: t29check = ""]
[h: t30check = ""]
[h,switch(getStrProp(kalenderDaten, "zgTag")):
    case 1: t1check = "selected='selected'";
	case 2: t2check = "selected='selected'";
	case 3: t3check = "selected='selected'";
	case 4: t4check = "selected='selected'";
	case 5: t5check = "selected='selected'";
	case 6: t6check = "selected='selected'";
	case 7: t7check = "selected='selected'";
	case 8: t8check = "selected='selected'";
	case 9: t9check = "selected='selected'";
	case 10: t10check = "selected='selected'";
	case 11: t11check = "selected='selected'";
	case 12: t12check = "selected='selected'";
	case 13: t13check = "selected='selected'";
	case 14: t14check = "selected='selected'";
	case 15: t15check = "selected='selected'";
	case 16: t16check = "selected='selected'";
	case 17: t17check = "selected='selected'";
	case 18: t18check = "selected='selected'";
	case 19: t19check = "selected='selected'";
	case 20: t20check = "selected='selected'";
	case 21: t21check = "selected='selected'";
	case 22: t22check = "selected='selected'";
	case 23: t23check = "selected='selected'";
	case 24: t24check = "selected='selected'";
	case 25: t25check = "selected='selected'";
	case 26: t26check = "selected='selected'";
	case 27: t27check = "selected='selected'";
	case 28: t28check = "selected='selected'";
	case 29: t29check = "selected='selected'";
	case 30: t30check = "selected='selected'"
]

[h: m1check = ""]
[h: m2check = ""]
[h: m3check = ""]
[h: m4check = ""]
[h: m5check = ""]
[h: m6check = ""]
[h: m7check = ""]
[h: m8check = ""]
[h: m9check = ""]
[h: m10check = ""]
[h: m11check = ""]
[h: m12check = ""]
[h: m13check = ""]
[h,switch(getStrProp(kalenderDaten, "zgMonat")):
    case 1: m1check = "selected='selected'";
	case 2: m2check = "selected='selected'";
	case 3: m3check = "selected='selected'";
	case 4: m4check = "selected='selected'";
	case 5: m5check = "selected='selected'";
	case 6: m6check = "selected='selected'";
	case 7: m7check = "selected='selected'";
	case 8: m8check = "selected='selected'";
	case 9: m9check = "selected='selected'";
	case 10: m10check = "selected='selected'";
	case 11: m11check = "selected='selected'";
	case 12: m12check = "selected='selected'";
	case 13: m13check = "selected='selected'"
]

[h: sysBF = ""]
[h: sysHal = ""]
[h: sysGE = ""]
[h: sysJDUan = ""]
[h: sysJDUar = ""]
[h: sysJDUknk = ""]
[h: sysJDUno = ""]
[h: sysHor = ""]
[h: sysKur = ""]
[h: sysJDL = ""]
[h: sysEA = ""]
[h: sysJL = ""]
[h: sysFDW = ""]
[h: sysZwe = ""]
[h,switch(getStrProp(kalenderDaten, "zgSystem")):
    case "Bosparans Fall": sysBF = "selected='selected'";
	case "Hal": sysHal = "selected='selected'";
	case "Golgaris Erscheinen": sysGE = "selected='selected'";
	case "JdU - Andergast": sysJDUan = "selected='selected'";
	case "JdU - Aranien": sysJDUar = "selected='selected'";
	case "JdU - Kahet ni Kemi": sysJDUknk = "selected='selected'";
	case "JdU - Nostria": sysJDUno = "selected='selected'";
	case "Horas": sysHor = "selected='selected'";
	case "Kurkum": sysKur = "selected='selected'";
	case "Jahre des Lichts": sysJDL = "selected='selected'";
	case "E.-Akte": sysEA = "selected='selected'";
	case "Jurgas Landung": sysJL = "selected='selected'";
	case "Flug des Weltendiskus": sysFDW = "selected='selected'";
	case "Zwerge": sysZwe = "selected='selected'"
]

		[h: actionLinkDatum = macroLinkText("kalZGDatumProcess@this", "")]
		[h: actionLinkZeitrechnung = macroLinkText("kalZGSystemProcess@this", "")]
		<form action="[r:actionLinkDatum]">
			<table style='border-spacing: 0px; margin: 10px auto 0px auto;'>
				<tr>
					<td style='font-weight: bold; text-align: center;'>
						Aktuelles Datum:
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td>
									<span title='Tag / Monat / Jahr auswählen (negative Jahreszahlen sind erlaubt)'>T/M/J:&nbsp;</span>
								</td>
								<td style='padding-right: 5px;'>
									<select name='fTag' size='1'>
										<option [r: t1check]>1</option>
										<option [r: t2check]>2</option>
										<option [r: t3check]>3</option>
										<option [r: t4check]>4</option>
										<option [r: t5check]>5</option>
										<option [r: t6check]>6</option>
										<option [r: t7check]>7</option>
										<option [r: t8check]>8</option>
										<option [r: t9check]>9</option>
										<option [r: t10check]>10</option>
										<option [r: t11check]>11</option>
										<option [r: t12check]>12</option>
										<option [r: t13check]>13</option>
										<option [r: t14check]>14</option>
										<option [r: t15check]>15</option>
										<option [r: t16check]>16</option>
										<option [r: t17check]>17</option>
										<option [r: t18check]>18</option>
										<option [r: t19check]>19</option>
										<option [r: t20check]>20</option>
										<option [r: t21check]>21</option>
										<option [r: t22check]>22</option>
										<option [r: t23check]>23</option>
										<option [r: t24check]>24</option>
										<option [r: t25check]>25</option>
										<option [r: t26check]>26</option>
										<option [r: t27check]>27</option>
										<option [r: t28check]>28</option>
										<option [r: t29check]>29</option>
										<option [r: t30check]>30</option>
									</select>
								</td>
								<td style='padding-right: 5px;'>
									<select name='fMonat' size='1'>
										<option [r: m1check]>1</option>
										<option [r: m2check]>2</option>
										<option [r: m3check]>3</option>
										<option [r: m4check]>4</option>
										<option [r: m5check]>5</option>
										<option [r: m6check]>6</option>
										<option [r: m7check]>7</option>
										<option [r: m8check]>8</option>
										<option [r: m9check]>9</option>
										<option [r: m10check]>10</option>
										<option [r: m11check]>11</option>
										<option [r: m12check]>12</option>
										<option [r: m13check]>13</option>
									</select>
								</td>
								<td>
									<input type='text' name='fJahr' size='5' maxlength='5' value='[r: getStrProp(kalenderDaten, "zgJahr")]'>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td style='text-align: center'>
						<button type="submit" class="row-container" name="actionDatum">
							<img src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/date.png")]'/>
							Datum ändern
						</button>
					</td>
				</tr>
			</table>
		</form>
		<br>
		<form action="[r:actionLinkZeitrechnung]">
			<table style='border-spacing: 0px; margin: 0px auto 0px auto;'>
				<tr>
					<td style='font-weight: bold; text-align: center;'>
						Aktuelle Zeitrechnung:
					</td>
				</tr>
				<tr>
					<td>
						<table style='border-spacing: 0px;' cellpadding='0'>
							<tr>
								<td>
									<span title='Art der Zeitrechnung auswählen'>System:&nbsp;</span>
								</td>
								<td>
									<select name='fSystem' size='1'>
										<option [r: sysBF]>Bosparans Fall</option>
										<option [r: sysHal]>Hal</option>
										<option [r: sysGE]>Golgaris Erscheinen</option>
										<option [r: sysJDUan]>JdU - Andergast</option>
										<option [r: sysJDUar]>JdU - Aranien</option>
										<option [r: sysJDUknk]>JdU - Kahet ni Kemi</option>
										<option [r: sysJDUno]>JdU - Nostria</option>
										<option [r: sysHor]>Horas</option>
										<option [r: sysKur]>Kurkum</option>
										<option [r: sysJDL]>Jahre des Lichts</option>
										<option [r: sysEA]>E.-Akte</option>
										<option [r: sysJL]>Jurgas Landung</option>
										<option [r: sysFDW]>Flug des Weltendiskus</option>
										<option [r: sysZwe]>Zwerge</option>
									</select>
								</td>
							</tr>
						</table>
					</td>				
				</tr>
				<tr>
					<td style='text-align: center'>
						<button type="submit" class="row-container" name="actionSystem">
						<img src='[r: data.getStaticData("com.github.lector.dsa5maptool", "/public/images/tools/dateSystem.png")]'/>
						System ändern
					</button>
					</td>
				</tr>
			</table>
		</form>