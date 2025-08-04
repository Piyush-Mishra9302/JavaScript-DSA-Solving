
let check = (str) =>{
    
    while(true){
        if(str.includes('()')){
           str = str.replace('()', "");
        }
         else if(str.includes('{}')){
            str = str.replace('{}', "" )
        }
         else if(str.includes('[]')){
            str = str.replace('[]', "" )
        } else {
            break;
        }
    }
    return str.length === 0;
}

console.log(check("()"));           // true
console.log(check("()[]{}"));       // true
console.log(check("(]"));           // false
console.log(check("([{}])"));       // true
console.log(check("({[})]"));       // false