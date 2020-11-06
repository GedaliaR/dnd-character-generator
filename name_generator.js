const generateName = function (sex, race) {
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

    if (isBadWord(name))
        generateDragonbornName(sex);

    return name;
};

const generateDwarfName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (isBadWord(name))
        generateDwarfName(sex);

    return name;
};

const generateElfName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (isBadWord(name))
        generateElfName(sex);

    return name;
};

const generateGnomeName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (isBadWord(name))
        generateGnomeName(sex);

    return name;
};

const generateHalfElfName = function (sex) {
    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (isBadWord(name))
        generateHalfElfName(sex);

    return name;
};

const generateHalflingName = function (sex) {
    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (isBadWord(name))
        generateHalflingName(sex);

    return name;
};

const generateHalfOrcName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (isBadWord(name))
        generateHalfOrcName(sex);

    return name;
};

const generateHumanName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (isBadWord(name))
        generateHumanName(sex);

    return name;
};

const generateTieflingName = function (sex) {

    let name = '';

    if (sex === 'male'){

    }
    else if (sex === 'female'){

    }

    if (isBadWord(name))
        generateTieflingName(sex);

    return name;
};

const isBadWord = function (s) {

    

};