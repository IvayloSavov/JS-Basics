function newHouse(input){
    let typeFlowers = input[0];
    let countFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;

    if (typeFlowers === "Roses"){
        totalPrice = countFlowers * 5;
        if (countFlowers > 80){
            totalPrice *= 90/100
        }
    } else if (typeFlowers === "Dahlias"){
        totalPrice = countFlowers * 3.80;
        if (countFlowers > 90){
            totalPrice *= 85/100
        }
    } else if (typeFlowers === "Tulips"){
        totalPrice = countFlowers * 2.80;
        if (countFlowers > 80){
            totalPrice *= 85/100
        }
    } else if (typeFlowers === "Narcissus"){
        totalPrice = countFlowers * 3;
        if (countFlowers < 120){
            totalPrice *= 115/100
        }
    } else if (typeFlowers === "Gladiolus"){
        totalPrice = countFlowers * 2.50;
        if (countFlowers < 80){
            totalPrice *= 120/100
        }
    }
    if (budget >= totalPrice){
        console.log(`Hey, you have a great garden with ${countFlowers} ${typeFlowers} and ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}
newHouse(["Roses",
"55",
"250"]
)