//Factorial of a number
//Problem: Given an integer "n", find the factorial of that integer
//In mathematics , the factorial of a non-negative integer 'n' denoted by
// n!, in the product of all positive integers less than or equal to 'n'.

function factorial(n) {
    result = 1
    for(let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(1))

//Big O = O(n)