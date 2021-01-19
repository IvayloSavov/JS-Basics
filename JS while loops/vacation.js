function vacation (input){
    let neededMoney = Number(input[0]);
    let initialAmount = Number(input[1]);
    let operations = input.slice(2, );
    let i = 0;
    let days = 0;
    let countSpendDays = 0;

    while (initialAmount < neededMoney) {
        days++;
        let typeOperation = operations[i];
        let amount = Number(operations[++i]);
        if (typeOperation === "save"){
            countSpendDays = 0;
            initialAmount += amount;
        } else {
            countSpendDays ++;
            if (countSpendDays === 5){ 
                break;
            }
            if (amount > initialAmount){ 
                amount = initialAmount;
            }
            initialAmount -= amount;
        }
        i ++;
    }

    if (initialAmount >= neededMoney){
        console.log(`You saved the money for ${days} days.`);
    } else {
        console.log(`You can't save the money.`);
        console.log(days);
    }
}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])
