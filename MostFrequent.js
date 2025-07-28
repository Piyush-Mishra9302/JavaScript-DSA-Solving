//Write a javaScript programe to find the most occurance of an element and 
//also track the occurance of each element and print them inside an object
// function mostRepeated(arr){
//     let frequency = {}; //to store the frequency of eact element
//     let maxCount = 0; // track the occurance the each element
//     let mostFrequent = null; //for the most frequent element

//     //count occurance of the each element
//     for(let element of arr){
//         if(frequency[element]){
//             frequency[element]++
//         }else{
//             frequency[element] = 1; 
//         }
//         //Check if the current elements frequency is highest of not
//         if(frequency[element] > maxCount){
//             maxCount = frequency[element];
//             mostFrequent = element;
//         }
//     }
//     console.log("occurance of each and every element : ", frequency);
//     return mostFrequent
// }

// const arr = [2,3,4,5,6,7,8,2,4,5,6,7,8,6,4,3,4,6,7,89,76,54,33,5,6,8,6,5,4,32,5,8,7,5,3,4,76,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];
// console.log("Most occured element in this array is : ", mostRepeated(arr));

const mostRepeated = (arr) =>{
    let frequency = {};
    let maxCount = 0;
    let mostFrequent = null;

    for(let element of arr){
        if(frequency[element]){
            frequency[element]++;
        }else{
            frequency[element] = 1;
        }

        if(frequency[element] > maxCount){
            maxCount = frequency[element];
            mostFrequent = element;
        }
    }
    console.log("Occurance of each and every element : ", frequency);
    return mostFrequent;
}

const arr = [2,3,4,5,6,7,8,2,4,5,6,7,8,6,4,3,4,6,7,89,76,54,33,5,6,8,6,5,4,32,5,8,7,5,3,4,76,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];
console.log("Most occured element in this array is : ", mostRepeated(arr));