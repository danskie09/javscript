let counter = document.getElementById("counter")
let btn = document.getElementById("button")

let count = 0;
btn.addEventListener("click", () => {
    let add = count ++;
    counter.innerText = add;
})