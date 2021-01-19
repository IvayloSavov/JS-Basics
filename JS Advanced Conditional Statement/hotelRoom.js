function hotelRoom(input){
    let month = input[0];
    let countNights = Number(input[1]);
    let priceApartment = 0;
    let priceStuido = 0;

    if (month == "May" || month == "October"){
        priceStuido = countNights * 50;
        priceApartment = countNights * 65;
        if (countNights > 14){
            priceStuido *= 70/100;
            priceApartment *= 90/100;
        } else if (countNights > 7){
            priceStuido *= 95/100;
        } 
    } else if (month == "June" || month == "September"){
        priceStuido = countNights * 75.20;
        priceApartment = countNights * 68.70;
        if (countNights > 14){
            priceStuido *= 80/100;
            priceApartment *= 90/100;
        }
    } else if (month == "July" || month == "August"){
        priceStuido = countNights * 76.00;
        priceApartment = countNights * 77.00;
        if (countNights > 14){
            priceApartment *= 90/100;
        }
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${priceStuido.toFixed(2)} lv.`)
}
hotelRoom(["August",
"20"]
)