function solve(input){
    let final = Number(input[0]);
    let factorial = 1;
    for (let i = 1; i <= final; i++){
        factorial = factorial * i;
    }
    console.log(factorial);
}
solve(["8"])