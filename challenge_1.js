//1. Create a function that takes any non-negative integer as an argument and return it with its 
//digits in descending order.
function decending_num(num){
    let digits = (num + "").split("");
    let newDigits = digits.sort(function (a, b) { return b - a });
    return newDigits.join("");
}

//test cases:
console.log(decending_num(21445)) //Output: 54421
console.log(decending_num(145263)) //Output: 654321
console.log(decending_num(123456789)) //Output: 98765432