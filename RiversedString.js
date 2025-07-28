
//reverse a string using methods

// const riverse = (str)=>{
//     let words = str.split(' ').reverse().join();
//     console.log(words);
// }

// let str = "Vashu is a Satudent";
// console.log(riverse(str));

//Reverse a string using fundamental programming

const reverse = (str) =>{
    let reversed = '';
   
    for(let i = str.length - 1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}
let str = "Vashu is a student";
console.log(reverse(str));