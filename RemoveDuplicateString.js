
let removeDuplicates = (str) =>  {

    let result = '';

    for(char of str){
        if(result.includes(char) == false){
            result += char;
        }
    }
    return result;

}

let str = 'aassdlalsdldkskdfjdjsjs';
console.log(removeDuplicates(str));