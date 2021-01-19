function calculator(sumInput, termInput, percentInput) {
    let sum = Number(sumInput);
    let term = Number(termInput);
    let percent = Number(percentInput);
    let futureAmount = sum + term * ((sum * percent / 100) / 12);
    console.log(futureAmount);
}
calculator("200", "3", "5.7");


