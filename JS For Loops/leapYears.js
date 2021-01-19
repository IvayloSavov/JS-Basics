function solve(input){
    let leapYear = Number(input[0]);
    let finalYear = Number(input[1]);
    for (let i = leapYear; i <= finalYear; i += 4){
        console.log(i)
    }
}
solve(["1908", "1919"]);