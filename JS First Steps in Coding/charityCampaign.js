function charity(daysInput, confectonersInput, cakesInput, wafflesInput, pancakesInput){
    let days = Number(daysInput);
    let confectoners = Number(confectonersInput);
    let cakes = Number(cakesInput);
    let waffles = Number(wafflesInput);
    let pancakes = Number(pancakesInput);
    let priceCake = 45;
    let priceWaffles = 5.80;
    let pricePancakes = 3.20;
    let totalMoneyPerDay = ((cakes * priceCake) + (waffles * priceWaffles) + (pancakes * pricePancakes))  * confectoners;
    let totalMoney = totalMoneyPerDay * days;
    let expenses = totalMoney * 1/8;
    console.log(totalMoney - expenses);
}
charity("23", "8", "14", "30", "16")