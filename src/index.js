module.exports = function toReadable (number) {
    let str = '';
    let singlesArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teensArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimalsArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    

    if (number === 0) {return 'zero'};
    
    if ((number/100) >= 1) {
        str = singlesArray[Math.floor(number/100)] + ' hundred';
        number = number % 100;
    }

    if ((number/10) >= 1) {
        if (Math.floor(number/10) === 1) {
            if (str != '') {str = str + ' '};
            str = str + teensArray[number % 10];
            return str;
        }
        
        if (str != '') {str = str + ' '};
        str = str + decimalsArray[Math.floor(number/10)];
        number = number % 10;
    }
    
    if (number>0) {
        if (str != '') {str = str + ' '};
        str = str + singlesArray[number];
    }
    
    return str;
}
