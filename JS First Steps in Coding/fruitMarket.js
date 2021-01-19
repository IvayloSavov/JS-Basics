function fruitMarket(priceStrawberryInput, bananasInput, orangesInput, raspberryInput, strawberryInput) {
    let priceStrawberry = Number(priceStrawberryInput);
    let bananas = Number(bananasInput);
    let oranges = Number(orangesInput);
    let raspberry = Number(raspberryInput);
    let strawberry = Number(strawberryInput);
    let priceRaspberry = priceStrawberry * 1/2;
    let priceBananas = priceRaspberry * 20/100;
    let priceOranges = priceRaspberry * 60/100;
    let totalMoneyNeeded = (strawberry * priceStrawberry) + (bananas * priceBananas) + (oranges * priceOranges) + (raspberry * priceRaspberry);
    console.log(totalMoneyNeeded);
}
fruitMarket("48", "10", "3.3", "6.5", "1.7")
