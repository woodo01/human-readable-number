module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) return ones[number];
    if (number < 20 && number !== 10) return teens[number - 11];
    if (number >= 10 && number < 100) {
        if (number % 10 === 0) return tens[(number / 10) - 1];
        return tens[Math.floor(number / 10) - 1] + ' ' + ones[number % 10];
    }
    if (number >= 100 && number < 1000) {
        const hundredPart = ones[Math.floor(number / 100)] + ' hundred';
        const remainder = number % 100;
        if (remainder === 0) return hundredPart;
        return hundredPart + ' ' + toReadable(remainder);
    }
    return '';
}
