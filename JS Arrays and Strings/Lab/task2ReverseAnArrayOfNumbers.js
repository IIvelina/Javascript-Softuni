function solve (n, array){
let nums = array;
let deleteNums = nums.splice(n, nums[nums.length - 1]);
//console.log(deleteNums);
let reverseNumsArray = array.reverse();
console.log(reverseNumsArray.join(" "));
}

solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);