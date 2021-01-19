function cake (input){
    let totalPieces = Number(input[0]) * Number(input[1]);
    let guestPieces = input.slice(2);
    let i = 0;
    let notEnoughCake = false;
    let command = guestPieces[i];

    while (command !== "STOP"){
        let currentPieces = Number(command);
        if (currentPieces > totalPieces){
            notEnoughCake = true;
            var neededPieces = currentPieces - totalPieces;
            break;
        }
        totalPieces -= currentPieces
        command = guestPieces[++i];
    }
    
    if (notEnoughCake){
        console.log(`No more cake left! You need ${neededPieces} pieces more.`);
    } else {
        console.log(`${totalPieces} pieces are left.`)
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

