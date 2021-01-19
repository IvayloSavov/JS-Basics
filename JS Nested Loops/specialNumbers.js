function specialNumbers (input){
    n = Number(input[0]);
    let magicNumbers = [];
    for (let i = 1111; i <= 9999; i++){
        let number = String(i);
        let isMagic = true;
        for (let j = 0; j < 4; j++){
            currentDigit = Number(number[j]);
            if (n % currentDigit == 0){
                continue;
            } else {
                isMagic = false;
                break;
            }
        }
        if (isMagic){
            magicNumbers.push(number);
        }
    }
    console.log(magicNumbers.join(" "));
}
specialNumbers(["3"]);