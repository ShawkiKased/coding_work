//3. Given a number return the sum of all the multiples of 3 or 5 below the given number.

function multiple_sum(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    return sum;
}

//test cases:
console.log(multiple_sum(10)) // Output: 23
console.log(multiple_sum(20)) // Output: 78