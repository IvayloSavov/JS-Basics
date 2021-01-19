function sumOfNumbers (input){
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let countCombinations = 0;
    let foundMagicNumber = false;

    for (let i = n1; i <= n2; i++){
        for (let j = n1; j <= n2; j++){
            countCombinations ++;
            if (i + j === magicNumber){
                n1 = i;
                n2 = j;
                foundMagicNumber = true;
                break
            }
        }
        if (foundMagicNumber){
            break
        }
    }
    if (foundMagicNumber){
        console.log(`Combination N:${countCombinations} (${n1} + ${n2} = ${magicNumber})`);
    } else {
        console.log(`${countCombinations} combinations - neither equals ${magicNumber}`);
    }
}
sumOfNumbers(["88", 
"888", 
"2000"])



