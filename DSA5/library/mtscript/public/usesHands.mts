[h: switchToken(arg(0))]
<!-- Es ist nicht ganz leicht zu ermitteln welche Kampfregeln für welche Wesen gelten sollten.
Meistens ist es so dass Kreaturen mit Mächtiger Schlag nicht die üblichen Regeln für Nahkampfausrüstung nutzen -->
[h: trait = hasTrait("KampfSF", "Mächtiger Schlag", 1, currentToken())]
[h,if(trait != 0): return(0, 0)]
<!-- Hände werden bei Kulturschaffenden und Untoten genutzt sofern ihr Trefferzonenmodell Humanoid ist -->
[h,if((Typus == "Kulturschaffend" || Typus == "Untoter") && Trefferzonenmodell == 0): value = 1; value = 0]
[h: macro.return = value]