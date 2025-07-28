const longestWord = (str) => {

    let longestWord = '';

    let words = str.split(' ');

    for(let word of words){

        if(word.length > longestWord.length){

            longestWord = word;
        }
    }
    return longestWord;

}

let str = "myName is Piyush Mishra and i am in vindhya";
console.log(`Longest word in this sentence is : ${longestWord(str)}`);