function solve (input){
    let i = 0;
    let command = input[i];
    let numbers = []
    while (command !== "Stop"){
        numbers.push(Number(command));
        i ++;
        command = input[i];
    }
    console.log(Math.max(...numbers))
}
solve(["-10",
"20",
"-30",
"Stop"])
