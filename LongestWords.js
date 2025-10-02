// const longestWord = (str) => {

//     let longestWord = '';

//     let words = str.split(' ');

//     for(let word of words){

//         if(word.length > longestWord.length){

//             longestWord = word;
//         }
//     }
//     return longestWord;

// }

const longestWord = (str) => {
    let longest = '';
    let words = str.split(' ');
    for (let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

let str = "myNamee is Piyushh Mishra and i am in vindhya";
console.log(`Longest word in this sentence is : ${longestWord(str)}`);