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