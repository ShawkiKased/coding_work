//2.Given a string of words, return the length of the shortest word(s).The given data will 
//always be a string and will never be empty.

function short_count(str) {
    let az = "abcdefghijklmnopqrstuvwxyz"
    let words = str.split(" ");
    let min = words[0].length;
    for (i = 0; i < words.length; i++) {
        if (words[i].length < min) min = words[i].length;
    }
    return min;
    
}

//test cases:
console.log(short_count('Test, this is a test')) // Output: 1
console.log(short_count('The dog’s mother was happy')) // Output: 3
console.log(short_count('Extraordinarily appetizing pineapple!')) // Output: 9
