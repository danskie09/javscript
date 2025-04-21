



function calculate() {

    let cel = parseFloat(document.getElementById("cel").value)
    
    if (isNaN(cel)) {

        let result = document.getElementById("result").innerHTML = "Not a valid number"
    
    
    }
    else {
        let far = (cel * 9 / 5) + 32
    let result = document.getElementById("result").innerHTML = far + " degrees farenheit"
    }
    
    


}
