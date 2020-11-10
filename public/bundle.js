(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let nameGen = require('./name_generator.js');

$(document).ready(function () {

    let msex, mrace;

    generateCharacter();

    $('#regenerate').click(function () {
        generateCharacter();
    });



    function generateCharacter() {

        pickRandomSex();

        pickRandomRace();

        pickRandomName();

        pickRandomClass();

        rollAllStats();

    }

    function pickRandomSex() {
        let sex = Math.floor(Math.random() * 2);

        switch (sex) {
            case 0:
                $('#male').prop("checked", true);
                msex = 'male';
                return;
            case 1:
                $('#female').prop("checked", true);
                msex = 'female';
                return;
        }
    }


    function pickRandomRace() {
        let select = $('#race');

        const length  = select.children('option').length;
        const index = Math.floor(Math.random() * length);
        $("#race>option").eq(index).prop('selected', true);

        mrace = select.val();
    }

    function pickRandomName() {
        let name = nameGen.generateName(msex, mrace);

        $("#name").val(name);
    }

    function pickRandomClass() {
        let fclass = $('#class');

        const length  = fclass.children('option').length;
        const index = Math.floor(Math.random() * length);
        $("#class>option").eq(index).prop('selected', true);
    }

    function rollAllStats() {

        $('#Strength').val(rollRandomStat());

        $('#Dexterity').val(rollRandomStat());

        $('#Constitution').val(rollRandomStat());

        $('#Intelligence').val(rollRandomStat());

        $('#Wisdom').val(rollRandomStat());

        $('#Charisma').val(rollRandomStat());

    }

    function rollRandomStat() {

        let dice = rollFourD6();

        dice = dropLowestScore(dice);

        return totalDiceScores(dice);

    }

    function rollFourD6() {
        return [Math.floor(Math.random() * Math.floor(6)) + 1,
            Math.floor(Math.random() * Math.floor(6)) + 1,
            Math.floor(Math.random() * Math.floor(6)) + 1,
            Math.floor(Math.random() * Math.floor(6)) + 1 ];
    }

    function dropLowestScore(dice) {

        let lowestRoll = 6;
        let lowestRollIndex = 0;

        //determine lowest roll
        for (let i = 0; i < 4; i++) {
            if (dice[i] < lowestRoll) {
                lowestRoll = dice[i];
                lowestRollIndex = i;
            }
        }

        //set it to zero - effectively removing it
        for (let i = 0; i < 4; i++) {
            if (i === lowestRollIndex) {
                dice[i] = 0;
            }
        }

        return dice;
    }

    function totalDiceScores(dice) {

        let total = 0;

        for (let i = 0; i < 4; i++) {
            total += dice[i];
        }

        return total;
    }

});
},{"./name_generator.js":2}],2:[function(require,module,exports){
let filter = require('./profanity_checker.js');

let dragonborn = require('./race_names/dragonborn_gen.js');
let dwarf = require('./race_names/dwarf_gen.js');
let elf = require('./race_names/elf_gen.js');
let gnome = require('./race_names/gnome_gen.js');
let halfElf = require('./race_names/half-elf_gen.js');
let halfOrc = require('./race_names/half-orc_gen.js');
let halfling = require('./race_names/halfling_gen.js');
let human = require('./race_names/human_gen.js');
let tiefling = require('./race_names/tiefling_gen.js');

module.exports.generateName = function (sex, race) {

    let res = '';
    let lists;
    do {
        switch (race) {
            case 'Dragonborn':
                lists = dragonborn.generateDragonbornNameLists(sex);
                break;
            case 'Dwarf':
                lists = dwarf.generateDwarfNameLists(sex);
                break;
            case 'Elf':
                lists = elf.generateElfNameLists(sex);
                break;
            case 'Gnome':
                lists = gnome.generateGnomeNameLists(sex);
                break;
            case 'Half-Elf':
                lists = halfElf.generateHalfElfNameLists(sex);
                break;
            case 'Halfling':
                lists = halfling.generateHalflingNameLists(sex)
                break;
            case 'Half-Orc':
                lists = halfOrc.generateHalfOrcNameLists(sex);
                break;
            case 'Human':
                lists = human.generateHumanNameLists(sex);
                break;
            case 'Tiefling':
                lists = tiefling.generateTieflingNameLists(sex);
                break;
        }

        res += generateNameFromLists(lists);

    } while (filter.isProfane(res));

    return res;
};

function generateNameFromLists(lists) {
    let name = '';

    for (let i = 0; i < lists.length; i++) {

        name += lists[i][Math.random() * lists[i].length | 0];

    }
    return name;
}
},{"./profanity_checker.js":3,"./race_names/dragonborn_gen.js":4,"./race_names/dwarf_gen.js":5,"./race_names/elf_gen.js":6,"./race_names/gnome_gen.js":7,"./race_names/half-elf_gen.js":8,"./race_names/half-orc_gen.js":9,"./race_names/halfling_gen.js":10,"./race_names/human_gen.js":11,"./race_names/tiefling_gen.js":12}],3:[function(require,module,exports){
let Filter = require('bad-words'),
    filter = new Filter();

module.exports.isProfane = function(s) {
    return filter.isProfane(s);
};
},{"bad-words":13}],4:[function(require,module,exports){
module.exports.generateDragonbornNameLists = function (sex) {

    let nameList1;
    let nameList2;

    if (sex === 'male') {
        nameList1 = ["Ali", "Ar", "Ba", "Bal", "Bel", "Bha", "Bren", "Caer", "Calu", "Dur", "Do", "Dra", "Era", "Faer", "Fro", "Gre", "Ghe", "Gora", "He", "Hi", "Ior", "Jin", "Jar", "Kil", "Kriv", "Lor", "Lumi", "Mar", "Mor", "Med", "Nar", "Nes", "Na", "Oti", "Orla", "Pri", "Pa", "Qel", "Ravo", "Ras", "Rho", "Sa", "Sha", "Sul", "Taz", "To", "Trou", "Udo", "Uro", "Vor", "Vyu", "Vrak", "Wor", "Wu", "Wra", "Wul", "Xar", "Yor", "Zor", "Zra"];
        nameList2 = ["barum", "bor", "broth", "ciar", "crath", "daar", "dhall", "dorim", "farn", "fras", "gar", "ghull", "grax", "hadur", "hazar", "jhan", "jurn", "kax", "kris", "kul", "lasar", "lin", "mash", "morn", "naar", "prax", "qiroth", "qrin", "qull", "rakas", "rash", "rinn", "roth", "sashi", "seth", "skan", "trin", "turim", "varax", "vroth", "vull", "warum", "wunax", "xan", "xiros", "yax", "ythas", "zavur", "zire", "ziros"];
    } else if (sex === 'female') {
        nameList1 = ["Ari", "A", "Bi", "Bel", "Cris", "Ca", "Drys", "Da", "Erli", "Esh", "Fae", "Fen", "Gur", "Gri", "Hin", "Ha", "Irly", "Irie", "Jes", "Jo", "Ka", "Kel", "Ko", "Lilo", "Lora", "Mal", "Mi", "Na", "Nes", "Nys", "Ori", "O", "Ophi", "Phi", "Per", "Qi", "Quil", "Rai", "Rashi", "So", "Su", "Tha", "Ther", "Uri", "Ushi", "Val", "Vyra", "Welsi", "Wra", "Xy", "Xis", "Ya", "Yr", "Zen", "Zof"];
        nameList2 = ["birith", "bis", "bith", "coria", "cys", "dalynn", "drish", "drith", "faeth", "fyire", "gil", "gissa", "gwen", "hime", "hymm", "karyn", "kira", "larys", "liann", "lyassa", "meila", "myse", "norae", "nys", "patys", "pora", "qorel", "qwen", "rann", "riel", "rina", "rinn", "rish", "rith", "saadi", "shann", "sira", "thibra", "thyra", "vayla", "vyre", "vys", "wophyl", "wyn", "xiris", "xora", "yassa", "yries", "zita", "zys"];
    }
    return [nameList1, nameList2];
};
},{}],5:[function(require,module,exports){
module.exports.generateDwarfNameLists = function (sex) {
    let nameList1;
    let nameList2;

    if (sex === 'male') {
        nameList1 = ["Ad", "Am", "Arm", "Baer", "Daer", "Bal", "Ban", "Bar", "Bel", "Ben", "Ber", "Bhal", "Bhar", "Bhel", "Bram", "Bran", "Brom", "Brum", "Bun", "Dal", "Dar", "Dol", "Dul", "Eb", "Em", "Erm", "Far", "Gal", "Gar", "Ger", "Gim", "Gral", "Gram", "Gran", "Grem", "Gren", "Gril", "Gry", "Gul", "Har", "Hjal", "Hjol", "Hjul", "Hor", "Hul", "Hur", "Kar", "Khar", "Kram", "Krom", "Krum", "Mag", "Mal", "Mel", "Mor", "Muir", "Mur", "Rag", "Ran", "Reg", "Rot", "Thal", "Thar", "Thel", "Ther", "Tho", "Thor", "Thul", "Thur", "Thy", "Tor", "Ty", "Um", "Urm", "Von"];
        nameList2 = ["adin", "bek", "brek", "dahr", "dain", "dal", "dan", "dar", "dek", "dir", "dohr", "dor", "drak", "dram", "dren", "drom", "drum", "drus", "duhr", "dur", "dus", "garn", "gram", "gran", "grim", "grom", "gron", "grum", "grun", "gurn", "gus", "iggs", "kahm", "kam", "kohm", "kom", "kuhm", "kum", "kyl", "man", "mand", "mar", "mek", "miir", "min", "mir", "mond", "mor", "mun", "mund", "mur", "mus", "myl", "myr", "nam", "nar", "nik", "nir", "nom", "num", "nur", "nus", "nyl", "rak", "ram", "ren", "rig", "rigg", "rik", "rim", "rom", "ron", "rum", "rus", "ryl", "tharm", "tharn", "thran", "thrum", "thrun"];
    } else if (sex === 'female') {
        nameList1 = ["An", "Ar", "Baer", "Bar", "Bel", "Belle", "Bon", "Bonn", "Braen", "Bral", "Bralle", "Bran", "Bren", "Bret", "Bril", "Brille", "Brol", "Bron", "Brul", "Bryl", "Brylle", "Bryn", "Bryt", "Byl", "Bylle", "Daer", "Dear", "Dim", "Ed", "Ein", "El", "Gem", "Ger", "Gwan", "Gwen", "Gwin", "Gwyn", "Gym", "Ing", "Jen", "Jenn", "Jin", "Jyn", "Kait", "Kar", "Kat", "Kath", "Ket", "Las", "Lass", "Les", "Less", "Lyes", "Lys", "Lyss", "Maer", "Maev", "Mar", "Mis", "Mist", "Myr", "Mys", "Myst", "Naer", "Nal", "Nas", "Nass", "Nes", "Nis", "Nys", "Raen", "Ran", "Red", "Reyn", "Run", "Ryn", "Sar", "Sol", "Tas", "Taz", "Tis", "Tish", "Tiz", "Tor", "Tys", "Tysh"];
        nameList2 = ["belle", "bera", "delle", "deth", "dielle", "dille", "dish", "dora", "dryn", "dyl", "giel", "glia", "glian", "gwyn", "la", "leen", "leil", "len", "lin", "linn", "lyl", "lyn", "lynn", "ma", "mera", "mora", "mura", "myl", "myla", "nan", "nar", "nas", "nera", "nia", "nip", "nis", "niss", "nora", "nura", "nyl", "nys", "nyss", "ra", "ras", "res", "ri", "ria", "rielle", "rin", "ris", "ros", "ryl", "ryn", "sael", "selle", "sora", "syl", "thel", "thiel", "tin", "tyn", "va", "van", "via", "vian", "waen", "win", "wyn", "wynn"];
    }
    return [nameList1, nameList2];
};
},{}],6:[function(require,module,exports){
module.exports.generateElfNameLists = function (sex) {
    let nameList1;
    let nameList2;

    if (sex === 'male') {
        nameList1 = ["Ad", "Ae", "Bal", "Bei", "Car", "Cra", "Dae", "Dor", "El", "Ela", "Er", "Far", "Fen", "Gen", "Glyn", "Hei", "Her", "Ian", "Ili", "Kea", "Kel", "Leo", "Lu", "Mira", "Mor", "Nae", "Nor", "Olo", "Oma", "Pa", "Per", "Pet", "Qi", "Qin", "Ralo", "Ro", "Sar", "Syl", "The", "Tra", "Ume", "Uri", "Va", "Vir", "Waes", "Wran", "Yel", "Yin", "Zin", "Zum"];
        nameList2 = ["balar", "beros", "can", "ceran", "dan", "dithas", "faren", "fir", "geiros", "golor", "hice", "horn", "jeon", "jor", "kas", "kian", "lamin", "lar", "len", "maer", "maris", "menor", "myar", "nan", "neiros", "nelis", "norin", "peiros", "petor", "qen", "quinal", "ran", "ren", "ric", "ris", "ro", "salor", "sandoral", "toris", "tumal", "valur", "ven", "warin", "wraek", "xalim", "xidor", "yarus", "ydark", "zeiros", "zumin"];
    } else if (sex === 'female') {
        nameList1 = ["Ad", "Ara", "Bi", "Bry", "Cai", "Chae", "Da", "Dae", "Eil", "En", "Fa", "Fae", "Gil", "Gre", "Hele", "Hola", "Iar", "Ina", "Jo", "Key", "Kris", "Lia", "Lora", "Mag", "Mia", "Neri", "Ola", "Ori", "Phi", "Pres", "Qi", "Qui", "Rava", "Rey", "Sha", "Syl", "Tor", "Tris", "Ula", "Uri", "Val", "Ven", "Wyn", "Wysa", "Xil", "Xyr", "Yes", "Ylla", "Zin", "Zyl"];
        nameList2 = ["banise", "bella", "caryn", "cyne", "di", "dove", "fiel", "fina", "gella", "gwyn", "hana", "harice", "jyre", "kalyn", "krana", "lana", "lee", "leth", "lynn", "moira", "mys", "na", "nala", "phine", "phyra", "qirelle", "ra", "ralei", "rel", "rie", "rieth", "rona", "rora", "roris", "satra", "stina", "sys", "thana", "thyra", "tris", "varis", "vyre", "wenys", "wynn", "xina", "xisys", "ynore", "yra", "zana", "zorwyn"];
    }
    return [nameList1, nameList2];
};

},{}],7:[function(require,module,exports){
module.exports.generateGnomeNameLists = function (sex) {
    let nameList1;
    let nameList2;

    if (sex === 'male') {
        nameList1 = ["Al", "Ari", "Bil", "Bri", "Cal", "Cor", "Dav", "Dor", "Eni", "Er", "Far", "Fel", "Ga", "Gra", "His", "Hor", "Ian", "Ipa", "Je", "Jor", "Kas", "Kel", "Lan", "Lo", "Man", "Mer", "Nes", "Ni", "Or", "Oru", "Pana", "Po", "Qua", "Quo", "Ras", "Ron", "Sa", "Sal", "Sin", "Tan", "To", "Tra", "Um", "Uri", "Val", "Vor", "War", "Wil", "Wre", "Xal", "Xo", "Ye", "Yos", "Zan", "Zil"];
        nameList2 = ["bar", "ben", "bis", "corin", "cryn", "don", "dri", "fan", "fiz", "gim", "grim", "hik", "him", "ji", "jin", "kas", "kur", "len", "lin", "min", "mop", "morn", "nan", "ner", "ni", "pip", "pos", "rick", "ros", "rug", "ryn", "ser", "ston", "tix", "tor", "ver", "vyn", "win", "wor", "xif", "xim", "ybar", "yur", "ziver", "zu"];
    } else if (sex === 'female') {
        nameList1 = ["Alu", "Ari", "Ban", "Bree", "Car", "Cel", "Daphi", "Do", "Eili", "El", "Fae", "Fen", "Fol", "Gal", "Gren", "Hel", "Hes", "Ina", "Iso", "Jel", "Jo", "Klo", "Kri", "Lil", "Lori", "Min", "My", "Ni", "Ny", "Oda", "Or", "Phi", "Pri", "Qi", "Que", "Re", "Rosi", "Sa", "Sel", "Spi", "Ta", "Tifa", "Tri", "Ufe", "Uri", "Ven", "Vo", "Wel", "Wro", "Xa", "Xyro", "Ylo", "Yo", "Zani", "Zin"];
        nameList2 = ["bi", "bys", "celi", "ci", "dira", "dysa", "fi", "fyx", "gani", "gyra", "hana", "hani", "kasys", "kini", "la", "li", "lin", "lys", "mila", "miphi", "myn", "myra", "na", "niana", "noa", "nove", "phina", "pine", "qaryn", "qys", "rhana", "roe", "sany", "ssa", "sys", "tina", "tra", "wyn", "wyse", "xi", "xis", "yaris", "yore", "za", "zyre"];
    }
    return [nameList1, nameList2];
};

},{}],8:[function(require,module,exports){
module.exports.generateHalfElfNameLists = function (sex) {
    let nameList1;
    let nameList2;

    if (sex === 'male') {
        nameList1 = ["Al", "Aro", "Bar", "Bel", "Cor", "Cra", "Dav", "Dor", "Eir", "El", "Fal", "Fril", "Gaer", "Gra", "Hal", "Hor", "Ian", "Ilo", "Jam", "Kev", "Kri", "Leo", "Lor", "Mar", "Mei", "Nil", "Nor", "Ori", "Os", "Pan", "Pet", "Quo", "Raf", "Ri", "Sar", "Syl", "Tra", "Tyr", "Uan", "Ul", "Van", "Vic", "Wal", "Wil", "Xan", "Xav", "Yen", "Yor", "Zan", "Zyl"];
        nameList2 = ["avor", "ben", "borin", "coril", "craes", "deyr", "dithas", "elor", "enas", "faelor", "faerd", "finas", "fyr", "gotin", "gretor", "homin", "horn", "kas", "koris", "lamir", "lanann", "lumin", "minar", "morn", "nan", "neak", "neiros", "orin", "ovar", "parin", "phanis", "qarim", "qinor", "reak", "ril", "ros", "sariph", "staer", "torin", "tumil", "valor", "voril", "warith", "word", "xian", "xiron", "yeras", "ynor", "zaphir", "zaren"];

    } else if (sex === 'female') {
        nameList1 = ["Alu", "Aly", "Ar", "Bren", "Byn", "Car", "Co", "Dar", "Del", "El", "Eli", "Fae", "Fha", "Gal", "Gif", "Haly", "Ho", "Ile", "Iro", "Jen", "Jil", "Kri", "Kys", "Les", "Lora", "Ma", "Mar", "Mare", "Neri", "Nor", "Ol", "Ophi", "Phaye", "Pri", "Qi", "Que", "Rel", "Res", "Sael", "Saf", "Syl", "Ther", "Tyl", "Una", "Uri", "Ven", "Vyl", "Win", "Wol", "Xil", "Xyr", "Yes", "Yll", "Zel", "Zin"];
        nameList2 = ["aerys", "anys", "bellis", "bwynn", "cerys", "charis", "diane", "dove", "elor", "enyphe", "faen", "fine", "galyn", "gwynn", "hana", "hophe", "kaen", "kilia", "lahne", "lynn", "mae", "malis", "mythe", "nalore", "noa", "nys", "ona", "phira", "pisys", "qarin", "qwyn", "rila", "rora", "seris", "stine", "sys", "thana", "theris", "tihne", "trana", "viel", "vyre", "walyn", "waris", "xaris", "xipha", "yaries", "yra", "zenya", "zira"];

    }
    return [nameList1, nameList2];
};
},{}],9:[function(require,module,exports){
module.exports.generateHalfOrcNameLists = function (sex) {
    let nameList1;
    let nameList2;
    let nameList3;

    if (sex === 'male') {
        nameList1 = ["Ag", "Agg", "Ar", "Arn", "As", "At", "Atr", "B", "Bar", "Bel", "Bor", "Br", "Brak", "C", "Cr", "D", "Dor", "Dr", "Dur", "G", "Gal", "Gan", "Gar", "Gna", "Gor", "Got", "Gr", "Gram", "Grim", "Grom", "Grum", "Gul", "H", "Hag", "Han", "Har", "Hog", "Hon", "Hor", "Hun", "Hur", "K", "Kal", "Kam", "Kar", "Kel", "Kil", "Kom", "Kor", "Kra", "Kru", "Kul", "Kur", "Lum", "M", "Mag", "Mahl", "Mak", "Mal", "Mar", "Mog", "Mok", "Mor", "Mug", "Muk", "Mura", "N", "Oggu", "Ogu", "Ok", "Oll", "Or", "Rek", "Ren", "Ron", "Rona", "S", "Sar", "Sor", "T", "Tan", "Th", "Thar", "Ther", "Thr", "Thur", "Trak", "Truk", "Ug", "Uk", "Ukr", "Ull", "Ur", "Urth", "Urtr", "Z", "Za", "Zar", "Zas", "Zav", "Zev", "Zor", "Zur", "Zus"];
        nameList2 = ["a", "a", "a", "o", "o", "e", "i", "u", "u", "u"];
        nameList3 = ["bak", "bar", "bark", "bash", "bur", "burk", "d", "dak", "dall", "dar", "dark", "dash", "dim", "dur", "durk", "g", "gak", "gall", "gar", "gark", "gash", "glar", "gul", "gur", "m", "mak", "mar", "marsh", "mash", "mir", "mur", "n", "nar", "nars", "nur", "rak", "rall", "rash", "rim", "rimm", "rk", "rsh", "rth", "ruk", "sk", "tar", "tir", "tur", "z", "zall", "zar", "zur"];

    } else if (sex === 'female') {
        nameList1 = ["Al", "Ar", "Br", "Ek", "El", "Fal", "Fel", "Fol", "Ful", "G", "Gaj", "Gar", "Gij", "Gor", "Gr", "Gry", "Gyn", "Hur", "K", "Kar", "Kat", "Ker", "Ket", "Kir", "Kot", "Kur", "Kut", "Lag", "M", "Mer", "Mir", "Mor", "N", "Ol", "Oot", "Puy", "R", "Rah", "Rahk", "Ras", "Rash", "Raw", "Roh", "Rohk", "S", "Sam", "San", "Sem", "Sen", "Sh", "Shay", "Sin", "Sum", "Sun", "Tam", "Tem", "Tu", "Tum", "Ub", "Um", "Ur", "Van", "Zan", "Zen", "Zon", "Zun"];
        nameList2 = ["a", "a", "o", "o", "e", "i", "i", "u"];
        nameList3 = ["d", "da", "dar", "dur", "g", "gar", "gh", "gri", "gu", "sh", "sha", "shi", "gum", "gume", "gur", "ki", "mar", "mi", "mira", "me", "mur", "ne", "ner", "nir", "nar", "nchu", "ni", "nur", "ral", "rel", "ri", "rook", "ti", "tah", "tir", "tar", "tur", "war", "z", "zar", "zara", "zi", "zur", "zura", "zira"];

    }
    return [nameList1, nameList2];
};
},{}],10:[function(require,module,exports){
module.exports.generateHalflingNameLists = function (sex) {
    let nameList1;
    let nameList2;

    if (sex === 'male') {
        nameList1 = ["An", "Ar", "Bar", "Bel", "Con", "Cor", "Dan", "Dav", "El", "Er", "Fal", "Fin", "Flyn", "Gar", "Go", "Hal", "Hor", "Ido", "Ira", "Jan", "Jo", "Kas", "Kor", "La", "Lin", "Mar", "Mer", "Ne", "Nor", "Ori", "Os", "Pan", "Per", "Pim", "Quin", "Quo", "Ri", "Ric", "San", "Shar", "Tar", "Te", "Ul", "Uri", "Val", "Vin", "Wen", "Wil", "Xan", "Xo", "Yar", "Yen", "Zal", "Zen"];
        nameList2 = ["ace", "amin", "bin", "bul", "dak", "dal", "der", "don", "emin", "eon", "fer", "fire", "gin", "hace", "horn", "kas", "kin", "lan", "los", "min", "mo", "nad", "nan", "ner", "orin", "os", "pher", "pos", "ras", "ret", "ric", "rich", "rin", "ry", "ser", "sire", "ster", "ton", "tran", "umo", "ver", "vias", "von", "wan", "wrick", "yas", "yver", "zin", "zor", "zu"];

    } else if (sex === 'female') {
        nameList1 = ["An", "Ari", "Bel", "Bre", "Cal", "Chen", "Dar", "Dia", "Ei", "Eo", "Eli", "Era", "Fay", "Fen", "Fro", "Gel", "Gra", "Ha", "Hil", "Ida", "Isa", "Jay", "Jil", "Kel", "Kith", "Le", "Lid", "Mae", "Mal", "Mar", "Ne", "Ned", "Odi", "Ora", "Pae", "Pru", "Qi", "Qu", "Ri", "Ros", "Sa", "Shae", "Syl", "Tham", "Ther", "Tryn", "Una", "Uvi", "Va", "Ver", "Wel", "Wi", "Xan", "Xi", "Yes", "Yo", "Zef", "Zen"];
        nameList2 = ["alyn", "ara", "brix", "byn", "caryn", "cey", "da", "dove", "drey", "elle", "eni", "fice", "fira", "grace", "gwen", "haly", "jen", "kath", "kis", "leigh", "la", "lie", "lile", "lienne", "lyse", "mia", "mita", "ne", "na", "ni", "nys", "ola", "ora", "phina", "prys", "rana", "ree", "ri", "ris", "sica", "sira", "sys", "tina", "trix", "ula", "vira", "vyre", "wyn", "wyse", "yola", "yra", "zana", "zira"];

    }
    return [nameList1, nameList2];
};
},{}],11:[function(require,module,exports){
module.exports.generateHumanNameLists = function (sex) {

    let humanSubRace = Math.random() * 8 | 0;

    let nameList1 = '';
    let nameList2 = '';
    let nameList3 = '';
    let nameList4 = '';
    let nameList5 = '';

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
},{}],12:[function(require,module,exports){
module.exports.generateTieflingNameLists = function (sex) {
    let nameList1;
    let nameList2;

    if (sex === 'male') {
        nameList1 = ["Aet", "Ak", "Am", "Aran", "And", "Ar", "Ark", "Bar", "Car", "Cas", "Dam", "Dhar", "Eb", "Ek", "Er", "Gar", "Gu", "Gue", "Hor", "Ia", "Ka", "Kai", "Kar", "Kil", "Kos", "Ky", "Loke", "Mal", "Male", "Mav", "Me", "Mor", "Neph", "Oz", "Ral", "Re", "Rol", "Sal", "Sha", "Sir", "Ska", "The", "Thy", "Thyne", "Ur", "Uri", "Val", "Xar", "Zar", "Zer", "Zher", "Zor"];
        nameList2 = ["adius", "akas", "akos", "char", "cis", "cius", "dos", "emon", "ichar", "il", "ilius", "ira", "lech", "lius", "lyre", "marir", "menos", "meros", "mir", "mong", "mos", "mus", "non", "rai", "rakas", "rakir", "reus", "rias", "ris", "rius", "ron", "ros", "rus", "rut", "shoon", "thor", "thos", "thus", "us", "venom", "vir", "vius", "xes", "xik", "xikas", "xire", "xius", "xus", "zer", "zire"];
    } else if (sex === 'female') {
        nameList1 = ["Af", "Agne", "Ani", "Ara", "Ari", "Aria", "Bel", "Bri", "Cre", "Da", "Di", "Dim", "Dor", "Ea", "Fri", "Gri", "His", "In", "Ini", "Kal", "Le", "Lev", "Lil", "Ma", "Mar", "Mis", "Mith", "Na", "Nat", "Ne", "Neth", "Nith", "Ori", "Pes", "Phe", "Qu", "Ri", "Ro", "Sa", "Sar", "Seiri", "Sha", "Val", "Vel", "Ya", "Yora", "Yu", "Za", "Zai", "Ze"];
        nameList2 = ["bis", "borys", "cria", "cyra", "dani", "doris", "faris", "firith", "goria", "grea", "hala", "hiri", "karia", "ki", "laia", "lia", "lies", "lista", "lith", "loth", "lypsis", "lyvia", "maia", "meia", "mine", "narei", "nirith", "nise", "phi", "pione", "punith", "qine", "rali", "rissa", "seis", "solis", "spira", "tari", "tish", "uphis", "vari", "vine", "wala", "wure", "xibis", "xori", "yis", "yola", "za", "zes"];
    }
    return [nameList1, nameList2];
};
},{}],13:[function(require,module,exports){
const localList = require('./lang.json').words;
const baseList = require('badwords-list').array;

class Filter {

  /**
   * Filter constructor.
   * @constructor
   * @param {object} options - Filter instance options
   * @param {boolean} options.emptyList - Instantiate filter with no blacklist
   * @param {array} options.list - Instantiate filter with custom list
   * @param {string} options.placeHolder - Character used to replace profane words.
   * @param {string} options.regex - Regular expression used to sanitize words before comparing them to blacklist.
   * @param {string} options.replaceRegex - Regular expression used to replace profane words with placeHolder.
   */
  constructor(options = {}) {
    Object.assign(this, {
      list: options.emptyList && [] || Array.prototype.concat.apply(localList, [baseList, options.list || []]),
      exclude: options.exclude || [],
      placeHolder: options.placeHolder || '*',
      regex: options.regex || /[^a-zA-Z0-9|\$|\@]|\^/g,
      replaceRegex: options.replaceRegex || /\w/g
    })
  }

  /**
   * Determine if a string contains profane language.
   * @param {string} string - String to evaluate for profanity.
   */
  isProfane(string) {
    return this.list
      .filter((word) => {
        const wordExp = new RegExp(`\\b${word.replace(/(\W)/g, '\\$1')}\\b`, 'gi');
        return !this.exclude.includes(word.toLowerCase()) && wordExp.test(string);
      })
      .length > 0 || false;
  }

  /**
   * Replace a word with placeHolder characters;
   * @param {string} string - String to replace.
   */
  replaceWord(string) {
    return string
      .replace(this.regex, '')
      .replace(this.replaceRegex, this.placeHolder);
  }

  /**
   * Evaluate a string for profanity and return an edited version.
   * @param {string} string - Sentence to filter.
   */
  clean(string) {
    return string.split(/\b/).map((word) => {
      return this.isProfane(word) ? this.replaceWord(word) : word;
    }).join('');
  }

  /**
   * Add word(s) to blacklist filter / remove words from whitelist filter
   * @param {...string} word - Word(s) to add to blacklist
   */
  addWords() {
    let words = Array.from(arguments);

    this.list.push(...words);

    words
      .map(word => word.toLowerCase())
      .forEach((word) => {
        if (this.exclude.includes(word)) {
          this.exclude.splice(this.exclude.indexOf(word), 1);
        }
      });
  }

  /**
   * Add words to whitelist filter
   * @param {...string} word - Word(s) to add to whitelist.
   */
  removeWords() {
    this.exclude.push(...Array.from(arguments).map(word => word.toLowerCase()));
  }
}

module.exports = Filter;
},{"./lang.json":14,"badwords-list":16}],14:[function(require,module,exports){
module.exports={
  "words":[
    "ahole",
    "anus",
    "ash0le",
    "ash0les",
    "asholes",
    "ass",
    "Ass Monkey",
    "Assface",
    "assh0le",
    "assh0lez",
    "asshole",
    "assholes",
    "assholz",
    "asswipe",
    "azzhole",
    "bassterds",
    "bastard",
    "bastards",
    "bastardz",
    "basterds",
    "basterdz",
    "Biatch",
    "bitch",
    "bitches",
    "Blow Job",
    "boffing",
    "butthole",
    "buttwipe",
    "c0ck",
    "c0cks",
    "c0k",
    "Carpet Muncher",
    "cawk",
    "cawks",
    "Clit",
    "cnts",
    "cntz",
    "cock",
    "cockhead",
    "cock-head",
    "cocks",
    "CockSucker",
    "cock-sucker",
    "crap",
    "cum",
    "cunt",
    "cunts",
    "cuntz",
    "dick",
    "dild0",
    "dild0s",
    "dildo",
    "dildos",
    "dilld0",
    "dilld0s",
    "dominatricks",
    "dominatrics",
    "dominatrix",
    "dyke",
    "enema",
    "f u c k",
    "f u c k e r",
    "fag",
    "fag1t",
    "faget",
    "fagg1t",
    "faggit",
    "faggot",
    "fagg0t",
    "fagit",
    "fags",
    "fagz",
    "faig",
    "faigs",
    "fart",
    "flipping the bird",
    "fuck",
    "fucker",
    "fuckin",
    "fucking",
    "fucks",
    "Fudge Packer",
    "fuk",
    "Fukah",
    "Fuken",
    "fuker",
    "Fukin",
    "Fukk",
    "Fukkah",
    "Fukken",
    "Fukker",
    "Fukkin",
    "g00k",
    "God-damned",
    "h00r",
    "h0ar",
    "h0re",
    "hells",
    "hoar",
    "hoor",
    "hoore",
    "jackoff",
    "jap",
    "japs",
    "jerk-off",
    "jisim",
    "jiss",
    "jizm",
    "jizz",
    "knob",
    "knobs",
    "knobz",
    "kunt",
    "kunts",
    "kuntz",
    "Lezzian",
    "Lipshits",
    "Lipshitz",
    "masochist",
    "masokist",
    "massterbait",
    "masstrbait",
    "masstrbate",
    "masterbaiter",
    "masterbate",
    "masterbates",
    "Motha Fucker",
    "Motha Fuker",
    "Motha Fukkah",
    "Motha Fukker",
    "Mother Fucker",
    "Mother Fukah",
    "Mother Fuker",
    "Mother Fukkah",
    "Mother Fukker",
    "mother-fucker",
    "Mutha Fucker",
    "Mutha Fukah",
    "Mutha Fuker",
    "Mutha Fukkah",
    "Mutha Fukker",
    "n1gr",
    "nastt",
    "nigger;",
    "nigur;",
    "niiger;",
    "niigr;",
    "orafis",
    "orgasim;",
    "orgasm",
    "orgasum",
    "oriface",
    "orifice",
    "orifiss",
    "packi",
    "packie",
    "packy",
    "paki",
    "pakie",
    "paky",
    "pecker",
    "peeenus",
    "peeenusss",
    "peenus",
    "peinus",
    "pen1s",
    "penas",
    "penis",
    "penis-breath",
    "penus",
    "penuus",
    "Phuc",
    "Phuck",
    "Phuk",
    "Phuker",
    "Phukker",
    "polac",
    "polack",
    "polak",
    "Poonani",
    "pr1c",
    "pr1ck",
    "pr1k",
    "pusse",
    "pussee",
    "pussy",
    "puuke",
    "puuker",
    "queer",
    "queers",
    "queerz",
    "qweers",
    "qweerz",
    "qweir",
    "recktum",
    "rectum",
    "retard",
    "sadist",
    "scank",
    "schlong",
    "screwing",
    "semen",
    "sex",
    "sexy",
    "Sh!t",
    "sh1t",
    "sh1ter",
    "sh1ts",
    "sh1tter",
    "sh1tz",
    "shit",
    "shits",
    "shitter",
    "Shitty",
    "Shity",
    "shitz",
    "Shyt",
    "Shyte",
    "Shytty",
    "Shyty",
    "skanck",
    "skank",
    "skankee",
    "skankey",
    "skanks",
    "Skanky",
    "slag",
    "slut",
    "sluts",
    "Slutty",
    "slutz",
    "son-of-a-bitch",
    "tit",
    "turd",
    "va1jina",
    "vag1na",
    "vagiina",
    "vagina",
    "vaj1na",
    "vajina",
    "vullva",
    "vulva",
    "w0p",
    "wh00r",
    "wh0re",
    "whore",
    "xrated",
    "xxx",
    "b!+ch",
    "bitch",
    "blowjob",
    "clit",
    "arschloch",
    "fuck",
    "shit",
    "ass",
    "asshole",
    "b!tch",
    "b17ch",
    "b1tch",
    "bastard",
    "bi+ch",
    "boiolas",
    "buceta",
    "c0ck",
    "cawk",
    "chink",
    "cipa",
    "clits",
    "cock",
    "cum",
    "cunt",
    "dildo",
    "dirsa",
    "ejakulate",
    "fatass",
    "fcuk",
    "fuk",
    "fux0r",
    "hoer",
    "hore",
    "jism",
    "kawk",
    "l3itch",
    "l3i+ch",
    "lesbian",
    "masturbate",
    "masterbat*",
    "masterbat3",
    "motherfucker",
    "s.o.b.",
    "mofo",
    "nazi",
    "nigga",
    "nigger",
    "nutsack",
    "phuck",
    "pimpis",
    "pusse",
    "pussy",
    "scrotum",
    "sh!t",
    "shemale",
    "shi+",
    "sh!+",
    "slut",
    "smut",
    "teets",
    "tits",
    "boobs",
    "b00bs",
    "teez",
    "testical",
    "testicle",
    "titt",
    "w00se",
    "jackoff",
    "wank",
    "whoar",
    "whore",
    "*damn",
    "*dyke",
    "*fuck*",
    "*shit*",
    "@$$",
    "amcik",
    "andskota",
    "arse*",
    "assrammer",
    "ayir",
    "bi7ch",
    "bitch*",
    "bollock*",
    "breasts",
    "butt-pirate",
    "cabron",
    "cazzo",
    "chraa",
    "chuj",
    "Cock*",
    "cunt*",
    "d4mn",
    "daygo",
    "dego",
    "dick*",
    "dike*",
    "dupa",
    "dziwka",
    "ejackulate",
    "Ekrem*",
    "Ekto",
    "enculer",
    "faen",
    "fag*",
    "fanculo",
    "fanny",
    "feces",
    "feg",
    "Felcher",
    "ficken",
    "fitt*",
    "Flikker",
    "foreskin",
    "Fotze",
    "Fu(*",
    "fuk*",
    "futkretzn",
    "gook",
    "guiena",
    "h0r",
    "h4x0r",
    "hell",
    "helvete",
    "hoer*",
    "honkey",
    "Huevon",
    "hui",
    "injun",
    "jizz",
    "kanker*",
    "kike",
    "klootzak",
    "kraut",
    "knulle",
    "kuk",
    "kuksuger",
    "Kurac",
    "kurwa",
    "kusi*",
    "kyrpa*",
    "lesbo",
    "mamhoon",
    "masturbat*",
    "merd*",
    "mibun",
    "monkleigh",
    "mouliewop",
    "muie",
    "mulkku",
    "muschi",
    "nazis",
    "nepesaurio",
    "nigger*",
    "orospu",
    "paska*",
    "perse",
    "picka",
    "pierdol*",
    "pillu*",
    "pimmel",
    "piss*",
    "pizda",
    "poontsee",
    "poop",
    "porn",
    "p0rn",
    "pr0n",
    "preteen",
    "pula",
    "pule",
    "puta",
    "puto",
    "qahbeh",
    "queef*",
    "rautenberg",
    "schaffer",
    "scheiss*",
    "schlampe",
    "schmuck",
    "screw",
    "sh!t*",
    "sharmuta",
    "sharmute",
    "shipal",
    "shiz",
    "skribz",
    "skurwysyn",
    "sphencter",
    "spic",
    "spierdalaj",
    "splooge",
    "suka",
    "b00b*",
    "testicle*",
    "titt*",
    "twat",
    "vittu",
    "wank*",
    "wetback*",
    "wichser",
    "wop*",
    "yed",
    "zabourah"
  ]
}

},{}],15:[function(require,module,exports){
module.exports = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];
},{}],16:[function(require,module,exports){
module.exports = {
  object: require('./object'),
  array: require('./array'),
  regex: require('./regexp')
};
},{"./array":15,"./object":17,"./regexp":18}],17:[function(require,module,exports){
module.exports = {"4r5e": 1, "5h1t": 1, "5hit": 1, "a55": 1, "anal": 1, "anus": 1, "ar5e": 1, "arrse": 1, "arse": 1, "ass": 1, "ass-fucker": 1, "asses": 1, "assfucker": 1, "assfukka": 1, "asshole": 1, "assholes": 1, "asswhole": 1, "a_s_s": 1, "b!tch": 1, "b00bs": 1, "b17ch": 1, "b1tch": 1, "ballbag": 1, "balls": 1, "ballsack": 1, "bastard": 1, "beastial": 1, "beastiality": 1, "bellend": 1, "bestial": 1, "bestiality": 1, "bi+ch": 1, "biatch": 1, "bitch": 1, "bitcher": 1, "bitchers": 1, "bitches": 1, "bitchin": 1, "bitching": 1, "bloody": 1, "blow job": 1, "blowjob": 1, "blowjobs": 1, "boiolas": 1, "bollock": 1, "bollok": 1, "boner": 1, "boob": 1, "boobs": 1, "booobs": 1, "boooobs": 1, "booooobs": 1, "booooooobs": 1, "breasts": 1, "buceta": 1, "bugger": 1, "bum": 1, "bunny fucker": 1, "butt": 1, "butthole": 1, "buttmuch": 1, "buttplug": 1, "c0ck": 1, "c0cksucker": 1, "carpet muncher": 1, "cawk": 1, "chink": 1, "cipa": 1, "cl1t": 1, "clit": 1, "clitoris": 1, "clits": 1, "cnut": 1, "cock": 1, "cock-sucker": 1, "cockface": 1, "cockhead": 1, "cockmunch": 1, "cockmuncher": 1, "cocks": 1, "cocksuck": 1, "cocksucked": 1, "cocksucker": 1, "cocksucking": 1, "cocksucks": 1, "cocksuka": 1, "cocksukka": 1, "cok": 1, "cokmuncher": 1, "coksucka": 1, "coon": 1, "cox": 1, "crap": 1, "cum": 1, "cummer": 1, "cumming": 1, "cums": 1, "cumshot": 1, "cunilingus": 1, "cunillingus": 1, "cunnilingus": 1, "cunt": 1, "cuntlick": 1, "cuntlicker": 1, "cuntlicking": 1, "cunts": 1, "cyalis": 1, "cyberfuc": 1, "cyberfuck": 1, "cyberfucked": 1, "cyberfucker": 1, "cyberfuckers": 1, "cyberfucking": 1, "d1ck": 1, "damn": 1, "dick": 1, "dickhead": 1, "dildo": 1, "dildos": 1, "dink": 1, "dinks": 1, "dirsa": 1, "dlck": 1, "dog-fucker": 1, "doggin": 1, "dogging": 1, "donkeyribber": 1, "doosh": 1, "duche": 1, "dyke": 1, "ejaculate": 1, "ejaculated": 1, "ejaculates": 1, "ejaculating": 1, "ejaculatings": 1, "ejaculation": 1, "ejakulate": 1, "f u c k": 1, "f u c k e r": 1, "f4nny": 1, "fag": 1, "fagging": 1, "faggitt": 1, "faggot": 1, "faggs": 1, "fagot": 1, "fagots": 1, "fags": 1, "fanny": 1, "fannyflaps": 1, "fannyfucker": 1, "fanyy": 1, "fatass": 1, "fcuk": 1, "fcuker": 1, "fcuking": 1, "feck": 1, "fecker": 1, "felching": 1, "fellate": 1, "fellatio": 1, "fingerfuck": 1, "fingerfucked": 1, "fingerfucker": 1, "fingerfuckers": 1, "fingerfucking": 1, "fingerfucks": 1, "fistfuck": 1, "fistfucked": 1, "fistfucker": 1, "fistfuckers": 1, "fistfucking": 1, "fistfuckings": 1, "fistfucks": 1, "flange": 1, "fook": 1, "fooker": 1, "fuck": 1, "fucka": 1, "fucked": 1, "fucker": 1, "fuckers": 1, "fuckhead": 1, "fuckheads": 1, "fuckin": 1, "fucking": 1, "fuckings": 1, "fuckingshitmotherfucker": 1, "fuckme": 1, "fucks": 1, "fuckwhit": 1, "fuckwit": 1, "fudge packer": 1, "fudgepacker": 1, "fuk": 1, "fuker": 1, "fukker": 1, "fukkin": 1, "fuks": 1, "fukwhit": 1, "fukwit": 1, "fux": 1, "fux0r": 1, "f_u_c_k": 1, "gangbang": 1, "gangbanged": 1, "gangbangs": 1, "gaylord": 1, "gaysex": 1, "goatse": 1, "God": 1, "god-dam": 1, "god-damned": 1, "goddamn": 1, "goddamned": 1, "hardcoresex": 1, "hell": 1, "heshe": 1, "hoar": 1, "hoare": 1, "hoer": 1, "homo": 1, "hore": 1, "horniest": 1, "horny": 1, "hotsex": 1, "jack-off": 1, "jackoff": 1, "jap": 1, "jerk-off": 1, "jism": 1, "jiz": 1, "jizm": 1, "jizz": 1, "kawk": 1, "knob": 1, "knobead": 1, "knobed": 1, "knobend": 1, "knobhead": 1, "knobjocky": 1, "knobjokey": 1, "kock": 1, "kondum": 1, "kondums": 1, "kum": 1, "kummer": 1, "kumming": 1, "kums": 1, "kunilingus": 1, "l3i+ch": 1, "l3itch": 1, "labia": 1, "lust": 1, "lusting": 1, "m0f0": 1, "m0fo": 1, "m45terbate": 1, "ma5terb8": 1, "ma5terbate": 1, "masochist": 1, "master-bate": 1, "masterb8": 1, "masterbat*": 1, "masterbat3": 1, "masterbate": 1, "masterbation": 1, "masterbations": 1, "masturbate": 1, "mo-fo": 1, "mof0": 1, "mofo": 1, "mothafuck": 1, "mothafucka": 1, "mothafuckas": 1, "mothafuckaz": 1, "mothafucked": 1, "mothafucker": 1, "mothafuckers": 1, "mothafuckin": 1, "mothafucking": 1, "mothafuckings": 1, "mothafucks": 1, "mother fucker": 1, "motherfuck": 1, "motherfucked": 1, "motherfucker": 1, "motherfuckers": 1, "motherfuckin": 1, "motherfucking": 1, "motherfuckings": 1, "motherfuckka": 1, "motherfucks": 1, "muff": 1, "mutha": 1, "muthafecker": 1, "muthafuckker": 1, "muther": 1, "mutherfucker": 1, "n1gga": 1, "n1gger": 1, "nazi": 1, "nigg3r": 1, "nigg4h": 1, "nigga": 1, "niggah": 1, "niggas": 1, "niggaz": 1, "nigger": 1, "niggers": 1, "nob": 1, "nob jokey": 1, "nobhead": 1, "nobjocky": 1, "nobjokey": 1, "numbnuts": 1, "nutsack": 1, "orgasim": 1, "orgasims": 1, "orgasm": 1, "orgasms": 1, "p0rn": 1, "pawn": 1, "pecker": 1, "penis": 1, "penisfucker": 1, "phonesex": 1, "phuck": 1, "phuk": 1, "phuked": 1, "phuking": 1, "phukked": 1, "phukking": 1, "phuks": 1, "phuq": 1, "pigfucker": 1, "pimpis": 1, "piss": 1, "pissed": 1, "pisser": 1, "pissers": 1, "pisses": 1, "pissflaps": 1, "pissin": 1, "pissing": 1, "pissoff": 1, "poop": 1, "porn": 1, "porno": 1, "pornography": 1, "pornos": 1, "prick": 1, "pricks": 1, "pron": 1, "pube": 1, "pusse": 1, "pussi": 1, "pussies": 1, "pussy": 1, "pussys": 1, "rectum": 1, "retard": 1, "rimjaw": 1, "rimming": 1, "s hit": 1, "s.o.b.": 1, "sadist": 1, "schlong": 1, "screwing": 1, "scroat": 1, "scrote": 1, "scrotum": 1, "semen": 1, "sex": 1, "sh!+": 1, "sh!t": 1, "sh1t": 1, "shag": 1, "shagger": 1, "shaggin": 1, "shagging": 1, "shemale": 1, "shi+": 1, "shit": 1, "shitdick": 1, "shite": 1, "shited": 1, "shitey": 1, "shitfuck": 1, "shitfull": 1, "shithead": 1, "shiting": 1, "shitings": 1, "shits": 1, "shitted": 1, "shitter": 1, "shitters": 1, "shitting": 1, "shittings": 1, "shitty": 1, "skank": 1, "slut": 1, "sluts": 1, "smegma": 1, "smut": 1, "snatch": 1, "son-of-a-bitch": 1, "spac": 1, "spunk": 1, "s_h_i_t": 1, "t1tt1e5": 1, "t1tties": 1, "teets": 1, "teez": 1, "testical": 1, "testicle": 1, "tit": 1, "titfuck": 1, "tits": 1, "titt": 1, "tittie5": 1, "tittiefucker": 1, "titties": 1, "tittyfuck": 1, "tittywank": 1, "titwank": 1, "tosser": 1, "turd": 1, "tw4t": 1, "twat": 1, "twathead": 1, "twatty": 1, "twunt": 1, "twunter": 1, "v14gra": 1, "v1gra": 1, "vagina": 1, "viagra": 1, "vulva": 1, "w00se": 1, "wang": 1, "wank": 1, "wanker": 1, "wanky": 1, "whoar": 1, "whore": 1, "willies": 1, "willy": 1, "xrated": 1, "xxx": 1};
},{}],18:[function(require,module,exports){
module.exports = /\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIiwiamF2YXNjcmlwdHMvbmFtZV9nZW5lcmF0b3IuanMiLCJqYXZhc2NyaXB0cy9wcm9mYW5pdHlfY2hlY2tlci5qcyIsImphdmFzY3JpcHRzL3JhY2VfbmFtZXMvZHJhZ29uYm9ybl9nZW4uanMiLCJqYXZhc2NyaXB0cy9yYWNlX25hbWVzL2R3YXJmX2dlbi5qcyIsImphdmFzY3JpcHRzL3JhY2VfbmFtZXMvZWxmX2dlbi5qcyIsImphdmFzY3JpcHRzL3JhY2VfbmFtZXMvZ25vbWVfZ2VuLmpzIiwiamF2YXNjcmlwdHMvcmFjZV9uYW1lcy9oYWxmLWVsZl9nZW4uanMiLCJqYXZhc2NyaXB0cy9yYWNlX25hbWVzL2hhbGYtb3JjX2dlbi5qcyIsImphdmFzY3JpcHRzL3JhY2VfbmFtZXMvaGFsZmxpbmdfZ2VuLmpzIiwiamF2YXNjcmlwdHMvcmFjZV9uYW1lcy9odW1hbl9nZW4uanMiLCJqYXZhc2NyaXB0cy9yYWNlX25hbWVzL3RpZWZsaW5nX2dlbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWQtd29yZHMvbGliL2JhZHdvcmRzLmpzIiwibm9kZV9tb2R1bGVzL2JhZC13b3Jkcy9saWIvbGFuZy5qc29uIiwibm9kZV9tb2R1bGVzL2JhZHdvcmRzLWxpc3QvbGliL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhZHdvcmRzLWxpc3QvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2JhZHdvcmRzLWxpc3QvbGliL29iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWR3b3Jkcy1saXN0L2xpYi9yZWdleHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pjQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBOztBQ0FBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwibGV0IG5hbWVHZW4gPSByZXF1aXJlKCcuL25hbWVfZ2VuZXJhdG9yLmpzJyk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgbGV0IG1zZXgsIG1yYWNlO1xyXG5cclxuICAgIGdlbmVyYXRlQ2hhcmFjdGVyKCk7XHJcblxyXG4gICAgJCgnI3JlZ2VuZXJhdGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgZ2VuZXJhdGVDaGFyYWN0ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDaGFyYWN0ZXIoKSB7XHJcblxyXG4gICAgICAgIHBpY2tSYW5kb21TZXgoKTtcclxuXHJcbiAgICAgICAgcGlja1JhbmRvbVJhY2UoKTtcclxuXHJcbiAgICAgICAgcGlja1JhbmRvbU5hbWUoKTtcclxuXHJcbiAgICAgICAgcGlja1JhbmRvbUNsYXNzKCk7XHJcblxyXG4gICAgICAgIHJvbGxBbGxTdGF0cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwaWNrUmFuZG9tU2V4KCkge1xyXG4gICAgICAgIGxldCBzZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChzZXgpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgJCgnI21hbGUnKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG1zZXggPSAnbWFsZSc7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICQoJyNmZW1hbGUnKS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG1zZXggPSAnZmVtYWxlJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21SYWNlKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSAkKCcjcmFjZScpO1xyXG5cclxuICAgICAgICBjb25zdCBsZW5ndGggID0gc2VsZWN0LmNoaWxkcmVuKCdvcHRpb24nKS5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpO1xyXG4gICAgICAgICQoXCIjcmFjZT5vcHRpb25cIikuZXEoaW5kZXgpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgIG1yYWNlID0gc2VsZWN0LnZhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21OYW1lKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gbmFtZUdlbi5nZW5lcmF0ZU5hbWUobXNleCwgbXJhY2UpO1xyXG5cclxuICAgICAgICAkKFwiI25hbWVcIikudmFsKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21DbGFzcygpIHtcclxuICAgICAgICBsZXQgZmNsYXNzID0gJCgnI2NsYXNzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCAgPSBmY2xhc3MuY2hpbGRyZW4oJ29wdGlvbicpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XHJcbiAgICAgICAgJChcIiNjbGFzcz5vcHRpb25cIikuZXEoaW5kZXgpLnByb3AoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcm9sbEFsbFN0YXRzKCkge1xyXG5cclxuICAgICAgICAkKCcjU3RyZW5ndGgnKS52YWwocm9sbFJhbmRvbVN0YXQoKSk7XHJcblxyXG4gICAgICAgICQoJyNEZXh0ZXJpdHknKS52YWwocm9sbFJhbmRvbVN0YXQoKSk7XHJcblxyXG4gICAgICAgICQoJyNDb25zdGl0dXRpb24nKS52YWwocm9sbFJhbmRvbVN0YXQoKSk7XHJcblxyXG4gICAgICAgICQoJyNJbnRlbGxpZ2VuY2UnKS52YWwocm9sbFJhbmRvbVN0YXQoKSk7XHJcblxyXG4gICAgICAgICQoJyNXaXNkb20nKS52YWwocm9sbFJhbmRvbVN0YXQoKSk7XHJcblxyXG4gICAgICAgICQoJyNDaGFyaXNtYScpLnZhbChyb2xsUmFuZG9tU3RhdCgpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcm9sbFJhbmRvbVN0YXQoKSB7XHJcblxyXG4gICAgICAgIGxldCBkaWNlID0gcm9sbEZvdXJENigpO1xyXG5cclxuICAgICAgICBkaWNlID0gZHJvcExvd2VzdFNjb3JlKGRpY2UpO1xyXG5cclxuICAgICAgICByZXR1cm4gdG90YWxEaWNlU2NvcmVzKGRpY2UpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb2xsRm91ckQ2KCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig2KSkgKyAxLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDYpKSArIDEsXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNikpICsgMSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig2KSkgKyAxIF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZHJvcExvd2VzdFNjb3JlKGRpY2UpIHtcclxuXHJcbiAgICAgICAgbGV0IGxvd2VzdFJvbGwgPSA2O1xyXG4gICAgICAgIGxldCBsb3dlc3RSb2xsSW5kZXggPSAwO1xyXG5cclxuICAgICAgICAvL2RldGVybWluZSBsb3dlc3Qgcm9sbFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkaWNlW2ldIDwgbG93ZXN0Um9sbCkge1xyXG4gICAgICAgICAgICAgICAgbG93ZXN0Um9sbCA9IGRpY2VbaV07XHJcbiAgICAgICAgICAgICAgICBsb3dlc3RSb2xsSW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3NldCBpdCB0byB6ZXJvIC0gZWZmZWN0aXZlbHkgcmVtb3ZpbmcgaXRcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gbG93ZXN0Um9sbEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBkaWNlW2ldID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG90YWxEaWNlU2NvcmVzKGRpY2UpIHtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdG90YWwgKz0gZGljZVtpXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH1cclxuXHJcbn0pOyIsImxldCBmaWx0ZXIgPSByZXF1aXJlKCcuL3Byb2Zhbml0eV9jaGVja2VyLmpzJyk7XHJcblxyXG5sZXQgZHJhZ29uYm9ybiA9IHJlcXVpcmUoJy4vcmFjZV9uYW1lcy9kcmFnb25ib3JuX2dlbi5qcycpO1xyXG5sZXQgZHdhcmYgPSByZXF1aXJlKCcuL3JhY2VfbmFtZXMvZHdhcmZfZ2VuLmpzJyk7XHJcbmxldCBlbGYgPSByZXF1aXJlKCcuL3JhY2VfbmFtZXMvZWxmX2dlbi5qcycpO1xyXG5sZXQgZ25vbWUgPSByZXF1aXJlKCcuL3JhY2VfbmFtZXMvZ25vbWVfZ2VuLmpzJyk7XHJcbmxldCBoYWxmRWxmID0gcmVxdWlyZSgnLi9yYWNlX25hbWVzL2hhbGYtZWxmX2dlbi5qcycpO1xyXG5sZXQgaGFsZk9yYyA9IHJlcXVpcmUoJy4vcmFjZV9uYW1lcy9oYWxmLW9yY19nZW4uanMnKTtcclxubGV0IGhhbGZsaW5nID0gcmVxdWlyZSgnLi9yYWNlX25hbWVzL2hhbGZsaW5nX2dlbi5qcycpO1xyXG5sZXQgaHVtYW4gPSByZXF1aXJlKCcuL3JhY2VfbmFtZXMvaHVtYW5fZ2VuLmpzJyk7XHJcbmxldCB0aWVmbGluZyA9IHJlcXVpcmUoJy4vcmFjZV9uYW1lcy90aWVmbGluZ19nZW4uanMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlTmFtZSA9IGZ1bmN0aW9uIChzZXgsIHJhY2UpIHtcclxuXHJcbiAgICBsZXQgcmVzID0gJyc7XHJcbiAgICBsZXQgbGlzdHM7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgc3dpdGNoIChyYWNlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0RyYWdvbmJvcm4nOlxyXG4gICAgICAgICAgICAgICAgbGlzdHMgPSBkcmFnb25ib3JuLmdlbmVyYXRlRHJhZ29uYm9ybk5hbWVMaXN0cyhzZXgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0R3YXJmJzpcclxuICAgICAgICAgICAgICAgIGxpc3RzID0gZHdhcmYuZ2VuZXJhdGVEd2FyZk5hbWVMaXN0cyhzZXgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0VsZic6XHJcbiAgICAgICAgICAgICAgICBsaXN0cyA9IGVsZi5nZW5lcmF0ZUVsZk5hbWVMaXN0cyhzZXgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0dub21lJzpcclxuICAgICAgICAgICAgICAgIGxpc3RzID0gZ25vbWUuZ2VuZXJhdGVHbm9tZU5hbWVMaXN0cyhzZXgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0hhbGYtRWxmJzpcclxuICAgICAgICAgICAgICAgIGxpc3RzID0gaGFsZkVsZi5nZW5lcmF0ZUhhbGZFbGZOYW1lTGlzdHMoc2V4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdIYWxmbGluZyc6XHJcbiAgICAgICAgICAgICAgICBsaXN0cyA9IGhhbGZsaW5nLmdlbmVyYXRlSGFsZmxpbmdOYW1lTGlzdHMoc2V4KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ0hhbGYtT3JjJzpcclxuICAgICAgICAgICAgICAgIGxpc3RzID0gaGFsZk9yYy5nZW5lcmF0ZUhhbGZPcmNOYW1lTGlzdHMoc2V4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdIdW1hbic6XHJcbiAgICAgICAgICAgICAgICBsaXN0cyA9IGh1bWFuLmdlbmVyYXRlSHVtYW5OYW1lTGlzdHMoc2V4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdUaWVmbGluZyc6XHJcbiAgICAgICAgICAgICAgICBsaXN0cyA9IHRpZWZsaW5nLmdlbmVyYXRlVGllZmxpbmdOYW1lTGlzdHMoc2V4KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzICs9IGdlbmVyYXRlTmFtZUZyb21MaXN0cyhsaXN0cyk7XHJcblxyXG4gICAgfSB3aGlsZSAoZmlsdGVyLmlzUHJvZmFuZShyZXMpKTtcclxuXHJcbiAgICByZXR1cm4gcmVzO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVOYW1lRnJvbUxpc3RzKGxpc3RzKSB7XHJcbiAgICBsZXQgbmFtZSA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgbmFtZSArPSBsaXN0c1tpXVtNYXRoLnJhbmRvbSgpICogbGlzdHNbaV0ubGVuZ3RoIHwgMF07XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn0iLCJsZXQgRmlsdGVyID0gcmVxdWlyZSgnYmFkLXdvcmRzJyksXHJcbiAgICBmaWx0ZXIgPSBuZXcgRmlsdGVyKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5pc1Byb2ZhbmUgPSBmdW5jdGlvbihzKSB7XHJcbiAgICByZXR1cm4gZmlsdGVyLmlzUHJvZmFuZShzKTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZURyYWdvbmJvcm5OYW1lTGlzdHMgPSBmdW5jdGlvbiAoc2V4KSB7XHJcblxyXG4gICAgbGV0IG5hbWVMaXN0MTtcclxuICAgIGxldCBuYW1lTGlzdDI7XHJcblxyXG4gICAgaWYgKHNleCA9PT0gJ21hbGUnKSB7XHJcbiAgICAgICAgbmFtZUxpc3QxID0gW1wiQWxpXCIsIFwiQXJcIiwgXCJCYVwiLCBcIkJhbFwiLCBcIkJlbFwiLCBcIkJoYVwiLCBcIkJyZW5cIiwgXCJDYWVyXCIsIFwiQ2FsdVwiLCBcIkR1clwiLCBcIkRvXCIsIFwiRHJhXCIsIFwiRXJhXCIsIFwiRmFlclwiLCBcIkZyb1wiLCBcIkdyZVwiLCBcIkdoZVwiLCBcIkdvcmFcIiwgXCJIZVwiLCBcIkhpXCIsIFwiSW9yXCIsIFwiSmluXCIsIFwiSmFyXCIsIFwiS2lsXCIsIFwiS3JpdlwiLCBcIkxvclwiLCBcIkx1bWlcIiwgXCJNYXJcIiwgXCJNb3JcIiwgXCJNZWRcIiwgXCJOYXJcIiwgXCJOZXNcIiwgXCJOYVwiLCBcIk90aVwiLCBcIk9ybGFcIiwgXCJQcmlcIiwgXCJQYVwiLCBcIlFlbFwiLCBcIlJhdm9cIiwgXCJSYXNcIiwgXCJSaG9cIiwgXCJTYVwiLCBcIlNoYVwiLCBcIlN1bFwiLCBcIlRhelwiLCBcIlRvXCIsIFwiVHJvdVwiLCBcIlVkb1wiLCBcIlVyb1wiLCBcIlZvclwiLCBcIlZ5dVwiLCBcIlZyYWtcIiwgXCJXb3JcIiwgXCJXdVwiLCBcIldyYVwiLCBcIld1bFwiLCBcIlhhclwiLCBcIllvclwiLCBcIlpvclwiLCBcIlpyYVwiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJiYXJ1bVwiLCBcImJvclwiLCBcImJyb3RoXCIsIFwiY2lhclwiLCBcImNyYXRoXCIsIFwiZGFhclwiLCBcImRoYWxsXCIsIFwiZG9yaW1cIiwgXCJmYXJuXCIsIFwiZnJhc1wiLCBcImdhclwiLCBcImdodWxsXCIsIFwiZ3JheFwiLCBcImhhZHVyXCIsIFwiaGF6YXJcIiwgXCJqaGFuXCIsIFwianVyblwiLCBcImtheFwiLCBcImtyaXNcIiwgXCJrdWxcIiwgXCJsYXNhclwiLCBcImxpblwiLCBcIm1hc2hcIiwgXCJtb3JuXCIsIFwibmFhclwiLCBcInByYXhcIiwgXCJxaXJvdGhcIiwgXCJxcmluXCIsIFwicXVsbFwiLCBcInJha2FzXCIsIFwicmFzaFwiLCBcInJpbm5cIiwgXCJyb3RoXCIsIFwic2FzaGlcIiwgXCJzZXRoXCIsIFwic2thblwiLCBcInRyaW5cIiwgXCJ0dXJpbVwiLCBcInZhcmF4XCIsIFwidnJvdGhcIiwgXCJ2dWxsXCIsIFwid2FydW1cIiwgXCJ3dW5heFwiLCBcInhhblwiLCBcInhpcm9zXCIsIFwieWF4XCIsIFwieXRoYXNcIiwgXCJ6YXZ1clwiLCBcInppcmVcIiwgXCJ6aXJvc1wiXTtcclxuICAgIH0gZWxzZSBpZiAoc2V4ID09PSAnZmVtYWxlJykge1xyXG4gICAgICAgIG5hbWVMaXN0MSA9IFtcIkFyaVwiLCBcIkFcIiwgXCJCaVwiLCBcIkJlbFwiLCBcIkNyaXNcIiwgXCJDYVwiLCBcIkRyeXNcIiwgXCJEYVwiLCBcIkVybGlcIiwgXCJFc2hcIiwgXCJGYWVcIiwgXCJGZW5cIiwgXCJHdXJcIiwgXCJHcmlcIiwgXCJIaW5cIiwgXCJIYVwiLCBcIklybHlcIiwgXCJJcmllXCIsIFwiSmVzXCIsIFwiSm9cIiwgXCJLYVwiLCBcIktlbFwiLCBcIktvXCIsIFwiTGlsb1wiLCBcIkxvcmFcIiwgXCJNYWxcIiwgXCJNaVwiLCBcIk5hXCIsIFwiTmVzXCIsIFwiTnlzXCIsIFwiT3JpXCIsIFwiT1wiLCBcIk9waGlcIiwgXCJQaGlcIiwgXCJQZXJcIiwgXCJRaVwiLCBcIlF1aWxcIiwgXCJSYWlcIiwgXCJSYXNoaVwiLCBcIlNvXCIsIFwiU3VcIiwgXCJUaGFcIiwgXCJUaGVyXCIsIFwiVXJpXCIsIFwiVXNoaVwiLCBcIlZhbFwiLCBcIlZ5cmFcIiwgXCJXZWxzaVwiLCBcIldyYVwiLCBcIlh5XCIsIFwiWGlzXCIsIFwiWWFcIiwgXCJZclwiLCBcIlplblwiLCBcIlpvZlwiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJiaXJpdGhcIiwgXCJiaXNcIiwgXCJiaXRoXCIsIFwiY29yaWFcIiwgXCJjeXNcIiwgXCJkYWx5bm5cIiwgXCJkcmlzaFwiLCBcImRyaXRoXCIsIFwiZmFldGhcIiwgXCJmeWlyZVwiLCBcImdpbFwiLCBcImdpc3NhXCIsIFwiZ3dlblwiLCBcImhpbWVcIiwgXCJoeW1tXCIsIFwia2FyeW5cIiwgXCJraXJhXCIsIFwibGFyeXNcIiwgXCJsaWFublwiLCBcImx5YXNzYVwiLCBcIm1laWxhXCIsIFwibXlzZVwiLCBcIm5vcmFlXCIsIFwibnlzXCIsIFwicGF0eXNcIiwgXCJwb3JhXCIsIFwicW9yZWxcIiwgXCJxd2VuXCIsIFwicmFublwiLCBcInJpZWxcIiwgXCJyaW5hXCIsIFwicmlublwiLCBcInJpc2hcIiwgXCJyaXRoXCIsIFwic2FhZGlcIiwgXCJzaGFublwiLCBcInNpcmFcIiwgXCJ0aGlicmFcIiwgXCJ0aHlyYVwiLCBcInZheWxhXCIsIFwidnlyZVwiLCBcInZ5c1wiLCBcIndvcGh5bFwiLCBcInd5blwiLCBcInhpcmlzXCIsIFwieG9yYVwiLCBcInlhc3NhXCIsIFwieXJpZXNcIiwgXCJ6aXRhXCIsIFwienlzXCJdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtuYW1lTGlzdDEsIG5hbWVMaXN0Ml07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGVEd2FyZk5hbWVMaXN0cyA9IGZ1bmN0aW9uIChzZXgpIHtcclxuICAgIGxldCBuYW1lTGlzdDE7XHJcbiAgICBsZXQgbmFtZUxpc3QyO1xyXG5cclxuICAgIGlmIChzZXggPT09ICdtYWxlJykge1xyXG4gICAgICAgIG5hbWVMaXN0MSA9IFtcIkFkXCIsIFwiQW1cIiwgXCJBcm1cIiwgXCJCYWVyXCIsIFwiRGFlclwiLCBcIkJhbFwiLCBcIkJhblwiLCBcIkJhclwiLCBcIkJlbFwiLCBcIkJlblwiLCBcIkJlclwiLCBcIkJoYWxcIiwgXCJCaGFyXCIsIFwiQmhlbFwiLCBcIkJyYW1cIiwgXCJCcmFuXCIsIFwiQnJvbVwiLCBcIkJydW1cIiwgXCJCdW5cIiwgXCJEYWxcIiwgXCJEYXJcIiwgXCJEb2xcIiwgXCJEdWxcIiwgXCJFYlwiLCBcIkVtXCIsIFwiRXJtXCIsIFwiRmFyXCIsIFwiR2FsXCIsIFwiR2FyXCIsIFwiR2VyXCIsIFwiR2ltXCIsIFwiR3JhbFwiLCBcIkdyYW1cIiwgXCJHcmFuXCIsIFwiR3JlbVwiLCBcIkdyZW5cIiwgXCJHcmlsXCIsIFwiR3J5XCIsIFwiR3VsXCIsIFwiSGFyXCIsIFwiSGphbFwiLCBcIkhqb2xcIiwgXCJIanVsXCIsIFwiSG9yXCIsIFwiSHVsXCIsIFwiSHVyXCIsIFwiS2FyXCIsIFwiS2hhclwiLCBcIktyYW1cIiwgXCJLcm9tXCIsIFwiS3J1bVwiLCBcIk1hZ1wiLCBcIk1hbFwiLCBcIk1lbFwiLCBcIk1vclwiLCBcIk11aXJcIiwgXCJNdXJcIiwgXCJSYWdcIiwgXCJSYW5cIiwgXCJSZWdcIiwgXCJSb3RcIiwgXCJUaGFsXCIsIFwiVGhhclwiLCBcIlRoZWxcIiwgXCJUaGVyXCIsIFwiVGhvXCIsIFwiVGhvclwiLCBcIlRodWxcIiwgXCJUaHVyXCIsIFwiVGh5XCIsIFwiVG9yXCIsIFwiVHlcIiwgXCJVbVwiLCBcIlVybVwiLCBcIlZvblwiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJhZGluXCIsIFwiYmVrXCIsIFwiYnJla1wiLCBcImRhaHJcIiwgXCJkYWluXCIsIFwiZGFsXCIsIFwiZGFuXCIsIFwiZGFyXCIsIFwiZGVrXCIsIFwiZGlyXCIsIFwiZG9oclwiLCBcImRvclwiLCBcImRyYWtcIiwgXCJkcmFtXCIsIFwiZHJlblwiLCBcImRyb21cIiwgXCJkcnVtXCIsIFwiZHJ1c1wiLCBcImR1aHJcIiwgXCJkdXJcIiwgXCJkdXNcIiwgXCJnYXJuXCIsIFwiZ3JhbVwiLCBcImdyYW5cIiwgXCJncmltXCIsIFwiZ3JvbVwiLCBcImdyb25cIiwgXCJncnVtXCIsIFwiZ3J1blwiLCBcImd1cm5cIiwgXCJndXNcIiwgXCJpZ2dzXCIsIFwia2FobVwiLCBcImthbVwiLCBcImtvaG1cIiwgXCJrb21cIiwgXCJrdWhtXCIsIFwia3VtXCIsIFwia3lsXCIsIFwibWFuXCIsIFwibWFuZFwiLCBcIm1hclwiLCBcIm1la1wiLCBcIm1paXJcIiwgXCJtaW5cIiwgXCJtaXJcIiwgXCJtb25kXCIsIFwibW9yXCIsIFwibXVuXCIsIFwibXVuZFwiLCBcIm11clwiLCBcIm11c1wiLCBcIm15bFwiLCBcIm15clwiLCBcIm5hbVwiLCBcIm5hclwiLCBcIm5pa1wiLCBcIm5pclwiLCBcIm5vbVwiLCBcIm51bVwiLCBcIm51clwiLCBcIm51c1wiLCBcIm55bFwiLCBcInJha1wiLCBcInJhbVwiLCBcInJlblwiLCBcInJpZ1wiLCBcInJpZ2dcIiwgXCJyaWtcIiwgXCJyaW1cIiwgXCJyb21cIiwgXCJyb25cIiwgXCJydW1cIiwgXCJydXNcIiwgXCJyeWxcIiwgXCJ0aGFybVwiLCBcInRoYXJuXCIsIFwidGhyYW5cIiwgXCJ0aHJ1bVwiLCBcInRocnVuXCJdO1xyXG4gICAgfSBlbHNlIGlmIChzZXggPT09ICdmZW1hbGUnKSB7XHJcbiAgICAgICAgbmFtZUxpc3QxID0gW1wiQW5cIiwgXCJBclwiLCBcIkJhZXJcIiwgXCJCYXJcIiwgXCJCZWxcIiwgXCJCZWxsZVwiLCBcIkJvblwiLCBcIkJvbm5cIiwgXCJCcmFlblwiLCBcIkJyYWxcIiwgXCJCcmFsbGVcIiwgXCJCcmFuXCIsIFwiQnJlblwiLCBcIkJyZXRcIiwgXCJCcmlsXCIsIFwiQnJpbGxlXCIsIFwiQnJvbFwiLCBcIkJyb25cIiwgXCJCcnVsXCIsIFwiQnJ5bFwiLCBcIkJyeWxsZVwiLCBcIkJyeW5cIiwgXCJCcnl0XCIsIFwiQnlsXCIsIFwiQnlsbGVcIiwgXCJEYWVyXCIsIFwiRGVhclwiLCBcIkRpbVwiLCBcIkVkXCIsIFwiRWluXCIsIFwiRWxcIiwgXCJHZW1cIiwgXCJHZXJcIiwgXCJHd2FuXCIsIFwiR3dlblwiLCBcIkd3aW5cIiwgXCJHd3luXCIsIFwiR3ltXCIsIFwiSW5nXCIsIFwiSmVuXCIsIFwiSmVublwiLCBcIkppblwiLCBcIkp5blwiLCBcIkthaXRcIiwgXCJLYXJcIiwgXCJLYXRcIiwgXCJLYXRoXCIsIFwiS2V0XCIsIFwiTGFzXCIsIFwiTGFzc1wiLCBcIkxlc1wiLCBcIkxlc3NcIiwgXCJMeWVzXCIsIFwiTHlzXCIsIFwiTHlzc1wiLCBcIk1hZXJcIiwgXCJNYWV2XCIsIFwiTWFyXCIsIFwiTWlzXCIsIFwiTWlzdFwiLCBcIk15clwiLCBcIk15c1wiLCBcIk15c3RcIiwgXCJOYWVyXCIsIFwiTmFsXCIsIFwiTmFzXCIsIFwiTmFzc1wiLCBcIk5lc1wiLCBcIk5pc1wiLCBcIk55c1wiLCBcIlJhZW5cIiwgXCJSYW5cIiwgXCJSZWRcIiwgXCJSZXluXCIsIFwiUnVuXCIsIFwiUnluXCIsIFwiU2FyXCIsIFwiU29sXCIsIFwiVGFzXCIsIFwiVGF6XCIsIFwiVGlzXCIsIFwiVGlzaFwiLCBcIlRpelwiLCBcIlRvclwiLCBcIlR5c1wiLCBcIlR5c2hcIl07XHJcbiAgICAgICAgbmFtZUxpc3QyID0gW1wiYmVsbGVcIiwgXCJiZXJhXCIsIFwiZGVsbGVcIiwgXCJkZXRoXCIsIFwiZGllbGxlXCIsIFwiZGlsbGVcIiwgXCJkaXNoXCIsIFwiZG9yYVwiLCBcImRyeW5cIiwgXCJkeWxcIiwgXCJnaWVsXCIsIFwiZ2xpYVwiLCBcImdsaWFuXCIsIFwiZ3d5blwiLCBcImxhXCIsIFwibGVlblwiLCBcImxlaWxcIiwgXCJsZW5cIiwgXCJsaW5cIiwgXCJsaW5uXCIsIFwibHlsXCIsIFwibHluXCIsIFwibHlublwiLCBcIm1hXCIsIFwibWVyYVwiLCBcIm1vcmFcIiwgXCJtdXJhXCIsIFwibXlsXCIsIFwibXlsYVwiLCBcIm5hblwiLCBcIm5hclwiLCBcIm5hc1wiLCBcIm5lcmFcIiwgXCJuaWFcIiwgXCJuaXBcIiwgXCJuaXNcIiwgXCJuaXNzXCIsIFwibm9yYVwiLCBcIm51cmFcIiwgXCJueWxcIiwgXCJueXNcIiwgXCJueXNzXCIsIFwicmFcIiwgXCJyYXNcIiwgXCJyZXNcIiwgXCJyaVwiLCBcInJpYVwiLCBcInJpZWxsZVwiLCBcInJpblwiLCBcInJpc1wiLCBcInJvc1wiLCBcInJ5bFwiLCBcInJ5blwiLCBcInNhZWxcIiwgXCJzZWxsZVwiLCBcInNvcmFcIiwgXCJzeWxcIiwgXCJ0aGVsXCIsIFwidGhpZWxcIiwgXCJ0aW5cIiwgXCJ0eW5cIiwgXCJ2YVwiLCBcInZhblwiLCBcInZpYVwiLCBcInZpYW5cIiwgXCJ3YWVuXCIsIFwid2luXCIsIFwid3luXCIsIFwid3lublwiXTtcclxuICAgIH1cclxuICAgIHJldHVybiBbbmFtZUxpc3QxLCBuYW1lTGlzdDJdO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlRWxmTmFtZUxpc3RzID0gZnVuY3Rpb24gKHNleCkge1xyXG4gICAgbGV0IG5hbWVMaXN0MTtcclxuICAgIGxldCBuYW1lTGlzdDI7XHJcblxyXG4gICAgaWYgKHNleCA9PT0gJ21hbGUnKSB7XHJcbiAgICAgICAgbmFtZUxpc3QxID0gW1wiQWRcIiwgXCJBZVwiLCBcIkJhbFwiLCBcIkJlaVwiLCBcIkNhclwiLCBcIkNyYVwiLCBcIkRhZVwiLCBcIkRvclwiLCBcIkVsXCIsIFwiRWxhXCIsIFwiRXJcIiwgXCJGYXJcIiwgXCJGZW5cIiwgXCJHZW5cIiwgXCJHbHluXCIsIFwiSGVpXCIsIFwiSGVyXCIsIFwiSWFuXCIsIFwiSWxpXCIsIFwiS2VhXCIsIFwiS2VsXCIsIFwiTGVvXCIsIFwiTHVcIiwgXCJNaXJhXCIsIFwiTW9yXCIsIFwiTmFlXCIsIFwiTm9yXCIsIFwiT2xvXCIsIFwiT21hXCIsIFwiUGFcIiwgXCJQZXJcIiwgXCJQZXRcIiwgXCJRaVwiLCBcIlFpblwiLCBcIlJhbG9cIiwgXCJSb1wiLCBcIlNhclwiLCBcIlN5bFwiLCBcIlRoZVwiLCBcIlRyYVwiLCBcIlVtZVwiLCBcIlVyaVwiLCBcIlZhXCIsIFwiVmlyXCIsIFwiV2Flc1wiLCBcIldyYW5cIiwgXCJZZWxcIiwgXCJZaW5cIiwgXCJaaW5cIiwgXCJadW1cIl07XHJcbiAgICAgICAgbmFtZUxpc3QyID0gW1wiYmFsYXJcIiwgXCJiZXJvc1wiLCBcImNhblwiLCBcImNlcmFuXCIsIFwiZGFuXCIsIFwiZGl0aGFzXCIsIFwiZmFyZW5cIiwgXCJmaXJcIiwgXCJnZWlyb3NcIiwgXCJnb2xvclwiLCBcImhpY2VcIiwgXCJob3JuXCIsIFwiamVvblwiLCBcImpvclwiLCBcImthc1wiLCBcImtpYW5cIiwgXCJsYW1pblwiLCBcImxhclwiLCBcImxlblwiLCBcIm1hZXJcIiwgXCJtYXJpc1wiLCBcIm1lbm9yXCIsIFwibXlhclwiLCBcIm5hblwiLCBcIm5laXJvc1wiLCBcIm5lbGlzXCIsIFwibm9yaW5cIiwgXCJwZWlyb3NcIiwgXCJwZXRvclwiLCBcInFlblwiLCBcInF1aW5hbFwiLCBcInJhblwiLCBcInJlblwiLCBcInJpY1wiLCBcInJpc1wiLCBcInJvXCIsIFwic2Fsb3JcIiwgXCJzYW5kb3JhbFwiLCBcInRvcmlzXCIsIFwidHVtYWxcIiwgXCJ2YWx1clwiLCBcInZlblwiLCBcIndhcmluXCIsIFwid3JhZWtcIiwgXCJ4YWxpbVwiLCBcInhpZG9yXCIsIFwieWFydXNcIiwgXCJ5ZGFya1wiLCBcInplaXJvc1wiLCBcInp1bWluXCJdO1xyXG4gICAgfSBlbHNlIGlmIChzZXggPT09ICdmZW1hbGUnKSB7XHJcbiAgICAgICAgbmFtZUxpc3QxID0gW1wiQWRcIiwgXCJBcmFcIiwgXCJCaVwiLCBcIkJyeVwiLCBcIkNhaVwiLCBcIkNoYWVcIiwgXCJEYVwiLCBcIkRhZVwiLCBcIkVpbFwiLCBcIkVuXCIsIFwiRmFcIiwgXCJGYWVcIiwgXCJHaWxcIiwgXCJHcmVcIiwgXCJIZWxlXCIsIFwiSG9sYVwiLCBcIklhclwiLCBcIkluYVwiLCBcIkpvXCIsIFwiS2V5XCIsIFwiS3Jpc1wiLCBcIkxpYVwiLCBcIkxvcmFcIiwgXCJNYWdcIiwgXCJNaWFcIiwgXCJOZXJpXCIsIFwiT2xhXCIsIFwiT3JpXCIsIFwiUGhpXCIsIFwiUHJlc1wiLCBcIlFpXCIsIFwiUXVpXCIsIFwiUmF2YVwiLCBcIlJleVwiLCBcIlNoYVwiLCBcIlN5bFwiLCBcIlRvclwiLCBcIlRyaXNcIiwgXCJVbGFcIiwgXCJVcmlcIiwgXCJWYWxcIiwgXCJWZW5cIiwgXCJXeW5cIiwgXCJXeXNhXCIsIFwiWGlsXCIsIFwiWHlyXCIsIFwiWWVzXCIsIFwiWWxsYVwiLCBcIlppblwiLCBcIlp5bFwiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJiYW5pc2VcIiwgXCJiZWxsYVwiLCBcImNhcnluXCIsIFwiY3luZVwiLCBcImRpXCIsIFwiZG92ZVwiLCBcImZpZWxcIiwgXCJmaW5hXCIsIFwiZ2VsbGFcIiwgXCJnd3luXCIsIFwiaGFuYVwiLCBcImhhcmljZVwiLCBcImp5cmVcIiwgXCJrYWx5blwiLCBcImtyYW5hXCIsIFwibGFuYVwiLCBcImxlZVwiLCBcImxldGhcIiwgXCJseW5uXCIsIFwibW9pcmFcIiwgXCJteXNcIiwgXCJuYVwiLCBcIm5hbGFcIiwgXCJwaGluZVwiLCBcInBoeXJhXCIsIFwicWlyZWxsZVwiLCBcInJhXCIsIFwicmFsZWlcIiwgXCJyZWxcIiwgXCJyaWVcIiwgXCJyaWV0aFwiLCBcInJvbmFcIiwgXCJyb3JhXCIsIFwicm9yaXNcIiwgXCJzYXRyYVwiLCBcInN0aW5hXCIsIFwic3lzXCIsIFwidGhhbmFcIiwgXCJ0aHlyYVwiLCBcInRyaXNcIiwgXCJ2YXJpc1wiLCBcInZ5cmVcIiwgXCJ3ZW55c1wiLCBcInd5bm5cIiwgXCJ4aW5hXCIsIFwieGlzeXNcIiwgXCJ5bm9yZVwiLCBcInlyYVwiLCBcInphbmFcIiwgXCJ6b3J3eW5cIl07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW25hbWVMaXN0MSwgbmFtZUxpc3QyXTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGVHbm9tZU5hbWVMaXN0cyA9IGZ1bmN0aW9uIChzZXgpIHtcclxuICAgIGxldCBuYW1lTGlzdDE7XHJcbiAgICBsZXQgbmFtZUxpc3QyO1xyXG5cclxuICAgIGlmIChzZXggPT09ICdtYWxlJykge1xyXG4gICAgICAgIG5hbWVMaXN0MSA9IFtcIkFsXCIsIFwiQXJpXCIsIFwiQmlsXCIsIFwiQnJpXCIsIFwiQ2FsXCIsIFwiQ29yXCIsIFwiRGF2XCIsIFwiRG9yXCIsIFwiRW5pXCIsIFwiRXJcIiwgXCJGYXJcIiwgXCJGZWxcIiwgXCJHYVwiLCBcIkdyYVwiLCBcIkhpc1wiLCBcIkhvclwiLCBcIklhblwiLCBcIklwYVwiLCBcIkplXCIsIFwiSm9yXCIsIFwiS2FzXCIsIFwiS2VsXCIsIFwiTGFuXCIsIFwiTG9cIiwgXCJNYW5cIiwgXCJNZXJcIiwgXCJOZXNcIiwgXCJOaVwiLCBcIk9yXCIsIFwiT3J1XCIsIFwiUGFuYVwiLCBcIlBvXCIsIFwiUXVhXCIsIFwiUXVvXCIsIFwiUmFzXCIsIFwiUm9uXCIsIFwiU2FcIiwgXCJTYWxcIiwgXCJTaW5cIiwgXCJUYW5cIiwgXCJUb1wiLCBcIlRyYVwiLCBcIlVtXCIsIFwiVXJpXCIsIFwiVmFsXCIsIFwiVm9yXCIsIFwiV2FyXCIsIFwiV2lsXCIsIFwiV3JlXCIsIFwiWGFsXCIsIFwiWG9cIiwgXCJZZVwiLCBcIllvc1wiLCBcIlphblwiLCBcIlppbFwiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJiYXJcIiwgXCJiZW5cIiwgXCJiaXNcIiwgXCJjb3JpblwiLCBcImNyeW5cIiwgXCJkb25cIiwgXCJkcmlcIiwgXCJmYW5cIiwgXCJmaXpcIiwgXCJnaW1cIiwgXCJncmltXCIsIFwiaGlrXCIsIFwiaGltXCIsIFwiamlcIiwgXCJqaW5cIiwgXCJrYXNcIiwgXCJrdXJcIiwgXCJsZW5cIiwgXCJsaW5cIiwgXCJtaW5cIiwgXCJtb3BcIiwgXCJtb3JuXCIsIFwibmFuXCIsIFwibmVyXCIsIFwibmlcIiwgXCJwaXBcIiwgXCJwb3NcIiwgXCJyaWNrXCIsIFwicm9zXCIsIFwicnVnXCIsIFwicnluXCIsIFwic2VyXCIsIFwic3RvblwiLCBcInRpeFwiLCBcInRvclwiLCBcInZlclwiLCBcInZ5blwiLCBcIndpblwiLCBcIndvclwiLCBcInhpZlwiLCBcInhpbVwiLCBcInliYXJcIiwgXCJ5dXJcIiwgXCJ6aXZlclwiLCBcInp1XCJdO1xyXG4gICAgfSBlbHNlIGlmIChzZXggPT09ICdmZW1hbGUnKSB7XHJcbiAgICAgICAgbmFtZUxpc3QxID0gW1wiQWx1XCIsIFwiQXJpXCIsIFwiQmFuXCIsIFwiQnJlZVwiLCBcIkNhclwiLCBcIkNlbFwiLCBcIkRhcGhpXCIsIFwiRG9cIiwgXCJFaWxpXCIsIFwiRWxcIiwgXCJGYWVcIiwgXCJGZW5cIiwgXCJGb2xcIiwgXCJHYWxcIiwgXCJHcmVuXCIsIFwiSGVsXCIsIFwiSGVzXCIsIFwiSW5hXCIsIFwiSXNvXCIsIFwiSmVsXCIsIFwiSm9cIiwgXCJLbG9cIiwgXCJLcmlcIiwgXCJMaWxcIiwgXCJMb3JpXCIsIFwiTWluXCIsIFwiTXlcIiwgXCJOaVwiLCBcIk55XCIsIFwiT2RhXCIsIFwiT3JcIiwgXCJQaGlcIiwgXCJQcmlcIiwgXCJRaVwiLCBcIlF1ZVwiLCBcIlJlXCIsIFwiUm9zaVwiLCBcIlNhXCIsIFwiU2VsXCIsIFwiU3BpXCIsIFwiVGFcIiwgXCJUaWZhXCIsIFwiVHJpXCIsIFwiVWZlXCIsIFwiVXJpXCIsIFwiVmVuXCIsIFwiVm9cIiwgXCJXZWxcIiwgXCJXcm9cIiwgXCJYYVwiLCBcIlh5cm9cIiwgXCJZbG9cIiwgXCJZb1wiLCBcIlphbmlcIiwgXCJaaW5cIl07XHJcbiAgICAgICAgbmFtZUxpc3QyID0gW1wiYmlcIiwgXCJieXNcIiwgXCJjZWxpXCIsIFwiY2lcIiwgXCJkaXJhXCIsIFwiZHlzYVwiLCBcImZpXCIsIFwiZnl4XCIsIFwiZ2FuaVwiLCBcImd5cmFcIiwgXCJoYW5hXCIsIFwiaGFuaVwiLCBcImthc3lzXCIsIFwia2luaVwiLCBcImxhXCIsIFwibGlcIiwgXCJsaW5cIiwgXCJseXNcIiwgXCJtaWxhXCIsIFwibWlwaGlcIiwgXCJteW5cIiwgXCJteXJhXCIsIFwibmFcIiwgXCJuaWFuYVwiLCBcIm5vYVwiLCBcIm5vdmVcIiwgXCJwaGluYVwiLCBcInBpbmVcIiwgXCJxYXJ5blwiLCBcInF5c1wiLCBcInJoYW5hXCIsIFwicm9lXCIsIFwic2FueVwiLCBcInNzYVwiLCBcInN5c1wiLCBcInRpbmFcIiwgXCJ0cmFcIiwgXCJ3eW5cIiwgXCJ3eXNlXCIsIFwieGlcIiwgXCJ4aXNcIiwgXCJ5YXJpc1wiLCBcInlvcmVcIiwgXCJ6YVwiLCBcInp5cmVcIl07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW25hbWVMaXN0MSwgbmFtZUxpc3QyXTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGVIYWxmRWxmTmFtZUxpc3RzID0gZnVuY3Rpb24gKHNleCkge1xyXG4gICAgbGV0IG5hbWVMaXN0MTtcclxuICAgIGxldCBuYW1lTGlzdDI7XHJcblxyXG4gICAgaWYgKHNleCA9PT0gJ21hbGUnKSB7XHJcbiAgICAgICAgbmFtZUxpc3QxID0gW1wiQWxcIiwgXCJBcm9cIiwgXCJCYXJcIiwgXCJCZWxcIiwgXCJDb3JcIiwgXCJDcmFcIiwgXCJEYXZcIiwgXCJEb3JcIiwgXCJFaXJcIiwgXCJFbFwiLCBcIkZhbFwiLCBcIkZyaWxcIiwgXCJHYWVyXCIsIFwiR3JhXCIsIFwiSGFsXCIsIFwiSG9yXCIsIFwiSWFuXCIsIFwiSWxvXCIsIFwiSmFtXCIsIFwiS2V2XCIsIFwiS3JpXCIsIFwiTGVvXCIsIFwiTG9yXCIsIFwiTWFyXCIsIFwiTWVpXCIsIFwiTmlsXCIsIFwiTm9yXCIsIFwiT3JpXCIsIFwiT3NcIiwgXCJQYW5cIiwgXCJQZXRcIiwgXCJRdW9cIiwgXCJSYWZcIiwgXCJSaVwiLCBcIlNhclwiLCBcIlN5bFwiLCBcIlRyYVwiLCBcIlR5clwiLCBcIlVhblwiLCBcIlVsXCIsIFwiVmFuXCIsIFwiVmljXCIsIFwiV2FsXCIsIFwiV2lsXCIsIFwiWGFuXCIsIFwiWGF2XCIsIFwiWWVuXCIsIFwiWW9yXCIsIFwiWmFuXCIsIFwiWnlsXCJdO1xyXG4gICAgICAgIG5hbWVMaXN0MiA9IFtcImF2b3JcIiwgXCJiZW5cIiwgXCJib3JpblwiLCBcImNvcmlsXCIsIFwiY3JhZXNcIiwgXCJkZXlyXCIsIFwiZGl0aGFzXCIsIFwiZWxvclwiLCBcImVuYXNcIiwgXCJmYWVsb3JcIiwgXCJmYWVyZFwiLCBcImZpbmFzXCIsIFwiZnlyXCIsIFwiZ290aW5cIiwgXCJncmV0b3JcIiwgXCJob21pblwiLCBcImhvcm5cIiwgXCJrYXNcIiwgXCJrb3Jpc1wiLCBcImxhbWlyXCIsIFwibGFuYW5uXCIsIFwibHVtaW5cIiwgXCJtaW5hclwiLCBcIm1vcm5cIiwgXCJuYW5cIiwgXCJuZWFrXCIsIFwibmVpcm9zXCIsIFwib3JpblwiLCBcIm92YXJcIiwgXCJwYXJpblwiLCBcInBoYW5pc1wiLCBcInFhcmltXCIsIFwicWlub3JcIiwgXCJyZWFrXCIsIFwicmlsXCIsIFwicm9zXCIsIFwic2FyaXBoXCIsIFwic3RhZXJcIiwgXCJ0b3JpblwiLCBcInR1bWlsXCIsIFwidmFsb3JcIiwgXCJ2b3JpbFwiLCBcIndhcml0aFwiLCBcIndvcmRcIiwgXCJ4aWFuXCIsIFwieGlyb25cIiwgXCJ5ZXJhc1wiLCBcInlub3JcIiwgXCJ6YXBoaXJcIiwgXCJ6YXJlblwiXTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHNleCA9PT0gJ2ZlbWFsZScpIHtcclxuICAgICAgICBuYW1lTGlzdDEgPSBbXCJBbHVcIiwgXCJBbHlcIiwgXCJBclwiLCBcIkJyZW5cIiwgXCJCeW5cIiwgXCJDYXJcIiwgXCJDb1wiLCBcIkRhclwiLCBcIkRlbFwiLCBcIkVsXCIsIFwiRWxpXCIsIFwiRmFlXCIsIFwiRmhhXCIsIFwiR2FsXCIsIFwiR2lmXCIsIFwiSGFseVwiLCBcIkhvXCIsIFwiSWxlXCIsIFwiSXJvXCIsIFwiSmVuXCIsIFwiSmlsXCIsIFwiS3JpXCIsIFwiS3lzXCIsIFwiTGVzXCIsIFwiTG9yYVwiLCBcIk1hXCIsIFwiTWFyXCIsIFwiTWFyZVwiLCBcIk5lcmlcIiwgXCJOb3JcIiwgXCJPbFwiLCBcIk9waGlcIiwgXCJQaGF5ZVwiLCBcIlByaVwiLCBcIlFpXCIsIFwiUXVlXCIsIFwiUmVsXCIsIFwiUmVzXCIsIFwiU2FlbFwiLCBcIlNhZlwiLCBcIlN5bFwiLCBcIlRoZXJcIiwgXCJUeWxcIiwgXCJVbmFcIiwgXCJVcmlcIiwgXCJWZW5cIiwgXCJWeWxcIiwgXCJXaW5cIiwgXCJXb2xcIiwgXCJYaWxcIiwgXCJYeXJcIiwgXCJZZXNcIiwgXCJZbGxcIiwgXCJaZWxcIiwgXCJaaW5cIl07XHJcbiAgICAgICAgbmFtZUxpc3QyID0gW1wiYWVyeXNcIiwgXCJhbnlzXCIsIFwiYmVsbGlzXCIsIFwiYnd5bm5cIiwgXCJjZXJ5c1wiLCBcImNoYXJpc1wiLCBcImRpYW5lXCIsIFwiZG92ZVwiLCBcImVsb3JcIiwgXCJlbnlwaGVcIiwgXCJmYWVuXCIsIFwiZmluZVwiLCBcImdhbHluXCIsIFwiZ3d5bm5cIiwgXCJoYW5hXCIsIFwiaG9waGVcIiwgXCJrYWVuXCIsIFwia2lsaWFcIiwgXCJsYWhuZVwiLCBcImx5bm5cIiwgXCJtYWVcIiwgXCJtYWxpc1wiLCBcIm15dGhlXCIsIFwibmFsb3JlXCIsIFwibm9hXCIsIFwibnlzXCIsIFwib25hXCIsIFwicGhpcmFcIiwgXCJwaXN5c1wiLCBcInFhcmluXCIsIFwicXd5blwiLCBcInJpbGFcIiwgXCJyb3JhXCIsIFwic2VyaXNcIiwgXCJzdGluZVwiLCBcInN5c1wiLCBcInRoYW5hXCIsIFwidGhlcmlzXCIsIFwidGlobmVcIiwgXCJ0cmFuYVwiLCBcInZpZWxcIiwgXCJ2eXJlXCIsIFwid2FseW5cIiwgXCJ3YXJpc1wiLCBcInhhcmlzXCIsIFwieGlwaGFcIiwgXCJ5YXJpZXNcIiwgXCJ5cmFcIiwgXCJ6ZW55YVwiLCBcInppcmFcIl07XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtuYW1lTGlzdDEsIG5hbWVMaXN0Ml07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGVIYWxmT3JjTmFtZUxpc3RzID0gZnVuY3Rpb24gKHNleCkge1xyXG4gICAgbGV0IG5hbWVMaXN0MTtcclxuICAgIGxldCBuYW1lTGlzdDI7XHJcbiAgICBsZXQgbmFtZUxpc3QzO1xyXG5cclxuICAgIGlmIChzZXggPT09ICdtYWxlJykge1xyXG4gICAgICAgIG5hbWVMaXN0MSA9IFtcIkFnXCIsIFwiQWdnXCIsIFwiQXJcIiwgXCJBcm5cIiwgXCJBc1wiLCBcIkF0XCIsIFwiQXRyXCIsIFwiQlwiLCBcIkJhclwiLCBcIkJlbFwiLCBcIkJvclwiLCBcIkJyXCIsIFwiQnJha1wiLCBcIkNcIiwgXCJDclwiLCBcIkRcIiwgXCJEb3JcIiwgXCJEclwiLCBcIkR1clwiLCBcIkdcIiwgXCJHYWxcIiwgXCJHYW5cIiwgXCJHYXJcIiwgXCJHbmFcIiwgXCJHb3JcIiwgXCJHb3RcIiwgXCJHclwiLCBcIkdyYW1cIiwgXCJHcmltXCIsIFwiR3JvbVwiLCBcIkdydW1cIiwgXCJHdWxcIiwgXCJIXCIsIFwiSGFnXCIsIFwiSGFuXCIsIFwiSGFyXCIsIFwiSG9nXCIsIFwiSG9uXCIsIFwiSG9yXCIsIFwiSHVuXCIsIFwiSHVyXCIsIFwiS1wiLCBcIkthbFwiLCBcIkthbVwiLCBcIkthclwiLCBcIktlbFwiLCBcIktpbFwiLCBcIktvbVwiLCBcIktvclwiLCBcIktyYVwiLCBcIktydVwiLCBcIkt1bFwiLCBcIkt1clwiLCBcIkx1bVwiLCBcIk1cIiwgXCJNYWdcIiwgXCJNYWhsXCIsIFwiTWFrXCIsIFwiTWFsXCIsIFwiTWFyXCIsIFwiTW9nXCIsIFwiTW9rXCIsIFwiTW9yXCIsIFwiTXVnXCIsIFwiTXVrXCIsIFwiTXVyYVwiLCBcIk5cIiwgXCJPZ2d1XCIsIFwiT2d1XCIsIFwiT2tcIiwgXCJPbGxcIiwgXCJPclwiLCBcIlJla1wiLCBcIlJlblwiLCBcIlJvblwiLCBcIlJvbmFcIiwgXCJTXCIsIFwiU2FyXCIsIFwiU29yXCIsIFwiVFwiLCBcIlRhblwiLCBcIlRoXCIsIFwiVGhhclwiLCBcIlRoZXJcIiwgXCJUaHJcIiwgXCJUaHVyXCIsIFwiVHJha1wiLCBcIlRydWtcIiwgXCJVZ1wiLCBcIlVrXCIsIFwiVWtyXCIsIFwiVWxsXCIsIFwiVXJcIiwgXCJVcnRoXCIsIFwiVXJ0clwiLCBcIlpcIiwgXCJaYVwiLCBcIlphclwiLCBcIlphc1wiLCBcIlphdlwiLCBcIlpldlwiLCBcIlpvclwiLCBcIlp1clwiLCBcIlp1c1wiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiYVwiLCBcImFcIiwgXCJvXCIsIFwib1wiLCBcImVcIiwgXCJpXCIsIFwidVwiLCBcInVcIiwgXCJ1XCJdO1xyXG4gICAgICAgIG5hbWVMaXN0MyA9IFtcImJha1wiLCBcImJhclwiLCBcImJhcmtcIiwgXCJiYXNoXCIsIFwiYnVyXCIsIFwiYnVya1wiLCBcImRcIiwgXCJkYWtcIiwgXCJkYWxsXCIsIFwiZGFyXCIsIFwiZGFya1wiLCBcImRhc2hcIiwgXCJkaW1cIiwgXCJkdXJcIiwgXCJkdXJrXCIsIFwiZ1wiLCBcImdha1wiLCBcImdhbGxcIiwgXCJnYXJcIiwgXCJnYXJrXCIsIFwiZ2FzaFwiLCBcImdsYXJcIiwgXCJndWxcIiwgXCJndXJcIiwgXCJtXCIsIFwibWFrXCIsIFwibWFyXCIsIFwibWFyc2hcIiwgXCJtYXNoXCIsIFwibWlyXCIsIFwibXVyXCIsIFwiblwiLCBcIm5hclwiLCBcIm5hcnNcIiwgXCJudXJcIiwgXCJyYWtcIiwgXCJyYWxsXCIsIFwicmFzaFwiLCBcInJpbVwiLCBcInJpbW1cIiwgXCJya1wiLCBcInJzaFwiLCBcInJ0aFwiLCBcInJ1a1wiLCBcInNrXCIsIFwidGFyXCIsIFwidGlyXCIsIFwidHVyXCIsIFwielwiLCBcInphbGxcIiwgXCJ6YXJcIiwgXCJ6dXJcIl07XHJcblxyXG4gICAgfSBlbHNlIGlmIChzZXggPT09ICdmZW1hbGUnKSB7XHJcbiAgICAgICAgbmFtZUxpc3QxID0gW1wiQWxcIiwgXCJBclwiLCBcIkJyXCIsIFwiRWtcIiwgXCJFbFwiLCBcIkZhbFwiLCBcIkZlbFwiLCBcIkZvbFwiLCBcIkZ1bFwiLCBcIkdcIiwgXCJHYWpcIiwgXCJHYXJcIiwgXCJHaWpcIiwgXCJHb3JcIiwgXCJHclwiLCBcIkdyeVwiLCBcIkd5blwiLCBcIkh1clwiLCBcIktcIiwgXCJLYXJcIiwgXCJLYXRcIiwgXCJLZXJcIiwgXCJLZXRcIiwgXCJLaXJcIiwgXCJLb3RcIiwgXCJLdXJcIiwgXCJLdXRcIiwgXCJMYWdcIiwgXCJNXCIsIFwiTWVyXCIsIFwiTWlyXCIsIFwiTW9yXCIsIFwiTlwiLCBcIk9sXCIsIFwiT290XCIsIFwiUHV5XCIsIFwiUlwiLCBcIlJhaFwiLCBcIlJhaGtcIiwgXCJSYXNcIiwgXCJSYXNoXCIsIFwiUmF3XCIsIFwiUm9oXCIsIFwiUm9oa1wiLCBcIlNcIiwgXCJTYW1cIiwgXCJTYW5cIiwgXCJTZW1cIiwgXCJTZW5cIiwgXCJTaFwiLCBcIlNoYXlcIiwgXCJTaW5cIiwgXCJTdW1cIiwgXCJTdW5cIiwgXCJUYW1cIiwgXCJUZW1cIiwgXCJUdVwiLCBcIlR1bVwiLCBcIlViXCIsIFwiVW1cIiwgXCJVclwiLCBcIlZhblwiLCBcIlphblwiLCBcIlplblwiLCBcIlpvblwiLCBcIlp1blwiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiYVwiLCBcIm9cIiwgXCJvXCIsIFwiZVwiLCBcImlcIiwgXCJpXCIsIFwidVwiXTtcclxuICAgICAgICBuYW1lTGlzdDMgPSBbXCJkXCIsIFwiZGFcIiwgXCJkYXJcIiwgXCJkdXJcIiwgXCJnXCIsIFwiZ2FyXCIsIFwiZ2hcIiwgXCJncmlcIiwgXCJndVwiLCBcInNoXCIsIFwic2hhXCIsIFwic2hpXCIsIFwiZ3VtXCIsIFwiZ3VtZVwiLCBcImd1clwiLCBcImtpXCIsIFwibWFyXCIsIFwibWlcIiwgXCJtaXJhXCIsIFwibWVcIiwgXCJtdXJcIiwgXCJuZVwiLCBcIm5lclwiLCBcIm5pclwiLCBcIm5hclwiLCBcIm5jaHVcIiwgXCJuaVwiLCBcIm51clwiLCBcInJhbFwiLCBcInJlbFwiLCBcInJpXCIsIFwicm9va1wiLCBcInRpXCIsIFwidGFoXCIsIFwidGlyXCIsIFwidGFyXCIsIFwidHVyXCIsIFwid2FyXCIsIFwielwiLCBcInphclwiLCBcInphcmFcIiwgXCJ6aVwiLCBcInp1clwiLCBcInp1cmFcIiwgXCJ6aXJhXCJdO1xyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBbbmFtZUxpc3QxLCBuYW1lTGlzdDJdO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlSGFsZmxpbmdOYW1lTGlzdHMgPSBmdW5jdGlvbiAoc2V4KSB7XHJcbiAgICBsZXQgbmFtZUxpc3QxO1xyXG4gICAgbGV0IG5hbWVMaXN0MjtcclxuXHJcbiAgICBpZiAoc2V4ID09PSAnbWFsZScpIHtcclxuICAgICAgICBuYW1lTGlzdDEgPSBbXCJBblwiLCBcIkFyXCIsIFwiQmFyXCIsIFwiQmVsXCIsIFwiQ29uXCIsIFwiQ29yXCIsIFwiRGFuXCIsIFwiRGF2XCIsIFwiRWxcIiwgXCJFclwiLCBcIkZhbFwiLCBcIkZpblwiLCBcIkZseW5cIiwgXCJHYXJcIiwgXCJHb1wiLCBcIkhhbFwiLCBcIkhvclwiLCBcIklkb1wiLCBcIklyYVwiLCBcIkphblwiLCBcIkpvXCIsIFwiS2FzXCIsIFwiS29yXCIsIFwiTGFcIiwgXCJMaW5cIiwgXCJNYXJcIiwgXCJNZXJcIiwgXCJOZVwiLCBcIk5vclwiLCBcIk9yaVwiLCBcIk9zXCIsIFwiUGFuXCIsIFwiUGVyXCIsIFwiUGltXCIsIFwiUXVpblwiLCBcIlF1b1wiLCBcIlJpXCIsIFwiUmljXCIsIFwiU2FuXCIsIFwiU2hhclwiLCBcIlRhclwiLCBcIlRlXCIsIFwiVWxcIiwgXCJVcmlcIiwgXCJWYWxcIiwgXCJWaW5cIiwgXCJXZW5cIiwgXCJXaWxcIiwgXCJYYW5cIiwgXCJYb1wiLCBcIllhclwiLCBcIlllblwiLCBcIlphbFwiLCBcIlplblwiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJhY2VcIiwgXCJhbWluXCIsIFwiYmluXCIsIFwiYnVsXCIsIFwiZGFrXCIsIFwiZGFsXCIsIFwiZGVyXCIsIFwiZG9uXCIsIFwiZW1pblwiLCBcImVvblwiLCBcImZlclwiLCBcImZpcmVcIiwgXCJnaW5cIiwgXCJoYWNlXCIsIFwiaG9yblwiLCBcImthc1wiLCBcImtpblwiLCBcImxhblwiLCBcImxvc1wiLCBcIm1pblwiLCBcIm1vXCIsIFwibmFkXCIsIFwibmFuXCIsIFwibmVyXCIsIFwib3JpblwiLCBcIm9zXCIsIFwicGhlclwiLCBcInBvc1wiLCBcInJhc1wiLCBcInJldFwiLCBcInJpY1wiLCBcInJpY2hcIiwgXCJyaW5cIiwgXCJyeVwiLCBcInNlclwiLCBcInNpcmVcIiwgXCJzdGVyXCIsIFwidG9uXCIsIFwidHJhblwiLCBcInVtb1wiLCBcInZlclwiLCBcInZpYXNcIiwgXCJ2b25cIiwgXCJ3YW5cIiwgXCJ3cmlja1wiLCBcInlhc1wiLCBcInl2ZXJcIiwgXCJ6aW5cIiwgXCJ6b3JcIiwgXCJ6dVwiXTtcclxuXHJcbiAgICB9IGVsc2UgaWYgKHNleCA9PT0gJ2ZlbWFsZScpIHtcclxuICAgICAgICBuYW1lTGlzdDEgPSBbXCJBblwiLCBcIkFyaVwiLCBcIkJlbFwiLCBcIkJyZVwiLCBcIkNhbFwiLCBcIkNoZW5cIiwgXCJEYXJcIiwgXCJEaWFcIiwgXCJFaVwiLCBcIkVvXCIsIFwiRWxpXCIsIFwiRXJhXCIsIFwiRmF5XCIsIFwiRmVuXCIsIFwiRnJvXCIsIFwiR2VsXCIsIFwiR3JhXCIsIFwiSGFcIiwgXCJIaWxcIiwgXCJJZGFcIiwgXCJJc2FcIiwgXCJKYXlcIiwgXCJKaWxcIiwgXCJLZWxcIiwgXCJLaXRoXCIsIFwiTGVcIiwgXCJMaWRcIiwgXCJNYWVcIiwgXCJNYWxcIiwgXCJNYXJcIiwgXCJOZVwiLCBcIk5lZFwiLCBcIk9kaVwiLCBcIk9yYVwiLCBcIlBhZVwiLCBcIlBydVwiLCBcIlFpXCIsIFwiUXVcIiwgXCJSaVwiLCBcIlJvc1wiLCBcIlNhXCIsIFwiU2hhZVwiLCBcIlN5bFwiLCBcIlRoYW1cIiwgXCJUaGVyXCIsIFwiVHJ5blwiLCBcIlVuYVwiLCBcIlV2aVwiLCBcIlZhXCIsIFwiVmVyXCIsIFwiV2VsXCIsIFwiV2lcIiwgXCJYYW5cIiwgXCJYaVwiLCBcIlllc1wiLCBcIllvXCIsIFwiWmVmXCIsIFwiWmVuXCJdO1xyXG4gICAgICAgIG5hbWVMaXN0MiA9IFtcImFseW5cIiwgXCJhcmFcIiwgXCJicml4XCIsIFwiYnluXCIsIFwiY2FyeW5cIiwgXCJjZXlcIiwgXCJkYVwiLCBcImRvdmVcIiwgXCJkcmV5XCIsIFwiZWxsZVwiLCBcImVuaVwiLCBcImZpY2VcIiwgXCJmaXJhXCIsIFwiZ3JhY2VcIiwgXCJnd2VuXCIsIFwiaGFseVwiLCBcImplblwiLCBcImthdGhcIiwgXCJraXNcIiwgXCJsZWlnaFwiLCBcImxhXCIsIFwibGllXCIsIFwibGlsZVwiLCBcImxpZW5uZVwiLCBcImx5c2VcIiwgXCJtaWFcIiwgXCJtaXRhXCIsIFwibmVcIiwgXCJuYVwiLCBcIm5pXCIsIFwibnlzXCIsIFwib2xhXCIsIFwib3JhXCIsIFwicGhpbmFcIiwgXCJwcnlzXCIsIFwicmFuYVwiLCBcInJlZVwiLCBcInJpXCIsIFwicmlzXCIsIFwic2ljYVwiLCBcInNpcmFcIiwgXCJzeXNcIiwgXCJ0aW5hXCIsIFwidHJpeFwiLCBcInVsYVwiLCBcInZpcmFcIiwgXCJ2eXJlXCIsIFwid3luXCIsIFwid3lzZVwiLCBcInlvbGFcIiwgXCJ5cmFcIiwgXCJ6YW5hXCIsIFwiemlyYVwiXTtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gW25hbWVMaXN0MSwgbmFtZUxpc3QyXTtcclxufTsiLCJtb2R1bGUuZXhwb3J0cy5nZW5lcmF0ZUh1bWFuTmFtZUxpc3RzID0gZnVuY3Rpb24gKHNleCkge1xyXG5cclxuICAgIGxldCBodW1hblN1YlJhY2UgPSBNYXRoLnJhbmRvbSgpICogOCB8IDA7XHJcblxyXG4gICAgbGV0IG5hbWVMaXN0MSA9ICcnO1xyXG4gICAgbGV0IG5hbWVMaXN0MiA9ICcnO1xyXG4gICAgbGV0IG5hbWVMaXN0MyA9ICcnO1xyXG4gICAgbGV0IG5hbWVMaXN0NCA9ICcnO1xyXG4gICAgbGV0IG5hbWVMaXN0NSA9ICcnO1xyXG5cclxuICAgIGlmIChzZXggPT09ICdtYWxlJykge1xyXG4gICAgICAgIHN3aXRjaCAoaHVtYW5TdWJSYWNlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MSA9IFtcIlwiLCBcIlwiLCBcImJcIiwgXCJiaFwiLCBcImZcIiwgXCJoXCIsIFwialwiLCBcImtoXCIsIFwibVwiLCBcIm5cIiwgXCJuaFwiLCBcInJcIiwgXCJyaFwiLCBcInNcIiwgXCJ6XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QyID0gW1wiYVwiLCBcImVcIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJ1XCIsIFwiaVwiLCBcImVpXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QzID0gW1wiYlwiLCBcImRcIiwgXCJobVwiLCBcImhuXCIsIFwiaGxcIiwgXCJraFwiLCBcImxcIiwgXCJtXCIsIFwicmRcIiwgXCJyXCIsIFwic1wiLCBcInNoXCIsIFwielwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NCA9IFtcImFcIiwgXCJlXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwidVwiLCBcImlcIiwgXCJlaVwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NSA9IFtcImRcIiwgXCJtXCIsIFwiblwiLCBcInJcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QxID0gW1wiXCIsIFwiYlwiLCBcImJyXCIsIFwiZFwiLCBcImdcIiwgXCJnclwiLCBcImhcIiwgXCJtXCIsIFwiblwiLCBcInJcIiwgXCJzdFwiLCBcInRcIiwgXCJ2XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QyID0gW1wiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDMgPSBbXCJcIiwgXCJiclwiLCBcImNyXCIsIFwiZ3JcIiwgXCJrdlwiLCBcImtyXCIsIFwibFwiLCBcImxsXCIsIFwibGRcIiwgXCJsdlwiLCBcIm5kXCIsIFwibmdcIiwgXCJua1wiLCBcIm52XCIsIFwicmRcIiwgXCJyZ1wiLCBcInJrXCIsIFwicnN0XCIsIFwicnZcIiwgXCJ2XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q0ID0gW1wiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDUgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJkXCIsIFwiZGRcIiwgXCJnXCIsIFwibFwiLCBcImxtXCIsIFwibVwiLCBcIm5cIiwgXCJyXCIsIFwicmtcIiwgXCJyblwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDEgPSBbXCJcIiwgXCJcIiwgXCJiXCIsIFwiYnJcIiwgXCJmXCIsIFwiZ1wiLCBcImdsXCIsIFwiZ3JcIiwgXCJoXCIsIFwia1wiLCBcIm1cIiwgXCJuXCIsIFwicFwiLCBcInJcIiwgXCJzXCIsIFwidlwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MiA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDMgPSBbXCJiXCIsIFwiYnJcIiwgXCJkXCIsIFwiZHJcIiwgXCJkZ1wiLCBcImdcIiwgXCJnclwiLCBcInJcIiwgXCJyZ1wiLCBcInJkXCIsIFwicnZcIiwgXCJzXCIsIFwidlwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDQgPSBbXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q1ID0gW1wiZlwiLCBcImxcIiwgXCJtXCIsIFwiblwiLCBcInJcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG5cclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MSA9IFtcIlwiLCBcIlwiLCBcIlwiLCBcImJsXCIsIFwiYnJcIiwgXCJmclwiLCBcImdcIiwgXCJnclwiLCBcImxcIiwgXCJtXCIsIFwiclwiLCBcInN0XCIsIFwic3RyXCIsIFwidFwiLCBcInRyXCIsIFwidlwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiZVwiLCBcIm9cIiwgXCJ1XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QzID0gW1wiY2tcIiwgXCJkclwiLCBcImR2XCIsIFwiZ3JcIiwgXCJnblwiLCBcImxjXCIsIFwibGRcIiwgXCJsdlwiLCBcImxiXCIsIFwibVwiLCBcIm5uXCIsIFwibmRcIiwgXCJudlwiLCBcInJkXCIsIFwicmNcIiwgXCJya1wiLCBcInJiXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q0ID0gW1wiYVwiLCBcImVcIiwgXCJvXCIsIFwidVwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NSA9IFtcIm1cIiwgXCJuXCIsIFwiclwiLCBcInJ0aFwiLCBcInRoXCJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MSA9IFtcImJcIiwgXCJkXCIsIFwiZ1wiLCBcImhcIiwgXCJqXCIsIFwia1wiLCBcImxcIiwgXCJtXCIsIFwiblwiLCBcInJcIiwgXCJzXCIsIFwidFwiLCBcInRoXCIsIFwidlwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIiwgXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiaW9cIiwgXCJhb1wiLCBcImVvXCIsIFwiZXVcIiwgXCJ1ZVwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MyA9IFtcImQta1wiLCBcImQtdlwiLCBcImstZFwiLCBcImstdlwiLCBcImstbVwiLCBcImstclwiLCBcIm0ta1wiLCBcIm0telwiLCBcIm0tdlwiLCBcIm4tdlwiLCBcIm4telwiLCBcIm4tZFwiLCBcInIta1wiLCBcInItdlwiLCBcInItelwiLCBcInQta1wiLCBcInItZFwiLCBcImgta1wiLCBcImgtelwiLCBcIi1rXCIsIFwiLWRcIiwgXCItbVwiLCBcIi1uXCIsIFwiLXZcIiwgXCItelwiLCBcIi10XCIsIFwiLXJcIiwgXCJjaFwiLCBcImRcIiwgXCJoXCIsIFwiaHBcIiwgXCJoa1wiLCBcImh2XCIsIFwialwiLCBcImtcIiwgXCJtXCIsIFwiblwiLCBcInJcIiwgXCJyaFwiLCBcInRcIiwgXCJ0aFwiLCBcInZcIiwgXCJ6XCIsIFwiY2hcIiwgXCJkXCIsIFwiaFwiLCBcImhwXCIsIFwiaGtcIiwgXCJodlwiLCBcImpcIiwgXCJrXCIsIFwibVwiLCBcIm5cIiwgXCJyXCIsIFwicmhcIiwgXCJ0XCIsIFwidGhcIiwgXCJ2XCIsIFwielwiLCBcImNoXCIsIFwiZFwiLCBcImhcIiwgXCJocFwiLCBcImhrXCIsIFwiaHZcIiwgXCJqXCIsIFwia1wiLCBcIm1cIiwgXCJuXCIsIFwiclwiLCBcInJoXCIsIFwidFwiLCBcInRoXCIsIFwidlwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDQgPSBbXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIiwgXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiaW9cIiwgXCJhb1wiLCBcImVvXCIsIFwiZXVcIiwgXCJ1ZVwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NSA9IFtcIlwiLCBcIlwiLCBcImRcIiwgXCJmXCIsIFwiaFwiLCBcImtcIiwgXCJuXCIsIFwiclwiLCBcInNcIiwgXCJ0aFwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QxID0gW1wiYlwiLCBcImJyXCIsIFwiZFwiLCBcImRyXCIsIFwiZlwiLCBcImdcIiwgXCJqXCIsIFwia1wiLCBcIm1cIiwgXCJyXCIsIFwic1wiLCBcInNoXCIsIFwidFwiLCBcInZsXCIsIFwielwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MiA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJvb1wiLCBcIm91XCIsIFwiYXVcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDMgPSBbXCJkXCIsIFwiZGpcIiwgXCJqXCIsIFwibG1cIiwgXCJsZFwiLCBcImx2XCIsIFwibVwiLCBcIm16XCIsIFwibXZcIiwgXCJuXCIsIFwibnpcIiwgXCJuZFwiLCBcIm5yXCIsIFwibmRcIiwgXCJyXCIsIFwicmdcIiwgXCJyZFwiLCBcInJsXCIsIFwicnZcIiwgXCJyelwiLCBcInNsXCIsIFwic3ZcIiwgXCJzZFwiLCBcInRoXCIsIFwidHZcIiwgXCJ2XCIsIFwielwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NCA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJvb1wiLCBcIm91XCIsIFwiYXVcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDUgPSBbXCJjXCIsIFwiZFwiLCBcImtcIiwgXCJyXCIsIFwic1wiLCBcInNrXCIsIFwidFwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDEgPSBbXCJcIiwgXCJcIiwgXCJjaFwiLCBcImZcIiwgXCJoXCIsIFwialwiLCBcImxcIiwgXCJtXCIsIFwicVwiLCBcInNoXCIsIFwidFwiLCBcInRoXCIsIFwid1wiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiaVwiLCBcImVcIiwgXCJvXCIsIFwidVwiLCBcImlhXCIsIFwidWlcIiwgXCJpb1wiLCBcImllXCIsIFwiaXVcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDMgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJoXCIsIFwibVwiLCBcIm5cIiwgXCJuZ1wiLCBcInBcIiwgXCJ3XCIsIFwieVwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDEgPSBbXCJcIiwgXCJcIiwgXCJjaFwiLCBcImNyXCIsIFwiZFwiLCBcImdyXCIsIFwiZlwiLCBcImZyXCIsIFwiaFwiLCBcIm1cIiwgXCJwXCIsIFwiclwiLCBcInNcIiwgXCJ0XCIsIFwidlwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIiwgXCJhaVwiLCBcImllXCIsIFwidWVcIiwgXCJlYVwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MyA9IFtcImJcIiwgXCJiclwiLCBcImNcIiwgXCJkclwiLCBcImxcIiwgXCJsZFwiLCBcImxiXCIsIFwibVwiLCBcIm1iXCIsIFwiblwiLCBcIm5yXCIsIFwibnRcIiwgXCJuY2hcIiwgXCJyXCIsIFwicmZcIiwgXCJydlwiLCBcInJuXCIsIFwicmNcIiwgXCJyZFwiLCBcInJ0XCIsIFwic3RcIiwgXCJzY1wiLCBcInRcIiwgXCJ2XCIsIFwielwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NCA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIiwgXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwidVwiLCBcImFpXCIsIFwiaWVcIiwgXCJ1ZVwiLCBcImVhXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q1ID0gW1wiXCIsIFwiXCIsIFwibFwiLCBcIm5cIiwgXCJyXCIsIFwic1wiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHNleCA9PT0gJ2ZlbWFsZScpIHtcclxuICAgICAgICBzd2l0Y2ggKGh1bWFuU3ViUmFjZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDEgPSBbXCJcIiwgXCJcIiwgXCJjXCIsIFwiZlwiLCBcImhcIiwgXCJqXCIsIFwibVwiLCBcIm5cIiwgXCJyXCIsIFwic1wiLCBcInNoXCIsIFwieVwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiZVwiLCBcInVcIiwgXCJhXCIsIFwiZVwiLCBcInVcIiwgXCJvXCIsIFwib1wiLCBcImlcIiwgXCJpXCIsIFwiZWlcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDMgPSBbXCJkXCIsIFwiZlwiLCBcImhuXCIsIFwiaGxcIiwgXCJobVwiLCBcImhyXCIsIFwibFwiLCBcIm1cIiwgXCJuXCIsIFwicFwiLCBcInJcIiwgXCJzXCIsIFwic2hcIiwgXCJzbVwiLCBcInNuXCIsIFwidFwiLCBcInZcIiwgXCJ6XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q0ID0gW1wiYVwiLCBcImVcIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJ1XCIsIFwib1wiLCBcIm9cIiwgXCJpXCIsIFwiaVwiLCBcImVpXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q1ID0gW1wiaFwiLCBcImxcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QxID0gW1wiXCIsIFwiY1wiLCBcImpcIiwgXCJqaFwiLCBcImtcIiwgXCJsXCIsIFwibVwiLCBcIm5cIiwgXCJyXCIsIFwic1wiLCBcInNoXCIsIFwidFwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MiA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIiwgXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIiwgXCJlZVwiLCBcImFpXCIsIFwiZWlcIiwgXCJpZVwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MyA9IFtcImNoXCIsIFwiZHJcIiwgXCJsXCIsIFwibGxcIiwgXCJsclwiLCBcImxkclwiLCBcImxzXCIsIFwibHpcIiwgXCJuXCIsIFwibmRyXCIsIFwicmxcIiwgXCJyXCIsIFwicnJcIiwgXCJydlwiLCBcInNzXCIsIFwic3JcIiwgXCJzdlwiLCBcIndcIiwgXCJ6XCIsIFwienpcIiwgXCJ6blwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NCA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIiwgXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwidVwiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcInVcIiwgXCJlZVwiLCBcImFpXCIsIFwiZWlcIiwgXCJpZVwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NSA9IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcImhcIiwgXCJsXCIsIFwibGxcIiwgXCJuXCJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MSA9IFtcImNcIiwgXCJjaFwiLCBcImhcIiwgXCJrXCIsIFwibFwiLCBcIm1cIiwgXCJuXCIsIFwiclwiLCBcInNcIiwgXCJ0XCIsIFwidlwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QzID0gW1wiaFwiLCBcImhuXCIsIFwiaHJcIiwgXCJsXCIsIFwibG1cIiwgXCJsclwiLCBcImxuXCIsIFwiblwiLCBcIm5uXCIsIFwiclwiLCBcInJuXCIsIFwicmxcIiwgXCJybVwiLCBcInRcIiwgXCJ0aFwiLCBcInRoclwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDQgPSBbXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q1ID0gW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiaFwiLCBcImxcIiwgXCJuXCIsIFwic1wiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDEgPSBbXCJcIiwgXCJcIiwgXCJiXCIsIFwiY1wiLCBcImhcIiwgXCJrXCIsIFwibFwiLCBcIm1cIiwgXCJuXCIsIFwiclwiLCBcInNcIiwgXCJ2XCIsIFwid1wiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QzID0gW1wiZm5cIiwgXCJmbFwiLCBcImZyXCIsIFwiZ1wiLCBcImxcIiwgXCJsZ1wiLCBcImxyXCIsIFwibVwiLCBcIm5cIiwgXCJyXCIsIFwicmhcIiwgXCJzaFwiLCBcInN0clwiLCBcInRoXCIsIFwidGhyXCIsIFwidlwiLCBcInZyXCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q0ID0gW1wiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NSA9IFtcIlwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcInlcIl07XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QxID0gW1wiY1wiLCBcImNoXCIsIFwiZlwiLCBcImhcIiwgXCJrXCIsIFwibFwiLCBcIm1cIiwgXCJuXCIsIFwiclwiLCBcInNcIiwgXCJ0XCIsIFwidGhcIiwgXCJ2XCIsIFwielwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MiA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QzID0gW1wiY2hcIiwgXCJmXCIsIFwiZnJcIiwgXCJoXCIsIFwibFwiLCBcIm1cIiwgXCJuXCIsIFwicGhcIiwgXCJzXCIsIFwic2hcIiwgXCJyXCIsIFwidGhcIiwgXCJ6XCIsIFwienJcIiwgXCJ6aFwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NCA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q1ID0gW1wiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiaFwiLCBcInNcIiwgXCJ0aFwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDEgPSBbXCJcIiwgXCJcIiwgXCJkXCIsIFwiZlwiLCBcImhcIiwgXCJsXCIsIFwibVwiLCBcIm5cIiwgXCJyXCIsIFwic1wiLCBcInNoXCIsIFwidFwiLCBcInRoXCIsIFwidlwiLCBcInlcIiwgXCJ6XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3QyID0gW1wiYVwiLCBcImVcIiwgXCJpXCIsIFwidVwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MyA9IFtcImNoXCIsIFwiZHJcIiwgXCJkaFwiLCBcImZcIiwgXCJmclwiLCBcImdyXCIsIFwiaFwiLCBcImxkclwiLCBcImxtXCIsIFwibG5cIiwgXCJsdlwiLCBcImxyXCIsIFwibW1cIiwgXCJtelwiLCBcIm12XCIsIFwibmRyXCIsIFwibnJcIiwgXCJyXCIsIFwicnJcIiwgXCJyclwiLCBcInJ2XCIsIFwicnNcIiwgXCJybFwiLCBcInZcIiwgXCJ2clwiLCBcInZcIiwgXCJ2bFwiXTtcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0NCA9IFtcImFcIiwgXCJlXCIsIFwiaVwiLCBcInVcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDUgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJsXCIsIFwiblwiLCBcInNcIiwgXCJzaFwiLCBcInRoXCJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgIG5hbWVMaXN0MSA9IFtcImJcIiwgXCJjXCIsIFwiY2hcIiwgXCJkXCIsIFwialwiLCBcImxcIiwgXCJtXCIsIFwiblwiLCBcInBcIiwgXCJxXCIsIFwic2hcIiwgXCJ0XCIsIFwidHNcIiwgXCJ4XCIsIFwieVwiLCBcInpcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhaVwiLCBcImlhXCIsIFwiYW9cIiwgXCJlaVwiLCBcImlhb1wiLCBcInVpXCIsIFwidWFcIiwgXCJ1ZVwiXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDEgPSBbXCJcIiwgXCJcIiwgXCJcIiwgXCJiXCIsIFwiZFwiLCBcImZcIiwgXCJqXCIsIFwibFwiLCBcIm1cIiwgXCJxXCIsIFwic1wiLCBcInZcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDIgPSBbXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJhXCIsIFwiZVwiLCBcImlcIiwgXCJvXCIsIFwiYVwiLCBcImVcIiwgXCJpXCIsIFwib1wiLCBcImFcIiwgXCJlXCIsIFwiaVwiLCBcIm9cIiwgXCJ1aVwiLCBcInVhXCIsIFwiYWlcIiwgXCJpYVwiLCBcImllXCIsIFwiZWlcIl07XHJcbiAgICAgICAgICAgICAgICBuYW1lTGlzdDMgPSBbXCJkXCIsIFwibFwiLCBcImxtXCIsIFwibVwiLCBcIm5cIiwgXCJuY1wiLCBcIm5kXCIsIFwibmRyXCIsIFwibnRcIiwgXCJublwiLCBcInJcIiwgXCJydFwiLCBcInNcIiwgXCJ0XCIsIFwidHRcIiwgXCJ2XCJdO1xyXG4gICAgICAgICAgICAgICAgbmFtZUxpc3Q0ID0gW1wiXCIsIFwiXCIsIFwiXCIsIFwiYlwiLCBcImRcIiwgXCJmXCIsIFwialwiLCBcImxcIiwgXCJtXCIsIFwicVwiLCBcInNcIiwgXCJ2XCJdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtuYW1lTGlzdDEsIG5hbWVMaXN0MiwgbmFtZUxpc3QzLCBuYW1lTGlzdDQsIG5hbWVMaXN0NV07XHJcbn07IiwibW9kdWxlLmV4cG9ydHMuZ2VuZXJhdGVUaWVmbGluZ05hbWVMaXN0cyA9IGZ1bmN0aW9uIChzZXgpIHtcclxuICAgIGxldCBuYW1lTGlzdDE7XHJcbiAgICBsZXQgbmFtZUxpc3QyO1xyXG5cclxuICAgIGlmIChzZXggPT09ICdtYWxlJykge1xyXG4gICAgICAgIG5hbWVMaXN0MSA9IFtcIkFldFwiLCBcIkFrXCIsIFwiQW1cIiwgXCJBcmFuXCIsIFwiQW5kXCIsIFwiQXJcIiwgXCJBcmtcIiwgXCJCYXJcIiwgXCJDYXJcIiwgXCJDYXNcIiwgXCJEYW1cIiwgXCJEaGFyXCIsIFwiRWJcIiwgXCJFa1wiLCBcIkVyXCIsIFwiR2FyXCIsIFwiR3VcIiwgXCJHdWVcIiwgXCJIb3JcIiwgXCJJYVwiLCBcIkthXCIsIFwiS2FpXCIsIFwiS2FyXCIsIFwiS2lsXCIsIFwiS29zXCIsIFwiS3lcIiwgXCJMb2tlXCIsIFwiTWFsXCIsIFwiTWFsZVwiLCBcIk1hdlwiLCBcIk1lXCIsIFwiTW9yXCIsIFwiTmVwaFwiLCBcIk96XCIsIFwiUmFsXCIsIFwiUmVcIiwgXCJSb2xcIiwgXCJTYWxcIiwgXCJTaGFcIiwgXCJTaXJcIiwgXCJTa2FcIiwgXCJUaGVcIiwgXCJUaHlcIiwgXCJUaHluZVwiLCBcIlVyXCIsIFwiVXJpXCIsIFwiVmFsXCIsIFwiWGFyXCIsIFwiWmFyXCIsIFwiWmVyXCIsIFwiWmhlclwiLCBcIlpvclwiXTtcclxuICAgICAgICBuYW1lTGlzdDIgPSBbXCJhZGl1c1wiLCBcImFrYXNcIiwgXCJha29zXCIsIFwiY2hhclwiLCBcImNpc1wiLCBcImNpdXNcIiwgXCJkb3NcIiwgXCJlbW9uXCIsIFwiaWNoYXJcIiwgXCJpbFwiLCBcImlsaXVzXCIsIFwiaXJhXCIsIFwibGVjaFwiLCBcImxpdXNcIiwgXCJseXJlXCIsIFwibWFyaXJcIiwgXCJtZW5vc1wiLCBcIm1lcm9zXCIsIFwibWlyXCIsIFwibW9uZ1wiLCBcIm1vc1wiLCBcIm11c1wiLCBcIm5vblwiLCBcInJhaVwiLCBcInJha2FzXCIsIFwicmFraXJcIiwgXCJyZXVzXCIsIFwicmlhc1wiLCBcInJpc1wiLCBcInJpdXNcIiwgXCJyb25cIiwgXCJyb3NcIiwgXCJydXNcIiwgXCJydXRcIiwgXCJzaG9vblwiLCBcInRob3JcIiwgXCJ0aG9zXCIsIFwidGh1c1wiLCBcInVzXCIsIFwidmVub21cIiwgXCJ2aXJcIiwgXCJ2aXVzXCIsIFwieGVzXCIsIFwieGlrXCIsIFwieGlrYXNcIiwgXCJ4aXJlXCIsIFwieGl1c1wiLCBcInh1c1wiLCBcInplclwiLCBcInppcmVcIl07XHJcbiAgICB9IGVsc2UgaWYgKHNleCA9PT0gJ2ZlbWFsZScpIHtcclxuICAgICAgICBuYW1lTGlzdDEgPSBbXCJBZlwiLCBcIkFnbmVcIiwgXCJBbmlcIiwgXCJBcmFcIiwgXCJBcmlcIiwgXCJBcmlhXCIsIFwiQmVsXCIsIFwiQnJpXCIsIFwiQ3JlXCIsIFwiRGFcIiwgXCJEaVwiLCBcIkRpbVwiLCBcIkRvclwiLCBcIkVhXCIsIFwiRnJpXCIsIFwiR3JpXCIsIFwiSGlzXCIsIFwiSW5cIiwgXCJJbmlcIiwgXCJLYWxcIiwgXCJMZVwiLCBcIkxldlwiLCBcIkxpbFwiLCBcIk1hXCIsIFwiTWFyXCIsIFwiTWlzXCIsIFwiTWl0aFwiLCBcIk5hXCIsIFwiTmF0XCIsIFwiTmVcIiwgXCJOZXRoXCIsIFwiTml0aFwiLCBcIk9yaVwiLCBcIlBlc1wiLCBcIlBoZVwiLCBcIlF1XCIsIFwiUmlcIiwgXCJSb1wiLCBcIlNhXCIsIFwiU2FyXCIsIFwiU2VpcmlcIiwgXCJTaGFcIiwgXCJWYWxcIiwgXCJWZWxcIiwgXCJZYVwiLCBcIllvcmFcIiwgXCJZdVwiLCBcIlphXCIsIFwiWmFpXCIsIFwiWmVcIl07XHJcbiAgICAgICAgbmFtZUxpc3QyID0gW1wiYmlzXCIsIFwiYm9yeXNcIiwgXCJjcmlhXCIsIFwiY3lyYVwiLCBcImRhbmlcIiwgXCJkb3Jpc1wiLCBcImZhcmlzXCIsIFwiZmlyaXRoXCIsIFwiZ29yaWFcIiwgXCJncmVhXCIsIFwiaGFsYVwiLCBcImhpcmlcIiwgXCJrYXJpYVwiLCBcImtpXCIsIFwibGFpYVwiLCBcImxpYVwiLCBcImxpZXNcIiwgXCJsaXN0YVwiLCBcImxpdGhcIiwgXCJsb3RoXCIsIFwibHlwc2lzXCIsIFwibHl2aWFcIiwgXCJtYWlhXCIsIFwibWVpYVwiLCBcIm1pbmVcIiwgXCJuYXJlaVwiLCBcIm5pcml0aFwiLCBcIm5pc2VcIiwgXCJwaGlcIiwgXCJwaW9uZVwiLCBcInB1bml0aFwiLCBcInFpbmVcIiwgXCJyYWxpXCIsIFwicmlzc2FcIiwgXCJzZWlzXCIsIFwic29saXNcIiwgXCJzcGlyYVwiLCBcInRhcmlcIiwgXCJ0aXNoXCIsIFwidXBoaXNcIiwgXCJ2YXJpXCIsIFwidmluZVwiLCBcIndhbGFcIiwgXCJ3dXJlXCIsIFwieGliaXNcIiwgXCJ4b3JpXCIsIFwieWlzXCIsIFwieW9sYVwiLCBcInphXCIsIFwiemVzXCJdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtuYW1lTGlzdDEsIG5hbWVMaXN0Ml07XHJcbn07IiwiY29uc3QgbG9jYWxMaXN0ID0gcmVxdWlyZSgnLi9sYW5nLmpzb24nKS53b3JkcztcbmNvbnN0IGJhc2VMaXN0ID0gcmVxdWlyZSgnYmFkd29yZHMtbGlzdCcpLmFycmF5O1xuXG5jbGFzcyBGaWx0ZXIge1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIEZpbHRlciBpbnN0YW5jZSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5lbXB0eUxpc3QgLSBJbnN0YW50aWF0ZSBmaWx0ZXIgd2l0aCBubyBibGFja2xpc3RcbiAgICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5saXN0IC0gSW5zdGFudGlhdGUgZmlsdGVyIHdpdGggY3VzdG9tIGxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucGxhY2VIb2xkZXIgLSBDaGFyYWN0ZXIgdXNlZCB0byByZXBsYWNlIHByb2ZhbmUgd29yZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnJlZ2V4IC0gUmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gc2FuaXRpemUgd29yZHMgYmVmb3JlIGNvbXBhcmluZyB0aGVtIHRvIGJsYWNrbGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucmVwbGFjZVJlZ2V4IC0gUmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gcmVwbGFjZSBwcm9mYW5lIHdvcmRzIHdpdGggcGxhY2VIb2xkZXIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGxpc3Q6IG9wdGlvbnMuZW1wdHlMaXN0ICYmIFtdIHx8IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkobG9jYWxMaXN0LCBbYmFzZUxpc3QsIG9wdGlvbnMubGlzdCB8fCBbXV0pLFxuICAgICAgZXhjbHVkZTogb3B0aW9ucy5leGNsdWRlIHx8IFtdLFxuICAgICAgcGxhY2VIb2xkZXI6IG9wdGlvbnMucGxhY2VIb2xkZXIgfHwgJyonLFxuICAgICAgcmVnZXg6IG9wdGlvbnMucmVnZXggfHwgL1teYS16QS1aMC05fFxcJHxcXEBdfFxcXi9nLFxuICAgICAgcmVwbGFjZVJlZ2V4OiBvcHRpb25zLnJlcGxhY2VSZWdleCB8fCAvXFx3L2dcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHN0cmluZyBjb250YWlucyBwcm9mYW5lIGxhbmd1YWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gU3RyaW5nIHRvIGV2YWx1YXRlIGZvciBwcm9mYW5pdHkuXG4gICAqL1xuICBpc1Byb2ZhbmUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFxuICAgICAgLmZpbHRlcigod29yZCkgPT4ge1xuICAgICAgICBjb25zdCB3b3JkRXhwID0gbmV3IFJlZ0V4cChgXFxcXGIke3dvcmQucmVwbGFjZSgvKFxcVykvZywgJ1xcXFwkMScpfVxcXFxiYCwgJ2dpJyk7XG4gICAgICAgIHJldHVybiAhdGhpcy5leGNsdWRlLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSkgJiYgd29yZEV4cC50ZXN0KHN0cmluZyk7XG4gICAgICB9KVxuICAgICAgLmxlbmd0aCA+IDAgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhIHdvcmQgd2l0aCBwbGFjZUhvbGRlciBjaGFyYWN0ZXJzO1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gU3RyaW5nIHRvIHJlcGxhY2UuXG4gICAqL1xuICByZXBsYWNlV29yZChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nXG4gICAgICAucmVwbGFjZSh0aGlzLnJlZ2V4LCAnJylcbiAgICAgIC5yZXBsYWNlKHRoaXMucmVwbGFjZVJlZ2V4LCB0aGlzLnBsYWNlSG9sZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBhIHN0cmluZyBmb3IgcHJvZmFuaXR5IGFuZCByZXR1cm4gYW4gZWRpdGVkIHZlcnNpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBTZW50ZW5jZSB0byBmaWx0ZXIuXG4gICAqL1xuICBjbGVhbihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnNwbGl0KC9cXGIvKS5tYXAoKHdvcmQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmlzUHJvZmFuZSh3b3JkKSA/IHRoaXMucmVwbGFjZVdvcmQod29yZCkgOiB3b3JkO1xuICAgIH0pLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB3b3JkKHMpIHRvIGJsYWNrbGlzdCBmaWx0ZXIgLyByZW1vdmUgd29yZHMgZnJvbSB3aGl0ZWxpc3QgZmlsdGVyXG4gICAqIEBwYXJhbSB7Li4uc3RyaW5nfSB3b3JkIC0gV29yZChzKSB0byBhZGQgdG8gYmxhY2tsaXN0XG4gICAqL1xuICBhZGRXb3JkcygpIHtcbiAgICBsZXQgd29yZHMgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmxpc3QucHVzaCguLi53b3Jkcyk7XG5cbiAgICB3b3Jkc1xuICAgICAgLm1hcCh3b3JkID0+IHdvcmQudG9Mb3dlckNhc2UoKSlcbiAgICAgIC5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmV4Y2x1ZGUuaW5jbHVkZXMod29yZCkpIHtcbiAgICAgICAgICB0aGlzLmV4Y2x1ZGUuc3BsaWNlKHRoaXMuZXhjbHVkZS5pbmRleE9mKHdvcmQpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHdvcmRzIHRvIHdoaXRlbGlzdCBmaWx0ZXJcbiAgICogQHBhcmFtIHsuLi5zdHJpbmd9IHdvcmQgLSBXb3JkKHMpIHRvIGFkZCB0byB3aGl0ZWxpc3QuXG4gICAqL1xuICByZW1vdmVXb3JkcygpIHtcbiAgICB0aGlzLmV4Y2x1ZGUucHVzaCguLi5BcnJheS5mcm9tKGFyZ3VtZW50cykubWFwKHdvcmQgPT4gd29yZC50b0xvd2VyQ2FzZSgpKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXI7IiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIndvcmRzXCI6W1xuICAgIFwiYWhvbGVcIixcbiAgICBcImFudXNcIixcbiAgICBcImFzaDBsZVwiLFxuICAgIFwiYXNoMGxlc1wiLFxuICAgIFwiYXNob2xlc1wiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJBc3MgTW9ua2V5XCIsXG4gICAgXCJBc3NmYWNlXCIsXG4gICAgXCJhc3NoMGxlXCIsXG4gICAgXCJhc3NoMGxlelwiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYXNzaG9sZXNcIixcbiAgICBcImFzc2hvbHpcIixcbiAgICBcImFzc3dpcGVcIixcbiAgICBcImF6emhvbGVcIixcbiAgICBcImJhc3N0ZXJkc1wiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmFzdGFyZHNcIixcbiAgICBcImJhc3RhcmR6XCIsXG4gICAgXCJiYXN0ZXJkc1wiLFxuICAgIFwiYmFzdGVyZHpcIixcbiAgICBcIkJpYXRjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJpdGNoZXNcIixcbiAgICBcIkJsb3cgSm9iXCIsXG4gICAgXCJib2ZmaW5nXCIsXG4gICAgXCJidXR0aG9sZVwiLFxuICAgIFwiYnV0dHdpcGVcIixcbiAgICBcImMwY2tcIixcbiAgICBcImMwY2tzXCIsXG4gICAgXCJjMGtcIixcbiAgICBcIkNhcnBldCBNdW5jaGVyXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjYXdrc1wiLFxuICAgIFwiQ2xpdFwiLFxuICAgIFwiY250c1wiLFxuICAgIFwiY250elwiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY29ja2hlYWRcIixcbiAgICBcImNvY2staGVhZFwiLFxuICAgIFwiY29ja3NcIixcbiAgICBcIkNvY2tTdWNrZXJcIixcbiAgICBcImNvY2stc3Vja2VyXCIsXG4gICAgXCJjcmFwXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImN1bnRzXCIsXG4gICAgXCJjdW50elwiLFxuICAgIFwiZGlja1wiLFxuICAgIFwiZGlsZDBcIixcbiAgICBcImRpbGQwc1wiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpbGRvc1wiLFxuICAgIFwiZGlsbGQwXCIsXG4gICAgXCJkaWxsZDBzXCIsXG4gICAgXCJkb21pbmF0cmlja3NcIixcbiAgICBcImRvbWluYXRyaWNzXCIsXG4gICAgXCJkb21pbmF0cml4XCIsXG4gICAgXCJkeWtlXCIsXG4gICAgXCJlbmVtYVwiLFxuICAgIFwiZiB1IGMga1wiLFxuICAgIFwiZiB1IGMgayBlIHJcIixcbiAgICBcImZhZ1wiLFxuICAgIFwiZmFnMXRcIixcbiAgICBcImZhZ2V0XCIsXG4gICAgXCJmYWdnMXRcIixcbiAgICBcImZhZ2dpdFwiLFxuICAgIFwiZmFnZ290XCIsXG4gICAgXCJmYWdnMHRcIixcbiAgICBcImZhZ2l0XCIsXG4gICAgXCJmYWdzXCIsXG4gICAgXCJmYWd6XCIsXG4gICAgXCJmYWlnXCIsXG4gICAgXCJmYWlnc1wiLFxuICAgIFwiZmFydFwiLFxuICAgIFwiZmxpcHBpbmcgdGhlIGJpcmRcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcImZ1Y2tlclwiLFxuICAgIFwiZnVja2luXCIsXG4gICAgXCJmdWNraW5nXCIsXG4gICAgXCJmdWNrc1wiLFxuICAgIFwiRnVkZ2UgUGFja2VyXCIsXG4gICAgXCJmdWtcIixcbiAgICBcIkZ1a2FoXCIsXG4gICAgXCJGdWtlblwiLFxuICAgIFwiZnVrZXJcIixcbiAgICBcIkZ1a2luXCIsXG4gICAgXCJGdWtrXCIsXG4gICAgXCJGdWtrYWhcIixcbiAgICBcIkZ1a2tlblwiLFxuICAgIFwiRnVra2VyXCIsXG4gICAgXCJGdWtraW5cIixcbiAgICBcImcwMGtcIixcbiAgICBcIkdvZC1kYW1uZWRcIixcbiAgICBcImgwMHJcIixcbiAgICBcImgwYXJcIixcbiAgICBcImgwcmVcIixcbiAgICBcImhlbGxzXCIsXG4gICAgXCJob2FyXCIsXG4gICAgXCJob29yXCIsXG4gICAgXCJob29yZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwiamFwXCIsXG4gICAgXCJqYXBzXCIsXG4gICAgXCJqZXJrLW9mZlwiLFxuICAgIFwiamlzaW1cIixcbiAgICBcImppc3NcIixcbiAgICBcImppem1cIixcbiAgICBcImppenpcIixcbiAgICBcImtub2JcIixcbiAgICBcImtub2JzXCIsXG4gICAgXCJrbm9ielwiLFxuICAgIFwia3VudFwiLFxuICAgIFwia3VudHNcIixcbiAgICBcImt1bnR6XCIsXG4gICAgXCJMZXp6aWFuXCIsXG4gICAgXCJMaXBzaGl0c1wiLFxuICAgIFwiTGlwc2hpdHpcIixcbiAgICBcIm1hc29jaGlzdFwiLFxuICAgIFwibWFzb2tpc3RcIixcbiAgICBcIm1hc3N0ZXJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYWl0ZXJcIixcbiAgICBcIm1hc3RlcmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdGVzXCIsXG4gICAgXCJNb3RoYSBGdWNrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2VyXCIsXG4gICAgXCJNb3RoYSBGdWtrYWhcIixcbiAgICBcIk1vdGhhIEZ1a2tlclwiLFxuICAgIFwiTW90aGVyIEZ1Y2tlclwiLFxuICAgIFwiTW90aGVyIEZ1a2FoXCIsXG4gICAgXCJNb3RoZXIgRnVrZXJcIixcbiAgICBcIk1vdGhlciBGdWtrYWhcIixcbiAgICBcIk1vdGhlciBGdWtrZXJcIixcbiAgICBcIm1vdGhlci1mdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVrYWhcIixcbiAgICBcIk11dGhhIEZ1a2VyXCIsXG4gICAgXCJNdXRoYSBGdWtrYWhcIixcbiAgICBcIk11dGhhIEZ1a2tlclwiLFxuICAgIFwibjFnclwiLFxuICAgIFwibmFzdHRcIixcbiAgICBcIm5pZ2dlcjtcIixcbiAgICBcIm5pZ3VyO1wiLFxuICAgIFwibmlpZ2VyO1wiLFxuICAgIFwibmlpZ3I7XCIsXG4gICAgXCJvcmFmaXNcIixcbiAgICBcIm9yZ2FzaW07XCIsXG4gICAgXCJvcmdhc21cIixcbiAgICBcIm9yZ2FzdW1cIixcbiAgICBcIm9yaWZhY2VcIixcbiAgICBcIm9yaWZpY2VcIixcbiAgICBcIm9yaWZpc3NcIixcbiAgICBcInBhY2tpXCIsXG4gICAgXCJwYWNraWVcIixcbiAgICBcInBhY2t5XCIsXG4gICAgXCJwYWtpXCIsXG4gICAgXCJwYWtpZVwiLFxuICAgIFwicGFreVwiLFxuICAgIFwicGVja2VyXCIsXG4gICAgXCJwZWVlbnVzXCIsXG4gICAgXCJwZWVlbnVzc3NcIixcbiAgICBcInBlZW51c1wiLFxuICAgIFwicGVpbnVzXCIsXG4gICAgXCJwZW4xc1wiLFxuICAgIFwicGVuYXNcIixcbiAgICBcInBlbmlzXCIsXG4gICAgXCJwZW5pcy1icmVhdGhcIixcbiAgICBcInBlbnVzXCIsXG4gICAgXCJwZW51dXNcIixcbiAgICBcIlBodWNcIixcbiAgICBcIlBodWNrXCIsXG4gICAgXCJQaHVrXCIsXG4gICAgXCJQaHVrZXJcIixcbiAgICBcIlBodWtrZXJcIixcbiAgICBcInBvbGFjXCIsXG4gICAgXCJwb2xhY2tcIixcbiAgICBcInBvbGFrXCIsXG4gICAgXCJQb29uYW5pXCIsXG4gICAgXCJwcjFjXCIsXG4gICAgXCJwcjFja1wiLFxuICAgIFwicHIxa1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3NlZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInB1dWtlXCIsXG4gICAgXCJwdXVrZXJcIixcbiAgICBcInF1ZWVyXCIsXG4gICAgXCJxdWVlcnNcIixcbiAgICBcInF1ZWVyelwiLFxuICAgIFwicXdlZXJzXCIsXG4gICAgXCJxd2VlcnpcIixcbiAgICBcInF3ZWlyXCIsXG4gICAgXCJyZWNrdHVtXCIsXG4gICAgXCJyZWN0dW1cIixcbiAgICBcInJldGFyZFwiLFxuICAgIFwic2FkaXN0XCIsXG4gICAgXCJzY2Fua1wiLFxuICAgIFwic2NobG9uZ1wiLFxuICAgIFwic2NyZXdpbmdcIixcbiAgICBcInNlbWVuXCIsXG4gICAgXCJzZXhcIixcbiAgICBcInNleHlcIixcbiAgICBcIlNoIXRcIixcbiAgICBcInNoMXRcIixcbiAgICBcInNoMXRlclwiLFxuICAgIFwic2gxdHNcIixcbiAgICBcInNoMXR0ZXJcIixcbiAgICBcInNoMXR6XCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJzaGl0c1wiLFxuICAgIFwic2hpdHRlclwiLFxuICAgIFwiU2hpdHR5XCIsXG4gICAgXCJTaGl0eVwiLFxuICAgIFwic2hpdHpcIixcbiAgICBcIlNoeXRcIixcbiAgICBcIlNoeXRlXCIsXG4gICAgXCJTaHl0dHlcIixcbiAgICBcIlNoeXR5XCIsXG4gICAgXCJza2FuY2tcIixcbiAgICBcInNrYW5rXCIsXG4gICAgXCJza2Fua2VlXCIsXG4gICAgXCJza2Fua2V5XCIsXG4gICAgXCJza2Fua3NcIixcbiAgICBcIlNrYW5reVwiLFxuICAgIFwic2xhZ1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic2x1dHNcIixcbiAgICBcIlNsdXR0eVwiLFxuICAgIFwic2x1dHpcIixcbiAgICBcInNvbi1vZi1hLWJpdGNoXCIsXG4gICAgXCJ0aXRcIixcbiAgICBcInR1cmRcIixcbiAgICBcInZhMWppbmFcIixcbiAgICBcInZhZzFuYVwiLFxuICAgIFwidmFnaWluYVwiLFxuICAgIFwidmFnaW5hXCIsXG4gICAgXCJ2YWoxbmFcIixcbiAgICBcInZhamluYVwiLFxuICAgIFwidnVsbHZhXCIsXG4gICAgXCJ2dWx2YVwiLFxuICAgIFwidzBwXCIsXG4gICAgXCJ3aDAwclwiLFxuICAgIFwid2gwcmVcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCJ4cmF0ZWRcIixcbiAgICBcInh4eFwiLFxuICAgIFwiYiErY2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJibG93am9iXCIsXG4gICAgXCJjbGl0XCIsXG4gICAgXCJhcnNjaGxvY2hcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcInNoaXRcIixcbiAgICBcImFzc1wiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYiF0Y2hcIixcbiAgICBcImIxN2NoXCIsXG4gICAgXCJiMXRjaFwiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmkrY2hcIixcbiAgICBcImJvaW9sYXNcIixcbiAgICBcImJ1Y2V0YVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2hpbmtcIixcbiAgICBcImNpcGFcIixcbiAgICBcImNsaXRzXCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaXJzYVwiLFxuICAgIFwiZWpha3VsYXRlXCIsXG4gICAgXCJmYXRhc3NcIixcbiAgICBcImZjdWtcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiZnV4MHJcIixcbiAgICBcImhvZXJcIixcbiAgICBcImhvcmVcIixcbiAgICBcImppc21cIixcbiAgICBcImthd2tcIixcbiAgICBcImwzaXRjaFwiLFxuICAgIFwibDNpK2NoXCIsXG4gICAgXCJsZXNiaWFuXCIsXG4gICAgXCJtYXN0dXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXQqXCIsXG4gICAgXCJtYXN0ZXJiYXQzXCIsXG4gICAgXCJtb3RoZXJmdWNrZXJcIixcbiAgICBcInMuby5iLlwiLFxuICAgIFwibW9mb1wiLFxuICAgIFwibmF6aVwiLFxuICAgIFwibmlnZ2FcIixcbiAgICBcIm5pZ2dlclwiLFxuICAgIFwibnV0c2Fja1wiLFxuICAgIFwicGh1Y2tcIixcbiAgICBcInBpbXBpc1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJzY3JvdHVtXCIsXG4gICAgXCJzaCF0XCIsXG4gICAgXCJzaGVtYWxlXCIsXG4gICAgXCJzaGkrXCIsXG4gICAgXCJzaCErXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbXV0XCIsXG4gICAgXCJ0ZWV0c1wiLFxuICAgIFwidGl0c1wiLFxuICAgIFwiYm9vYnNcIixcbiAgICBcImIwMGJzXCIsXG4gICAgXCJ0ZWV6XCIsXG4gICAgXCJ0ZXN0aWNhbFwiLFxuICAgIFwidGVzdGljbGVcIixcbiAgICBcInRpdHRcIixcbiAgICBcIncwMHNlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJ3YW5rXCIsXG4gICAgXCJ3aG9hclwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcIipkYW1uXCIsXG4gICAgXCIqZHlrZVwiLFxuICAgIFwiKmZ1Y2sqXCIsXG4gICAgXCIqc2hpdCpcIixcbiAgICBcIkAkJFwiLFxuICAgIFwiYW1jaWtcIixcbiAgICBcImFuZHNrb3RhXCIsXG4gICAgXCJhcnNlKlwiLFxuICAgIFwiYXNzcmFtbWVyXCIsXG4gICAgXCJheWlyXCIsXG4gICAgXCJiaTdjaFwiLFxuICAgIFwiYml0Y2gqXCIsXG4gICAgXCJib2xsb2NrKlwiLFxuICAgIFwiYnJlYXN0c1wiLFxuICAgIFwiYnV0dC1waXJhdGVcIixcbiAgICBcImNhYnJvblwiLFxuICAgIFwiY2F6em9cIixcbiAgICBcImNocmFhXCIsXG4gICAgXCJjaHVqXCIsXG4gICAgXCJDb2NrKlwiLFxuICAgIFwiY3VudCpcIixcbiAgICBcImQ0bW5cIixcbiAgICBcImRheWdvXCIsXG4gICAgXCJkZWdvXCIsXG4gICAgXCJkaWNrKlwiLFxuICAgIFwiZGlrZSpcIixcbiAgICBcImR1cGFcIixcbiAgICBcImR6aXdrYVwiLFxuICAgIFwiZWphY2t1bGF0ZVwiLFxuICAgIFwiRWtyZW0qXCIsXG4gICAgXCJFa3RvXCIsXG4gICAgXCJlbmN1bGVyXCIsXG4gICAgXCJmYWVuXCIsXG4gICAgXCJmYWcqXCIsXG4gICAgXCJmYW5jdWxvXCIsXG4gICAgXCJmYW5ueVwiLFxuICAgIFwiZmVjZXNcIixcbiAgICBcImZlZ1wiLFxuICAgIFwiRmVsY2hlclwiLFxuICAgIFwiZmlja2VuXCIsXG4gICAgXCJmaXR0KlwiLFxuICAgIFwiRmxpa2tlclwiLFxuICAgIFwiZm9yZXNraW5cIixcbiAgICBcIkZvdHplXCIsXG4gICAgXCJGdSgqXCIsXG4gICAgXCJmdWsqXCIsXG4gICAgXCJmdXRrcmV0em5cIixcbiAgICBcImdvb2tcIixcbiAgICBcImd1aWVuYVwiLFxuICAgIFwiaDByXCIsXG4gICAgXCJoNHgwclwiLFxuICAgIFwiaGVsbFwiLFxuICAgIFwiaGVsdmV0ZVwiLFxuICAgIFwiaG9lcipcIixcbiAgICBcImhvbmtleVwiLFxuICAgIFwiSHVldm9uXCIsXG4gICAgXCJodWlcIixcbiAgICBcImluanVuXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrYW5rZXIqXCIsXG4gICAgXCJraWtlXCIsXG4gICAgXCJrbG9vdHpha1wiLFxuICAgIFwia3JhdXRcIixcbiAgICBcImtudWxsZVwiLFxuICAgIFwia3VrXCIsXG4gICAgXCJrdWtzdWdlclwiLFxuICAgIFwiS3VyYWNcIixcbiAgICBcImt1cndhXCIsXG4gICAgXCJrdXNpKlwiLFxuICAgIFwia3lycGEqXCIsXG4gICAgXCJsZXNib1wiLFxuICAgIFwibWFtaG9vblwiLFxuICAgIFwibWFzdHVyYmF0KlwiLFxuICAgIFwibWVyZCpcIixcbiAgICBcIm1pYnVuXCIsXG4gICAgXCJtb25rbGVpZ2hcIixcbiAgICBcIm1vdWxpZXdvcFwiLFxuICAgIFwibXVpZVwiLFxuICAgIFwibXVsa2t1XCIsXG4gICAgXCJtdXNjaGlcIixcbiAgICBcIm5hemlzXCIsXG4gICAgXCJuZXBlc2F1cmlvXCIsXG4gICAgXCJuaWdnZXIqXCIsXG4gICAgXCJvcm9zcHVcIixcbiAgICBcInBhc2thKlwiLFxuICAgIFwicGVyc2VcIixcbiAgICBcInBpY2thXCIsXG4gICAgXCJwaWVyZG9sKlwiLFxuICAgIFwicGlsbHUqXCIsXG4gICAgXCJwaW1tZWxcIixcbiAgICBcInBpc3MqXCIsXG4gICAgXCJwaXpkYVwiLFxuICAgIFwicG9vbnRzZWVcIixcbiAgICBcInBvb3BcIixcbiAgICBcInBvcm5cIixcbiAgICBcInAwcm5cIixcbiAgICBcInByMG5cIixcbiAgICBcInByZXRlZW5cIixcbiAgICBcInB1bGFcIixcbiAgICBcInB1bGVcIixcbiAgICBcInB1dGFcIixcbiAgICBcInB1dG9cIixcbiAgICBcInFhaGJlaFwiLFxuICAgIFwicXVlZWYqXCIsXG4gICAgXCJyYXV0ZW5iZXJnXCIsXG4gICAgXCJzY2hhZmZlclwiLFxuICAgIFwic2NoZWlzcypcIixcbiAgICBcInNjaGxhbXBlXCIsXG4gICAgXCJzY2htdWNrXCIsXG4gICAgXCJzY3Jld1wiLFxuICAgIFwic2ghdCpcIixcbiAgICBcInNoYXJtdXRhXCIsXG4gICAgXCJzaGFybXV0ZVwiLFxuICAgIFwic2hpcGFsXCIsXG4gICAgXCJzaGl6XCIsXG4gICAgXCJza3JpYnpcIixcbiAgICBcInNrdXJ3eXN5blwiLFxuICAgIFwic3BoZW5jdGVyXCIsXG4gICAgXCJzcGljXCIsXG4gICAgXCJzcGllcmRhbGFqXCIsXG4gICAgXCJzcGxvb2dlXCIsXG4gICAgXCJzdWthXCIsXG4gICAgXCJiMDBiKlwiLFxuICAgIFwidGVzdGljbGUqXCIsXG4gICAgXCJ0aXR0KlwiLFxuICAgIFwidHdhdFwiLFxuICAgIFwidml0dHVcIixcbiAgICBcIndhbmsqXCIsXG4gICAgXCJ3ZXRiYWNrKlwiLFxuICAgIFwid2ljaHNlclwiLFxuICAgIFwid29wKlwiLFxuICAgIFwieWVkXCIsXG4gICAgXCJ6YWJvdXJhaFwiXG4gIF1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1wiNHI1ZVwiLCBcIjVoMXRcIiwgXCI1aGl0XCIsIFwiYTU1XCIsIFwiYW5hbFwiLCBcImFudXNcIiwgXCJhcjVlXCIsIFwiYXJyc2VcIiwgXCJhcnNlXCIsIFwiYXNzXCIsIFwiYXNzLWZ1Y2tlclwiLCBcImFzc2VzXCIsIFwiYXNzZnVja2VyXCIsIFwiYXNzZnVra2FcIiwgXCJhc3Nob2xlXCIsIFwiYXNzaG9sZXNcIiwgXCJhc3N3aG9sZVwiLCBcImFfc19zXCIsIFwiYiF0Y2hcIiwgXCJiMDBic1wiLCBcImIxN2NoXCIsIFwiYjF0Y2hcIiwgXCJiYWxsYmFnXCIsIFwiYmFsbHNcIiwgXCJiYWxsc2Fja1wiLCBcImJhc3RhcmRcIiwgXCJiZWFzdGlhbFwiLCBcImJlYXN0aWFsaXR5XCIsIFwiYmVsbGVuZFwiLCBcImJlc3RpYWxcIiwgXCJiZXN0aWFsaXR5XCIsIFwiYmkrY2hcIiwgXCJiaWF0Y2hcIiwgXCJiaXRjaFwiLCBcImJpdGNoZXJcIiwgXCJiaXRjaGVyc1wiLCBcImJpdGNoZXNcIiwgXCJiaXRjaGluXCIsIFwiYml0Y2hpbmdcIiwgXCJibG9vZHlcIiwgXCJibG93IGpvYlwiLCBcImJsb3dqb2JcIiwgXCJibG93am9ic1wiLCBcImJvaW9sYXNcIiwgXCJib2xsb2NrXCIsIFwiYm9sbG9rXCIsIFwiYm9uZXJcIiwgXCJib29iXCIsIFwiYm9vYnNcIiwgXCJib29vYnNcIiwgXCJib29vb2JzXCIsIFwiYm9vb29vYnNcIiwgXCJib29vb29vb2JzXCIsIFwiYnJlYXN0c1wiLCBcImJ1Y2V0YVwiLCBcImJ1Z2dlclwiLCBcImJ1bVwiLCBcImJ1bm55IGZ1Y2tlclwiLCBcImJ1dHRcIiwgXCJidXR0aG9sZVwiLCBcImJ1dHRtdWNoXCIsIFwiYnV0dHBsdWdcIiwgXCJjMGNrXCIsIFwiYzBja3N1Y2tlclwiLCBcImNhcnBldCBtdW5jaGVyXCIsIFwiY2F3a1wiLCBcImNoaW5rXCIsIFwiY2lwYVwiLCBcImNsMXRcIiwgXCJjbGl0XCIsIFwiY2xpdG9yaXNcIiwgXCJjbGl0c1wiLCBcImNudXRcIiwgXCJjb2NrXCIsIFwiY29jay1zdWNrZXJcIiwgXCJjb2NrZmFjZVwiLCBcImNvY2toZWFkXCIsIFwiY29ja211bmNoXCIsIFwiY29ja211bmNoZXJcIiwgXCJjb2Nrc1wiLCBcImNvY2tzdWNrXCIsIFwiY29ja3N1Y2tlZFwiLCBcImNvY2tzdWNrZXJcIiwgXCJjb2Nrc3Vja2luZ1wiLCBcImNvY2tzdWNrc1wiLCBcImNvY2tzdWthXCIsIFwiY29ja3N1a2thXCIsIFwiY29rXCIsIFwiY29rbXVuY2hlclwiLCBcImNva3N1Y2thXCIsIFwiY29vblwiLCBcImNveFwiLCBcImNyYXBcIiwgXCJjdW1cIiwgXCJjdW1tZXJcIiwgXCJjdW1taW5nXCIsIFwiY3Vtc1wiLCBcImN1bXNob3RcIiwgXCJjdW5pbGluZ3VzXCIsIFwiY3VuaWxsaW5ndXNcIiwgXCJjdW5uaWxpbmd1c1wiLCBcImN1bnRcIiwgXCJjdW50bGlja1wiLCBcImN1bnRsaWNrZXJcIiwgXCJjdW50bGlja2luZ1wiLCBcImN1bnRzXCIsIFwiY3lhbGlzXCIsIFwiY3liZXJmdWNcIiwgXCJjeWJlcmZ1Y2tcIiwgXCJjeWJlcmZ1Y2tlZFwiLCBcImN5YmVyZnVja2VyXCIsIFwiY3liZXJmdWNrZXJzXCIsIFwiY3liZXJmdWNraW5nXCIsIFwiZDFja1wiLCBcImRhbW5cIiwgXCJkaWNrXCIsIFwiZGlja2hlYWRcIiwgXCJkaWxkb1wiLCBcImRpbGRvc1wiLCBcImRpbmtcIiwgXCJkaW5rc1wiLCBcImRpcnNhXCIsIFwiZGxja1wiLCBcImRvZy1mdWNrZXJcIiwgXCJkb2dnaW5cIiwgXCJkb2dnaW5nXCIsIFwiZG9ua2V5cmliYmVyXCIsIFwiZG9vc2hcIiwgXCJkdWNoZVwiLCBcImR5a2VcIiwgXCJlamFjdWxhdGVcIiwgXCJlamFjdWxhdGVkXCIsIFwiZWphY3VsYXRlc1wiLCBcImVqYWN1bGF0aW5nXCIsIFwiZWphY3VsYXRpbmdzXCIsIFwiZWphY3VsYXRpb25cIiwgXCJlamFrdWxhdGVcIiwgXCJmIHUgYyBrXCIsIFwiZiB1IGMgayBlIHJcIiwgXCJmNG5ueVwiLCBcImZhZ1wiLCBcImZhZ2dpbmdcIiwgXCJmYWdnaXR0XCIsIFwiZmFnZ290XCIsIFwiZmFnZ3NcIiwgXCJmYWdvdFwiLCBcImZhZ290c1wiLCBcImZhZ3NcIiwgXCJmYW5ueVwiLCBcImZhbm55ZmxhcHNcIiwgXCJmYW5ueWZ1Y2tlclwiLCBcImZhbnl5XCIsIFwiZmF0YXNzXCIsIFwiZmN1a1wiLCBcImZjdWtlclwiLCBcImZjdWtpbmdcIiwgXCJmZWNrXCIsIFwiZmVja2VyXCIsIFwiZmVsY2hpbmdcIiwgXCJmZWxsYXRlXCIsIFwiZmVsbGF0aW9cIiwgXCJmaW5nZXJmdWNrXCIsIFwiZmluZ2VyZnVja2VkXCIsIFwiZmluZ2VyZnVja2VyXCIsIFwiZmluZ2VyZnVja2Vyc1wiLCBcImZpbmdlcmZ1Y2tpbmdcIiwgXCJmaW5nZXJmdWNrc1wiLCBcImZpc3RmdWNrXCIsIFwiZmlzdGZ1Y2tlZFwiLCBcImZpc3RmdWNrZXJcIiwgXCJmaXN0ZnVja2Vyc1wiLCBcImZpc3RmdWNraW5nXCIsIFwiZmlzdGZ1Y2tpbmdzXCIsIFwiZmlzdGZ1Y2tzXCIsIFwiZmxhbmdlXCIsIFwiZm9va1wiLCBcImZvb2tlclwiLCBcImZ1Y2tcIiwgXCJmdWNrYVwiLCBcImZ1Y2tlZFwiLCBcImZ1Y2tlclwiLCBcImZ1Y2tlcnNcIiwgXCJmdWNraGVhZFwiLCBcImZ1Y2toZWFkc1wiLCBcImZ1Y2tpblwiLCBcImZ1Y2tpbmdcIiwgXCJmdWNraW5nc1wiLCBcImZ1Y2tpbmdzaGl0bW90aGVyZnVja2VyXCIsIFwiZnVja21lXCIsIFwiZnVja3NcIiwgXCJmdWNrd2hpdFwiLCBcImZ1Y2t3aXRcIiwgXCJmdWRnZSBwYWNrZXJcIiwgXCJmdWRnZXBhY2tlclwiLCBcImZ1a1wiLCBcImZ1a2VyXCIsIFwiZnVra2VyXCIsIFwiZnVra2luXCIsIFwiZnVrc1wiLCBcImZ1a3doaXRcIiwgXCJmdWt3aXRcIiwgXCJmdXhcIiwgXCJmdXgwclwiLCBcImZfdV9jX2tcIiwgXCJnYW5nYmFuZ1wiLCBcImdhbmdiYW5nZWRcIiwgXCJnYW5nYmFuZ3NcIiwgXCJnYXlsb3JkXCIsIFwiZ2F5c2V4XCIsIFwiZ29hdHNlXCIsIFwiR29kXCIsIFwiZ29kLWRhbVwiLCBcImdvZC1kYW1uZWRcIiwgXCJnb2RkYW1uXCIsIFwiZ29kZGFtbmVkXCIsIFwiaGFyZGNvcmVzZXhcIiwgXCJoZWxsXCIsIFwiaGVzaGVcIiwgXCJob2FyXCIsIFwiaG9hcmVcIiwgXCJob2VyXCIsIFwiaG9tb1wiLCBcImhvcmVcIiwgXCJob3JuaWVzdFwiLCBcImhvcm55XCIsIFwiaG90c2V4XCIsIFwiamFjay1vZmZcIiwgXCJqYWNrb2ZmXCIsIFwiamFwXCIsIFwiamVyay1vZmZcIiwgXCJqaXNtXCIsIFwiaml6XCIsIFwiaml6bVwiLCBcImppenpcIiwgXCJrYXdrXCIsIFwia25vYlwiLCBcImtub2JlYWRcIiwgXCJrbm9iZWRcIiwgXCJrbm9iZW5kXCIsIFwia25vYmhlYWRcIiwgXCJrbm9iam9ja3lcIiwgXCJrbm9iam9rZXlcIiwgXCJrb2NrXCIsIFwia29uZHVtXCIsIFwia29uZHVtc1wiLCBcImt1bVwiLCBcImt1bW1lclwiLCBcImt1bW1pbmdcIiwgXCJrdW1zXCIsIFwia3VuaWxpbmd1c1wiLCBcImwzaStjaFwiLCBcImwzaXRjaFwiLCBcImxhYmlhXCIsIFwibHVzdFwiLCBcImx1c3RpbmdcIiwgXCJtMGYwXCIsIFwibTBmb1wiLCBcIm00NXRlcmJhdGVcIiwgXCJtYTV0ZXJiOFwiLCBcIm1hNXRlcmJhdGVcIiwgXCJtYXNvY2hpc3RcIiwgXCJtYXN0ZXItYmF0ZVwiLCBcIm1hc3RlcmI4XCIsIFwibWFzdGVyYmF0KlwiLCBcIm1hc3RlcmJhdDNcIiwgXCJtYXN0ZXJiYXRlXCIsIFwibWFzdGVyYmF0aW9uXCIsIFwibWFzdGVyYmF0aW9uc1wiLCBcIm1hc3R1cmJhdGVcIiwgXCJtby1mb1wiLCBcIm1vZjBcIiwgXCJtb2ZvXCIsIFwibW90aGFmdWNrXCIsIFwibW90aGFmdWNrYVwiLCBcIm1vdGhhZnVja2FzXCIsIFwibW90aGFmdWNrYXpcIiwgXCJtb3RoYWZ1Y2tlZFwiLCBcIm1vdGhhZnVja2VyXCIsIFwibW90aGFmdWNrZXJzXCIsIFwibW90aGFmdWNraW5cIiwgXCJtb3RoYWZ1Y2tpbmdcIiwgXCJtb3RoYWZ1Y2tpbmdzXCIsIFwibW90aGFmdWNrc1wiLCBcIm1vdGhlciBmdWNrZXJcIiwgXCJtb3RoZXJmdWNrXCIsIFwibW90aGVyZnVja2VkXCIsIFwibW90aGVyZnVja2VyXCIsIFwibW90aGVyZnVja2Vyc1wiLCBcIm1vdGhlcmZ1Y2tpblwiLCBcIm1vdGhlcmZ1Y2tpbmdcIiwgXCJtb3RoZXJmdWNraW5nc1wiLCBcIm1vdGhlcmZ1Y2trYVwiLCBcIm1vdGhlcmZ1Y2tzXCIsIFwibXVmZlwiLCBcIm11dGhhXCIsIFwibXV0aGFmZWNrZXJcIiwgXCJtdXRoYWZ1Y2trZXJcIiwgXCJtdXRoZXJcIiwgXCJtdXRoZXJmdWNrZXJcIiwgXCJuMWdnYVwiLCBcIm4xZ2dlclwiLCBcIm5hemlcIiwgXCJuaWdnM3JcIiwgXCJuaWdnNGhcIiwgXCJuaWdnYVwiLCBcIm5pZ2dhaFwiLCBcIm5pZ2dhc1wiLCBcIm5pZ2dhelwiLCBcIm5pZ2dlclwiLCBcIm5pZ2dlcnNcIiwgXCJub2JcIiwgXCJub2Igam9rZXlcIiwgXCJub2JoZWFkXCIsIFwibm9iam9ja3lcIiwgXCJub2Jqb2tleVwiLCBcIm51bWJudXRzXCIsIFwibnV0c2Fja1wiLCBcIm9yZ2FzaW1cIiwgXCJvcmdhc2ltc1wiLCBcIm9yZ2FzbVwiLCBcIm9yZ2FzbXNcIiwgXCJwMHJuXCIsIFwicGF3blwiLCBcInBlY2tlclwiLCBcInBlbmlzXCIsIFwicGVuaXNmdWNrZXJcIiwgXCJwaG9uZXNleFwiLCBcInBodWNrXCIsIFwicGh1a1wiLCBcInBodWtlZFwiLCBcInBodWtpbmdcIiwgXCJwaHVra2VkXCIsIFwicGh1a2tpbmdcIiwgXCJwaHVrc1wiLCBcInBodXFcIiwgXCJwaWdmdWNrZXJcIiwgXCJwaW1waXNcIiwgXCJwaXNzXCIsIFwicGlzc2VkXCIsIFwicGlzc2VyXCIsIFwicGlzc2Vyc1wiLCBcInBpc3Nlc1wiLCBcInBpc3NmbGFwc1wiLCBcInBpc3NpblwiLCBcInBpc3NpbmdcIiwgXCJwaXNzb2ZmXCIsIFwicG9vcFwiLCBcInBvcm5cIiwgXCJwb3Jub1wiLCBcInBvcm5vZ3JhcGh5XCIsIFwicG9ybm9zXCIsIFwicHJpY2tcIiwgXCJwcmlja3NcIiwgXCJwcm9uXCIsIFwicHViZVwiLCBcInB1c3NlXCIsIFwicHVzc2lcIiwgXCJwdXNzaWVzXCIsIFwicHVzc3lcIiwgXCJwdXNzeXNcIiwgXCJyZWN0dW1cIiwgXCJyZXRhcmRcIiwgXCJyaW1qYXdcIiwgXCJyaW1taW5nXCIsIFwicyBoaXRcIiwgXCJzLm8uYi5cIiwgXCJzYWRpc3RcIiwgXCJzY2hsb25nXCIsIFwic2NyZXdpbmdcIiwgXCJzY3JvYXRcIiwgXCJzY3JvdGVcIiwgXCJzY3JvdHVtXCIsIFwic2VtZW5cIiwgXCJzZXhcIiwgXCJzaCErXCIsIFwic2ghdFwiLCBcInNoMXRcIiwgXCJzaGFnXCIsIFwic2hhZ2dlclwiLCBcInNoYWdnaW5cIiwgXCJzaGFnZ2luZ1wiLCBcInNoZW1hbGVcIiwgXCJzaGkrXCIsIFwic2hpdFwiLCBcInNoaXRkaWNrXCIsIFwic2hpdGVcIiwgXCJzaGl0ZWRcIiwgXCJzaGl0ZXlcIiwgXCJzaGl0ZnVja1wiLCBcInNoaXRmdWxsXCIsIFwic2hpdGhlYWRcIiwgXCJzaGl0aW5nXCIsIFwic2hpdGluZ3NcIiwgXCJzaGl0c1wiLCBcInNoaXR0ZWRcIiwgXCJzaGl0dGVyXCIsIFwic2hpdHRlcnNcIiwgXCJzaGl0dGluZ1wiLCBcInNoaXR0aW5nc1wiLCBcInNoaXR0eVwiLCBcInNrYW5rXCIsIFwic2x1dFwiLCBcInNsdXRzXCIsIFwic21lZ21hXCIsIFwic211dFwiLCBcInNuYXRjaFwiLCBcInNvbi1vZi1hLWJpdGNoXCIsIFwic3BhY1wiLCBcInNwdW5rXCIsIFwic19oX2lfdFwiLCBcInQxdHQxZTVcIiwgXCJ0MXR0aWVzXCIsIFwidGVldHNcIiwgXCJ0ZWV6XCIsIFwidGVzdGljYWxcIiwgXCJ0ZXN0aWNsZVwiLCBcInRpdFwiLCBcInRpdGZ1Y2tcIiwgXCJ0aXRzXCIsIFwidGl0dFwiLCBcInRpdHRpZTVcIiwgXCJ0aXR0aWVmdWNrZXJcIiwgXCJ0aXR0aWVzXCIsIFwidGl0dHlmdWNrXCIsIFwidGl0dHl3YW5rXCIsIFwidGl0d2Fua1wiLCBcInRvc3NlclwiLCBcInR1cmRcIiwgXCJ0dzR0XCIsIFwidHdhdFwiLCBcInR3YXRoZWFkXCIsIFwidHdhdHR5XCIsIFwidHd1bnRcIiwgXCJ0d3VudGVyXCIsIFwidjE0Z3JhXCIsIFwidjFncmFcIiwgXCJ2YWdpbmFcIiwgXCJ2aWFncmFcIiwgXCJ2dWx2YVwiLCBcIncwMHNlXCIsIFwid2FuZ1wiLCBcIndhbmtcIiwgXCJ3YW5rZXJcIiwgXCJ3YW5reVwiLCBcIndob2FyXCIsIFwid2hvcmVcIiwgXCJ3aWxsaWVzXCIsIFwid2lsbHlcIiwgXCJ4cmF0ZWRcIiwgXCJ4eHhcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9iamVjdDogcmVxdWlyZSgnLi9vYmplY3QnKSxcbiAgYXJyYXk6IHJlcXVpcmUoJy4vYXJyYXknKSxcbiAgcmVnZXg6IHJlcXVpcmUoJy4vcmVnZXhwJylcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XCI0cjVlXCI6IDEsIFwiNWgxdFwiOiAxLCBcIjVoaXRcIjogMSwgXCJhNTVcIjogMSwgXCJhbmFsXCI6IDEsIFwiYW51c1wiOiAxLCBcImFyNWVcIjogMSwgXCJhcnJzZVwiOiAxLCBcImFyc2VcIjogMSwgXCJhc3NcIjogMSwgXCJhc3MtZnVja2VyXCI6IDEsIFwiYXNzZXNcIjogMSwgXCJhc3NmdWNrZXJcIjogMSwgXCJhc3NmdWtrYVwiOiAxLCBcImFzc2hvbGVcIjogMSwgXCJhc3Nob2xlc1wiOiAxLCBcImFzc3dob2xlXCI6IDEsIFwiYV9zX3NcIjogMSwgXCJiIXRjaFwiOiAxLCBcImIwMGJzXCI6IDEsIFwiYjE3Y2hcIjogMSwgXCJiMXRjaFwiOiAxLCBcImJhbGxiYWdcIjogMSwgXCJiYWxsc1wiOiAxLCBcImJhbGxzYWNrXCI6IDEsIFwiYmFzdGFyZFwiOiAxLCBcImJlYXN0aWFsXCI6IDEsIFwiYmVhc3RpYWxpdHlcIjogMSwgXCJiZWxsZW5kXCI6IDEsIFwiYmVzdGlhbFwiOiAxLCBcImJlc3RpYWxpdHlcIjogMSwgXCJiaStjaFwiOiAxLCBcImJpYXRjaFwiOiAxLCBcImJpdGNoXCI6IDEsIFwiYml0Y2hlclwiOiAxLCBcImJpdGNoZXJzXCI6IDEsIFwiYml0Y2hlc1wiOiAxLCBcImJpdGNoaW5cIjogMSwgXCJiaXRjaGluZ1wiOiAxLCBcImJsb29keVwiOiAxLCBcImJsb3cgam9iXCI6IDEsIFwiYmxvd2pvYlwiOiAxLCBcImJsb3dqb2JzXCI6IDEsIFwiYm9pb2xhc1wiOiAxLCBcImJvbGxvY2tcIjogMSwgXCJib2xsb2tcIjogMSwgXCJib25lclwiOiAxLCBcImJvb2JcIjogMSwgXCJib29ic1wiOiAxLCBcImJvb29ic1wiOiAxLCBcImJvb29vYnNcIjogMSwgXCJib29vb29ic1wiOiAxLCBcImJvb29vb29vYnNcIjogMSwgXCJicmVhc3RzXCI6IDEsIFwiYnVjZXRhXCI6IDEsIFwiYnVnZ2VyXCI6IDEsIFwiYnVtXCI6IDEsIFwiYnVubnkgZnVja2VyXCI6IDEsIFwiYnV0dFwiOiAxLCBcImJ1dHRob2xlXCI6IDEsIFwiYnV0dG11Y2hcIjogMSwgXCJidXR0cGx1Z1wiOiAxLCBcImMwY2tcIjogMSwgXCJjMGNrc3Vja2VyXCI6IDEsIFwiY2FycGV0IG11bmNoZXJcIjogMSwgXCJjYXdrXCI6IDEsIFwiY2hpbmtcIjogMSwgXCJjaXBhXCI6IDEsIFwiY2wxdFwiOiAxLCBcImNsaXRcIjogMSwgXCJjbGl0b3Jpc1wiOiAxLCBcImNsaXRzXCI6IDEsIFwiY251dFwiOiAxLCBcImNvY2tcIjogMSwgXCJjb2NrLXN1Y2tlclwiOiAxLCBcImNvY2tmYWNlXCI6IDEsIFwiY29ja2hlYWRcIjogMSwgXCJjb2NrbXVuY2hcIjogMSwgXCJjb2NrbXVuY2hlclwiOiAxLCBcImNvY2tzXCI6IDEsIFwiY29ja3N1Y2tcIjogMSwgXCJjb2Nrc3Vja2VkXCI6IDEsIFwiY29ja3N1Y2tlclwiOiAxLCBcImNvY2tzdWNraW5nXCI6IDEsIFwiY29ja3N1Y2tzXCI6IDEsIFwiY29ja3N1a2FcIjogMSwgXCJjb2Nrc3Vra2FcIjogMSwgXCJjb2tcIjogMSwgXCJjb2ttdW5jaGVyXCI6IDEsIFwiY29rc3Vja2FcIjogMSwgXCJjb29uXCI6IDEsIFwiY294XCI6IDEsIFwiY3JhcFwiOiAxLCBcImN1bVwiOiAxLCBcImN1bW1lclwiOiAxLCBcImN1bW1pbmdcIjogMSwgXCJjdW1zXCI6IDEsIFwiY3Vtc2hvdFwiOiAxLCBcImN1bmlsaW5ndXNcIjogMSwgXCJjdW5pbGxpbmd1c1wiOiAxLCBcImN1bm5pbGluZ3VzXCI6IDEsIFwiY3VudFwiOiAxLCBcImN1bnRsaWNrXCI6IDEsIFwiY3VudGxpY2tlclwiOiAxLCBcImN1bnRsaWNraW5nXCI6IDEsIFwiY3VudHNcIjogMSwgXCJjeWFsaXNcIjogMSwgXCJjeWJlcmZ1Y1wiOiAxLCBcImN5YmVyZnVja1wiOiAxLCBcImN5YmVyZnVja2VkXCI6IDEsIFwiY3liZXJmdWNrZXJcIjogMSwgXCJjeWJlcmZ1Y2tlcnNcIjogMSwgXCJjeWJlcmZ1Y2tpbmdcIjogMSwgXCJkMWNrXCI6IDEsIFwiZGFtblwiOiAxLCBcImRpY2tcIjogMSwgXCJkaWNraGVhZFwiOiAxLCBcImRpbGRvXCI6IDEsIFwiZGlsZG9zXCI6IDEsIFwiZGlua1wiOiAxLCBcImRpbmtzXCI6IDEsIFwiZGlyc2FcIjogMSwgXCJkbGNrXCI6IDEsIFwiZG9nLWZ1Y2tlclwiOiAxLCBcImRvZ2dpblwiOiAxLCBcImRvZ2dpbmdcIjogMSwgXCJkb25rZXlyaWJiZXJcIjogMSwgXCJkb29zaFwiOiAxLCBcImR1Y2hlXCI6IDEsIFwiZHlrZVwiOiAxLCBcImVqYWN1bGF0ZVwiOiAxLCBcImVqYWN1bGF0ZWRcIjogMSwgXCJlamFjdWxhdGVzXCI6IDEsIFwiZWphY3VsYXRpbmdcIjogMSwgXCJlamFjdWxhdGluZ3NcIjogMSwgXCJlamFjdWxhdGlvblwiOiAxLCBcImVqYWt1bGF0ZVwiOiAxLCBcImYgdSBjIGtcIjogMSwgXCJmIHUgYyBrIGUgclwiOiAxLCBcImY0bm55XCI6IDEsIFwiZmFnXCI6IDEsIFwiZmFnZ2luZ1wiOiAxLCBcImZhZ2dpdHRcIjogMSwgXCJmYWdnb3RcIjogMSwgXCJmYWdnc1wiOiAxLCBcImZhZ290XCI6IDEsIFwiZmFnb3RzXCI6IDEsIFwiZmFnc1wiOiAxLCBcImZhbm55XCI6IDEsIFwiZmFubnlmbGFwc1wiOiAxLCBcImZhbm55ZnVja2VyXCI6IDEsIFwiZmFueXlcIjogMSwgXCJmYXRhc3NcIjogMSwgXCJmY3VrXCI6IDEsIFwiZmN1a2VyXCI6IDEsIFwiZmN1a2luZ1wiOiAxLCBcImZlY2tcIjogMSwgXCJmZWNrZXJcIjogMSwgXCJmZWxjaGluZ1wiOiAxLCBcImZlbGxhdGVcIjogMSwgXCJmZWxsYXRpb1wiOiAxLCBcImZpbmdlcmZ1Y2tcIjogMSwgXCJmaW5nZXJmdWNrZWRcIjogMSwgXCJmaW5nZXJmdWNrZXJcIjogMSwgXCJmaW5nZXJmdWNrZXJzXCI6IDEsIFwiZmluZ2VyZnVja2luZ1wiOiAxLCBcImZpbmdlcmZ1Y2tzXCI6IDEsIFwiZmlzdGZ1Y2tcIjogMSwgXCJmaXN0ZnVja2VkXCI6IDEsIFwiZmlzdGZ1Y2tlclwiOiAxLCBcImZpc3RmdWNrZXJzXCI6IDEsIFwiZmlzdGZ1Y2tpbmdcIjogMSwgXCJmaXN0ZnVja2luZ3NcIjogMSwgXCJmaXN0ZnVja3NcIjogMSwgXCJmbGFuZ2VcIjogMSwgXCJmb29rXCI6IDEsIFwiZm9va2VyXCI6IDEsIFwiZnVja1wiOiAxLCBcImZ1Y2thXCI6IDEsIFwiZnVja2VkXCI6IDEsIFwiZnVja2VyXCI6IDEsIFwiZnVja2Vyc1wiOiAxLCBcImZ1Y2toZWFkXCI6IDEsIFwiZnVja2hlYWRzXCI6IDEsIFwiZnVja2luXCI6IDEsIFwiZnVja2luZ1wiOiAxLCBcImZ1Y2tpbmdzXCI6IDEsIFwiZnVja2luZ3NoaXRtb3RoZXJmdWNrZXJcIjogMSwgXCJmdWNrbWVcIjogMSwgXCJmdWNrc1wiOiAxLCBcImZ1Y2t3aGl0XCI6IDEsIFwiZnVja3dpdFwiOiAxLCBcImZ1ZGdlIHBhY2tlclwiOiAxLCBcImZ1ZGdlcGFja2VyXCI6IDEsIFwiZnVrXCI6IDEsIFwiZnVrZXJcIjogMSwgXCJmdWtrZXJcIjogMSwgXCJmdWtraW5cIjogMSwgXCJmdWtzXCI6IDEsIFwiZnVrd2hpdFwiOiAxLCBcImZ1a3dpdFwiOiAxLCBcImZ1eFwiOiAxLCBcImZ1eDByXCI6IDEsIFwiZl91X2Nfa1wiOiAxLCBcImdhbmdiYW5nXCI6IDEsIFwiZ2FuZ2JhbmdlZFwiOiAxLCBcImdhbmdiYW5nc1wiOiAxLCBcImdheWxvcmRcIjogMSwgXCJnYXlzZXhcIjogMSwgXCJnb2F0c2VcIjogMSwgXCJHb2RcIjogMSwgXCJnb2QtZGFtXCI6IDEsIFwiZ29kLWRhbW5lZFwiOiAxLCBcImdvZGRhbW5cIjogMSwgXCJnb2RkYW1uZWRcIjogMSwgXCJoYXJkY29yZXNleFwiOiAxLCBcImhlbGxcIjogMSwgXCJoZXNoZVwiOiAxLCBcImhvYXJcIjogMSwgXCJob2FyZVwiOiAxLCBcImhvZXJcIjogMSwgXCJob21vXCI6IDEsIFwiaG9yZVwiOiAxLCBcImhvcm5pZXN0XCI6IDEsIFwiaG9ybnlcIjogMSwgXCJob3RzZXhcIjogMSwgXCJqYWNrLW9mZlwiOiAxLCBcImphY2tvZmZcIjogMSwgXCJqYXBcIjogMSwgXCJqZXJrLW9mZlwiOiAxLCBcImppc21cIjogMSwgXCJqaXpcIjogMSwgXCJqaXptXCI6IDEsIFwiaml6elwiOiAxLCBcImthd2tcIjogMSwgXCJrbm9iXCI6IDEsIFwia25vYmVhZFwiOiAxLCBcImtub2JlZFwiOiAxLCBcImtub2JlbmRcIjogMSwgXCJrbm9iaGVhZFwiOiAxLCBcImtub2Jqb2NreVwiOiAxLCBcImtub2Jqb2tleVwiOiAxLCBcImtvY2tcIjogMSwgXCJrb25kdW1cIjogMSwgXCJrb25kdW1zXCI6IDEsIFwia3VtXCI6IDEsIFwia3VtbWVyXCI6IDEsIFwia3VtbWluZ1wiOiAxLCBcImt1bXNcIjogMSwgXCJrdW5pbGluZ3VzXCI6IDEsIFwibDNpK2NoXCI6IDEsIFwibDNpdGNoXCI6IDEsIFwibGFiaWFcIjogMSwgXCJsdXN0XCI6IDEsIFwibHVzdGluZ1wiOiAxLCBcIm0wZjBcIjogMSwgXCJtMGZvXCI6IDEsIFwibTQ1dGVyYmF0ZVwiOiAxLCBcIm1hNXRlcmI4XCI6IDEsIFwibWE1dGVyYmF0ZVwiOiAxLCBcIm1hc29jaGlzdFwiOiAxLCBcIm1hc3Rlci1iYXRlXCI6IDEsIFwibWFzdGVyYjhcIjogMSwgXCJtYXN0ZXJiYXQqXCI6IDEsIFwibWFzdGVyYmF0M1wiOiAxLCBcIm1hc3RlcmJhdGVcIjogMSwgXCJtYXN0ZXJiYXRpb25cIjogMSwgXCJtYXN0ZXJiYXRpb25zXCI6IDEsIFwibWFzdHVyYmF0ZVwiOiAxLCBcIm1vLWZvXCI6IDEsIFwibW9mMFwiOiAxLCBcIm1vZm9cIjogMSwgXCJtb3RoYWZ1Y2tcIjogMSwgXCJtb3RoYWZ1Y2thXCI6IDEsIFwibW90aGFmdWNrYXNcIjogMSwgXCJtb3RoYWZ1Y2thelwiOiAxLCBcIm1vdGhhZnVja2VkXCI6IDEsIFwibW90aGFmdWNrZXJcIjogMSwgXCJtb3RoYWZ1Y2tlcnNcIjogMSwgXCJtb3RoYWZ1Y2tpblwiOiAxLCBcIm1vdGhhZnVja2luZ1wiOiAxLCBcIm1vdGhhZnVja2luZ3NcIjogMSwgXCJtb3RoYWZ1Y2tzXCI6IDEsIFwibW90aGVyIGZ1Y2tlclwiOiAxLCBcIm1vdGhlcmZ1Y2tcIjogMSwgXCJtb3RoZXJmdWNrZWRcIjogMSwgXCJtb3RoZXJmdWNrZXJcIjogMSwgXCJtb3RoZXJmdWNrZXJzXCI6IDEsIFwibW90aGVyZnVja2luXCI6IDEsIFwibW90aGVyZnVja2luZ1wiOiAxLCBcIm1vdGhlcmZ1Y2tpbmdzXCI6IDEsIFwibW90aGVyZnVja2thXCI6IDEsIFwibW90aGVyZnVja3NcIjogMSwgXCJtdWZmXCI6IDEsIFwibXV0aGFcIjogMSwgXCJtdXRoYWZlY2tlclwiOiAxLCBcIm11dGhhZnVja2tlclwiOiAxLCBcIm11dGhlclwiOiAxLCBcIm11dGhlcmZ1Y2tlclwiOiAxLCBcIm4xZ2dhXCI6IDEsIFwibjFnZ2VyXCI6IDEsIFwibmF6aVwiOiAxLCBcIm5pZ2czclwiOiAxLCBcIm5pZ2c0aFwiOiAxLCBcIm5pZ2dhXCI6IDEsIFwibmlnZ2FoXCI6IDEsIFwibmlnZ2FzXCI6IDEsIFwibmlnZ2F6XCI6IDEsIFwibmlnZ2VyXCI6IDEsIFwibmlnZ2Vyc1wiOiAxLCBcIm5vYlwiOiAxLCBcIm5vYiBqb2tleVwiOiAxLCBcIm5vYmhlYWRcIjogMSwgXCJub2Jqb2NreVwiOiAxLCBcIm5vYmpva2V5XCI6IDEsIFwibnVtYm51dHNcIjogMSwgXCJudXRzYWNrXCI6IDEsIFwib3JnYXNpbVwiOiAxLCBcIm9yZ2FzaW1zXCI6IDEsIFwib3JnYXNtXCI6IDEsIFwib3JnYXNtc1wiOiAxLCBcInAwcm5cIjogMSwgXCJwYXduXCI6IDEsIFwicGVja2VyXCI6IDEsIFwicGVuaXNcIjogMSwgXCJwZW5pc2Z1Y2tlclwiOiAxLCBcInBob25lc2V4XCI6IDEsIFwicGh1Y2tcIjogMSwgXCJwaHVrXCI6IDEsIFwicGh1a2VkXCI6IDEsIFwicGh1a2luZ1wiOiAxLCBcInBodWtrZWRcIjogMSwgXCJwaHVra2luZ1wiOiAxLCBcInBodWtzXCI6IDEsIFwicGh1cVwiOiAxLCBcInBpZ2Z1Y2tlclwiOiAxLCBcInBpbXBpc1wiOiAxLCBcInBpc3NcIjogMSwgXCJwaXNzZWRcIjogMSwgXCJwaXNzZXJcIjogMSwgXCJwaXNzZXJzXCI6IDEsIFwicGlzc2VzXCI6IDEsIFwicGlzc2ZsYXBzXCI6IDEsIFwicGlzc2luXCI6IDEsIFwicGlzc2luZ1wiOiAxLCBcInBpc3NvZmZcIjogMSwgXCJwb29wXCI6IDEsIFwicG9yblwiOiAxLCBcInBvcm5vXCI6IDEsIFwicG9ybm9ncmFwaHlcIjogMSwgXCJwb3Jub3NcIjogMSwgXCJwcmlja1wiOiAxLCBcInByaWNrc1wiOiAxLCBcInByb25cIjogMSwgXCJwdWJlXCI6IDEsIFwicHVzc2VcIjogMSwgXCJwdXNzaVwiOiAxLCBcInB1c3NpZXNcIjogMSwgXCJwdXNzeVwiOiAxLCBcInB1c3N5c1wiOiAxLCBcInJlY3R1bVwiOiAxLCBcInJldGFyZFwiOiAxLCBcInJpbWphd1wiOiAxLCBcInJpbW1pbmdcIjogMSwgXCJzIGhpdFwiOiAxLCBcInMuby5iLlwiOiAxLCBcInNhZGlzdFwiOiAxLCBcInNjaGxvbmdcIjogMSwgXCJzY3Jld2luZ1wiOiAxLCBcInNjcm9hdFwiOiAxLCBcInNjcm90ZVwiOiAxLCBcInNjcm90dW1cIjogMSwgXCJzZW1lblwiOiAxLCBcInNleFwiOiAxLCBcInNoIStcIjogMSwgXCJzaCF0XCI6IDEsIFwic2gxdFwiOiAxLCBcInNoYWdcIjogMSwgXCJzaGFnZ2VyXCI6IDEsIFwic2hhZ2dpblwiOiAxLCBcInNoYWdnaW5nXCI6IDEsIFwic2hlbWFsZVwiOiAxLCBcInNoaStcIjogMSwgXCJzaGl0XCI6IDEsIFwic2hpdGRpY2tcIjogMSwgXCJzaGl0ZVwiOiAxLCBcInNoaXRlZFwiOiAxLCBcInNoaXRleVwiOiAxLCBcInNoaXRmdWNrXCI6IDEsIFwic2hpdGZ1bGxcIjogMSwgXCJzaGl0aGVhZFwiOiAxLCBcInNoaXRpbmdcIjogMSwgXCJzaGl0aW5nc1wiOiAxLCBcInNoaXRzXCI6IDEsIFwic2hpdHRlZFwiOiAxLCBcInNoaXR0ZXJcIjogMSwgXCJzaGl0dGVyc1wiOiAxLCBcInNoaXR0aW5nXCI6IDEsIFwic2hpdHRpbmdzXCI6IDEsIFwic2hpdHR5XCI6IDEsIFwic2thbmtcIjogMSwgXCJzbHV0XCI6IDEsIFwic2x1dHNcIjogMSwgXCJzbWVnbWFcIjogMSwgXCJzbXV0XCI6IDEsIFwic25hdGNoXCI6IDEsIFwic29uLW9mLWEtYml0Y2hcIjogMSwgXCJzcGFjXCI6IDEsIFwic3B1bmtcIjogMSwgXCJzX2hfaV90XCI6IDEsIFwidDF0dDFlNVwiOiAxLCBcInQxdHRpZXNcIjogMSwgXCJ0ZWV0c1wiOiAxLCBcInRlZXpcIjogMSwgXCJ0ZXN0aWNhbFwiOiAxLCBcInRlc3RpY2xlXCI6IDEsIFwidGl0XCI6IDEsIFwidGl0ZnVja1wiOiAxLCBcInRpdHNcIjogMSwgXCJ0aXR0XCI6IDEsIFwidGl0dGllNVwiOiAxLCBcInRpdHRpZWZ1Y2tlclwiOiAxLCBcInRpdHRpZXNcIjogMSwgXCJ0aXR0eWZ1Y2tcIjogMSwgXCJ0aXR0eXdhbmtcIjogMSwgXCJ0aXR3YW5rXCI6IDEsIFwidG9zc2VyXCI6IDEsIFwidHVyZFwiOiAxLCBcInR3NHRcIjogMSwgXCJ0d2F0XCI6IDEsIFwidHdhdGhlYWRcIjogMSwgXCJ0d2F0dHlcIjogMSwgXCJ0d3VudFwiOiAxLCBcInR3dW50ZXJcIjogMSwgXCJ2MTRncmFcIjogMSwgXCJ2MWdyYVwiOiAxLCBcInZhZ2luYVwiOiAxLCBcInZpYWdyYVwiOiAxLCBcInZ1bHZhXCI6IDEsIFwidzAwc2VcIjogMSwgXCJ3YW5nXCI6IDEsIFwid2Fua1wiOiAxLCBcIndhbmtlclwiOiAxLCBcIndhbmt5XCI6IDEsIFwid2hvYXJcIjogMSwgXCJ3aG9yZVwiOiAxLCBcIndpbGxpZXNcIjogMSwgXCJ3aWxseVwiOiAxLCBcInhyYXRlZFwiOiAxLCBcInh4eFwiOiAxfTsiLCJtb2R1bGUuZXhwb3J0cyA9IC9cXGIoNHI1ZXw1aDF0fDVoaXR8YTU1fGFuYWx8YW51c3xhcjVlfGFycnNlfGFyc2V8YXNzfGFzcy1mdWNrZXJ8YXNzZXN8YXNzZnVja2VyfGFzc2Z1a2thfGFzc2hvbGV8YXNzaG9sZXN8YXNzd2hvbGV8YV9zX3N8YiF0Y2h8YjAwYnN8YjE3Y2h8YjF0Y2h8YmFsbGJhZ3xiYWxsc3xiYWxsc2Fja3xiYXN0YXJkfGJlYXN0aWFsfGJlYXN0aWFsaXR5fGJlbGxlbmR8YmVzdGlhbHxiZXN0aWFsaXR5fGJpXFwrY2h8YmlhdGNofGJpdGNofGJpdGNoZXJ8Yml0Y2hlcnN8Yml0Y2hlc3xiaXRjaGlufGJpdGNoaW5nfGJsb29keXxibG93IGpvYnxibG93am9ifGJsb3dqb2JzfGJvaW9sYXN8Ym9sbG9ja3xib2xsb2t8Ym9uZXJ8Ym9vYnxib29ic3xib29vYnN8Ym9vb29ic3xib29vb29ic3xib29vb29vb2JzfGJyZWFzdHN8YnVjZXRhfGJ1Z2dlcnxidW18YnVubnkgZnVja2VyfGJ1dHR8YnV0dGhvbGV8YnV0dG11Y2h8YnV0dHBsdWd8YzBja3xjMGNrc3Vja2VyfGNhcnBldCBtdW5jaGVyfGNhd2t8Y2hpbmt8Y2lwYXxjbDF0fGNsaXR8Y2xpdG9yaXN8Y2xpdHN8Y251dHxjb2NrfGNvY2stc3Vja2VyfGNvY2tmYWNlfGNvY2toZWFkfGNvY2ttdW5jaHxjb2NrbXVuY2hlcnxjb2Nrc3xjb2Nrc3Vja3xjb2Nrc3Vja2VkfGNvY2tzdWNrZXJ8Y29ja3N1Y2tpbmd8Y29ja3N1Y2tzfGNvY2tzdWthfGNvY2tzdWtrYXxjb2t8Y29rbXVuY2hlcnxjb2tzdWNrYXxjb29ufGNveHxjcmFwfGN1bXxjdW1tZXJ8Y3VtbWluZ3xjdW1zfGN1bXNob3R8Y3VuaWxpbmd1c3xjdW5pbGxpbmd1c3xjdW5uaWxpbmd1c3xjdW50fGN1bnRsaWNrfGN1bnRsaWNrZXJ8Y3VudGxpY2tpbmd8Y3VudHN8Y3lhbGlzfGN5YmVyZnVjfGN5YmVyZnVja3xjeWJlcmZ1Y2tlZHxjeWJlcmZ1Y2tlcnxjeWJlcmZ1Y2tlcnN8Y3liZXJmdWNraW5nfGQxY2t8ZGFtbnxkaWNrfGRpY2toZWFkfGRpbGRvfGRpbGRvc3xkaW5rfGRpbmtzfGRpcnNhfGRsY2t8ZG9nLWZ1Y2tlcnxkb2dnaW58ZG9nZ2luZ3xkb25rZXlyaWJiZXJ8ZG9vc2h8ZHVjaGV8ZHlrZXxlamFjdWxhdGV8ZWphY3VsYXRlZHxlamFjdWxhdGVzfGVqYWN1bGF0aW5nfGVqYWN1bGF0aW5nc3xlamFjdWxhdGlvbnxlamFrdWxhdGV8ZiB1IGMga3xmIHUgYyBrIGUgcnxmNG5ueXxmYWd8ZmFnZ2luZ3xmYWdnaXR0fGZhZ2dvdHxmYWdnc3xmYWdvdHxmYWdvdHN8ZmFnc3xmYW5ueXxmYW5ueWZsYXBzfGZhbm55ZnVja2VyfGZhbnl5fGZhdGFzc3xmY3VrfGZjdWtlcnxmY3VraW5nfGZlY2t8ZmVja2VyfGZlbGNoaW5nfGZlbGxhdGV8ZmVsbGF0aW98ZmluZ2VyZnVja3xmaW5nZXJmdWNrZWR8ZmluZ2VyZnVja2VyfGZpbmdlcmZ1Y2tlcnN8ZmluZ2VyZnVja2luZ3xmaW5nZXJmdWNrc3xmaXN0ZnVja3xmaXN0ZnVja2VkfGZpc3RmdWNrZXJ8ZmlzdGZ1Y2tlcnN8ZmlzdGZ1Y2tpbmd8ZmlzdGZ1Y2tpbmdzfGZpc3RmdWNrc3xmbGFuZ2V8Zm9va3xmb29rZXJ8ZnVja3xmdWNrYXxmdWNrZWR8ZnVja2VyfGZ1Y2tlcnN8ZnVja2hlYWR8ZnVja2hlYWRzfGZ1Y2tpbnxmdWNraW5nfGZ1Y2tpbmdzfGZ1Y2tpbmdzaGl0bW90aGVyZnVja2VyfGZ1Y2ttZXxmdWNrc3xmdWNrd2hpdHxmdWNrd2l0fGZ1ZGdlIHBhY2tlcnxmdWRnZXBhY2tlcnxmdWt8ZnVrZXJ8ZnVra2VyfGZ1a2tpbnxmdWtzfGZ1a3doaXR8ZnVrd2l0fGZ1eHxmdXgwcnxmX3VfY19rfGdhbmdiYW5nfGdhbmdiYW5nZWR8Z2FuZ2JhbmdzfGdheWxvcmR8Z2F5c2V4fGdvYXRzZXxHb2R8Z29kLWRhbXxnb2QtZGFtbmVkfGdvZGRhbW58Z29kZGFtbmVkfGhhcmRjb3Jlc2V4fGhlbGx8aGVzaGV8aG9hcnxob2FyZXxob2VyfGhvbW98aG9yZXxob3JuaWVzdHxob3JueXxob3RzZXh8amFjay1vZmZ8amFja29mZnxqYXB8amVyay1vZmZ8amlzbXxqaXp8aml6bXxqaXp6fGthd2t8a25vYnxrbm9iZWFkfGtub2JlZHxrbm9iZW5kfGtub2JoZWFkfGtub2Jqb2NreXxrbm9iam9rZXl8a29ja3xrb25kdW18a29uZHVtc3xrdW18a3VtbWVyfGt1bW1pbmd8a3Vtc3xrdW5pbGluZ3VzfGwzaVxcK2NofGwzaXRjaHxsYWJpYXxsdXN0fGx1c3Rpbmd8bTBmMHxtMGZvfG00NXRlcmJhdGV8bWE1dGVyYjh8bWE1dGVyYmF0ZXxtYXNvY2hpc3R8bWFzdGVyLWJhdGV8bWFzdGVyYjh8bWFzdGVyYmF0KnxtYXN0ZXJiYXQzfG1hc3RlcmJhdGV8bWFzdGVyYmF0aW9ufG1hc3RlcmJhdGlvbnN8bWFzdHVyYmF0ZXxtby1mb3xtb2YwfG1vZm98bW90aGFmdWNrfG1vdGhhZnVja2F8bW90aGFmdWNrYXN8bW90aGFmdWNrYXp8bW90aGFmdWNrZWR8bW90aGFmdWNrZXJ8bW90aGFmdWNrZXJzfG1vdGhhZnVja2lufG1vdGhhZnVja2luZ3xtb3RoYWZ1Y2tpbmdzfG1vdGhhZnVja3N8bW90aGVyIGZ1Y2tlcnxtb3RoZXJmdWNrfG1vdGhlcmZ1Y2tlZHxtb3RoZXJmdWNrZXJ8bW90aGVyZnVja2Vyc3xtb3RoZXJmdWNraW58bW90aGVyZnVja2luZ3xtb3RoZXJmdWNraW5nc3xtb3RoZXJmdWNra2F8bW90aGVyZnVja3N8bXVmZnxtdXRoYXxtdXRoYWZlY2tlcnxtdXRoYWZ1Y2trZXJ8bXV0aGVyfG11dGhlcmZ1Y2tlcnxuMWdnYXxuMWdnZXJ8bmF6aXxuaWdnM3J8bmlnZzRofG5pZ2dhfG5pZ2dhaHxuaWdnYXN8bmlnZ2F6fG5pZ2dlcnxuaWdnZXJzfG5vYnxub2Igam9rZXl8bm9iaGVhZHxub2Jqb2NreXxub2Jqb2tleXxudW1ibnV0c3xudXRzYWNrfG9yZ2FzaW18b3JnYXNpbXN8b3JnYXNtfG9yZ2FzbXN8cDBybnxwYXdufHBlY2tlcnxwZW5pc3xwZW5pc2Z1Y2tlcnxwaG9uZXNleHxwaHVja3xwaHVrfHBodWtlZHxwaHVraW5nfHBodWtrZWR8cGh1a2tpbmd8cGh1a3N8cGh1cXxwaWdmdWNrZXJ8cGltcGlzfHBpc3N8cGlzc2VkfHBpc3NlcnxwaXNzZXJzfHBpc3Nlc3xwaXNzZmxhcHN8cGlzc2lufHBpc3Npbmd8cGlzc29mZnxwb29wfHBvcm58cG9ybm98cG9ybm9ncmFwaHl8cG9ybm9zfHByaWNrfHByaWNrc3xwcm9ufHB1YmV8cHVzc2V8cHVzc2l8cHVzc2llc3xwdXNzeXxwdXNzeXN8cmVjdHVtfHJldGFyZHxyaW1qYXd8cmltbWluZ3xzIGhpdHxzLm8uYi58c2FkaXN0fHNjaGxvbmd8c2NyZXdpbmd8c2Nyb2F0fHNjcm90ZXxzY3JvdHVtfHNlbWVufHNleHxzaCFcXCt8c2ghdHxzaDF0fHNoYWd8c2hhZ2dlcnxzaGFnZ2lufHNoYWdnaW5nfHNoZW1hbGV8c2hpXFwrfHNoaXR8c2hpdGRpY2t8c2hpdGV8c2hpdGVkfHNoaXRleXxzaGl0ZnVja3xzaGl0ZnVsbHxzaGl0aGVhZHxzaGl0aW5nfHNoaXRpbmdzfHNoaXRzfHNoaXR0ZWR8c2hpdHRlcnxzaGl0dGVyc3xzaGl0dGluZ3xzaGl0dGluZ3N8c2hpdHR5fHNrYW5rfHNsdXR8c2x1dHN8c21lZ21hfHNtdXR8c25hdGNofHNvbi1vZi1hLWJpdGNofHNwYWN8c3B1bmt8c19oX2lfdHx0MXR0MWU1fHQxdHRpZXN8dGVldHN8dGVlenx0ZXN0aWNhbHx0ZXN0aWNsZXx0aXR8dGl0ZnVja3x0aXRzfHRpdHR8dGl0dGllNXx0aXR0aWVmdWNrZXJ8dGl0dGllc3x0aXR0eWZ1Y2t8dGl0dHl3YW5rfHRpdHdhbmt8dG9zc2VyfHR1cmR8dHc0dHx0d2F0fHR3YXRoZWFkfHR3YXR0eXx0d3VudHx0d3VudGVyfHYxNGdyYXx2MWdyYXx2YWdpbmF8dmlhZ3JhfHZ1bHZhfHcwMHNlfHdhbmd8d2Fua3x3YW5rZXJ8d2Fua3l8d2hvYXJ8d2hvcmV8d2lsbGllc3x3aWxseXx4cmF0ZWR8eHh4KVxcYi9naTsiXX0=
