module.exports.generateHumanNameLists = function (sex) {

    let humanSubRace = Math.random() * 8 | 0;

    let nameList1 = [''];
    let nameList2 = [''];
    let nameList3 = [''];
    let nameList4 = [''];
    let nameList5 = [''];

    if (sex === 'male') {
        switch (humanSubRace) {
            case 0:
                nameList1 = ["", "", "b", "bh", "f", "h", "j", "kh", "m", "n", "nh", "r", "rh", "s", "z"];
                nameList2 = ["a", "e", "u", "a", "e", "u", "a", "e", "u", "i", "ei"];
                nameList3 = ["b", "d", "hm", "hn", "hl", "kh", "l", "m", "rd", "r", "s", "sh", "z"];
                nameList4 = ["a", "e", "u", "a", "e", "u", "a", "e", "u", "i", "ei"];
                nameList5 = ["d", "m", "n", "r"];
                break;
            case 1:
                nameList1 = ["", "b", "br", "d", "g", "gr", "h", "m", "n", "r", "st", "t", "v"];
                nameList2 = ["a", "e", "i", "o", "u"];
                nameList3 = ["", "br", "cr", "gr", "kv", "kr", "l", "ll", "ld", "lv", "nd", "ng", "nk", "nv", "rd", "rg", "rk", "rst", "rv", "v"];
                nameList4 = ["a", "e", "i", "o", "u"];
                nameList5 = ["", "", "", "d", "dd", "g", "l", "lm", "m", "n", "r", "rk", "rn"];
                break;
            case 2:
                nameList1 = ["", "", "b", "br", "f", "g", "gl", "gr", "h", "k", "m", "n", "p", "r", "s", "v"];
                nameList2 = ["a", "e", "i", "o"];
                nameList3 = ["b", "br", "d", "dr", "dg", "g", "gr", "r", "rg", "rd", "rv", "s", "v", "z"];
                nameList4 = ["a", "e", "i", "o"];
                nameList5 = ["f", "l", "m", "n", "r"];
                break;
            case 3:

                nameList1 = ["", "", "", "bl", "br", "fr", "g", "gr", "l", "m", "r", "st", "str", "t", "tr", "v", "z"];
                nameList2 = ["a", "e", "o", "u"];
                nameList3 = ["ck", "dr", "dv", "gr", "gn", "lc", "ld", "lv", "lb", "m", "nn", "nd", "nv", "rd", "rc", "rk", "rb"];
                nameList4 = ["a", "e", "o", "u"];
                nameList5 = ["m", "n", "r", "rth", "th"];
                break;
            case 4:
                nameList1 = ["b", "d", "g", "h", "j", "k", "l", "m", "n", "r", "s", "t", "th", "v", "z"];
                nameList2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "io", "ao", "eo", "eu", "ue"];
                nameList3 = ["d-k", "d-v", "k-d", "k-v", "k-m", "k-r", "m-k", "m-z", "m-v", "n-v", "n-z", "n-d", "r-k", "r-v", "r-z", "t-k", "r-d", "h-k", "h-z", "-k", "-d", "-m", "-n", "-v", "-z", "-t", "-r", "ch", "d", "h", "hp", "hk", "hv", "j", "k", "m", "n", "r", "rh", "t", "th", "v", "z", "ch", "d", "h", "hp", "hk", "hv", "j", "k", "m", "n", "r", "rh", "t", "th", "v", "z", "ch", "d", "h", "hp", "hk", "hv", "j", "k", "m", "n", "r", "rh", "t", "th", "v", "z"];
                nameList4 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "io", "ao", "eo", "eu", "ue"];
                nameList5 = ["", "", "d", "f", "h", "k", "n", "r", "s", "th", "z"];
                break;
            case 5:
                nameList1 = ["b", "br", "d", "dr", "f", "g", "j", "k", "m", "r", "s", "sh", "t", "vl", "z"];
                nameList2 = ["a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "oo", "ou", "au"];
                nameList3 = ["d", "dj", "j", "lm", "ld", "lv", "m", "mz", "mv", "n", "nz", "nd", "nr", "nd", "r", "rg", "rd", "rl", "rv", "rz", "sl", "sv", "sd", "th", "tv", "v", "z"];
                nameList4 = ["a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "oo", "ou", "au"];
                nameList5 = ["c", "d", "k", "r", "s", "sk", "t"];
                break;
            case 6:
                nameList1 = ["", "", "ch", "f", "h", "j", "l", "m", "q", "sh", "t", "th", "w", "z"];
                nameList2 = ["a", "i", "e", "o", "u", "ia", "ui", "io", "ie", "iu"];
                nameList3 = ["", "", "", "h", "m", "n", "ng", "p", "w", "y"];
                break;
            case 7:
                nameList1 = ["", "", "ch", "cr", "d", "gr", "f", "fr", "h", "m", "p", "r", "s", "t", "v", "z"];
                nameList2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ai", "ie", "ue", "ea"];
                nameList3 = ["b", "br", "c", "dr", "l", "ld", "lb", "m", "mb", "n", "nr", "nt", "nch", "r", "rf", "rv", "rn", "rc", "rd", "rt", "st", "sc", "t", "v", "z"];
                nameList4 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ai", "ie", "ue", "ea"];
                nameList5 = ["", "", "l", "n", "r", "s", "z"];
                break;
        }
    } else if (sex === 'female') {
        switch (humanSubRace) {
            case 0:
                nameList1 = ["", "", "c", "f", "h", "j", "m", "n", "r", "s", "sh", "y", "z"];
                nameList2 = ["a", "e", "u", "a", "e", "u", "o", "o", "i", "i", "ei"];
                nameList3 = ["d", "f", "hn", "hl", "hm", "hr", "l", "m", "n", "p", "r", "s", "sh", "sm", "sn", "t", "v", "z"];
                nameList4 = ["a", "e", "u", "a", "e", "u", "o", "o", "i", "i", "ei"];
                nameList5 = ["h", "l"];
                break;
            case 1:
                nameList1 = ["", "c", "j", "jh", "k", "l", "m", "n", "r", "s", "sh", "t"];
                nameList2 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "ai", "ei", "ie"];
                nameList3 = ["ch", "dr", "l", "ll", "lr", "ldr", "ls", "lz", "n", "ndr", "rl", "r", "rr", "rv", "ss", "sr", "sv", "w", "z", "zz", "zn"];
                nameList4 = ["a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "ee", "ai", "ei", "ie"];
                nameList5 = ["", "", "", "", "h", "l", "ll", "n"];
                break;
            case 2:
                nameList1 = ["c", "ch", "h", "k", "l", "m", "n", "r", "s", "t", "v", "z"];
                nameList2 = ["a", "e", "i", "o"];
                nameList3 = ["h", "hn", "hr", "l", "lm", "lr", "ln", "n", "nn", "r", "rn", "rl", "rm", "t", "th", "thr", "z"];
                nameList4 = ["a", "e", "i", "o"];
                nameList5 = ["", "", "", "", "", "", "h", "l", "n", "s"];
                break;
            case 3:
                nameList1 = ["", "", "b", "c", "h", "k", "l", "m", "n", "r", "s", "v", "w", "z"];
                nameList2 = ["a", "e", "i", "o"];
                nameList3 = ["fn", "fl", "fr", "g", "l", "lg", "lr", "m", "n", "r", "rh", "sh", "str", "th", "thr", "v", "vr"];
                nameList4 = ["a", "e", "i", "o"];
                nameList5 = ["", "", "", "", "y"];
                break;
            case 4:
                nameList1 = ["c", "ch", "f", "h", "k", "l", "m", "n", "r", "s", "t", "th", "v", "z"];
                nameList2 = ["a", "e", "i", "o", "u"];
                nameList3 = ["ch", "f", "fr", "h", "l", "m", "n", "ph", "s", "sh", "r", "th", "z", "zr", "zh"];
                nameList4 = ["a", "e", "i", "o", "u"];
                nameList5 = ["", "", "", "", "", "", "", "h", "s", "th"];
                break;
            case 5:
                nameList1 = ["", "", "d", "f", "h", "l", "m", "n", "r", "s", "sh", "t", "th", "v", "y", "z"];
                nameList2 = ["a", "e", "i", "u"];
                nameList3 = ["ch", "dr", "dh", "f", "fr", "gr", "h", "ldr", "lm", "ln", "lv", "lr", "mm", "mz", "mv", "ndr", "nr", "r", "rr", "rr", "rv", "rs", "rl", "v", "vr", "v", "vl"];
                nameList4 = ["a", "e", "i", "u"];
                nameList5 = ["", "", "", "", "", "", "", "", "", "", "", "", "l", "n", "s", "sh", "th"];
                break;
            case 6:
                nameList1 = ["b", "c", "ch", "d", "j", "l", "m", "n", "p", "q", "sh", "t", "ts", "x", "y", "z"];
                nameList2 = ["ai", "ia", "ao", "ei", "iao", "ui", "ua", "ue"];
                break;
            case 7:
                nameList1 = ["", "", "", "b", "d", "f", "j", "l", "m", "q", "s", "v"];
                nameList2 = ["a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "a", "e", "i", "o", "ui", "ua", "ai", "ia", "ie", "ei"];
                nameList3 = ["d", "l", "lm", "m", "n", "nc", "nd", "ndr", "nt", "nn", "r", "rt", "s", "t", "tt", "v"];
                nameList4 = ["", "", "", "b", "d", "f", "j", "l", "m", "q", "s", "v"];
                break;
        }
    }
    return [nameList1, nameList2, nameList3, nameList4, nameList5];
};