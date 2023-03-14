[h: actualValue = arg(0)]
[h: originalValue = arg(1)]
[h: standardColor = arg(2)]

[h,if(actualValue < originalValue): color = "#a42b1e"; color = arg(2)]
[h,if(actualValue > originalValue): color = "#0099ff"]
[h: macro.return = color]