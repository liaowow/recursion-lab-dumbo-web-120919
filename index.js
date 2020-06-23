// Code your solution here!

/* Write out a recursive function that prints out all of the characters in a passed-in string */
function printString(str) {
    console.log(str[0])

    if (str.length > 1) {
        let subStr = str.substring(1)
        printString(subStr)
    } else {
        return;
    }    
}

/* Write out a recursive function to reverse a string */
function reverseString(str) {
    // base case: empty string
    if (str === '') {
        return ''
    } else {
        return str[str.length - 1] + reverseString(str.substring(0, str.length - 1))
    }
}

// reference:
// https://learnersbucket.com/examples/algorithms/reverse-a-string-using-recursion/

/* Write out a recursive function to see if a word is a palindrome */
function isPalindrome(str) {
    // base case: reaching midpoint, or empty str
    if (str.length <= 1) {
        return true
    } 
        
    if (str[0] !== str[str.length - 1]) {
        return false
    } else {
        return isPalindrome(str.substring(1, str.length - 1))
    }

}

/* Given an array and an index, write a recursive function to add up the elements of an array. */
function addUpTo(arr, idx) {
    // initiate sum at arr[idx] and add backwards
    let sum = arr[idx]
    // base case: idx === 0
    if (idx === 0) {
        return sum
    }
    return sum + addUpTo(arr, idx - 1)
}

/* Write a recursive function to find the largest integer in an array. */
function maxOf(arr) {
    // base case: only one element left in arr
    if (arr.length === 1) {
        return arr[0]
    }
    // compare first two elements and remove smaller one
    if (arr[1] > arr[0]) {
        arr.splice(0, 1) // remove arr[0]
    } else {
        arr.splice(1, 1) // remove arr[1]
    }

    return maxOf(arr)

}

/* Write out a function to see if an array includes a given element. */
function includesNumber(arr, num) {
    // base case: no element is left to compare
    if (arr.length === 0) {
        return false
    }

    if (arr[0] === num) {
        return true
    } else {
        let newArr = arr.slice(1)
        return includesNumber(newArr, num)
    }

}


