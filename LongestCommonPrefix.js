

let lngCmnPrfx = (strs)=>{
    strs.sort();

    let ans = '';

    if(strs == ''){
        return "";
    }

    let first = strs[0].split('');
    let last = strs[strs.length - 1].split('');

    for(let i = 0; i < first.length; i++){
        if(last[i] == first[i]){
            ans += first[i];
        } else {
            break;
        }
    }
    return ans;
}

console.log(lngCmnPrfx(["flower","flow","flight"]));
console.log(lngCmnPrfx(["dog","racecar","car"]));
console.log(lngCmnPrfx(['']));