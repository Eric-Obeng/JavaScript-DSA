//Problem: Given natural number "n", determine if 'n' is even

function isEven(n) {
    if(n < 2) {
        return false
    }

    return (n & 1) === 0
}

console.log(isEven(11))


//Big O = O(1)