const toReadable = (num) => {
    let str = '';
    let singlesArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teensArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let decimalsArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    if (num = 0) {return 'zero'};
    
    if (num/100 > 0) {
        str = singlesArray[num / 100] + ' hundred';
        num = num % 100;
    }

    if (num/10 > 0) {
        if (num/10 === 1) {
            str = str + ' ' + teensArray[num % 10];
            return str;
        }
        
        str = str + ' ' + decimalsArray[num/10];
        num = num % 10;
    }
    
    if (num>0) {
        str = str + ' ' + singlesArray[num];
    }
    
    return str
}