function solve (input){
    let userName = input[0];
    let password = input[1];
    let index = 2;

    while (input[index] !== password){
        index ++;
    }
    console.log(`Welcome ${userName}!`);

}
solve(["Gosho",
"secret",
"secret"])
