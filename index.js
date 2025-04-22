function calculate() {
    let length = parseFloat(document.getElementById("length").value)

    let width = parseFloat(document.getElementById("width").value)


    if (isNaN(length && width)) {
        alert("Please enter valid numbers " + length + " "+ width + "are not valid numbers")
    }

    else {
        let area = length * width


        alert("The area of a rectangle is " + area)
    }
}






