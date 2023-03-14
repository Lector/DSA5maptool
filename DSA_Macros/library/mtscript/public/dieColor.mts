[h: die = arg(0)]
[h: threshold = arg(1)]
[h,if(die <= threshold): color = "#1d5c2f"; color = "#a42b1e"]

[h: macro.return = color]