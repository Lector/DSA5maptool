[h: params = macro.args]

[h: check = decode(json.get(params, "check"))]
[h: playerNames = decode(json.get(params, "playerNames"))]
[h,foreach(player, playerNames),if(json.get(params, player) != ""),Code:{

    [h: execLink(macroLinkText("rollRequestedCheck@this", "none", check), 1, player)]
}]

[h: closeDialog("requestCheck")]
[h: noticeSelf("checkRequested")]