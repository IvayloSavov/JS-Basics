function christmas (input) {
    let countDays = Number(input[0]);
    let i = 1;
    let pastDays = 0;
    let totalMoney = 0;
    let totalCountWinGames = 0;
    let totalCountLoseGames = 0;
    while (pastDays < countDays) {
        pastDays ++;
        let daysMoney = 0;
        let countWinGames = 0;
        let countLoseGames = 0;
        while (true){
            let command = input[i];
            if (command === "Finish"){
                i++;
                break
            }
            let winOrLose = input[++i];
            if (winOrLose === "win"){
                countWinGames ++;
                daysMoney += 20;
            } else {
                countLoseGames ++;
            }
            i ++;
        }
        if (countWinGames > countLoseGames){
            daysMoney *= 110/100;
        }
        totalCountWinGames += countWinGames;
        totalCountLoseGames += countLoseGames;
        totalMoney += daysMoney;
    }
    if (totalCountWinGames > totalCountLoseGames){
        totalMoney *= 120/100;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
christmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])
