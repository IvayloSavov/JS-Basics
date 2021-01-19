function solve (input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let res = [];
    let sum = 0;

    for (let i = n1; i <= n2; i++){
        if (i % 9 == 0){
            res.push(i);
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(res.join("\n"));
}
solve(["100", "200"]);