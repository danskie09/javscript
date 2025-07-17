



function isPalindrome(word){
    word = word.toLowerCase()

    let w1 = word
    let w2 = word.split("").reverse().join("")

    console.log(w1)
    console.log(w2)

    return w1 === w2 ? "Its a Pal" : "Its not";

   


}

console.log("Palindrome Check")
console.log(isPalindrome("racecar"))