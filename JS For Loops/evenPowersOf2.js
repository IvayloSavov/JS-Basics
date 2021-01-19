function solve(input){
    n = Number(input[0]);
    for (i = 0; i <= n; i++){
        if (i % 2 == 0){
            console.log(2 ** i)
        }
    }
}
solve(["4"])