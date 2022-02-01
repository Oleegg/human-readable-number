module.exports = function toReadable(number) {
    const x = number.toString().split('')
    if (number == 0) return 'zero'
    if (number < 20) return `${numberReadable[number]}`
    if (number < 100) {
        if (x[1] == 0) return numberDozens[x[0]]
        return `${numberDozens[x[0]]} ${numberReadable[x[1]]}`
    }
    if (number > 99) {
        const y = +(`${x[1]}${x[2]}`)
        if (x[1] == 0 && x[2] == 0) return `${numberReadable[x[0]]} ${numberHundred}`
        if (x[1] == '0') return `${numberReadable[x[0]]} ${numberHundred} ${numberReadable[x[2]]}`
        if (x[1] == '1') return `${numberReadable[x[0]]} ${numberHundred} ${numberReadable[y]}`
        if (x[2] == '0') return `${numberReadable[x[0]]} ${numberHundred} ${numberDozens[x[1]]}`
        return `${numberReadable[x[0]]} ${numberHundred} ${numberDozens[x[1]]} ${numberReadable[x[2]]}`
    }
}
const numberReadable = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
    15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'
};
const numberDozens = { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety' };

const numberHundred = 'hundred';
