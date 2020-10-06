module.exports = function toReadable (number) {
    
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

    const twoDigitNumbers = new Map ( [
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [15, 'fifteen'],
        [18, 'eighteen']
    ]);

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


    if (number === 0) {
        return('zero')
    }

    if (number < 10) {
        return units.get(number);
    }

    if (number > 9 & number < 20) {
        if (twoDigitNumbers.get(number) != undefined) {
            return twoDigitNumbers.get(number)

        } else {
            return units.get(number - (Math.floor(number / 10)) * 10) + 'teen';
        }
    }
    if (number < 100 & number > 19) {
        // return tens.get(Math.floor(number / 10)) + ' ' + units.get(number - (Math.floor(number / 10)) * 10);
        let result = tens.get(Math.floor(number / 10));
        if ((units.get(number - (Math.floor(number / 10)) * 10)) != undefined) {
            result += ' ' + units.get(number - (Math.floor(number / 10)) * 10);
        }
        return result;
    }

    if (number < 1000 & number > 99) {
        let resultHundred = units.get(Math.floor(number / 100)) + ' hundred';
        if ((number - Math.floor(number / 100) * 100) != 0) {
            resultHundred += ' ' + toReadable(number - Math.floor(number / 100) * 100);
        }
        return resultHundred;
    }
}
