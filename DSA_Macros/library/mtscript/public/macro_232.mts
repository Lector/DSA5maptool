[h: switchToken(arg(0))]
<!-- Hände werden bei Kulturschaffenden und Untoten genutzt sofern ihr Trefferzonenmodell Humanoid ist -->
[h,if((Typus == "Kulturschaffend" || Typus == "Untot") && Trefferzonenmodell == 0): value = 1; value = 0]
[h: macro.return = value]