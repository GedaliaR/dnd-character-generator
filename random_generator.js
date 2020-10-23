$(document).ready(function () {

    function pickRandomRace() {
        const select  = $('#race');
        const options = select.children;
        const random  = Math.floor(Math.random() * options.length);
        select.value = options[random].value;
    }

    function pickRandomClass() {
        const select  = $('#class');
        const options = select.children;
        const random  = Math.floor(Math.random() * options.length);
        select.value = options[random].value;
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

        for (let i = 0; i < 4; i++) {
            if (dice[i] < lowestRoll) {
                lowestRoll = dice[i];
                lowestRollIndex = i;
            }
        }

        dice.remove(lowestRollIndex);

        return dice;
    }

    function totalDiceScores(dice) {

        let total = 0;

        for (let i = 0; i < 3; i++) {
            total += dice[i];
        }

        return total;
    }
});