//4. Write a function that takes in an array as an argument.The function moves all 
//of the zeros to the end of the array while ensuring the order of the other elements are unchanged.

function zero_mover(arr) {
    //We first create 2 empty arrays, one to group the zeros, and one to group the non-zero's.
    let zeros = [];
    let others = [];
    //We then create a loop that will go through each element of the array.
    //If they are a zero, they will go in the zero array we created, others will go to the others array.
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i]);
        } else {
            others.push(arr[i]);
        }
    }
    //Finally, we will concat the zeros into the array we created of the other elements and return it.
    return others.concat(zeros);
}

//test cases:

console.log(zero_mover(['Hello', 'World',3,1,0,9,0,1,3,9,true])) //Output: ['Hello','World’, 3, 1, 9, 1, 3, 9, true, 0, 0,]