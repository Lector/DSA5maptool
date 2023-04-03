[h: switchToken(macro.args)]
[h: hasIni = hasInitiative(currentToken())]
[r,if(hasIni != 0),Code:{
<tr>
    <td colspan=2>
        <select size="1" name="VTinKR">
            [r,for(i, 0, 10, 1, ""),Code:{
            <option value="[r: i]" [r,if(i == VTinKR || (i==9 && VTinKR >= i)): "selected"]>[r: i+1]. Verteidigung in dieser KR ([r:-i*3])</option>
            }]
        </select>
    </td>
</td>
};{
<input type="hidden" name="VTinKR" value="0"/>
}]