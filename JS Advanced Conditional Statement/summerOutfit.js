function summerOutfit(input){
    let degrees = Number(input[0]);
    let partOfTheDay = input[1];
    let outfit = "";
    let shoes = "";

    if (partOfTheDay === "Morning"){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees <= 24){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25){
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (partOfTheDay === "Afternoon"){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees <= 24){
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (degrees >= 25){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (partOfTheDay === "Evening"){
        if (degrees >= 10 && degrees <= 18){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees <= 24){
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees >= 25){
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}