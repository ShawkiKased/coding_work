//1. Create a function that takes any non-negative integer as an argument and return it with its 
//digits in descending order.


function descending_num(num){
    //We want to first turn the number into an array of seperate digits, we add "" to the num to be able to split.
    let digits = (num + "").split("");
    //We then want to use the sort function, by using funcion (a, b) {return b - a} it will use the compare function
    //And return the numbers in descending order.
    let newDigits = digits.sort(function (a, b) { return b - a });
    //Finally, we return the numbers back into number form by joining.
    return newDigits.join("");
}

//test cases:
console.log(decending_num(21445)) //Output: 54421
console.log(decending_num(145263)) //Output: 654321
console.log(decending_num(123456789)) //Output: 98765432