//Problem: Given an integer 'n', find the factorial of the integer
function recursiveFactorial(n) {
    if(n === 0) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))
console.log(recursiveFactorial(10))
console.log(recursiveFactorial(12))


//Big O = O(n)