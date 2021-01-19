function solve (input){
    let i = 0;
    let numbers = [];
    while (input[i] !== "Stop"){
        numbers.push(Number(input[i]));
        i++;
    }
    console.log(Math.min(...numbers));
}
solve(["100",
"99",
"80",
"70",
"Stop"])
