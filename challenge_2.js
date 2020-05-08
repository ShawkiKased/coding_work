// // 2.Given a string of words, return the length of the shortest word(s).The given data will 
// // always be a string and will never be empty.

// function short_count(str) {
//     //first we need to take care of things that aren't letters like comma's and apostrophe's.
//     //We'll set a variable to include both lowercase and uppercase letters.
//     let az = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     //We want to find the minimum value a word can be so we will set min to be Infinity since any number can replace it.
//     let min = Infinity;
//     //We then split the sentence into an array of words
//     let words = str.split(" ");
//     //We want to now look at each individual word, we will do this with a forEach loop
//     words.forEach( el => {
//         //Now inside of each word, we want to count how many letters there that but also be concious of things
//         //that aren't letters, we will use the includes method to check every element and only add to the count
//         //if they are included in our alphabet.
//         //To make things faster, we decided to add a break if the count becomes bigger or equals to the min.
//         let count = 0;
//         for (i = 0; i < el.length; i++) {
//             if (az.includes(el[i])) {
//                 count++;
//                 if (count >= min) break;
//             }
//         }
//         //After the count is done, we will compare it with the minimum value, and if the count is smaller,
//         //it will replace it as the new Minimum value for a word in the sentence.
//         //We will also add a check for min becoming 1 to end the question there and now, since it can't get lower.
//         if (min > count) min = count;
//         if (min === 1) return 1;
//     })
//     //Finally, we will return the final definitive length of the smallest word in the sentence.
//     return min;
// }

// //test cases:
// console.log(short_count('Test, this is a test')) // Output: 1
// console.log(short_count('The dog’s mother was happy')) // Output: 3
// console.log(short_count('Extraordinarily appetizing pineapple!')) // Output: 9

