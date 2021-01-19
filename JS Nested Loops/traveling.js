function travel (input){
    let i = 0;
    while (true){ 
        let destination = input[i];
        if (destination === "End"){
            break
        }
        let minBudget = Number(input[++i]);
        let budget = 0;
        while (budget < minBudget){
            budget += Number(input[++i]);
        }
        console.log(`Going to ${destination}!`);
        i++;
    }
}
travel(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
