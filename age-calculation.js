const calculate = year =>{
    let today = new Date();
    let yearNow = today.getFullYear();

    let yourAge = yearNow - year;

    return yourAge;
}



console.log(calculate(2003))