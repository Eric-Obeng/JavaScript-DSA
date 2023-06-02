//Problem: Given a sorted array of 'n' elements and a target element 't',
//find the index of 't' in the array. Return -1 if the target element is not found.
//Binary search only works for sorted array

function recursiveBinarySearch(arr, target) {
    return search(arr, target, leftIndex = 0, rightIndex = arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]) {
        return middleIndex
    }

    if(target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex -1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)

    }
}

