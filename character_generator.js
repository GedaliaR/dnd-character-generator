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
        let name = generateName(msex, mrace);

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