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
