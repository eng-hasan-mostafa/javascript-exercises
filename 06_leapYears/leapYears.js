const leapYears = function(year) {
    if(!Number.isInteger(year) || year < 0) return 'ERROR' ;
    if(year % 4 === 0) {
        if(year % 100 === 0 && year % 400 ) return false;
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
