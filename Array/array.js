//Problem: Given the array arr, find and return two indices of the array 
//that add up to weight or return -1 if there is no combination that add up to weight

function findSum(arr, n) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i]+arr[j] === n) {
                return [arr[i], arr[j]]
            }
        }
    }

    return -1
}

console.log(findSum([1, 2, 4, 5, 6, 9], 6))
console.log(findSum([1, 2, 4, 5, 6, 9], 9))
console.log(findSum([1, 2, 4, 5, 6, 9], 1))