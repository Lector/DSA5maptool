[h: uebergabe = macro.args]
[h: switchToken(json.get(uebergabe, "token"))]
[h: improvement = json.get(uebergabe, "improvement")]
[h,switch(improvement),Code:
    case "herding": {
        <!-- +1 MU +1 IN +1 GE +1 VW -->
        [MU = MU + 1]
        [IN = IN + 1]
        [GE = GE + 1]
        [AW = AW + 1]

        <!-- +4 Körperbeherrschung +6 Sinnesschärfe -->
        [modifySkill(currentToken(), "Koerper", "Körperbeherrschung", 4)]
        [modifySkill(currentToken(), "Koerper", "Sinnesschärfe", 6)]

        <!-- Tricks: Ablegen, Komm, Laut, Sitz, Treiben -->
    };
    case "hunting": {
        <!-- +1 GE +1 KO -->
        [GE = GE + 1]
        [KO = KO + 1]

        <!-- +1 AT -->
        [newWaffen = "[]"]
        [foreach(waffe, Nahkampfwaffen, ""),Code:
        {
            [waffe = json.set(waffe, "AT", json.get(waffe, "AT") + 1)]
            [newWaffen = json.append(newWaffen, waffe)]
        }]
        [Nahkampfwaffen = newWaffen]

        <!--
        Fährtensuchen- oder Sinnesschärfe*-FW +8 (*für Flugtiere)
        Fliegen*- oder Körperbeherrschung-FW +6 (*für Flugtiere)
        -->
        [airborne = isAirborne(currentToken())]
        [if(airborne == 0),Code:{
            [modifySkill(currentToken(), "Natur", "Fährtensuchen", 8)]
            [modifySkill(currentToken(), "Koerper", "Körperbeherrschung", 6)]
        };{
            [modifySkill(currentToken(), "Koerper", "Sinnesschärfe", 8)]
            [modifySkill(currentToken(), "Koerper", "Fliegen", 6)]
        }]
        
        <!-- Tricks: Apport, Fass I, Laut, Still, Such -->
    };
    case "combat": {
        <!-- +1 MU +1 KK -->
        [MU = MU + 1]
        [KK = KK + 1]

        <!-- +2 AT +1 TP -->
        [newWaffen = "[]"]
        [foreach(waffe, Nahkampfwaffen, ""),Code:
        {
            [waffe = json.set(waffe, "TP", json.get(waffe, "TP") + "+1", "AT", json.get(waffe, "AT") + 2)]
            [newWaffen = json.append(newWaffen, waffe)]
        }]
        [Nahkampfwaffen = newWaffen]

        <!-- +20% LeP -->
        [increase = round(MaxLeP * 0.2)]
        [MaxLeP = MaxLeP + increase]
        [LeP = LeP + increase]

        <!-- Einschüchtern +4 -->
        [modifySkill(currentToken(), "Gesellschaft", "Einschüchtern", 4)]

        <!-- Tricks: Aus, Fass I+II -->
    };
    case "mount": {
        <!-- Nothing to do... -->
    };
    case "racing": {
        <!-- +2 GE +2 KO -->
        [GE = GE + 2]
        [KO = KO + 2]

        <!-- +25 % GS -->
        [GS = GS * 1.25]

        <!-- Körperbeherrschung-FW +8 -->
        [modifySkill(currentToken(), "Koerper", "Körperbeherrschung", 8)]

        <!-- Tricks: Komm, Sitz -->
    };
    case "tracking1": {
        <!-- +1 KL +2 IN +1 GE -->
        [KL = KL + 1]
        [IN = IN + 2]
        [GE = GE + 1]

        [modifySkill(currentToken(), "Natur", "Fährtensuchen", 8)]
    };
    case "tracking2": {
        <!-- +1 KL +2 IN +1 GE -->
        [KL = KL + 1]
        [IN = IN + 2]
        [GE = GE + 1]

        [modifySkill(currentToken(), "Koerper", "Sinnesschärfe", 8)]
    };
    case "drafting": {
        <!-- +2 KK +2 KO -->
        [KK = KK + 2]
        [KO = KO + 2]

        <!-- +25 % LeP -->
        [increase = round(MaxLeP * 0.25)]
        [MaxLeP = MaxLeP + increase]
        [LeP = LeP + increase]
    };
    case "guarding": {
        <!-- +2 MU +1 IN +2 VW -->
        [MU = MU + 2]
        [IN = IN + 1]
        [AW = AW + 2]

        <!-- +1 AT -->
        [newWaffen = "[]"]
        [foreach(waffe, Nahkampfwaffen, ""),Code:
        {
            [waffe = json.set(waffe, "AT", json.get(waffe, "AT") + 1)]
            [newWaffen = json.append(newWaffen, waffe)]
        }]
        [Nahkampfwaffen = newWaffen]
        
        <!-- +6 Einschüchtern -->
        [modifySkill(currentToken(), "Gesellschaft", "Einschüchtern", 6)]

        <!-- Tricks: Ablegen, Komm, Laut, Sitz, Wache -->
    };
    case "circus1": {
        <!-- +2 FF +2 GE -->
        [FF = FF + 2]
        [GE = GE + 2]

        <!-- Gaukeleien-FW +8 -->
        [modifySkill(currentToken(), "Koerper", "Gaukeleien", 8)]
        [modifySkill(currentToken(), "Koerper", "Klettern", 6)]

        <!-- Tricks: 4 Kunststücke nach Wahl -->
    };
    case "circus2": {
        <!-- +2 FF +2 GE -->
        [FF = FF + 2]
        [GE = GE + 2]

        <!-- Gaukeleien-FW +8 -->
        [modifySkill(currentToken(), "Koerper", "Gaukeleien", 8)]
        [modifySkill(currentToken(), "Koerper", "Körperbeherrschung", 6)]

        <!-- Tricks: 4 Kunststücke nach Wahl -->
    }
]

[h: closeDialog("chareditImprovePet")]

[h: noticeSelf("chareditImprovedPet")]
[h: refreshFrame(currentToken())]