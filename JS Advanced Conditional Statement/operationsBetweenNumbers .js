function operations(input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    if (n2 === 0){
        console.log(`Cannot divide ${n1} by zero`)
        return
    }
    if (operator === "+"){
        let res = n1 + n2
        let evenOrOdd = ""
        if (res % 2 == 0){
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${res} - ${evenOrOdd}`)
    } else if (operator === "-"){
        let res = n1 - n2
        let evenOrOdd = ""
        if (res % 2 == 0){
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${res} - ${evenOrOdd}`)
    } else if (operator === "*"){
        let res = n1 * n2
        let evenOrOdd = ""
        if (res % 2 == 0){
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${n1} ${operator} ${n2} = ${res} - ${evenOrOdd}`)
    } else if (operator === "/"){
        let res = n1 / n2
        console.log(`${n1} ${operator} ${n2} = ${res.toFixed(2)}`)
    } else if (operator === "%"){
        let res = n1 % n2
        console.log(`${n1} ${operator} ${n2} = ${res}`)
    }
}
operations(["123",
"12",
"/"]
)