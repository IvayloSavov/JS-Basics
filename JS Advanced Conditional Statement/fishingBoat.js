function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let countFishmans = Number(input[2]);

    let rentPrice = 0;

    switch (season){
        case "Spring": rentPrice = 3000; break;
        case "Winter": rentPrice = 2600; break;
        default: rentPrice = 4200; break;
    }
    if (countFishmans <= 6){
        rentPrice *= 90/100;
    } else if (countFishmans <= 11){
        rentPrice *= 85/100;
    } else if (countFishmans >= 12){
        rentPrice *= 75/100;
    }

    if (countFishmans % 2 === 0 && season != "Autumn"){
        rentPrice *= 95/100
    }
    if (budget >= rentPrice){
        console.log(`Yes! You have ${(budget - rentPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(rentPrice - budget).toFixed(2)} leva.`)
    }
}
fishingBoat(["2000",
"Winter",
"13"]
)