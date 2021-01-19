function birthdayParty(input){
    let rentHall = Number(input);
    let priceCake = rentHall * 20/100;
    let priceDrinks = priceCake - (priceCake * 45/100);
    let priceAnimator = rentHall * 1/3;
    let totalPrice = priceCake + priceDrinks + priceAnimator + rentHall;
    console.log(totalPrice);
}
birthdayParty("2250");