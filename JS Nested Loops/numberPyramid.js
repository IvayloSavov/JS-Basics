function pyramid (input){
    let n = Number(input[0]);
    let row = 0;
    let printedNumber = 0;
    while (true){
        row ++;
        let res = "";
        let printedNumbersOnRow = 0;
        while (printedNumber < n){
            printedNumber ++;
            printedNumbersOnRow ++;
            res += `${printedNumber} `;
            if (printedNumbersOnRow === row){ 
                break
            }
        }
        console.log(res.trim());
        if (printedNumber === n){
            break;
        }
    }
}
pyramid(["12"]);