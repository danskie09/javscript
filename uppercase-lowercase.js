let word = "Daniel"



let result = ''



for(let i = 0; i < word.length; i++){
   
    if(i % 2 == 0){
        result += word[i].toUpperCase()
        console.log(result)

    }else{
        result += word[i].toLowerCase()
        console.log(result)
    }

    
    
    
    



}

console.log(result)