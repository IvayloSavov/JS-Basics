function toyShop(pTrip, cPuzzles, cDolls, cBears, cMinions, cLorries){
    let priceTrip = Number(pTrip);
    let pricePuzzle = 2.60;
    let priceDoll = 3;
    let priceBear = 4.10;
    let priceMinion = 8.20;
    let priceLorry = 2;
    let puzzles = Number(cPuzzles);
    let dolls = Number(cDolls);
    let bears = Number(cBears);
    let minions = Number(cMinions);
    let lorries = Number(cLorries);
    let countToys = puzzles + dolls + bears + minions + lorries;
    let totalMoney = (puzzles * pricePuzzle) + (dolls * priceDoll) + (bears * priceBear) 
                    + (minions * priceMinion) + (lorries * priceLorry);
    if (countToys >= 50){
        totalMoney *= 75/100;
    }
    totalMoney *= 90/100
    moneyLeftNeeded = Math.abs(totalMoney - priceTrip)
    if (totalMoney >= priceTrip){
        console.log(`Yes! ${moneyLeftNeeded.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${moneyLeftNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop("320", "8", "2", "5", "5", "1")