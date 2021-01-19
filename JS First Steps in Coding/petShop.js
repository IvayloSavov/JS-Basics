function petShop(countDogs, countOtherAnimals) {
    let priceDogFood = 2.50;
    let priceAnimalFood = 4;
    let totalExpenses = Number(countDogs) * priceDogFood + Number(countOtherAnimals) * priceAnimalFood;
    console.log(`${totalExpenses} lv.`);
}
petShop("5", "4")