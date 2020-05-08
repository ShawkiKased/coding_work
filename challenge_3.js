// //3. Given a number return the sum of all the multiples of 3 or 5 below the given number.

// function multiple_sum(num) {
//     //First we create a sum variable at 0 that will eventually become our answer.
//     let sum = 0;
//     //We then create a loop starting from 0 to the number given in the argument, each number will be tested.
//     //If the number are multiples of either 3 or 5, we will add them to our sum variable.
//     for (let i = 0; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) sum += i;
//     }
//     //Finally we return our finished sum.
//     return sum;
// }

// //test cases:
// console.log(multiple_sum(10)) // Output: 23
// console.log(multiple_sum(20)) // Output: 78