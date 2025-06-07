


function fizzbuzz(input){
    for(let i = 0; i <= input; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('Fizz buzz')

        }
        else if(i % 3 === 0 ){
            console.log('Fizz ')

        }

        else if(i % 5 === 0){
            console.log('Buzz')

        }

        else{
            console.log(i)
        }

   
        

    }
}


fizzbuzz(10)