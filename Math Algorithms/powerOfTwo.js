//Problem: Given a positive integer 'n', determine if the number is a power of 2 or not
//An integer is a power of two if there exist an integer 'x' such that 'n' === 2

function isPowerOfTwo(n) {
    if(n < 1) {
        return false
    }

    while(n > 1) {
        if(n % 2 !== 0) {
            return false
        }

        n = n/2
    }

    return true
}

console.log(isPowerOfTwo(2))

//Big O = O(logn)


//Using BitWise operator
function isPowerOfTwoBitwise(n) {
    if(n < 1) {
        return false
    }

    return (n & (n -1)) === 0
}

console.log(isPowerOfTwoBitwise(3))

//Big O = O(1)
