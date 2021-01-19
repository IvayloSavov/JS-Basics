function skiTrip(input){
    let days = Number(input[0]);
    let typeRoom = input[1];
    let review = input[2];
    let price = 0;

    if (typeRoom == "room for one person"){
        price = (days - 1) * 18.00;
    } else if (typeRoom == "apartment"){
        if (days < 10){
            price = ((days - 1) * 25.00) * 70/100;
        } else if (days >= 10 && days <= 15){
            price = ((days - 1) * 25.00) * 65/100;
        } else if (days > 15){
            price = ((days - 1) * 25.00) * 50/100;
        }
    } else if (typeRoom == "president apartment"){
        if (days < 10){
            price = ((days - 1) * 35.00) * 90/100;
        } else if (days >= 10 && days <= 15){
            price = ((days - 1) * 35.00) * 85/100;
        } else if (days > 15){
            price = ((days - 1) * 35.00) * 80/100;
        }
    }
    if (review == "positive"){
        price += price * 25/100;
    } else {
        price *= 90/100;
    } 
    console.log(price.toFixed(2));
}
skiTrip(["2",
"apartment",
"positive"]
)