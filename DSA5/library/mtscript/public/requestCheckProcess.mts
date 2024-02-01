[h: params = macro.args]

[h: check = checkFromForm(params)]
[h: playerNames = decode(json.get(params, "playerNames"))]
[h,foreach(player, playerNames),if(json.get(params, player) != ""),Code:{

    [h: execLink(macroLinkText("rollRequestedCheck@this", "none", json.append("[]",check, getPlayerName())), 1, player)]
}]

[h: closeDialog("requestCheck")]
[h: noticeSelf("checkRequested")]