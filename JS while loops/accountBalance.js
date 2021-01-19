function solve (input){
    let balance = 0;
    let index = 0;

    while(true){
        let command = input[index];
        if (command === "NoMoreMoney"){
            break;
        }
        if (Number(command) < 0){
            console.log("Invalid operation!");
            break;
        } 
        balance += Number(command);
        console.log(`Increase: ${Number(command).toFixed(2)}`);
        index ++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}
solve((["5.51", 
"69.42",
"100",
"NoMoreMoney"])
)