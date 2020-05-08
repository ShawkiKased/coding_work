//4. Write a function that takes in an array as an argument.The function moves all 
//of the zeros to the end of the array while ensuring the order of the other elements are unchanged.

function zero_mover(arr) {
    let zeros = [];
    let others = [];
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            others.push(arr[i]);
        }
    }

    return others.concat(zeros);
}

//test cases:

console.log(zero_mover(['Hello', 'World',3,1,0,9,0,1,3,9,true])) //Output: ['Hello','World’, 3, 1, 9, 1, 3, 9, true, 0, 0,]