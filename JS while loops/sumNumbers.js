function solve(input){
    let goalNumber = Number(input[0]);
    let sum = 0;
    let index = 1;
    while (sum < goalNumber){
        currentNum = Number(input[index]);
        sum += currentNum;
        index ++;
    }
    console.log(sum);

}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
