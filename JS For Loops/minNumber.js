// function solve(input){
//     let countNumbers = Number(input[0]);
//     let numbers = input.slice(1, ).map(Number);
//     console.log(Math.min(...numbers));

// }
// solve(["2",
// "100",
// "99"]
// )

function solve(input){
    let countNumbers = Number(String(input).charAt(0));
    let numbers = input.slice(1, ).map(Number);
    let minNumber = null;
    for (let i = 0; i <= countNumbers; i++){
        let currentNum = numbers[i];
        if (minNumber === null || currentNum < minNumber){
            minNumber = currentNum;
        }
    }
    console.log(minNumber);
}
solve(["2",
"100",
"99"]
)