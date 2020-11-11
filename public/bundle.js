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

    name = name.charAt(0).toUpperCase() + name.slice(1);

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

    let nameList1 = [''];
    let nameList2 = [''];

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
    let nameList1 = [''];
    let nameList2 = [''];

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
    let nameList1 = [''];
    let nameList2 = [''];

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
    let nameList1 = [''];
    let nameList2 = [''];

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
    let nameList1 = [''];
    let nameList2 = [''];

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
    let nameList1 = [''];
    let nameList2 = [''];
    let nameList3 = [''];

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

    let nameList1 = [''];
    let nameList2 = [''];

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
},{}],12:[function(require,module,exports){
module.exports.generateTieflingNameLists = function (sex) {

    let nameList1 = [''];
    let nameList2 = [''];

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
},{}]},{},[1]);
