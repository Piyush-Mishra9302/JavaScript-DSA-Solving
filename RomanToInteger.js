
var romanToInt = function(s) {
    let symbols = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let res = 0;

    for(let i = 0; i< s.length; i++){
        let currNum = symbols[s[i]];
        let nextNum = symbols[s[i + 1]];
        if(currNum < nextNum){
            res += (nextNum - currNum);
            i++;
        }else {
            res += currNum;
        }
    }
    return res;
};

 
 console.log(romanToInt("MCMXCIV"));