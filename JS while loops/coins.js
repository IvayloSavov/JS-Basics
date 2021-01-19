function coins(input){
    let countCoins = 0;
    let change = Number(input[0]) * 100;
    if (change >= 200){
        countCoins += Math.trunc(change / 200);
        change %= 200;
    }
    if (change >= 100){
        countCoins += Math.trunc(change / 100);
        change %= 100;
    }
    if (change >= 50){
        countCoins += Math.trunc(change / 50);
        change %= 50;
    }
    if (change >= 20){
        countCoins += Math.trunc(change / 20);
        change %= 20;
    }
    if (change >= 10){
        countCoins += Math.trunc(change / 10);
        change %= 10;
    }
    if (change >= 5){
        countCoins += Math.trunc(change / 5);
        change %= 5;
    }
    if (change >= 2){
        countCoins += Math.trunc(change / 2);
        change %= 2;
    }
    if (change >= 1){
        countCoins += Math.trunc(change / 1);
    }
    console.log(countCoins);
}
coins(["1.23"])