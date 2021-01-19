function solve (input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let output = "";
    for (let i = n1; i <= n2; i++){
        let number = String(i);
        let sumEven = 0;
        let sumOdd = 0;
        for (let j = 0; j <= 5; j++){
            let currentNum = Number(number[j]);
            if (j % 2 == 0){
                sumEven += currentNum;
            } else {
                sumOdd += currentNum;
            }
        }
        if (sumEven === sumOdd) {
            output += number + " ";
        }
    }
    console.log(output);
}
solve(["100000",
"100050"])
