function movie(budgetI, statists, clothesPriceOneStatish){
    let budget = Number(budgetI);
    let countStatists = Number(statists);
    let priceClothesOneStatist = Number(clothesPriceOneStatish);
    let priceDecor = budget * 10/100;
    let totalPriceClothes = countStatists * priceClothesOneStatist;
    if (countStatists > 150){
        totalPriceClothes *= 90/100;
    }
    let total_needed_money = totalPriceClothes + priceDecor;
    if (total_needed_money > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(total_needed_money - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - total_needed_money).toFixed(2)} leva left.`);
    }
}