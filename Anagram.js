
let isAnagram = (str1, str2) => {
    //First we have to remove the whilte space and convert into 
    let newStr1 = str1.replace(/\s/g, "").toLowerCase();
    let newStr2 = str2.replace(/\s/g, "").toLowerCase();

    if(newStr1.length !== newStr2.length){
        return false;
    }else{
        return newStr1.split('').sort().join('') === newStr2.split('').sort().join('');
    }
}

console.log(isAnagram('Hello', 'World'));
console.log(isAnagram('Listen', 'silent'));