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

module.exports.generateName = function (sex, race) {

    let res;

    switch (race) {
        case 'Dragonborn':
            res = generateDragonbornName(sex);
            break;
        case 'Dwarf':
            res = generateDwarfName(sex);
            break;
        case 'Elf':
            res = generateElfName(sex);
            break;
        case 'Gnome':
            res = generateGnomeName(sex);
            break;
        case 'Half-Elf':
            res = generateHalfElfName(sex);
            break;
        case 'Halfling':
            res = generateHalflingName(sex);
            break;
        case 'Half-Orc':
            res = generateHalfOrcName(sex);
            break;
        case 'Human':
            res = generateHumanName(sex);
            break;
        case 'Tiefling':
            res = generateTieflingName(sex);
            break;
    }
    return res;
};

const generateDragonbornName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateDragonbornName(sex);

    return name;
};

const generateDwarfName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateDwarfName(sex);

    return name;
};

const generateElfName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateElfName(sex);

    return name;
};

const generateGnomeName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateGnomeName(sex);

    return name;
};

const generateHalfElfName = function (sex) {
    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateHalfElfName(sex);

    return name;
};

const generateHalflingName = function (sex) {
    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateHalflingName(sex);

    return name;
};

const generateHalfOrcName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateHalfOrcName(sex);

    return name;
};

const generateHumanName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateHumanName(sex);

    return name;
};

const generateTieflingName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (filter.isProfane(name))
        generateTieflingName(sex);

    return name;
};
},{"./profanity_checker.js":3}],3:[function(require,module,exports){
let Filter = require('bad-words'),
    filter = new Filter();

module.exports.isProfane = function(s) {
    return filter.isProfane(s);
};
},{"bad-words":4}],4:[function(require,module,exports){
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
},{"./lang.json":5,"badwords-list":7}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
module.exports = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];
},{}],7:[function(require,module,exports){
module.exports = {
  object: require('./object'),
  array: require('./array'),
  regex: require('./regexp')
};
},{"./array":6,"./object":8,"./regexp":9}],8:[function(require,module,exports){
module.exports = {"4r5e": 1, "5h1t": 1, "5hit": 1, "a55": 1, "anal": 1, "anus": 1, "ar5e": 1, "arrse": 1, "arse": 1, "ass": 1, "ass-fucker": 1, "asses": 1, "assfucker": 1, "assfukka": 1, "asshole": 1, "assholes": 1, "asswhole": 1, "a_s_s": 1, "b!tch": 1, "b00bs": 1, "b17ch": 1, "b1tch": 1, "ballbag": 1, "balls": 1, "ballsack": 1, "bastard": 1, "beastial": 1, "beastiality": 1, "bellend": 1, "bestial": 1, "bestiality": 1, "bi+ch": 1, "biatch": 1, "bitch": 1, "bitcher": 1, "bitchers": 1, "bitches": 1, "bitchin": 1, "bitching": 1, "bloody": 1, "blow job": 1, "blowjob": 1, "blowjobs": 1, "boiolas": 1, "bollock": 1, "bollok": 1, "boner": 1, "boob": 1, "boobs": 1, "booobs": 1, "boooobs": 1, "booooobs": 1, "booooooobs": 1, "breasts": 1, "buceta": 1, "bugger": 1, "bum": 1, "bunny fucker": 1, "butt": 1, "butthole": 1, "buttmuch": 1, "buttplug": 1, "c0ck": 1, "c0cksucker": 1, "carpet muncher": 1, "cawk": 1, "chink": 1, "cipa": 1, "cl1t": 1, "clit": 1, "clitoris": 1, "clits": 1, "cnut": 1, "cock": 1, "cock-sucker": 1, "cockface": 1, "cockhead": 1, "cockmunch": 1, "cockmuncher": 1, "cocks": 1, "cocksuck": 1, "cocksucked": 1, "cocksucker": 1, "cocksucking": 1, "cocksucks": 1, "cocksuka": 1, "cocksukka": 1, "cok": 1, "cokmuncher": 1, "coksucka": 1, "coon": 1, "cox": 1, "crap": 1, "cum": 1, "cummer": 1, "cumming": 1, "cums": 1, "cumshot": 1, "cunilingus": 1, "cunillingus": 1, "cunnilingus": 1, "cunt": 1, "cuntlick": 1, "cuntlicker": 1, "cuntlicking": 1, "cunts": 1, "cyalis": 1, "cyberfuc": 1, "cyberfuck": 1, "cyberfucked": 1, "cyberfucker": 1, "cyberfuckers": 1, "cyberfucking": 1, "d1ck": 1, "damn": 1, "dick": 1, "dickhead": 1, "dildo": 1, "dildos": 1, "dink": 1, "dinks": 1, "dirsa": 1, "dlck": 1, "dog-fucker": 1, "doggin": 1, "dogging": 1, "donkeyribber": 1, "doosh": 1, "duche": 1, "dyke": 1, "ejaculate": 1, "ejaculated": 1, "ejaculates": 1, "ejaculating": 1, "ejaculatings": 1, "ejaculation": 1, "ejakulate": 1, "f u c k": 1, "f u c k e r": 1, "f4nny": 1, "fag": 1, "fagging": 1, "faggitt": 1, "faggot": 1, "faggs": 1, "fagot": 1, "fagots": 1, "fags": 1, "fanny": 1, "fannyflaps": 1, "fannyfucker": 1, "fanyy": 1, "fatass": 1, "fcuk": 1, "fcuker": 1, "fcuking": 1, "feck": 1, "fecker": 1, "felching": 1, "fellate": 1, "fellatio": 1, "fingerfuck": 1, "fingerfucked": 1, "fingerfucker": 1, "fingerfuckers": 1, "fingerfucking": 1, "fingerfucks": 1, "fistfuck": 1, "fistfucked": 1, "fistfucker": 1, "fistfuckers": 1, "fistfucking": 1, "fistfuckings": 1, "fistfucks": 1, "flange": 1, "fook": 1, "fooker": 1, "fuck": 1, "fucka": 1, "fucked": 1, "fucker": 1, "fuckers": 1, "fuckhead": 1, "fuckheads": 1, "fuckin": 1, "fucking": 1, "fuckings": 1, "fuckingshitmotherfucker": 1, "fuckme": 1, "fucks": 1, "fuckwhit": 1, "fuckwit": 1, "fudge packer": 1, "fudgepacker": 1, "fuk": 1, "fuker": 1, "fukker": 1, "fukkin": 1, "fuks": 1, "fukwhit": 1, "fukwit": 1, "fux": 1, "fux0r": 1, "f_u_c_k": 1, "gangbang": 1, "gangbanged": 1, "gangbangs": 1, "gaylord": 1, "gaysex": 1, "goatse": 1, "God": 1, "god-dam": 1, "god-damned": 1, "goddamn": 1, "goddamned": 1, "hardcoresex": 1, "hell": 1, "heshe": 1, "hoar": 1, "hoare": 1, "hoer": 1, "homo": 1, "hore": 1, "horniest": 1, "horny": 1, "hotsex": 1, "jack-off": 1, "jackoff": 1, "jap": 1, "jerk-off": 1, "jism": 1, "jiz": 1, "jizm": 1, "jizz": 1, "kawk": 1, "knob": 1, "knobead": 1, "knobed": 1, "knobend": 1, "knobhead": 1, "knobjocky": 1, "knobjokey": 1, "kock": 1, "kondum": 1, "kondums": 1, "kum": 1, "kummer": 1, "kumming": 1, "kums": 1, "kunilingus": 1, "l3i+ch": 1, "l3itch": 1, "labia": 1, "lust": 1, "lusting": 1, "m0f0": 1, "m0fo": 1, "m45terbate": 1, "ma5terb8": 1, "ma5terbate": 1, "masochist": 1, "master-bate": 1, "masterb8": 1, "masterbat*": 1, "masterbat3": 1, "masterbate": 1, "masterbation": 1, "masterbations": 1, "masturbate": 1, "mo-fo": 1, "mof0": 1, "mofo": 1, "mothafuck": 1, "mothafucka": 1, "mothafuckas": 1, "mothafuckaz": 1, "mothafucked": 1, "mothafucker": 1, "mothafuckers": 1, "mothafuckin": 1, "mothafucking": 1, "mothafuckings": 1, "mothafucks": 1, "mother fucker": 1, "motherfuck": 1, "motherfucked": 1, "motherfucker": 1, "motherfuckers": 1, "motherfuckin": 1, "motherfucking": 1, "motherfuckings": 1, "motherfuckka": 1, "motherfucks": 1, "muff": 1, "mutha": 1, "muthafecker": 1, "muthafuckker": 1, "muther": 1, "mutherfucker": 1, "n1gga": 1, "n1gger": 1, "nazi": 1, "nigg3r": 1, "nigg4h": 1, "nigga": 1, "niggah": 1, "niggas": 1, "niggaz": 1, "nigger": 1, "niggers": 1, "nob": 1, "nob jokey": 1, "nobhead": 1, "nobjocky": 1, "nobjokey": 1, "numbnuts": 1, "nutsack": 1, "orgasim": 1, "orgasims": 1, "orgasm": 1, "orgasms": 1, "p0rn": 1, "pawn": 1, "pecker": 1, "penis": 1, "penisfucker": 1, "phonesex": 1, "phuck": 1, "phuk": 1, "phuked": 1, "phuking": 1, "phukked": 1, "phukking": 1, "phuks": 1, "phuq": 1, "pigfucker": 1, "pimpis": 1, "piss": 1, "pissed": 1, "pisser": 1, "pissers": 1, "pisses": 1, "pissflaps": 1, "pissin": 1, "pissing": 1, "pissoff": 1, "poop": 1, "porn": 1, "porno": 1, "pornography": 1, "pornos": 1, "prick": 1, "pricks": 1, "pron": 1, "pube": 1, "pusse": 1, "pussi": 1, "pussies": 1, "pussy": 1, "pussys": 1, "rectum": 1, "retard": 1, "rimjaw": 1, "rimming": 1, "s hit": 1, "s.o.b.": 1, "sadist": 1, "schlong": 1, "screwing": 1, "scroat": 1, "scrote": 1, "scrotum": 1, "semen": 1, "sex": 1, "sh!+": 1, "sh!t": 1, "sh1t": 1, "shag": 1, "shagger": 1, "shaggin": 1, "shagging": 1, "shemale": 1, "shi+": 1, "shit": 1, "shitdick": 1, "shite": 1, "shited": 1, "shitey": 1, "shitfuck": 1, "shitfull": 1, "shithead": 1, "shiting": 1, "shitings": 1, "shits": 1, "shitted": 1, "shitter": 1, "shitters": 1, "shitting": 1, "shittings": 1, "shitty": 1, "skank": 1, "slut": 1, "sluts": 1, "smegma": 1, "smut": 1, "snatch": 1, "son-of-a-bitch": 1, "spac": 1, "spunk": 1, "s_h_i_t": 1, "t1tt1e5": 1, "t1tties": 1, "teets": 1, "teez": 1, "testical": 1, "testicle": 1, "tit": 1, "titfuck": 1, "tits": 1, "titt": 1, "tittie5": 1, "tittiefucker": 1, "titties": 1, "tittyfuck": 1, "tittywank": 1, "titwank": 1, "tosser": 1, "turd": 1, "tw4t": 1, "twat": 1, "twathead": 1, "twatty": 1, "twunt": 1, "twunter": 1, "v14gra": 1, "v1gra": 1, "vagina": 1, "viagra": 1, "vulva": 1, "w00se": 1, "wang": 1, "wank": 1, "wanker": 1, "wanky": 1, "whoar": 1, "whore": 1, "willies": 1, "willy": 1, "xrated": 1, "xxx": 1};
},{}],9:[function(require,module,exports){
module.exports = /\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqYXZhc2NyaXB0cy9tYWluLmpzIiwiamF2YXNjcmlwdHMvbmFtZV9nZW5lcmF0b3IuanMiLCJqYXZhc2NyaXB0cy9wcm9mYW5pdHlfY2hlY2tlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWQtd29yZHMvbGliL2JhZHdvcmRzLmpzIiwibm9kZV9tb2R1bGVzL2JhZC13b3Jkcy9saWIvbGFuZy5qc29uIiwibm9kZV9tb2R1bGVzL2JhZHdvcmRzLWxpc3QvbGliL2FycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhZHdvcmRzLWxpc3QvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2JhZHdvcmRzLWxpc3QvbGliL29iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWR3b3Jkcy1saXN0L2xpYi9yZWdleHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDemNBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7O0FDQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgbmFtZUdlbiA9IHJlcXVpcmUoJy4vbmFtZV9nZW5lcmF0b3IuanMnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBsZXQgbXNleCwgbXJhY2U7XHJcblxyXG4gICAgZ2VuZXJhdGVDaGFyYWN0ZXIoKTtcclxuXHJcbiAgICAkKCcjcmVnZW5lcmF0ZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnZW5lcmF0ZUNoYXJhY3RlcigpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNoYXJhY3RlcigpIHtcclxuXHJcbiAgICAgICAgcGlja1JhbmRvbVNleCgpO1xyXG5cclxuICAgICAgICBwaWNrUmFuZG9tUmFjZSgpO1xyXG5cclxuICAgICAgICBwaWNrUmFuZG9tTmFtZSgpO1xyXG5cclxuICAgICAgICBwaWNrUmFuZG9tQ2xhc3MoKTtcclxuXHJcbiAgICAgICAgcm9sbEFsbFN0YXRzKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBpY2tSYW5kb21TZXgoKSB7XHJcbiAgICAgICAgbGV0IHNleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHNleCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAkKCcjbWFsZScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbXNleCA9ICdtYWxlJztcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgJCgnI2ZlbWFsZScpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbXNleCA9ICdmZW1hbGUnO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbVJhY2UoKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9ICQoJyNyYWNlJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCAgPSBzZWxlY3QuY2hpbGRyZW4oJ29wdGlvbicpLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aCk7XHJcbiAgICAgICAgJChcIiNyYWNlPm9wdGlvblwiKS5lcShpbmRleCkucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgbXJhY2UgPSBzZWxlY3QudmFsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbU5hbWUoKSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBuYW1lR2VuLmdlbmVyYXRlTmFtZShtc2V4LCBtcmFjZSk7XHJcblxyXG4gICAgICAgICQoXCIjbmFtZVwiKS52YWwobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGlja1JhbmRvbUNsYXNzKCkge1xyXG4gICAgICAgIGxldCBmY2xhc3MgPSAkKCcjY2xhc3MnKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoICA9IGZjbGFzcy5jaGlsZHJlbignb3B0aW9uJykubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuZ3RoKTtcclxuICAgICAgICAkKFwiI2NsYXNzPm9wdGlvblwiKS5lcShpbmRleCkucHJvcCgnc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb2xsQWxsU3RhdHMoKSB7XHJcblxyXG4gICAgICAgICQoJyNTdHJlbmd0aCcpLnZhbChyb2xsUmFuZG9tU3RhdCgpKTtcclxuXHJcbiAgICAgICAgJCgnI0RleHRlcml0eScpLnZhbChyb2xsUmFuZG9tU3RhdCgpKTtcclxuXHJcbiAgICAgICAgJCgnI0NvbnN0aXR1dGlvbicpLnZhbChyb2xsUmFuZG9tU3RhdCgpKTtcclxuXHJcbiAgICAgICAgJCgnI0ludGVsbGlnZW5jZScpLnZhbChyb2xsUmFuZG9tU3RhdCgpKTtcclxuXHJcbiAgICAgICAgJCgnI1dpc2RvbScpLnZhbChyb2xsUmFuZG9tU3RhdCgpKTtcclxuXHJcbiAgICAgICAgJCgnI0NoYXJpc21hJykudmFsKHJvbGxSYW5kb21TdGF0KCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb2xsUmFuZG9tU3RhdCgpIHtcclxuXHJcbiAgICAgICAgbGV0IGRpY2UgPSByb2xsRm91ckQ2KCk7XHJcblxyXG4gICAgICAgIGRpY2UgPSBkcm9wTG93ZXN0U2NvcmUoZGljZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbERpY2VTY29yZXMoZGljZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJvbGxGb3VyRDYoKSB7XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDYpKSArIDEsXHJcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoNikpICsgMSxcclxuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig2KSkgKyAxLFxyXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDYpKSArIDEgXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkcm9wTG93ZXN0U2NvcmUoZGljZSkge1xyXG5cclxuICAgICAgICBsZXQgbG93ZXN0Um9sbCA9IDY7XHJcbiAgICAgICAgbGV0IGxvd2VzdFJvbGxJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIC8vZGV0ZXJtaW5lIGxvd2VzdCByb2xsXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRpY2VbaV0gPCBsb3dlc3RSb2xsKSB7XHJcbiAgICAgICAgICAgICAgICBsb3dlc3RSb2xsID0gZGljZVtpXTtcclxuICAgICAgICAgICAgICAgIGxvd2VzdFJvbGxJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vc2V0IGl0IHRvIHplcm8gLSBlZmZlY3RpdmVseSByZW1vdmluZyBpdFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09PSBsb3dlc3RSb2xsSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGRpY2VbaV0gPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGljZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b3RhbERpY2VTY29yZXMoZGljZSkge1xyXG5cclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICB0b3RhbCArPSBkaWNlW2ldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfVxyXG5cclxufSk7IiwibGV0IGZpbHRlciA9IHJlcXVpcmUoJy4vcHJvZmFuaXR5X2NoZWNrZXIuanMnKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlTmFtZSA9IGZ1bmN0aW9uIChzZXgsIHJhY2UpIHtcclxuXHJcbiAgICBsZXQgcmVzO1xyXG5cclxuICAgIHN3aXRjaCAocmFjZSkge1xyXG4gICAgICAgIGNhc2UgJ0RyYWdvbmJvcm4nOlxyXG4gICAgICAgICAgICByZXMgPSBnZW5lcmF0ZURyYWdvbmJvcm5OYW1lKHNleCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0R3YXJmJzpcclxuICAgICAgICAgICAgcmVzID0gZ2VuZXJhdGVEd2FyZk5hbWUoc2V4KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnRWxmJzpcclxuICAgICAgICAgICAgcmVzID0gZ2VuZXJhdGVFbGZOYW1lKHNleCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0dub21lJzpcclxuICAgICAgICAgICAgcmVzID0gZ2VuZXJhdGVHbm9tZU5hbWUoc2V4KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnSGFsZi1FbGYnOlxyXG4gICAgICAgICAgICByZXMgPSBnZW5lcmF0ZUhhbGZFbGZOYW1lKHNleCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0hhbGZsaW5nJzpcclxuICAgICAgICAgICAgcmVzID0gZ2VuZXJhdGVIYWxmbGluZ05hbWUoc2V4KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnSGFsZi1PcmMnOlxyXG4gICAgICAgICAgICByZXMgPSBnZW5lcmF0ZUhhbGZPcmNOYW1lKHNleCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0h1bWFuJzpcclxuICAgICAgICAgICAgcmVzID0gZ2VuZXJhdGVIdW1hbk5hbWUoc2V4KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnVGllZmxpbmcnOlxyXG4gICAgICAgICAgICByZXMgPSBnZW5lcmF0ZVRpZWZsaW5nTmFtZShzZXgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZURyYWdvbmJvcm5OYW1lID0gZnVuY3Rpb24gKHNleCkge1xyXG5cclxuICAgIGxldCBuYW1lID0gJyc7XHJcblxyXG4gICAgaWYgKHNleCA9PT0gJ21hbGUnKXtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzZXggPT09ICdmZW1hbGUnKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbHRlci5pc1Byb2ZhbmUobmFtZSkpXHJcbiAgICAgICAgZ2VuZXJhdGVEcmFnb25ib3JuTmFtZShzZXgpO1xyXG5cclxuICAgIHJldHVybiBuYW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2VuZXJhdGVEd2FyZk5hbWUgPSBmdW5jdGlvbiAoc2V4KSB7XHJcblxyXG4gICAgbGV0IG5hbWUgPSAnJztcclxuXHJcbiAgICBpZiAoc2V4ID09PSAnbWFsZScpe1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNleCA9PT0gJ2ZlbWFsZScpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVyLmlzUHJvZmFuZShuYW1lKSlcclxuICAgICAgICBnZW5lcmF0ZUR3YXJmTmFtZShzZXgpO1xyXG5cclxuICAgIHJldHVybiBuYW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2VuZXJhdGVFbGZOYW1lID0gZnVuY3Rpb24gKHNleCkge1xyXG5cclxuICAgIGxldCBuYW1lID0gJyc7XHJcblxyXG4gICAgaWYgKHNleCA9PT0gJ21hbGUnKXtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzZXggPT09ICdmZW1hbGUnKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbHRlci5pc1Byb2ZhbmUobmFtZSkpXHJcbiAgICAgICAgZ2VuZXJhdGVFbGZOYW1lKHNleCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZUdub21lTmFtZSA9IGZ1bmN0aW9uIChzZXgpIHtcclxuXHJcbiAgICBsZXQgbmFtZSA9ICcnO1xyXG5cclxuICAgIGlmIChzZXggPT09ICdtYWxlJyl7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2V4ID09PSAnZmVtYWxlJyl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWx0ZXIuaXNQcm9mYW5lKG5hbWUpKVxyXG4gICAgICAgIGdlbmVyYXRlR25vbWVOYW1lKHNleCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZUhhbGZFbGZOYW1lID0gZnVuY3Rpb24gKHNleCkge1xyXG4gICAgbGV0IG5hbWUgPSAnJztcclxuXHJcbiAgICBpZiAoc2V4ID09PSAnbWFsZScpe1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNleCA9PT0gJ2ZlbWFsZScpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVyLmlzUHJvZmFuZShuYW1lKSlcclxuICAgICAgICBnZW5lcmF0ZUhhbGZFbGZOYW1lKHNleCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZUhhbGZsaW5nTmFtZSA9IGZ1bmN0aW9uIChzZXgpIHtcclxuICAgIGxldCBuYW1lID0gJyc7XHJcblxyXG4gICAgaWYgKHNleCA9PT0gJ21hbGUnKXtcclxuXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzZXggPT09ICdmZW1hbGUnKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZpbHRlci5pc1Byb2ZhbmUobmFtZSkpXHJcbiAgICAgICAgZ2VuZXJhdGVIYWxmbGluZ05hbWUoc2V4KTtcclxuXHJcbiAgICByZXR1cm4gbmFtZTtcclxufTtcclxuXHJcbmNvbnN0IGdlbmVyYXRlSGFsZk9yY05hbWUgPSBmdW5jdGlvbiAoc2V4KSB7XHJcblxyXG4gICAgbGV0IG5hbWUgPSAnJztcclxuXHJcbiAgICBpZiAoc2V4ID09PSAnbWFsZScpe1xyXG5cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHNleCA9PT0gJ2ZlbWFsZScpe1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZmlsdGVyLmlzUHJvZmFuZShuYW1lKSlcclxuICAgICAgICBnZW5lcmF0ZUhhbGZPcmNOYW1lKHNleCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZUh1bWFuTmFtZSA9IGZ1bmN0aW9uIChzZXgpIHtcclxuXHJcbiAgICBsZXQgbmFtZSA9ICcnO1xyXG5cclxuICAgIGlmIChzZXggPT09ICdtYWxlJyl7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2V4ID09PSAnZmVtYWxlJyl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWx0ZXIuaXNQcm9mYW5lKG5hbWUpKVxyXG4gICAgICAgIGdlbmVyYXRlSHVtYW5OYW1lKHNleCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZW5lcmF0ZVRpZWZsaW5nTmFtZSA9IGZ1bmN0aW9uIChzZXgpIHtcclxuXHJcbiAgICBsZXQgbmFtZSA9ICcnO1xyXG5cclxuICAgIGlmIChzZXggPT09ICdtYWxlJyl7XHJcblxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2V4ID09PSAnZmVtYWxlJyl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWx0ZXIuaXNQcm9mYW5lKG5hbWUpKVxyXG4gICAgICAgIGdlbmVyYXRlVGllZmxpbmdOYW1lKHNleCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWU7XHJcbn07IiwibGV0IEZpbHRlciA9IHJlcXVpcmUoJ2JhZC13b3JkcycpLFxyXG4gICAgZmlsdGVyID0gbmV3IEZpbHRlcigpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMuaXNQcm9mYW5lID0gZnVuY3Rpb24ocykge1xyXG4gICAgcmV0dXJuIGZpbHRlci5pc1Byb2ZhbmUocyk7XHJcbn07IiwiY29uc3QgbG9jYWxMaXN0ID0gcmVxdWlyZSgnLi9sYW5nLmpzb24nKS53b3JkcztcbmNvbnN0IGJhc2VMaXN0ID0gcmVxdWlyZSgnYmFkd29yZHMtbGlzdCcpLmFycmF5O1xuXG5jbGFzcyBGaWx0ZXIge1xuXG4gIC8qKlxuICAgKiBGaWx0ZXIgY29uc3RydWN0b3IuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIEZpbHRlciBpbnN0YW5jZSBvcHRpb25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5lbXB0eUxpc3QgLSBJbnN0YW50aWF0ZSBmaWx0ZXIgd2l0aCBubyBibGFja2xpc3RcbiAgICogQHBhcmFtIHthcnJheX0gb3B0aW9ucy5saXN0IC0gSW5zdGFudGlhdGUgZmlsdGVyIHdpdGggY3VzdG9tIGxpc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucGxhY2VIb2xkZXIgLSBDaGFyYWN0ZXIgdXNlZCB0byByZXBsYWNlIHByb2ZhbmUgd29yZHMuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnJlZ2V4IC0gUmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gc2FuaXRpemUgd29yZHMgYmVmb3JlIGNvbXBhcmluZyB0aGVtIHRvIGJsYWNrbGlzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMucmVwbGFjZVJlZ2V4IC0gUmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gcmVwbGFjZSBwcm9mYW5lIHdvcmRzIHdpdGggcGxhY2VIb2xkZXIuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHtcbiAgICAgIGxpc3Q6IG9wdGlvbnMuZW1wdHlMaXN0ICYmIFtdIHx8IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkobG9jYWxMaXN0LCBbYmFzZUxpc3QsIG9wdGlvbnMubGlzdCB8fCBbXV0pLFxuICAgICAgZXhjbHVkZTogb3B0aW9ucy5leGNsdWRlIHx8IFtdLFxuICAgICAgcGxhY2VIb2xkZXI6IG9wdGlvbnMucGxhY2VIb2xkZXIgfHwgJyonLFxuICAgICAgcmVnZXg6IG9wdGlvbnMucmVnZXggfHwgL1teYS16QS1aMC05fFxcJHxcXEBdfFxcXi9nLFxuICAgICAgcmVwbGFjZVJlZ2V4OiBvcHRpb25zLnJlcGxhY2VSZWdleCB8fCAvXFx3L2dcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHN0cmluZyBjb250YWlucyBwcm9mYW5lIGxhbmd1YWdlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gU3RyaW5nIHRvIGV2YWx1YXRlIGZvciBwcm9mYW5pdHkuXG4gICAqL1xuICBpc1Byb2ZhbmUoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFxuICAgICAgLmZpbHRlcigod29yZCkgPT4ge1xuICAgICAgICBjb25zdCB3b3JkRXhwID0gbmV3IFJlZ0V4cChgXFxcXGIke3dvcmQucmVwbGFjZSgvKFxcVykvZywgJ1xcXFwkMScpfVxcXFxiYCwgJ2dpJyk7XG4gICAgICAgIHJldHVybiAhdGhpcy5leGNsdWRlLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSkgJiYgd29yZEV4cC50ZXN0KHN0cmluZyk7XG4gICAgICB9KVxuICAgICAgLmxlbmd0aCA+IDAgfHwgZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhIHdvcmQgd2l0aCBwbGFjZUhvbGRlciBjaGFyYWN0ZXJzO1xuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gU3RyaW5nIHRvIHJlcGxhY2UuXG4gICAqL1xuICByZXBsYWNlV29yZChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nXG4gICAgICAucmVwbGFjZSh0aGlzLnJlZ2V4LCAnJylcbiAgICAgIC5yZXBsYWNlKHRoaXMucmVwbGFjZVJlZ2V4LCB0aGlzLnBsYWNlSG9sZGVyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmFsdWF0ZSBhIHN0cmluZyBmb3IgcHJvZmFuaXR5IGFuZCByZXR1cm4gYW4gZWRpdGVkIHZlcnNpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBTZW50ZW5jZSB0byBmaWx0ZXIuXG4gICAqL1xuICBjbGVhbihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnNwbGl0KC9cXGIvKS5tYXAoKHdvcmQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmlzUHJvZmFuZSh3b3JkKSA/IHRoaXMucmVwbGFjZVdvcmQod29yZCkgOiB3b3JkO1xuICAgIH0pLmpvaW4oJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB3b3JkKHMpIHRvIGJsYWNrbGlzdCBmaWx0ZXIgLyByZW1vdmUgd29yZHMgZnJvbSB3aGl0ZWxpc3QgZmlsdGVyXG4gICAqIEBwYXJhbSB7Li4uc3RyaW5nfSB3b3JkIC0gV29yZChzKSB0byBhZGQgdG8gYmxhY2tsaXN0XG4gICAqL1xuICBhZGRXb3JkcygpIHtcbiAgICBsZXQgd29yZHMgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG5cbiAgICB0aGlzLmxpc3QucHVzaCguLi53b3Jkcyk7XG5cbiAgICB3b3Jkc1xuICAgICAgLm1hcCh3b3JkID0+IHdvcmQudG9Mb3dlckNhc2UoKSlcbiAgICAgIC5mb3JFYWNoKCh3b3JkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmV4Y2x1ZGUuaW5jbHVkZXMod29yZCkpIHtcbiAgICAgICAgICB0aGlzLmV4Y2x1ZGUuc3BsaWNlKHRoaXMuZXhjbHVkZS5pbmRleE9mKHdvcmQpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHdvcmRzIHRvIHdoaXRlbGlzdCBmaWx0ZXJcbiAgICogQHBhcmFtIHsuLi5zdHJpbmd9IHdvcmQgLSBXb3JkKHMpIHRvIGFkZCB0byB3aGl0ZWxpc3QuXG4gICAqL1xuICByZW1vdmVXb3JkcygpIHtcbiAgICB0aGlzLmV4Y2x1ZGUucHVzaCguLi5BcnJheS5mcm9tKGFyZ3VtZW50cykubWFwKHdvcmQgPT4gd29yZC50b0xvd2VyQ2FzZSgpKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXI7IiwibW9kdWxlLmV4cG9ydHM9e1xuICBcIndvcmRzXCI6W1xuICAgIFwiYWhvbGVcIixcbiAgICBcImFudXNcIixcbiAgICBcImFzaDBsZVwiLFxuICAgIFwiYXNoMGxlc1wiLFxuICAgIFwiYXNob2xlc1wiLFxuICAgIFwiYXNzXCIsXG4gICAgXCJBc3MgTW9ua2V5XCIsXG4gICAgXCJBc3NmYWNlXCIsXG4gICAgXCJhc3NoMGxlXCIsXG4gICAgXCJhc3NoMGxlelwiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYXNzaG9sZXNcIixcbiAgICBcImFzc2hvbHpcIixcbiAgICBcImFzc3dpcGVcIixcbiAgICBcImF6emhvbGVcIixcbiAgICBcImJhc3N0ZXJkc1wiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmFzdGFyZHNcIixcbiAgICBcImJhc3RhcmR6XCIsXG4gICAgXCJiYXN0ZXJkc1wiLFxuICAgIFwiYmFzdGVyZHpcIixcbiAgICBcIkJpYXRjaFwiLFxuICAgIFwiYml0Y2hcIixcbiAgICBcImJpdGNoZXNcIixcbiAgICBcIkJsb3cgSm9iXCIsXG4gICAgXCJib2ZmaW5nXCIsXG4gICAgXCJidXR0aG9sZVwiLFxuICAgIFwiYnV0dHdpcGVcIixcbiAgICBcImMwY2tcIixcbiAgICBcImMwY2tzXCIsXG4gICAgXCJjMGtcIixcbiAgICBcIkNhcnBldCBNdW5jaGVyXCIsXG4gICAgXCJjYXdrXCIsXG4gICAgXCJjYXdrc1wiLFxuICAgIFwiQ2xpdFwiLFxuICAgIFwiY250c1wiLFxuICAgIFwiY250elwiLFxuICAgIFwiY29ja1wiLFxuICAgIFwiY29ja2hlYWRcIixcbiAgICBcImNvY2staGVhZFwiLFxuICAgIFwiY29ja3NcIixcbiAgICBcIkNvY2tTdWNrZXJcIixcbiAgICBcImNvY2stc3Vja2VyXCIsXG4gICAgXCJjcmFwXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImN1bnRzXCIsXG4gICAgXCJjdW50elwiLFxuICAgIFwiZGlja1wiLFxuICAgIFwiZGlsZDBcIixcbiAgICBcImRpbGQwc1wiLFxuICAgIFwiZGlsZG9cIixcbiAgICBcImRpbGRvc1wiLFxuICAgIFwiZGlsbGQwXCIsXG4gICAgXCJkaWxsZDBzXCIsXG4gICAgXCJkb21pbmF0cmlja3NcIixcbiAgICBcImRvbWluYXRyaWNzXCIsXG4gICAgXCJkb21pbmF0cml4XCIsXG4gICAgXCJkeWtlXCIsXG4gICAgXCJlbmVtYVwiLFxuICAgIFwiZiB1IGMga1wiLFxuICAgIFwiZiB1IGMgayBlIHJcIixcbiAgICBcImZhZ1wiLFxuICAgIFwiZmFnMXRcIixcbiAgICBcImZhZ2V0XCIsXG4gICAgXCJmYWdnMXRcIixcbiAgICBcImZhZ2dpdFwiLFxuICAgIFwiZmFnZ290XCIsXG4gICAgXCJmYWdnMHRcIixcbiAgICBcImZhZ2l0XCIsXG4gICAgXCJmYWdzXCIsXG4gICAgXCJmYWd6XCIsXG4gICAgXCJmYWlnXCIsXG4gICAgXCJmYWlnc1wiLFxuICAgIFwiZmFydFwiLFxuICAgIFwiZmxpcHBpbmcgdGhlIGJpcmRcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcImZ1Y2tlclwiLFxuICAgIFwiZnVja2luXCIsXG4gICAgXCJmdWNraW5nXCIsXG4gICAgXCJmdWNrc1wiLFxuICAgIFwiRnVkZ2UgUGFja2VyXCIsXG4gICAgXCJmdWtcIixcbiAgICBcIkZ1a2FoXCIsXG4gICAgXCJGdWtlblwiLFxuICAgIFwiZnVrZXJcIixcbiAgICBcIkZ1a2luXCIsXG4gICAgXCJGdWtrXCIsXG4gICAgXCJGdWtrYWhcIixcbiAgICBcIkZ1a2tlblwiLFxuICAgIFwiRnVra2VyXCIsXG4gICAgXCJGdWtraW5cIixcbiAgICBcImcwMGtcIixcbiAgICBcIkdvZC1kYW1uZWRcIixcbiAgICBcImgwMHJcIixcbiAgICBcImgwYXJcIixcbiAgICBcImgwcmVcIixcbiAgICBcImhlbGxzXCIsXG4gICAgXCJob2FyXCIsXG4gICAgXCJob29yXCIsXG4gICAgXCJob29yZVwiLFxuICAgIFwiamFja29mZlwiLFxuICAgIFwiamFwXCIsXG4gICAgXCJqYXBzXCIsXG4gICAgXCJqZXJrLW9mZlwiLFxuICAgIFwiamlzaW1cIixcbiAgICBcImppc3NcIixcbiAgICBcImppem1cIixcbiAgICBcImppenpcIixcbiAgICBcImtub2JcIixcbiAgICBcImtub2JzXCIsXG4gICAgXCJrbm9ielwiLFxuICAgIFwia3VudFwiLFxuICAgIFwia3VudHNcIixcbiAgICBcImt1bnR6XCIsXG4gICAgXCJMZXp6aWFuXCIsXG4gICAgXCJMaXBzaGl0c1wiLFxuICAgIFwiTGlwc2hpdHpcIixcbiAgICBcIm1hc29jaGlzdFwiLFxuICAgIFwibWFzb2tpc3RcIixcbiAgICBcIm1hc3N0ZXJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYWl0XCIsXG4gICAgXCJtYXNzdHJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYWl0ZXJcIixcbiAgICBcIm1hc3RlcmJhdGVcIixcbiAgICBcIm1hc3RlcmJhdGVzXCIsXG4gICAgXCJNb3RoYSBGdWNrZXJcIixcbiAgICBcIk1vdGhhIEZ1a2VyXCIsXG4gICAgXCJNb3RoYSBGdWtrYWhcIixcbiAgICBcIk1vdGhhIEZ1a2tlclwiLFxuICAgIFwiTW90aGVyIEZ1Y2tlclwiLFxuICAgIFwiTW90aGVyIEZ1a2FoXCIsXG4gICAgXCJNb3RoZXIgRnVrZXJcIixcbiAgICBcIk1vdGhlciBGdWtrYWhcIixcbiAgICBcIk1vdGhlciBGdWtrZXJcIixcbiAgICBcIm1vdGhlci1mdWNrZXJcIixcbiAgICBcIk11dGhhIEZ1Y2tlclwiLFxuICAgIFwiTXV0aGEgRnVrYWhcIixcbiAgICBcIk11dGhhIEZ1a2VyXCIsXG4gICAgXCJNdXRoYSBGdWtrYWhcIixcbiAgICBcIk11dGhhIEZ1a2tlclwiLFxuICAgIFwibjFnclwiLFxuICAgIFwibmFzdHRcIixcbiAgICBcIm5pZ2dlcjtcIixcbiAgICBcIm5pZ3VyO1wiLFxuICAgIFwibmlpZ2VyO1wiLFxuICAgIFwibmlpZ3I7XCIsXG4gICAgXCJvcmFmaXNcIixcbiAgICBcIm9yZ2FzaW07XCIsXG4gICAgXCJvcmdhc21cIixcbiAgICBcIm9yZ2FzdW1cIixcbiAgICBcIm9yaWZhY2VcIixcbiAgICBcIm9yaWZpY2VcIixcbiAgICBcIm9yaWZpc3NcIixcbiAgICBcInBhY2tpXCIsXG4gICAgXCJwYWNraWVcIixcbiAgICBcInBhY2t5XCIsXG4gICAgXCJwYWtpXCIsXG4gICAgXCJwYWtpZVwiLFxuICAgIFwicGFreVwiLFxuICAgIFwicGVja2VyXCIsXG4gICAgXCJwZWVlbnVzXCIsXG4gICAgXCJwZWVlbnVzc3NcIixcbiAgICBcInBlZW51c1wiLFxuICAgIFwicGVpbnVzXCIsXG4gICAgXCJwZW4xc1wiLFxuICAgIFwicGVuYXNcIixcbiAgICBcInBlbmlzXCIsXG4gICAgXCJwZW5pcy1icmVhdGhcIixcbiAgICBcInBlbnVzXCIsXG4gICAgXCJwZW51dXNcIixcbiAgICBcIlBodWNcIixcbiAgICBcIlBodWNrXCIsXG4gICAgXCJQaHVrXCIsXG4gICAgXCJQaHVrZXJcIixcbiAgICBcIlBodWtrZXJcIixcbiAgICBcInBvbGFjXCIsXG4gICAgXCJwb2xhY2tcIixcbiAgICBcInBvbGFrXCIsXG4gICAgXCJQb29uYW5pXCIsXG4gICAgXCJwcjFjXCIsXG4gICAgXCJwcjFja1wiLFxuICAgIFwicHIxa1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3NlZVwiLFxuICAgIFwicHVzc3lcIixcbiAgICBcInB1dWtlXCIsXG4gICAgXCJwdXVrZXJcIixcbiAgICBcInF1ZWVyXCIsXG4gICAgXCJxdWVlcnNcIixcbiAgICBcInF1ZWVyelwiLFxuICAgIFwicXdlZXJzXCIsXG4gICAgXCJxd2VlcnpcIixcbiAgICBcInF3ZWlyXCIsXG4gICAgXCJyZWNrdHVtXCIsXG4gICAgXCJyZWN0dW1cIixcbiAgICBcInJldGFyZFwiLFxuICAgIFwic2FkaXN0XCIsXG4gICAgXCJzY2Fua1wiLFxuICAgIFwic2NobG9uZ1wiLFxuICAgIFwic2NyZXdpbmdcIixcbiAgICBcInNlbWVuXCIsXG4gICAgXCJzZXhcIixcbiAgICBcInNleHlcIixcbiAgICBcIlNoIXRcIixcbiAgICBcInNoMXRcIixcbiAgICBcInNoMXRlclwiLFxuICAgIFwic2gxdHNcIixcbiAgICBcInNoMXR0ZXJcIixcbiAgICBcInNoMXR6XCIsXG4gICAgXCJzaGl0XCIsXG4gICAgXCJzaGl0c1wiLFxuICAgIFwic2hpdHRlclwiLFxuICAgIFwiU2hpdHR5XCIsXG4gICAgXCJTaGl0eVwiLFxuICAgIFwic2hpdHpcIixcbiAgICBcIlNoeXRcIixcbiAgICBcIlNoeXRlXCIsXG4gICAgXCJTaHl0dHlcIixcbiAgICBcIlNoeXR5XCIsXG4gICAgXCJza2FuY2tcIixcbiAgICBcInNrYW5rXCIsXG4gICAgXCJza2Fua2VlXCIsXG4gICAgXCJza2Fua2V5XCIsXG4gICAgXCJza2Fua3NcIixcbiAgICBcIlNrYW5reVwiLFxuICAgIFwic2xhZ1wiLFxuICAgIFwic2x1dFwiLFxuICAgIFwic2x1dHNcIixcbiAgICBcIlNsdXR0eVwiLFxuICAgIFwic2x1dHpcIixcbiAgICBcInNvbi1vZi1hLWJpdGNoXCIsXG4gICAgXCJ0aXRcIixcbiAgICBcInR1cmRcIixcbiAgICBcInZhMWppbmFcIixcbiAgICBcInZhZzFuYVwiLFxuICAgIFwidmFnaWluYVwiLFxuICAgIFwidmFnaW5hXCIsXG4gICAgXCJ2YWoxbmFcIixcbiAgICBcInZhamluYVwiLFxuICAgIFwidnVsbHZhXCIsXG4gICAgXCJ2dWx2YVwiLFxuICAgIFwidzBwXCIsXG4gICAgXCJ3aDAwclwiLFxuICAgIFwid2gwcmVcIixcbiAgICBcIndob3JlXCIsXG4gICAgXCJ4cmF0ZWRcIixcbiAgICBcInh4eFwiLFxuICAgIFwiYiErY2hcIixcbiAgICBcImJpdGNoXCIsXG4gICAgXCJibG93am9iXCIsXG4gICAgXCJjbGl0XCIsXG4gICAgXCJhcnNjaGxvY2hcIixcbiAgICBcImZ1Y2tcIixcbiAgICBcInNoaXRcIixcbiAgICBcImFzc1wiLFxuICAgIFwiYXNzaG9sZVwiLFxuICAgIFwiYiF0Y2hcIixcbiAgICBcImIxN2NoXCIsXG4gICAgXCJiMXRjaFwiLFxuICAgIFwiYmFzdGFyZFwiLFxuICAgIFwiYmkrY2hcIixcbiAgICBcImJvaW9sYXNcIixcbiAgICBcImJ1Y2V0YVwiLFxuICAgIFwiYzBja1wiLFxuICAgIFwiY2F3a1wiLFxuICAgIFwiY2hpbmtcIixcbiAgICBcImNpcGFcIixcbiAgICBcImNsaXRzXCIsXG4gICAgXCJjb2NrXCIsXG4gICAgXCJjdW1cIixcbiAgICBcImN1bnRcIixcbiAgICBcImRpbGRvXCIsXG4gICAgXCJkaXJzYVwiLFxuICAgIFwiZWpha3VsYXRlXCIsXG4gICAgXCJmYXRhc3NcIixcbiAgICBcImZjdWtcIixcbiAgICBcImZ1a1wiLFxuICAgIFwiZnV4MHJcIixcbiAgICBcImhvZXJcIixcbiAgICBcImhvcmVcIixcbiAgICBcImppc21cIixcbiAgICBcImthd2tcIixcbiAgICBcImwzaXRjaFwiLFxuICAgIFwibDNpK2NoXCIsXG4gICAgXCJsZXNiaWFuXCIsXG4gICAgXCJtYXN0dXJiYXRlXCIsXG4gICAgXCJtYXN0ZXJiYXQqXCIsXG4gICAgXCJtYXN0ZXJiYXQzXCIsXG4gICAgXCJtb3RoZXJmdWNrZXJcIixcbiAgICBcInMuby5iLlwiLFxuICAgIFwibW9mb1wiLFxuICAgIFwibmF6aVwiLFxuICAgIFwibmlnZ2FcIixcbiAgICBcIm5pZ2dlclwiLFxuICAgIFwibnV0c2Fja1wiLFxuICAgIFwicGh1Y2tcIixcbiAgICBcInBpbXBpc1wiLFxuICAgIFwicHVzc2VcIixcbiAgICBcInB1c3N5XCIsXG4gICAgXCJzY3JvdHVtXCIsXG4gICAgXCJzaCF0XCIsXG4gICAgXCJzaGVtYWxlXCIsXG4gICAgXCJzaGkrXCIsXG4gICAgXCJzaCErXCIsXG4gICAgXCJzbHV0XCIsXG4gICAgXCJzbXV0XCIsXG4gICAgXCJ0ZWV0c1wiLFxuICAgIFwidGl0c1wiLFxuICAgIFwiYm9vYnNcIixcbiAgICBcImIwMGJzXCIsXG4gICAgXCJ0ZWV6XCIsXG4gICAgXCJ0ZXN0aWNhbFwiLFxuICAgIFwidGVzdGljbGVcIixcbiAgICBcInRpdHRcIixcbiAgICBcIncwMHNlXCIsXG4gICAgXCJqYWNrb2ZmXCIsXG4gICAgXCJ3YW5rXCIsXG4gICAgXCJ3aG9hclwiLFxuICAgIFwid2hvcmVcIixcbiAgICBcIipkYW1uXCIsXG4gICAgXCIqZHlrZVwiLFxuICAgIFwiKmZ1Y2sqXCIsXG4gICAgXCIqc2hpdCpcIixcbiAgICBcIkAkJFwiLFxuICAgIFwiYW1jaWtcIixcbiAgICBcImFuZHNrb3RhXCIsXG4gICAgXCJhcnNlKlwiLFxuICAgIFwiYXNzcmFtbWVyXCIsXG4gICAgXCJheWlyXCIsXG4gICAgXCJiaTdjaFwiLFxuICAgIFwiYml0Y2gqXCIsXG4gICAgXCJib2xsb2NrKlwiLFxuICAgIFwiYnJlYXN0c1wiLFxuICAgIFwiYnV0dC1waXJhdGVcIixcbiAgICBcImNhYnJvblwiLFxuICAgIFwiY2F6em9cIixcbiAgICBcImNocmFhXCIsXG4gICAgXCJjaHVqXCIsXG4gICAgXCJDb2NrKlwiLFxuICAgIFwiY3VudCpcIixcbiAgICBcImQ0bW5cIixcbiAgICBcImRheWdvXCIsXG4gICAgXCJkZWdvXCIsXG4gICAgXCJkaWNrKlwiLFxuICAgIFwiZGlrZSpcIixcbiAgICBcImR1cGFcIixcbiAgICBcImR6aXdrYVwiLFxuICAgIFwiZWphY2t1bGF0ZVwiLFxuICAgIFwiRWtyZW0qXCIsXG4gICAgXCJFa3RvXCIsXG4gICAgXCJlbmN1bGVyXCIsXG4gICAgXCJmYWVuXCIsXG4gICAgXCJmYWcqXCIsXG4gICAgXCJmYW5jdWxvXCIsXG4gICAgXCJmYW5ueVwiLFxuICAgIFwiZmVjZXNcIixcbiAgICBcImZlZ1wiLFxuICAgIFwiRmVsY2hlclwiLFxuICAgIFwiZmlja2VuXCIsXG4gICAgXCJmaXR0KlwiLFxuICAgIFwiRmxpa2tlclwiLFxuICAgIFwiZm9yZXNraW5cIixcbiAgICBcIkZvdHplXCIsXG4gICAgXCJGdSgqXCIsXG4gICAgXCJmdWsqXCIsXG4gICAgXCJmdXRrcmV0em5cIixcbiAgICBcImdvb2tcIixcbiAgICBcImd1aWVuYVwiLFxuICAgIFwiaDByXCIsXG4gICAgXCJoNHgwclwiLFxuICAgIFwiaGVsbFwiLFxuICAgIFwiaGVsdmV0ZVwiLFxuICAgIFwiaG9lcipcIixcbiAgICBcImhvbmtleVwiLFxuICAgIFwiSHVldm9uXCIsXG4gICAgXCJodWlcIixcbiAgICBcImluanVuXCIsXG4gICAgXCJqaXp6XCIsXG4gICAgXCJrYW5rZXIqXCIsXG4gICAgXCJraWtlXCIsXG4gICAgXCJrbG9vdHpha1wiLFxuICAgIFwia3JhdXRcIixcbiAgICBcImtudWxsZVwiLFxuICAgIFwia3VrXCIsXG4gICAgXCJrdWtzdWdlclwiLFxuICAgIFwiS3VyYWNcIixcbiAgICBcImt1cndhXCIsXG4gICAgXCJrdXNpKlwiLFxuICAgIFwia3lycGEqXCIsXG4gICAgXCJsZXNib1wiLFxuICAgIFwibWFtaG9vblwiLFxuICAgIFwibWFzdHVyYmF0KlwiLFxuICAgIFwibWVyZCpcIixcbiAgICBcIm1pYnVuXCIsXG4gICAgXCJtb25rbGVpZ2hcIixcbiAgICBcIm1vdWxpZXdvcFwiLFxuICAgIFwibXVpZVwiLFxuICAgIFwibXVsa2t1XCIsXG4gICAgXCJtdXNjaGlcIixcbiAgICBcIm5hemlzXCIsXG4gICAgXCJuZXBlc2F1cmlvXCIsXG4gICAgXCJuaWdnZXIqXCIsXG4gICAgXCJvcm9zcHVcIixcbiAgICBcInBhc2thKlwiLFxuICAgIFwicGVyc2VcIixcbiAgICBcInBpY2thXCIsXG4gICAgXCJwaWVyZG9sKlwiLFxuICAgIFwicGlsbHUqXCIsXG4gICAgXCJwaW1tZWxcIixcbiAgICBcInBpc3MqXCIsXG4gICAgXCJwaXpkYVwiLFxuICAgIFwicG9vbnRzZWVcIixcbiAgICBcInBvb3BcIixcbiAgICBcInBvcm5cIixcbiAgICBcInAwcm5cIixcbiAgICBcInByMG5cIixcbiAgICBcInByZXRlZW5cIixcbiAgICBcInB1bGFcIixcbiAgICBcInB1bGVcIixcbiAgICBcInB1dGFcIixcbiAgICBcInB1dG9cIixcbiAgICBcInFhaGJlaFwiLFxuICAgIFwicXVlZWYqXCIsXG4gICAgXCJyYXV0ZW5iZXJnXCIsXG4gICAgXCJzY2hhZmZlclwiLFxuICAgIFwic2NoZWlzcypcIixcbiAgICBcInNjaGxhbXBlXCIsXG4gICAgXCJzY2htdWNrXCIsXG4gICAgXCJzY3Jld1wiLFxuICAgIFwic2ghdCpcIixcbiAgICBcInNoYXJtdXRhXCIsXG4gICAgXCJzaGFybXV0ZVwiLFxuICAgIFwic2hpcGFsXCIsXG4gICAgXCJzaGl6XCIsXG4gICAgXCJza3JpYnpcIixcbiAgICBcInNrdXJ3eXN5blwiLFxuICAgIFwic3BoZW5jdGVyXCIsXG4gICAgXCJzcGljXCIsXG4gICAgXCJzcGllcmRhbGFqXCIsXG4gICAgXCJzcGxvb2dlXCIsXG4gICAgXCJzdWthXCIsXG4gICAgXCJiMDBiKlwiLFxuICAgIFwidGVzdGljbGUqXCIsXG4gICAgXCJ0aXR0KlwiLFxuICAgIFwidHdhdFwiLFxuICAgIFwidml0dHVcIixcbiAgICBcIndhbmsqXCIsXG4gICAgXCJ3ZXRiYWNrKlwiLFxuICAgIFwid2ljaHNlclwiLFxuICAgIFwid29wKlwiLFxuICAgIFwieWVkXCIsXG4gICAgXCJ6YWJvdXJhaFwiXG4gIF1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gW1wiNHI1ZVwiLCBcIjVoMXRcIiwgXCI1aGl0XCIsIFwiYTU1XCIsIFwiYW5hbFwiLCBcImFudXNcIiwgXCJhcjVlXCIsIFwiYXJyc2VcIiwgXCJhcnNlXCIsIFwiYXNzXCIsIFwiYXNzLWZ1Y2tlclwiLCBcImFzc2VzXCIsIFwiYXNzZnVja2VyXCIsIFwiYXNzZnVra2FcIiwgXCJhc3Nob2xlXCIsIFwiYXNzaG9sZXNcIiwgXCJhc3N3aG9sZVwiLCBcImFfc19zXCIsIFwiYiF0Y2hcIiwgXCJiMDBic1wiLCBcImIxN2NoXCIsIFwiYjF0Y2hcIiwgXCJiYWxsYmFnXCIsIFwiYmFsbHNcIiwgXCJiYWxsc2Fja1wiLCBcImJhc3RhcmRcIiwgXCJiZWFzdGlhbFwiLCBcImJlYXN0aWFsaXR5XCIsIFwiYmVsbGVuZFwiLCBcImJlc3RpYWxcIiwgXCJiZXN0aWFsaXR5XCIsIFwiYmkrY2hcIiwgXCJiaWF0Y2hcIiwgXCJiaXRjaFwiLCBcImJpdGNoZXJcIiwgXCJiaXRjaGVyc1wiLCBcImJpdGNoZXNcIiwgXCJiaXRjaGluXCIsIFwiYml0Y2hpbmdcIiwgXCJibG9vZHlcIiwgXCJibG93IGpvYlwiLCBcImJsb3dqb2JcIiwgXCJibG93am9ic1wiLCBcImJvaW9sYXNcIiwgXCJib2xsb2NrXCIsIFwiYm9sbG9rXCIsIFwiYm9uZXJcIiwgXCJib29iXCIsIFwiYm9vYnNcIiwgXCJib29vYnNcIiwgXCJib29vb2JzXCIsIFwiYm9vb29vYnNcIiwgXCJib29vb29vb2JzXCIsIFwiYnJlYXN0c1wiLCBcImJ1Y2V0YVwiLCBcImJ1Z2dlclwiLCBcImJ1bVwiLCBcImJ1bm55IGZ1Y2tlclwiLCBcImJ1dHRcIiwgXCJidXR0aG9sZVwiLCBcImJ1dHRtdWNoXCIsIFwiYnV0dHBsdWdcIiwgXCJjMGNrXCIsIFwiYzBja3N1Y2tlclwiLCBcImNhcnBldCBtdW5jaGVyXCIsIFwiY2F3a1wiLCBcImNoaW5rXCIsIFwiY2lwYVwiLCBcImNsMXRcIiwgXCJjbGl0XCIsIFwiY2xpdG9yaXNcIiwgXCJjbGl0c1wiLCBcImNudXRcIiwgXCJjb2NrXCIsIFwiY29jay1zdWNrZXJcIiwgXCJjb2NrZmFjZVwiLCBcImNvY2toZWFkXCIsIFwiY29ja211bmNoXCIsIFwiY29ja211bmNoZXJcIiwgXCJjb2Nrc1wiLCBcImNvY2tzdWNrXCIsIFwiY29ja3N1Y2tlZFwiLCBcImNvY2tzdWNrZXJcIiwgXCJjb2Nrc3Vja2luZ1wiLCBcImNvY2tzdWNrc1wiLCBcImNvY2tzdWthXCIsIFwiY29ja3N1a2thXCIsIFwiY29rXCIsIFwiY29rbXVuY2hlclwiLCBcImNva3N1Y2thXCIsIFwiY29vblwiLCBcImNveFwiLCBcImNyYXBcIiwgXCJjdW1cIiwgXCJjdW1tZXJcIiwgXCJjdW1taW5nXCIsIFwiY3Vtc1wiLCBcImN1bXNob3RcIiwgXCJjdW5pbGluZ3VzXCIsIFwiY3VuaWxsaW5ndXNcIiwgXCJjdW5uaWxpbmd1c1wiLCBcImN1bnRcIiwgXCJjdW50bGlja1wiLCBcImN1bnRsaWNrZXJcIiwgXCJjdW50bGlja2luZ1wiLCBcImN1bnRzXCIsIFwiY3lhbGlzXCIsIFwiY3liZXJmdWNcIiwgXCJjeWJlcmZ1Y2tcIiwgXCJjeWJlcmZ1Y2tlZFwiLCBcImN5YmVyZnVja2VyXCIsIFwiY3liZXJmdWNrZXJzXCIsIFwiY3liZXJmdWNraW5nXCIsIFwiZDFja1wiLCBcImRhbW5cIiwgXCJkaWNrXCIsIFwiZGlja2hlYWRcIiwgXCJkaWxkb1wiLCBcImRpbGRvc1wiLCBcImRpbmtcIiwgXCJkaW5rc1wiLCBcImRpcnNhXCIsIFwiZGxja1wiLCBcImRvZy1mdWNrZXJcIiwgXCJkb2dnaW5cIiwgXCJkb2dnaW5nXCIsIFwiZG9ua2V5cmliYmVyXCIsIFwiZG9vc2hcIiwgXCJkdWNoZVwiLCBcImR5a2VcIiwgXCJlamFjdWxhdGVcIiwgXCJlamFjdWxhdGVkXCIsIFwiZWphY3VsYXRlc1wiLCBcImVqYWN1bGF0aW5nXCIsIFwiZWphY3VsYXRpbmdzXCIsIFwiZWphY3VsYXRpb25cIiwgXCJlamFrdWxhdGVcIiwgXCJmIHUgYyBrXCIsIFwiZiB1IGMgayBlIHJcIiwgXCJmNG5ueVwiLCBcImZhZ1wiLCBcImZhZ2dpbmdcIiwgXCJmYWdnaXR0XCIsIFwiZmFnZ290XCIsIFwiZmFnZ3NcIiwgXCJmYWdvdFwiLCBcImZhZ290c1wiLCBcImZhZ3NcIiwgXCJmYW5ueVwiLCBcImZhbm55ZmxhcHNcIiwgXCJmYW5ueWZ1Y2tlclwiLCBcImZhbnl5XCIsIFwiZmF0YXNzXCIsIFwiZmN1a1wiLCBcImZjdWtlclwiLCBcImZjdWtpbmdcIiwgXCJmZWNrXCIsIFwiZmVja2VyXCIsIFwiZmVsY2hpbmdcIiwgXCJmZWxsYXRlXCIsIFwiZmVsbGF0aW9cIiwgXCJmaW5nZXJmdWNrXCIsIFwiZmluZ2VyZnVja2VkXCIsIFwiZmluZ2VyZnVja2VyXCIsIFwiZmluZ2VyZnVja2Vyc1wiLCBcImZpbmdlcmZ1Y2tpbmdcIiwgXCJmaW5nZXJmdWNrc1wiLCBcImZpc3RmdWNrXCIsIFwiZmlzdGZ1Y2tlZFwiLCBcImZpc3RmdWNrZXJcIiwgXCJmaXN0ZnVja2Vyc1wiLCBcImZpc3RmdWNraW5nXCIsIFwiZmlzdGZ1Y2tpbmdzXCIsIFwiZmlzdGZ1Y2tzXCIsIFwiZmxhbmdlXCIsIFwiZm9va1wiLCBcImZvb2tlclwiLCBcImZ1Y2tcIiwgXCJmdWNrYVwiLCBcImZ1Y2tlZFwiLCBcImZ1Y2tlclwiLCBcImZ1Y2tlcnNcIiwgXCJmdWNraGVhZFwiLCBcImZ1Y2toZWFkc1wiLCBcImZ1Y2tpblwiLCBcImZ1Y2tpbmdcIiwgXCJmdWNraW5nc1wiLCBcImZ1Y2tpbmdzaGl0bW90aGVyZnVja2VyXCIsIFwiZnVja21lXCIsIFwiZnVja3NcIiwgXCJmdWNrd2hpdFwiLCBcImZ1Y2t3aXRcIiwgXCJmdWRnZSBwYWNrZXJcIiwgXCJmdWRnZXBhY2tlclwiLCBcImZ1a1wiLCBcImZ1a2VyXCIsIFwiZnVra2VyXCIsIFwiZnVra2luXCIsIFwiZnVrc1wiLCBcImZ1a3doaXRcIiwgXCJmdWt3aXRcIiwgXCJmdXhcIiwgXCJmdXgwclwiLCBcImZfdV9jX2tcIiwgXCJnYW5nYmFuZ1wiLCBcImdhbmdiYW5nZWRcIiwgXCJnYW5nYmFuZ3NcIiwgXCJnYXlsb3JkXCIsIFwiZ2F5c2V4XCIsIFwiZ29hdHNlXCIsIFwiR29kXCIsIFwiZ29kLWRhbVwiLCBcImdvZC1kYW1uZWRcIiwgXCJnb2RkYW1uXCIsIFwiZ29kZGFtbmVkXCIsIFwiaGFyZGNvcmVzZXhcIiwgXCJoZWxsXCIsIFwiaGVzaGVcIiwgXCJob2FyXCIsIFwiaG9hcmVcIiwgXCJob2VyXCIsIFwiaG9tb1wiLCBcImhvcmVcIiwgXCJob3JuaWVzdFwiLCBcImhvcm55XCIsIFwiaG90c2V4XCIsIFwiamFjay1vZmZcIiwgXCJqYWNrb2ZmXCIsIFwiamFwXCIsIFwiamVyay1vZmZcIiwgXCJqaXNtXCIsIFwiaml6XCIsIFwiaml6bVwiLCBcImppenpcIiwgXCJrYXdrXCIsIFwia25vYlwiLCBcImtub2JlYWRcIiwgXCJrbm9iZWRcIiwgXCJrbm9iZW5kXCIsIFwia25vYmhlYWRcIiwgXCJrbm9iam9ja3lcIiwgXCJrbm9iam9rZXlcIiwgXCJrb2NrXCIsIFwia29uZHVtXCIsIFwia29uZHVtc1wiLCBcImt1bVwiLCBcImt1bW1lclwiLCBcImt1bW1pbmdcIiwgXCJrdW1zXCIsIFwia3VuaWxpbmd1c1wiLCBcImwzaStjaFwiLCBcImwzaXRjaFwiLCBcImxhYmlhXCIsIFwibHVzdFwiLCBcImx1c3RpbmdcIiwgXCJtMGYwXCIsIFwibTBmb1wiLCBcIm00NXRlcmJhdGVcIiwgXCJtYTV0ZXJiOFwiLCBcIm1hNXRlcmJhdGVcIiwgXCJtYXNvY2hpc3RcIiwgXCJtYXN0ZXItYmF0ZVwiLCBcIm1hc3RlcmI4XCIsIFwibWFzdGVyYmF0KlwiLCBcIm1hc3RlcmJhdDNcIiwgXCJtYXN0ZXJiYXRlXCIsIFwibWFzdGVyYmF0aW9uXCIsIFwibWFzdGVyYmF0aW9uc1wiLCBcIm1hc3R1cmJhdGVcIiwgXCJtby1mb1wiLCBcIm1vZjBcIiwgXCJtb2ZvXCIsIFwibW90aGFmdWNrXCIsIFwibW90aGFmdWNrYVwiLCBcIm1vdGhhZnVja2FzXCIsIFwibW90aGFmdWNrYXpcIiwgXCJtb3RoYWZ1Y2tlZFwiLCBcIm1vdGhhZnVja2VyXCIsIFwibW90aGFmdWNrZXJzXCIsIFwibW90aGFmdWNraW5cIiwgXCJtb3RoYWZ1Y2tpbmdcIiwgXCJtb3RoYWZ1Y2tpbmdzXCIsIFwibW90aGFmdWNrc1wiLCBcIm1vdGhlciBmdWNrZXJcIiwgXCJtb3RoZXJmdWNrXCIsIFwibW90aGVyZnVja2VkXCIsIFwibW90aGVyZnVja2VyXCIsIFwibW90aGVyZnVja2Vyc1wiLCBcIm1vdGhlcmZ1Y2tpblwiLCBcIm1vdGhlcmZ1Y2tpbmdcIiwgXCJtb3RoZXJmdWNraW5nc1wiLCBcIm1vdGhlcmZ1Y2trYVwiLCBcIm1vdGhlcmZ1Y2tzXCIsIFwibXVmZlwiLCBcIm11dGhhXCIsIFwibXV0aGFmZWNrZXJcIiwgXCJtdXRoYWZ1Y2trZXJcIiwgXCJtdXRoZXJcIiwgXCJtdXRoZXJmdWNrZXJcIiwgXCJuMWdnYVwiLCBcIm4xZ2dlclwiLCBcIm5hemlcIiwgXCJuaWdnM3JcIiwgXCJuaWdnNGhcIiwgXCJuaWdnYVwiLCBcIm5pZ2dhaFwiLCBcIm5pZ2dhc1wiLCBcIm5pZ2dhelwiLCBcIm5pZ2dlclwiLCBcIm5pZ2dlcnNcIiwgXCJub2JcIiwgXCJub2Igam9rZXlcIiwgXCJub2JoZWFkXCIsIFwibm9iam9ja3lcIiwgXCJub2Jqb2tleVwiLCBcIm51bWJudXRzXCIsIFwibnV0c2Fja1wiLCBcIm9yZ2FzaW1cIiwgXCJvcmdhc2ltc1wiLCBcIm9yZ2FzbVwiLCBcIm9yZ2FzbXNcIiwgXCJwMHJuXCIsIFwicGF3blwiLCBcInBlY2tlclwiLCBcInBlbmlzXCIsIFwicGVuaXNmdWNrZXJcIiwgXCJwaG9uZXNleFwiLCBcInBodWNrXCIsIFwicGh1a1wiLCBcInBodWtlZFwiLCBcInBodWtpbmdcIiwgXCJwaHVra2VkXCIsIFwicGh1a2tpbmdcIiwgXCJwaHVrc1wiLCBcInBodXFcIiwgXCJwaWdmdWNrZXJcIiwgXCJwaW1waXNcIiwgXCJwaXNzXCIsIFwicGlzc2VkXCIsIFwicGlzc2VyXCIsIFwicGlzc2Vyc1wiLCBcInBpc3Nlc1wiLCBcInBpc3NmbGFwc1wiLCBcInBpc3NpblwiLCBcInBpc3NpbmdcIiwgXCJwaXNzb2ZmXCIsIFwicG9vcFwiLCBcInBvcm5cIiwgXCJwb3Jub1wiLCBcInBvcm5vZ3JhcGh5XCIsIFwicG9ybm9zXCIsIFwicHJpY2tcIiwgXCJwcmlja3NcIiwgXCJwcm9uXCIsIFwicHViZVwiLCBcInB1c3NlXCIsIFwicHVzc2lcIiwgXCJwdXNzaWVzXCIsIFwicHVzc3lcIiwgXCJwdXNzeXNcIiwgXCJyZWN0dW1cIiwgXCJyZXRhcmRcIiwgXCJyaW1qYXdcIiwgXCJyaW1taW5nXCIsIFwicyBoaXRcIiwgXCJzLm8uYi5cIiwgXCJzYWRpc3RcIiwgXCJzY2hsb25nXCIsIFwic2NyZXdpbmdcIiwgXCJzY3JvYXRcIiwgXCJzY3JvdGVcIiwgXCJzY3JvdHVtXCIsIFwic2VtZW5cIiwgXCJzZXhcIiwgXCJzaCErXCIsIFwic2ghdFwiLCBcInNoMXRcIiwgXCJzaGFnXCIsIFwic2hhZ2dlclwiLCBcInNoYWdnaW5cIiwgXCJzaGFnZ2luZ1wiLCBcInNoZW1hbGVcIiwgXCJzaGkrXCIsIFwic2hpdFwiLCBcInNoaXRkaWNrXCIsIFwic2hpdGVcIiwgXCJzaGl0ZWRcIiwgXCJzaGl0ZXlcIiwgXCJzaGl0ZnVja1wiLCBcInNoaXRmdWxsXCIsIFwic2hpdGhlYWRcIiwgXCJzaGl0aW5nXCIsIFwic2hpdGluZ3NcIiwgXCJzaGl0c1wiLCBcInNoaXR0ZWRcIiwgXCJzaGl0dGVyXCIsIFwic2hpdHRlcnNcIiwgXCJzaGl0dGluZ1wiLCBcInNoaXR0aW5nc1wiLCBcInNoaXR0eVwiLCBcInNrYW5rXCIsIFwic2x1dFwiLCBcInNsdXRzXCIsIFwic21lZ21hXCIsIFwic211dFwiLCBcInNuYXRjaFwiLCBcInNvbi1vZi1hLWJpdGNoXCIsIFwic3BhY1wiLCBcInNwdW5rXCIsIFwic19oX2lfdFwiLCBcInQxdHQxZTVcIiwgXCJ0MXR0aWVzXCIsIFwidGVldHNcIiwgXCJ0ZWV6XCIsIFwidGVzdGljYWxcIiwgXCJ0ZXN0aWNsZVwiLCBcInRpdFwiLCBcInRpdGZ1Y2tcIiwgXCJ0aXRzXCIsIFwidGl0dFwiLCBcInRpdHRpZTVcIiwgXCJ0aXR0aWVmdWNrZXJcIiwgXCJ0aXR0aWVzXCIsIFwidGl0dHlmdWNrXCIsIFwidGl0dHl3YW5rXCIsIFwidGl0d2Fua1wiLCBcInRvc3NlclwiLCBcInR1cmRcIiwgXCJ0dzR0XCIsIFwidHdhdFwiLCBcInR3YXRoZWFkXCIsIFwidHdhdHR5XCIsIFwidHd1bnRcIiwgXCJ0d3VudGVyXCIsIFwidjE0Z3JhXCIsIFwidjFncmFcIiwgXCJ2YWdpbmFcIiwgXCJ2aWFncmFcIiwgXCJ2dWx2YVwiLCBcIncwMHNlXCIsIFwid2FuZ1wiLCBcIndhbmtcIiwgXCJ3YW5rZXJcIiwgXCJ3YW5reVwiLCBcIndob2FyXCIsIFwid2hvcmVcIiwgXCJ3aWxsaWVzXCIsIFwid2lsbHlcIiwgXCJ4cmF0ZWRcIiwgXCJ4eHhcIl07IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9iamVjdDogcmVxdWlyZSgnLi9vYmplY3QnKSxcbiAgYXJyYXk6IHJlcXVpcmUoJy4vYXJyYXknKSxcbiAgcmVnZXg6IHJlcXVpcmUoJy4vcmVnZXhwJylcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7XCI0cjVlXCI6IDEsIFwiNWgxdFwiOiAxLCBcIjVoaXRcIjogMSwgXCJhNTVcIjogMSwgXCJhbmFsXCI6IDEsIFwiYW51c1wiOiAxLCBcImFyNWVcIjogMSwgXCJhcnJzZVwiOiAxLCBcImFyc2VcIjogMSwgXCJhc3NcIjogMSwgXCJhc3MtZnVja2VyXCI6IDEsIFwiYXNzZXNcIjogMSwgXCJhc3NmdWNrZXJcIjogMSwgXCJhc3NmdWtrYVwiOiAxLCBcImFzc2hvbGVcIjogMSwgXCJhc3Nob2xlc1wiOiAxLCBcImFzc3dob2xlXCI6IDEsIFwiYV9zX3NcIjogMSwgXCJiIXRjaFwiOiAxLCBcImIwMGJzXCI6IDEsIFwiYjE3Y2hcIjogMSwgXCJiMXRjaFwiOiAxLCBcImJhbGxiYWdcIjogMSwgXCJiYWxsc1wiOiAxLCBcImJhbGxzYWNrXCI6IDEsIFwiYmFzdGFyZFwiOiAxLCBcImJlYXN0aWFsXCI6IDEsIFwiYmVhc3RpYWxpdHlcIjogMSwgXCJiZWxsZW5kXCI6IDEsIFwiYmVzdGlhbFwiOiAxLCBcImJlc3RpYWxpdHlcIjogMSwgXCJiaStjaFwiOiAxLCBcImJpYXRjaFwiOiAxLCBcImJpdGNoXCI6IDEsIFwiYml0Y2hlclwiOiAxLCBcImJpdGNoZXJzXCI6IDEsIFwiYml0Y2hlc1wiOiAxLCBcImJpdGNoaW5cIjogMSwgXCJiaXRjaGluZ1wiOiAxLCBcImJsb29keVwiOiAxLCBcImJsb3cgam9iXCI6IDEsIFwiYmxvd2pvYlwiOiAxLCBcImJsb3dqb2JzXCI6IDEsIFwiYm9pb2xhc1wiOiAxLCBcImJvbGxvY2tcIjogMSwgXCJib2xsb2tcIjogMSwgXCJib25lclwiOiAxLCBcImJvb2JcIjogMSwgXCJib29ic1wiOiAxLCBcImJvb29ic1wiOiAxLCBcImJvb29vYnNcIjogMSwgXCJib29vb29ic1wiOiAxLCBcImJvb29vb29vYnNcIjogMSwgXCJicmVhc3RzXCI6IDEsIFwiYnVjZXRhXCI6IDEsIFwiYnVnZ2VyXCI6IDEsIFwiYnVtXCI6IDEsIFwiYnVubnkgZnVja2VyXCI6IDEsIFwiYnV0dFwiOiAxLCBcImJ1dHRob2xlXCI6IDEsIFwiYnV0dG11Y2hcIjogMSwgXCJidXR0cGx1Z1wiOiAxLCBcImMwY2tcIjogMSwgXCJjMGNrc3Vja2VyXCI6IDEsIFwiY2FycGV0IG11bmNoZXJcIjogMSwgXCJjYXdrXCI6IDEsIFwiY2hpbmtcIjogMSwgXCJjaXBhXCI6IDEsIFwiY2wxdFwiOiAxLCBcImNsaXRcIjogMSwgXCJjbGl0b3Jpc1wiOiAxLCBcImNsaXRzXCI6IDEsIFwiY251dFwiOiAxLCBcImNvY2tcIjogMSwgXCJjb2NrLXN1Y2tlclwiOiAxLCBcImNvY2tmYWNlXCI6IDEsIFwiY29ja2hlYWRcIjogMSwgXCJjb2NrbXVuY2hcIjogMSwgXCJjb2NrbXVuY2hlclwiOiAxLCBcImNvY2tzXCI6IDEsIFwiY29ja3N1Y2tcIjogMSwgXCJjb2Nrc3Vja2VkXCI6IDEsIFwiY29ja3N1Y2tlclwiOiAxLCBcImNvY2tzdWNraW5nXCI6IDEsIFwiY29ja3N1Y2tzXCI6IDEsIFwiY29ja3N1a2FcIjogMSwgXCJjb2Nrc3Vra2FcIjogMSwgXCJjb2tcIjogMSwgXCJjb2ttdW5jaGVyXCI6IDEsIFwiY29rc3Vja2FcIjogMSwgXCJjb29uXCI6IDEsIFwiY294XCI6IDEsIFwiY3JhcFwiOiAxLCBcImN1bVwiOiAxLCBcImN1bW1lclwiOiAxLCBcImN1bW1pbmdcIjogMSwgXCJjdW1zXCI6IDEsIFwiY3Vtc2hvdFwiOiAxLCBcImN1bmlsaW5ndXNcIjogMSwgXCJjdW5pbGxpbmd1c1wiOiAxLCBcImN1bm5pbGluZ3VzXCI6IDEsIFwiY3VudFwiOiAxLCBcImN1bnRsaWNrXCI6IDEsIFwiY3VudGxpY2tlclwiOiAxLCBcImN1bnRsaWNraW5nXCI6IDEsIFwiY3VudHNcIjogMSwgXCJjeWFsaXNcIjogMSwgXCJjeWJlcmZ1Y1wiOiAxLCBcImN5YmVyZnVja1wiOiAxLCBcImN5YmVyZnVja2VkXCI6IDEsIFwiY3liZXJmdWNrZXJcIjogMSwgXCJjeWJlcmZ1Y2tlcnNcIjogMSwgXCJjeWJlcmZ1Y2tpbmdcIjogMSwgXCJkMWNrXCI6IDEsIFwiZGFtblwiOiAxLCBcImRpY2tcIjogMSwgXCJkaWNraGVhZFwiOiAxLCBcImRpbGRvXCI6IDEsIFwiZGlsZG9zXCI6IDEsIFwiZGlua1wiOiAxLCBcImRpbmtzXCI6IDEsIFwiZGlyc2FcIjogMSwgXCJkbGNrXCI6IDEsIFwiZG9nLWZ1Y2tlclwiOiAxLCBcImRvZ2dpblwiOiAxLCBcImRvZ2dpbmdcIjogMSwgXCJkb25rZXlyaWJiZXJcIjogMSwgXCJkb29zaFwiOiAxLCBcImR1Y2hlXCI6IDEsIFwiZHlrZVwiOiAxLCBcImVqYWN1bGF0ZVwiOiAxLCBcImVqYWN1bGF0ZWRcIjogMSwgXCJlamFjdWxhdGVzXCI6IDEsIFwiZWphY3VsYXRpbmdcIjogMSwgXCJlamFjdWxhdGluZ3NcIjogMSwgXCJlamFjdWxhdGlvblwiOiAxLCBcImVqYWt1bGF0ZVwiOiAxLCBcImYgdSBjIGtcIjogMSwgXCJmIHUgYyBrIGUgclwiOiAxLCBcImY0bm55XCI6IDEsIFwiZmFnXCI6IDEsIFwiZmFnZ2luZ1wiOiAxLCBcImZhZ2dpdHRcIjogMSwgXCJmYWdnb3RcIjogMSwgXCJmYWdnc1wiOiAxLCBcImZhZ290XCI6IDEsIFwiZmFnb3RzXCI6IDEsIFwiZmFnc1wiOiAxLCBcImZhbm55XCI6IDEsIFwiZmFubnlmbGFwc1wiOiAxLCBcImZhbm55ZnVja2VyXCI6IDEsIFwiZmFueXlcIjogMSwgXCJmYXRhc3NcIjogMSwgXCJmY3VrXCI6IDEsIFwiZmN1a2VyXCI6IDEsIFwiZmN1a2luZ1wiOiAxLCBcImZlY2tcIjogMSwgXCJmZWNrZXJcIjogMSwgXCJmZWxjaGluZ1wiOiAxLCBcImZlbGxhdGVcIjogMSwgXCJmZWxsYXRpb1wiOiAxLCBcImZpbmdlcmZ1Y2tcIjogMSwgXCJmaW5nZXJmdWNrZWRcIjogMSwgXCJmaW5nZXJmdWNrZXJcIjogMSwgXCJmaW5nZXJmdWNrZXJzXCI6IDEsIFwiZmluZ2VyZnVja2luZ1wiOiAxLCBcImZpbmdlcmZ1Y2tzXCI6IDEsIFwiZmlzdGZ1Y2tcIjogMSwgXCJmaXN0ZnVja2VkXCI6IDEsIFwiZmlzdGZ1Y2tlclwiOiAxLCBcImZpc3RmdWNrZXJzXCI6IDEsIFwiZmlzdGZ1Y2tpbmdcIjogMSwgXCJmaXN0ZnVja2luZ3NcIjogMSwgXCJmaXN0ZnVja3NcIjogMSwgXCJmbGFuZ2VcIjogMSwgXCJmb29rXCI6IDEsIFwiZm9va2VyXCI6IDEsIFwiZnVja1wiOiAxLCBcImZ1Y2thXCI6IDEsIFwiZnVja2VkXCI6IDEsIFwiZnVja2VyXCI6IDEsIFwiZnVja2Vyc1wiOiAxLCBcImZ1Y2toZWFkXCI6IDEsIFwiZnVja2hlYWRzXCI6IDEsIFwiZnVja2luXCI6IDEsIFwiZnVja2luZ1wiOiAxLCBcImZ1Y2tpbmdzXCI6IDEsIFwiZnVja2luZ3NoaXRtb3RoZXJmdWNrZXJcIjogMSwgXCJmdWNrbWVcIjogMSwgXCJmdWNrc1wiOiAxLCBcImZ1Y2t3aGl0XCI6IDEsIFwiZnVja3dpdFwiOiAxLCBcImZ1ZGdlIHBhY2tlclwiOiAxLCBcImZ1ZGdlcGFja2VyXCI6IDEsIFwiZnVrXCI6IDEsIFwiZnVrZXJcIjogMSwgXCJmdWtrZXJcIjogMSwgXCJmdWtraW5cIjogMSwgXCJmdWtzXCI6IDEsIFwiZnVrd2hpdFwiOiAxLCBcImZ1a3dpdFwiOiAxLCBcImZ1eFwiOiAxLCBcImZ1eDByXCI6IDEsIFwiZl91X2Nfa1wiOiAxLCBcImdhbmdiYW5nXCI6IDEsIFwiZ2FuZ2JhbmdlZFwiOiAxLCBcImdhbmdiYW5nc1wiOiAxLCBcImdheWxvcmRcIjogMSwgXCJnYXlzZXhcIjogMSwgXCJnb2F0c2VcIjogMSwgXCJHb2RcIjogMSwgXCJnb2QtZGFtXCI6IDEsIFwiZ29kLWRhbW5lZFwiOiAxLCBcImdvZGRhbW5cIjogMSwgXCJnb2RkYW1uZWRcIjogMSwgXCJoYXJkY29yZXNleFwiOiAxLCBcImhlbGxcIjogMSwgXCJoZXNoZVwiOiAxLCBcImhvYXJcIjogMSwgXCJob2FyZVwiOiAxLCBcImhvZXJcIjogMSwgXCJob21vXCI6IDEsIFwiaG9yZVwiOiAxLCBcImhvcm5pZXN0XCI6IDEsIFwiaG9ybnlcIjogMSwgXCJob3RzZXhcIjogMSwgXCJqYWNrLW9mZlwiOiAxLCBcImphY2tvZmZcIjogMSwgXCJqYXBcIjogMSwgXCJqZXJrLW9mZlwiOiAxLCBcImppc21cIjogMSwgXCJqaXpcIjogMSwgXCJqaXptXCI6IDEsIFwiaml6elwiOiAxLCBcImthd2tcIjogMSwgXCJrbm9iXCI6IDEsIFwia25vYmVhZFwiOiAxLCBcImtub2JlZFwiOiAxLCBcImtub2JlbmRcIjogMSwgXCJrbm9iaGVhZFwiOiAxLCBcImtub2Jqb2NreVwiOiAxLCBcImtub2Jqb2tleVwiOiAxLCBcImtvY2tcIjogMSwgXCJrb25kdW1cIjogMSwgXCJrb25kdW1zXCI6IDEsIFwia3VtXCI6IDEsIFwia3VtbWVyXCI6IDEsIFwia3VtbWluZ1wiOiAxLCBcImt1bXNcIjogMSwgXCJrdW5pbGluZ3VzXCI6IDEsIFwibDNpK2NoXCI6IDEsIFwibDNpdGNoXCI6IDEsIFwibGFiaWFcIjogMSwgXCJsdXN0XCI6IDEsIFwibHVzdGluZ1wiOiAxLCBcIm0wZjBcIjogMSwgXCJtMGZvXCI6IDEsIFwibTQ1dGVyYmF0ZVwiOiAxLCBcIm1hNXRlcmI4XCI6IDEsIFwibWE1dGVyYmF0ZVwiOiAxLCBcIm1hc29jaGlzdFwiOiAxLCBcIm1hc3Rlci1iYXRlXCI6IDEsIFwibWFzdGVyYjhcIjogMSwgXCJtYXN0ZXJiYXQqXCI6IDEsIFwibWFzdGVyYmF0M1wiOiAxLCBcIm1hc3RlcmJhdGVcIjogMSwgXCJtYXN0ZXJiYXRpb25cIjogMSwgXCJtYXN0ZXJiYXRpb25zXCI6IDEsIFwibWFzdHVyYmF0ZVwiOiAxLCBcIm1vLWZvXCI6IDEsIFwibW9mMFwiOiAxLCBcIm1vZm9cIjogMSwgXCJtb3RoYWZ1Y2tcIjogMSwgXCJtb3RoYWZ1Y2thXCI6IDEsIFwibW90aGFmdWNrYXNcIjogMSwgXCJtb3RoYWZ1Y2thelwiOiAxLCBcIm1vdGhhZnVja2VkXCI6IDEsIFwibW90aGFmdWNrZXJcIjogMSwgXCJtb3RoYWZ1Y2tlcnNcIjogMSwgXCJtb3RoYWZ1Y2tpblwiOiAxLCBcIm1vdGhhZnVja2luZ1wiOiAxLCBcIm1vdGhhZnVja2luZ3NcIjogMSwgXCJtb3RoYWZ1Y2tzXCI6IDEsIFwibW90aGVyIGZ1Y2tlclwiOiAxLCBcIm1vdGhlcmZ1Y2tcIjogMSwgXCJtb3RoZXJmdWNrZWRcIjogMSwgXCJtb3RoZXJmdWNrZXJcIjogMSwgXCJtb3RoZXJmdWNrZXJzXCI6IDEsIFwibW90aGVyZnVja2luXCI6IDEsIFwibW90aGVyZnVja2luZ1wiOiAxLCBcIm1vdGhlcmZ1Y2tpbmdzXCI6IDEsIFwibW90aGVyZnVja2thXCI6IDEsIFwibW90aGVyZnVja3NcIjogMSwgXCJtdWZmXCI6IDEsIFwibXV0aGFcIjogMSwgXCJtdXRoYWZlY2tlclwiOiAxLCBcIm11dGhhZnVja2tlclwiOiAxLCBcIm11dGhlclwiOiAxLCBcIm11dGhlcmZ1Y2tlclwiOiAxLCBcIm4xZ2dhXCI6IDEsIFwibjFnZ2VyXCI6IDEsIFwibmF6aVwiOiAxLCBcIm5pZ2czclwiOiAxLCBcIm5pZ2c0aFwiOiAxLCBcIm5pZ2dhXCI6IDEsIFwibmlnZ2FoXCI6IDEsIFwibmlnZ2FzXCI6IDEsIFwibmlnZ2F6XCI6IDEsIFwibmlnZ2VyXCI6IDEsIFwibmlnZ2Vyc1wiOiAxLCBcIm5vYlwiOiAxLCBcIm5vYiBqb2tleVwiOiAxLCBcIm5vYmhlYWRcIjogMSwgXCJub2Jqb2NreVwiOiAxLCBcIm5vYmpva2V5XCI6IDEsIFwibnVtYm51dHNcIjogMSwgXCJudXRzYWNrXCI6IDEsIFwib3JnYXNpbVwiOiAxLCBcIm9yZ2FzaW1zXCI6IDEsIFwib3JnYXNtXCI6IDEsIFwib3JnYXNtc1wiOiAxLCBcInAwcm5cIjogMSwgXCJwYXduXCI6IDEsIFwicGVja2VyXCI6IDEsIFwicGVuaXNcIjogMSwgXCJwZW5pc2Z1Y2tlclwiOiAxLCBcInBob25lc2V4XCI6IDEsIFwicGh1Y2tcIjogMSwgXCJwaHVrXCI6IDEsIFwicGh1a2VkXCI6IDEsIFwicGh1a2luZ1wiOiAxLCBcInBodWtrZWRcIjogMSwgXCJwaHVra2luZ1wiOiAxLCBcInBodWtzXCI6IDEsIFwicGh1cVwiOiAxLCBcInBpZ2Z1Y2tlclwiOiAxLCBcInBpbXBpc1wiOiAxLCBcInBpc3NcIjogMSwgXCJwaXNzZWRcIjogMSwgXCJwaXNzZXJcIjogMSwgXCJwaXNzZXJzXCI6IDEsIFwicGlzc2VzXCI6IDEsIFwicGlzc2ZsYXBzXCI6IDEsIFwicGlzc2luXCI6IDEsIFwicGlzc2luZ1wiOiAxLCBcInBpc3NvZmZcIjogMSwgXCJwb29wXCI6IDEsIFwicG9yblwiOiAxLCBcInBvcm5vXCI6IDEsIFwicG9ybm9ncmFwaHlcIjogMSwgXCJwb3Jub3NcIjogMSwgXCJwcmlja1wiOiAxLCBcInByaWNrc1wiOiAxLCBcInByb25cIjogMSwgXCJwdWJlXCI6IDEsIFwicHVzc2VcIjogMSwgXCJwdXNzaVwiOiAxLCBcInB1c3NpZXNcIjogMSwgXCJwdXNzeVwiOiAxLCBcInB1c3N5c1wiOiAxLCBcInJlY3R1bVwiOiAxLCBcInJldGFyZFwiOiAxLCBcInJpbWphd1wiOiAxLCBcInJpbW1pbmdcIjogMSwgXCJzIGhpdFwiOiAxLCBcInMuby5iLlwiOiAxLCBcInNhZGlzdFwiOiAxLCBcInNjaGxvbmdcIjogMSwgXCJzY3Jld2luZ1wiOiAxLCBcInNjcm9hdFwiOiAxLCBcInNjcm90ZVwiOiAxLCBcInNjcm90dW1cIjogMSwgXCJzZW1lblwiOiAxLCBcInNleFwiOiAxLCBcInNoIStcIjogMSwgXCJzaCF0XCI6IDEsIFwic2gxdFwiOiAxLCBcInNoYWdcIjogMSwgXCJzaGFnZ2VyXCI6IDEsIFwic2hhZ2dpblwiOiAxLCBcInNoYWdnaW5nXCI6IDEsIFwic2hlbWFsZVwiOiAxLCBcInNoaStcIjogMSwgXCJzaGl0XCI6IDEsIFwic2hpdGRpY2tcIjogMSwgXCJzaGl0ZVwiOiAxLCBcInNoaXRlZFwiOiAxLCBcInNoaXRleVwiOiAxLCBcInNoaXRmdWNrXCI6IDEsIFwic2hpdGZ1bGxcIjogMSwgXCJzaGl0aGVhZFwiOiAxLCBcInNoaXRpbmdcIjogMSwgXCJzaGl0aW5nc1wiOiAxLCBcInNoaXRzXCI6IDEsIFwic2hpdHRlZFwiOiAxLCBcInNoaXR0ZXJcIjogMSwgXCJzaGl0dGVyc1wiOiAxLCBcInNoaXR0aW5nXCI6IDEsIFwic2hpdHRpbmdzXCI6IDEsIFwic2hpdHR5XCI6IDEsIFwic2thbmtcIjogMSwgXCJzbHV0XCI6IDEsIFwic2x1dHNcIjogMSwgXCJzbWVnbWFcIjogMSwgXCJzbXV0XCI6IDEsIFwic25hdGNoXCI6IDEsIFwic29uLW9mLWEtYml0Y2hcIjogMSwgXCJzcGFjXCI6IDEsIFwic3B1bmtcIjogMSwgXCJzX2hfaV90XCI6IDEsIFwidDF0dDFlNVwiOiAxLCBcInQxdHRpZXNcIjogMSwgXCJ0ZWV0c1wiOiAxLCBcInRlZXpcIjogMSwgXCJ0ZXN0aWNhbFwiOiAxLCBcInRlc3RpY2xlXCI6IDEsIFwidGl0XCI6IDEsIFwidGl0ZnVja1wiOiAxLCBcInRpdHNcIjogMSwgXCJ0aXR0XCI6IDEsIFwidGl0dGllNVwiOiAxLCBcInRpdHRpZWZ1Y2tlclwiOiAxLCBcInRpdHRpZXNcIjogMSwgXCJ0aXR0eWZ1Y2tcIjogMSwgXCJ0aXR0eXdhbmtcIjogMSwgXCJ0aXR3YW5rXCI6IDEsIFwidG9zc2VyXCI6IDEsIFwidHVyZFwiOiAxLCBcInR3NHRcIjogMSwgXCJ0d2F0XCI6IDEsIFwidHdhdGhlYWRcIjogMSwgXCJ0d2F0dHlcIjogMSwgXCJ0d3VudFwiOiAxLCBcInR3dW50ZXJcIjogMSwgXCJ2MTRncmFcIjogMSwgXCJ2MWdyYVwiOiAxLCBcInZhZ2luYVwiOiAxLCBcInZpYWdyYVwiOiAxLCBcInZ1bHZhXCI6IDEsIFwidzAwc2VcIjogMSwgXCJ3YW5nXCI6IDEsIFwid2Fua1wiOiAxLCBcIndhbmtlclwiOiAxLCBcIndhbmt5XCI6IDEsIFwid2hvYXJcIjogMSwgXCJ3aG9yZVwiOiAxLCBcIndpbGxpZXNcIjogMSwgXCJ3aWxseVwiOiAxLCBcInhyYXRlZFwiOiAxLCBcInh4eFwiOiAxfTsiLCJtb2R1bGUuZXhwb3J0cyA9IC9cXGIoNHI1ZXw1aDF0fDVoaXR8YTU1fGFuYWx8YW51c3xhcjVlfGFycnNlfGFyc2V8YXNzfGFzcy1mdWNrZXJ8YXNzZXN8YXNzZnVja2VyfGFzc2Z1a2thfGFzc2hvbGV8YXNzaG9sZXN8YXNzd2hvbGV8YV9zX3N8YiF0Y2h8YjAwYnN8YjE3Y2h8YjF0Y2h8YmFsbGJhZ3xiYWxsc3xiYWxsc2Fja3xiYXN0YXJkfGJlYXN0aWFsfGJlYXN0aWFsaXR5fGJlbGxlbmR8YmVzdGlhbHxiZXN0aWFsaXR5fGJpXFwrY2h8YmlhdGNofGJpdGNofGJpdGNoZXJ8Yml0Y2hlcnN8Yml0Y2hlc3xiaXRjaGlufGJpdGNoaW5nfGJsb29keXxibG93IGpvYnxibG93am9ifGJsb3dqb2JzfGJvaW9sYXN8Ym9sbG9ja3xib2xsb2t8Ym9uZXJ8Ym9vYnxib29ic3xib29vYnN8Ym9vb29ic3xib29vb29ic3xib29vb29vb2JzfGJyZWFzdHN8YnVjZXRhfGJ1Z2dlcnxidW18YnVubnkgZnVja2VyfGJ1dHR8YnV0dGhvbGV8YnV0dG11Y2h8YnV0dHBsdWd8YzBja3xjMGNrc3Vja2VyfGNhcnBldCBtdW5jaGVyfGNhd2t8Y2hpbmt8Y2lwYXxjbDF0fGNsaXR8Y2xpdG9yaXN8Y2xpdHN8Y251dHxjb2NrfGNvY2stc3Vja2VyfGNvY2tmYWNlfGNvY2toZWFkfGNvY2ttdW5jaHxjb2NrbXVuY2hlcnxjb2Nrc3xjb2Nrc3Vja3xjb2Nrc3Vja2VkfGNvY2tzdWNrZXJ8Y29ja3N1Y2tpbmd8Y29ja3N1Y2tzfGNvY2tzdWthfGNvY2tzdWtrYXxjb2t8Y29rbXVuY2hlcnxjb2tzdWNrYXxjb29ufGNveHxjcmFwfGN1bXxjdW1tZXJ8Y3VtbWluZ3xjdW1zfGN1bXNob3R8Y3VuaWxpbmd1c3xjdW5pbGxpbmd1c3xjdW5uaWxpbmd1c3xjdW50fGN1bnRsaWNrfGN1bnRsaWNrZXJ8Y3VudGxpY2tpbmd8Y3VudHN8Y3lhbGlzfGN5YmVyZnVjfGN5YmVyZnVja3xjeWJlcmZ1Y2tlZHxjeWJlcmZ1Y2tlcnxjeWJlcmZ1Y2tlcnN8Y3liZXJmdWNraW5nfGQxY2t8ZGFtbnxkaWNrfGRpY2toZWFkfGRpbGRvfGRpbGRvc3xkaW5rfGRpbmtzfGRpcnNhfGRsY2t8ZG9nLWZ1Y2tlcnxkb2dnaW58ZG9nZ2luZ3xkb25rZXlyaWJiZXJ8ZG9vc2h8ZHVjaGV8ZHlrZXxlamFjdWxhdGV8ZWphY3VsYXRlZHxlamFjdWxhdGVzfGVqYWN1bGF0aW5nfGVqYWN1bGF0aW5nc3xlamFjdWxhdGlvbnxlamFrdWxhdGV8ZiB1IGMga3xmIHUgYyBrIGUgcnxmNG5ueXxmYWd8ZmFnZ2luZ3xmYWdnaXR0fGZhZ2dvdHxmYWdnc3xmYWdvdHxmYWdvdHN8ZmFnc3xmYW5ueXxmYW5ueWZsYXBzfGZhbm55ZnVja2VyfGZhbnl5fGZhdGFzc3xmY3VrfGZjdWtlcnxmY3VraW5nfGZlY2t8ZmVja2VyfGZlbGNoaW5nfGZlbGxhdGV8ZmVsbGF0aW98ZmluZ2VyZnVja3xmaW5nZXJmdWNrZWR8ZmluZ2VyZnVja2VyfGZpbmdlcmZ1Y2tlcnN8ZmluZ2VyZnVja2luZ3xmaW5nZXJmdWNrc3xmaXN0ZnVja3xmaXN0ZnVja2VkfGZpc3RmdWNrZXJ8ZmlzdGZ1Y2tlcnN8ZmlzdGZ1Y2tpbmd8ZmlzdGZ1Y2tpbmdzfGZpc3RmdWNrc3xmbGFuZ2V8Zm9va3xmb29rZXJ8ZnVja3xmdWNrYXxmdWNrZWR8ZnVja2VyfGZ1Y2tlcnN8ZnVja2hlYWR8ZnVja2hlYWRzfGZ1Y2tpbnxmdWNraW5nfGZ1Y2tpbmdzfGZ1Y2tpbmdzaGl0bW90aGVyZnVja2VyfGZ1Y2ttZXxmdWNrc3xmdWNrd2hpdHxmdWNrd2l0fGZ1ZGdlIHBhY2tlcnxmdWRnZXBhY2tlcnxmdWt8ZnVrZXJ8ZnVra2VyfGZ1a2tpbnxmdWtzfGZ1a3doaXR8ZnVrd2l0fGZ1eHxmdXgwcnxmX3VfY19rfGdhbmdiYW5nfGdhbmdiYW5nZWR8Z2FuZ2JhbmdzfGdheWxvcmR8Z2F5c2V4fGdvYXRzZXxHb2R8Z29kLWRhbXxnb2QtZGFtbmVkfGdvZGRhbW58Z29kZGFtbmVkfGhhcmRjb3Jlc2V4fGhlbGx8aGVzaGV8aG9hcnxob2FyZXxob2VyfGhvbW98aG9yZXxob3JuaWVzdHxob3JueXxob3RzZXh8amFjay1vZmZ8amFja29mZnxqYXB8amVyay1vZmZ8amlzbXxqaXp8aml6bXxqaXp6fGthd2t8a25vYnxrbm9iZWFkfGtub2JlZHxrbm9iZW5kfGtub2JoZWFkfGtub2Jqb2NreXxrbm9iam9rZXl8a29ja3xrb25kdW18a29uZHVtc3xrdW18a3VtbWVyfGt1bW1pbmd8a3Vtc3xrdW5pbGluZ3VzfGwzaVxcK2NofGwzaXRjaHxsYWJpYXxsdXN0fGx1c3Rpbmd8bTBmMHxtMGZvfG00NXRlcmJhdGV8bWE1dGVyYjh8bWE1dGVyYmF0ZXxtYXNvY2hpc3R8bWFzdGVyLWJhdGV8bWFzdGVyYjh8bWFzdGVyYmF0KnxtYXN0ZXJiYXQzfG1hc3RlcmJhdGV8bWFzdGVyYmF0aW9ufG1hc3RlcmJhdGlvbnN8bWFzdHVyYmF0ZXxtby1mb3xtb2YwfG1vZm98bW90aGFmdWNrfG1vdGhhZnVja2F8bW90aGFmdWNrYXN8bW90aGFmdWNrYXp8bW90aGFmdWNrZWR8bW90aGFmdWNrZXJ8bW90aGFmdWNrZXJzfG1vdGhhZnVja2lufG1vdGhhZnVja2luZ3xtb3RoYWZ1Y2tpbmdzfG1vdGhhZnVja3N8bW90aGVyIGZ1Y2tlcnxtb3RoZXJmdWNrfG1vdGhlcmZ1Y2tlZHxtb3RoZXJmdWNrZXJ8bW90aGVyZnVja2Vyc3xtb3RoZXJmdWNraW58bW90aGVyZnVja2luZ3xtb3RoZXJmdWNraW5nc3xtb3RoZXJmdWNra2F8bW90aGVyZnVja3N8bXVmZnxtdXRoYXxtdXRoYWZlY2tlcnxtdXRoYWZ1Y2trZXJ8bXV0aGVyfG11dGhlcmZ1Y2tlcnxuMWdnYXxuMWdnZXJ8bmF6aXxuaWdnM3J8bmlnZzRofG5pZ2dhfG5pZ2dhaHxuaWdnYXN8bmlnZ2F6fG5pZ2dlcnxuaWdnZXJzfG5vYnxub2Igam9rZXl8bm9iaGVhZHxub2Jqb2NreXxub2Jqb2tleXxudW1ibnV0c3xudXRzYWNrfG9yZ2FzaW18b3JnYXNpbXN8b3JnYXNtfG9yZ2FzbXN8cDBybnxwYXdufHBlY2tlcnxwZW5pc3xwZW5pc2Z1Y2tlcnxwaG9uZXNleHxwaHVja3xwaHVrfHBodWtlZHxwaHVraW5nfHBodWtrZWR8cGh1a2tpbmd8cGh1a3N8cGh1cXxwaWdmdWNrZXJ8cGltcGlzfHBpc3N8cGlzc2VkfHBpc3NlcnxwaXNzZXJzfHBpc3Nlc3xwaXNzZmxhcHN8cGlzc2lufHBpc3Npbmd8cGlzc29mZnxwb29wfHBvcm58cG9ybm98cG9ybm9ncmFwaHl8cG9ybm9zfHByaWNrfHByaWNrc3xwcm9ufHB1YmV8cHVzc2V8cHVzc2l8cHVzc2llc3xwdXNzeXxwdXNzeXN8cmVjdHVtfHJldGFyZHxyaW1qYXd8cmltbWluZ3xzIGhpdHxzLm8uYi58c2FkaXN0fHNjaGxvbmd8c2NyZXdpbmd8c2Nyb2F0fHNjcm90ZXxzY3JvdHVtfHNlbWVufHNleHxzaCFcXCt8c2ghdHxzaDF0fHNoYWd8c2hhZ2dlcnxzaGFnZ2lufHNoYWdnaW5nfHNoZW1hbGV8c2hpXFwrfHNoaXR8c2hpdGRpY2t8c2hpdGV8c2hpdGVkfHNoaXRleXxzaGl0ZnVja3xzaGl0ZnVsbHxzaGl0aGVhZHxzaGl0aW5nfHNoaXRpbmdzfHNoaXRzfHNoaXR0ZWR8c2hpdHRlcnxzaGl0dGVyc3xzaGl0dGluZ3xzaGl0dGluZ3N8c2hpdHR5fHNrYW5rfHNsdXR8c2x1dHN8c21lZ21hfHNtdXR8c25hdGNofHNvbi1vZi1hLWJpdGNofHNwYWN8c3B1bmt8c19oX2lfdHx0MXR0MWU1fHQxdHRpZXN8dGVldHN8dGVlenx0ZXN0aWNhbHx0ZXN0aWNsZXx0aXR8dGl0ZnVja3x0aXRzfHRpdHR8dGl0dGllNXx0aXR0aWVmdWNrZXJ8dGl0dGllc3x0aXR0eWZ1Y2t8dGl0dHl3YW5rfHRpdHdhbmt8dG9zc2VyfHR1cmR8dHc0dHx0d2F0fHR3YXRoZWFkfHR3YXR0eXx0d3VudHx0d3VudGVyfHYxNGdyYXx2MWdyYXx2YWdpbmF8dmlhZ3JhfHZ1bHZhfHcwMHNlfHdhbmd8d2Fua3x3YW5rZXJ8d2Fua3l8d2hvYXJ8d2hvcmV8d2lsbGllc3x3aWxseXx4cmF0ZWR8eHh4KVxcYi9naTsiXX0=
