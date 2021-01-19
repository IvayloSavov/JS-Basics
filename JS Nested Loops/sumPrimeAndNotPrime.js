function solve (input){
    let i = 0;
    let sumPrime = 0;
    let sumOdd = 0;
    while (true){
        let line = input[i];
        if (line === "stop"){
            break
        }
        let number = Number(line);
        if (number < 0){
            console.log("Number is negative.");
            i ++;
            continue;
        }
        let isPrimeNumber = true;
        for (let j = 2; j < number; j ++){
            if (number % j == 0){
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber){
            sumPrime += number;
        } else {
            sumOdd += number;
        }
        i++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOdd}`);
}
solve(["1",
"9",
"0",
"7",
"19",
"4",
"stop"])
