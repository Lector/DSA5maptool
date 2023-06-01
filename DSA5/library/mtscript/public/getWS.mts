[h: switchToken(arg(0))]

[h: ws = round(KO / 2.0)]

[h,if(hasTrait("Vorteile", "Eisern") != 0): ws = ws + 1]
[h,if(hasTrait("Nachteile", "Gläsern") != 0): ws = ws - 1]

[h: macro.return = ws]