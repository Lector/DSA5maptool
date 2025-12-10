[h: switchToken(arg(0))]
[h: hasIni = hasInitiative(currentToken())]
[r,if(hasIni != 0),Code:{
[h: mul = 3]
[h: mp = hasTrait("KampfSF", "Meisterparade", 1, currentToken())]
[h: mmp = hasTrait("KampfSF", "Machtvolle Meisterparade", 1, currentToken())]
[h,if(mp > 0): mul = mul - 1]
[h,if(mmp > 0): mul = mul - 1]
<tr>
    <td colspan=2>
        <select size="1" name="VTinKR">
            [r,for(i, 0, 10, 1, ""),Code:{
            <option value="[r: -i*mul]" [r,if(i == VTinKR || (i==9 && VTinKR >= i)): "selected"]>[r: i+1]. Verteidigung in dieser KR ([r:-i*mul])</option>
            }]
        </select>
    </td>
</td>
};{
<input type="hidden" name="VTinKR" value="0"/>
}]