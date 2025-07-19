let word = "Daniel"
let arr = word.split("");
console.log(arr)


let result = ''



for(let i = 0; i < word.length; i++){
    console.log(word[i])
    if(i % 2 == 0){
        result += word[i].toUpperCase()

    }else{
        result += word[i].toLowerCase()
    }

    
    
    
    



}

console.log(result)