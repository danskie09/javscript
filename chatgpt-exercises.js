
// ------------------------
// BASIC EXERCISES IN JS
// ------------------------

//Odd or even
//  function checker(num){
//     return num % 2 == 0 ? "Even" : "Odd";
//  }
//  console.log(checker(13));

 //Reverse a String
//  function reverse(word){
//     word = word.toLowerCase();
//     let = reversedWord = '';

//     for(let i = word.length - 1; i >= 0; i-- ){
//         reversedWord += word[i]

//     }



//     return reversedWord;

//  }

// console.log(reverse("howowowo"))

//FizzBuzz

// for(let i = 0; i <= 30; i++  ){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i + "FizzBuzz")
//     }
//     else if(i % 3 == 0){
//         console.log(i + "Fizz")
//     }
//     else if(i % 5 == 0){

//         console.log(i + "Buzz")
//     }
//     else{
//         console.log(i)
//     }

// }


//Find the largest number
// let numbers = [2,3,4,500,6,7,10,3,100]

// numbers.sort((a,b) => a - b)
// console.log(numbers)
// console.log("Largest number: "+numbers[numbers.length -1])



//Palindrome Checker
// function isPalindrome(word){
//     word = word.toLowerCase();

//     let w1 = word;
//     let w2 = "";

//     for(let i = word.length -1; i >= 0; i--){
//         w2 += word[i]
//     }

//     console.log(w2)

//     return w1 == w2 ? "This is a Palindrome" : "Not a Palindrome"

// }

// console.log(isPalindrome("rac"))


// ------------------------
// INTERMEDIATE EXERCISES IN JS
// ------------------------


// Count Vowels and Occurences

// function vowelCount(word){
//     let chars = word.split("")
//     let vowels = ["a","e","i","o","u"]
//     let count = 0;
//     for(let i = 0; i < chars.length; i++){
//       if(vowels.includes(chars[i])){
//         count++
      
      
//        }

//     }




//     return count;
// }


// console.log(vowelCount("orangee"))



// Removes Duplicates in an array
// function remove(arr){
   
//     const filtered = [... new Set(arr)];
//     return filtered;
// }

// console.log(remove([1,2,2,1,4,5]))



// Capitalize every word
// function capitalized(word){
    

//     let char = word.charAt(0).toUpperCase();
//     let rest = word.slice(1)
    


//     return char + rest;
// }

// console.log(capitalized("hey jude dont let me"))



