function combinations (input) {
    let searchedNumber = Number(input[0]);
    let validCombinations = 0;

    for (let x1 = 0; x1 <= searchedNumber; x1++){
        for (let x2 = 0; x2 <= searchedNumber; x2++){
            for (let x3 = 0; x3 <= searchedNumber; x3++){
                if (x1 + x2 + x3 === searchedNumber){
                    validCombinations ++;
                }
            }
        }
    }
    console.log(validCombinations)
}
combinations(["25"]);