function yardGreening(squareMeters) {
    priceOneSquareMeter = 7.61;
    let totalPrice = Number(squareMeters) * priceOneSquareMeter;
    let discount = totalPrice * 18/100;
    totalPrice = totalPrice - discount
    console.log(`The final price is: ${totalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening('550')