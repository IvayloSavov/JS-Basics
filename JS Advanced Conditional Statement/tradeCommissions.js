function tradeCommissions (input) {
    let town = input[0];
    let sales = Number(input[1]);
    let commisions = 0;
    let notCorrectTown = false;
    if (sales <= 0){
        notCorrectTown = true;
    }

    if (town === "Sofia"){
        if (sales >= 0 && sales <= 500){
            commisions = sales * 5/100;
        } else if (sales <= 1000){
            commisions = sales * 7/100;
        } else if (sales <= 10000){
            commisions = sales * 8/100;
        } else if (sales > 10000){
            commisions = sales * 12/100;
        }
    } else if (town === "Varna"){
        if (sales >= 0 && sales <= 500){
            commisions = sales * 4.5/100;
        } else if (sales <= 1000){
            commisions = sales * 7.5/100;
        } else if (sales <= 10000){
            commisions = sales * 10/100;
        } else if (sales > 10000){
            commisions = sales * 13/100;
        }
    } else if (town === "Plovdiv"){
        if (sales >= 0 && sales <= 500){
            commisions = sales * 5.5/100;
        } else if (sales <= 1000){
            commisions = sales * 8/100;
        } else if (sales <= 10000){
            commisions = sales * 12/100;
        } else if (sales > 10000){
            commisions = sales * 14.5/100;
        }
    } else {
        notCorrectTown = true;
    }
    if (notCorrectTown){
        console.log("error");
    } else {
        console.log(commisions.toFixed(2));
    }
}
tradeCommissions(["Kaspichan", "499.99"])