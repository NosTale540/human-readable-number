function getUnit (unit) {
    const units = new Map ( [
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine']
    ]);

    return units.get(unit);
}

function getTens (ten) {
    const tens = new Map ([
        [2, 'twenty'],
        [3, 'thirty'],
        [4, 'forty'],
        [5, 'fifty'],
        [6, 'sixty'],
        [7, 'seventy'],
        [8, 'eighty'],
        [9, 'ninety']
    ]);

    const twoDigitNumbers = new Map ( [
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [15, 'fifteen'],
        [18, 'eighteen']
    ]);
    
    if (ten < 10) {
        return getUnit(ten);
    }

    if (ten < 20) {
        if (twoDigitNumbers.get(ten) != undefined) {
            return twoDigitNumbers.get(ten)
        } else {
            return getUnit(ten - Math.floor(ten / 10) * 10) + 'teen';
        }
    }

    let numberUnit = ten - Math.floor(ten / 10) * 10;
    let numberTens = Math.floor(ten / 10);
    let result = tens.get(numberTens);
    if (numberUnit != 0) {
        result += ' ' + getUnit(numberUnit);
    }
    return result;
}

function getHundred (hundred) {
    let numberTens = hundred - Math.floor(hundred / 100) * 100
    let numberHundred = Math.floor(hundred / 100);
    let result = getUnit(numberHundred) + ' hundred';
    if (numberTens != 0) {
        result += ' ' + getTens(numberTens);
    }
    return result;
}

module.exports = function toReadable (number) {
    if (number === 0) {
        return('zero')
    }

    if (number < 10) {
        return getUnit(number);
    }

    if (number < 100) {
        return getTens(number);
    }

    if (number < 1000) {
        return getHundred(number);
    }
}
