[frame = getLibProperty("SLframe", "com.github.lector.dsa5maptool")]
[switch(frame), code:
    case "1": {
        [h: meisterbogen2("pc")]
    };
    case "2": {
        [h: meisterbogen2("npc")]
    };
    case "3": {
        [h: meisterbogenProben()]
    };
    case "4": {
        [h: meisterbogenKalender()]
    };
    case "5": {
        [h: meisterbogenHandouts()]
    };
    case "6": {
        [h: meisterbogenTools()]
    };
    default: {
        [h: meisterbogenTools()]
    }
]