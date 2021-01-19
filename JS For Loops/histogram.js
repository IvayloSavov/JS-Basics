function solve(input){
    let numbers = (input.slice(1, )).map(Number);
    let countNumbers = Number(input[0]);
    let below200 = 0;
    let between200and399 = 0;
    let between400and599 = 0;
    let between600and799 = 0;
    let ove800 = 0;
    
    for (let i = 0; i < countNumbers; i++){
        let num = numbers[i];
        if (num < 200){
            below200 ++;
        } else if (num <= 399){
            between200and399 ++;
        } else if (num <= 599){
            between400and599 ++;
        } else if (num <= 799){
            between600and799 ++;
        } else {
            ove800 ++;
        }
    }
    console.log(`${(below200 / countNumbers * 100).toFixed(2)}%`);
    console.log(`${(between200and399 / countNumbers * 100).toFixed(2)}%`);
    console.log(`${(between400and599 / countNumbers * 100).toFixed(2)}%`);
    console.log(`${(between600and799 / countNumbers * 100).toFixed(2)}%`);
    console.log(`${(ove800 / countNumbers * 100).toFixed(2)}%`);
}

solve(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"]
)