// const palindrome = (str)=>{
//     //Approach -> To check a string is palindrome or not, first we have to remove all spaces and non alphaNumeric character.
//     //After the successful removal we'll get a clean string.
//     // Then we will reverse this clean string using  split('') "It convert the string into array" then use reverse() "It will reverse the array" then use join('') to convert it into the array again.
//     //Remove all the spaces and non alphaNumeric chars
//     let cleanStr = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase();

//     let reversedString = cleanStr.split('').reverse().join('');

//     if(cleanStr == reversedString){
//         return console.log("It is a palindrome String");
//     } else{
//         return console.log("It is not a palindrome");
//     }

// }

// console.log(palindrome("A man, a plan, a canal, Panama")); // true
// console.log(palindrome("hello")); // false
// console.log(palindrome("racecar")); // true

//Rivision


function PalindromeString (str) {

    let cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let reversedStr = cleanStr.split('').reverse().join('');

    if(cleanStr===reversedStr){
        console.log("String is Palindrome");
    }else{
        console.log("String is not a palindrome");
    }
}

PalindromeString("A man, a plan, a canal, Panama");
PalindromeString("hello");
PalindromeString("racecar");