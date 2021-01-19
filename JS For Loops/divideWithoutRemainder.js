function solve (input){
    let numbers = (input.slice(1, )).map(Number);
    let countNumbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    
    for (let i = 0; i < countNumbers; i++){
        let num = numbers[i];
        if (num % 2 === 0){
            p1 ++;
        }
        if (num % 3 === 0){
            p2 ++;
        }
        if (num % 4 === 0){
            p3 ++;
        }
    }
    console.log(`${(p1 / countNumbers * 100).toFixed(2)}%`);
    console.log(`${(p2 / countNumbers * 100).toFixed(2)}%`);
    console.log(`${(p3 / countNumbers * 100).toFixed(2)}%`);
}
solve(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"]
)