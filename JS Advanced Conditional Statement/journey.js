function jorney(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let price = 0;
    let typeHoliday = "";

    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "summer"){
            price = budget * 30/100;
            typeHoliday = "Camp";
        } else {
            price = budget * 70/100;
            typeHoliday = "Hotel";
        }
    } else if (budget <= 1000){
        destination = "Balkans";
        if (season === "summer"){
            price = budget * 40/100;
            typeHoliday = "Camp";
        } else {
            price = budget * 80/100;
            typeHoliday = "Hotel";
        }
    } else{
        destination = "Europe";
        price = budget * 90/100;
        typeHoliday = "Hotel";
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${typeHoliday} - ${price.toFixed(2)}`)
}
jorney(["678.53", "winter"])