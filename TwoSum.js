
 function twoSum(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let compliment = target - nums[i];
        
        if(map.has(compliment)){
            return [map.get(compliment), i];
        }
        map.set(nums[i], i);
    }
}

const nums = [2,7,11,14,15];
const target = 9;
console.log(twoSum(nums, target));