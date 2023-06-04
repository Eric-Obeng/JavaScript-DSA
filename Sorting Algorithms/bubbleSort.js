//Problem: Given an array of integers, sort the array
//Example: const arr = [-6, 20, 8, -2, 4]
//bubbleSort(arr) => should return [-6, -2, 4, 8, 20]

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i - 1]) {
            let temp = arr[i]
            arr[i] = arr[i - 1]
            arr[i - 1] = temp
        }
    }
}

const arr = [-6, 20, 8, -2, 4]
bubbleSort(arr)
console.log(arr)