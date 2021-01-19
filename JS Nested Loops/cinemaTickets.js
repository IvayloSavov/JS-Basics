function cinema (input){
    let i = 0;
    film = input[i];
    let countStandart = 0;
    let countKid = 0;
    let countStudent = 0;
    let totalTickets = 0;
    while (film !== "Finish"){
        let freeSpaces = Number(input[++i]);
        let takenSpaces = 0; 
        let typeTicket = input[++i];
        while (typeTicket !== "End"){
            takenSpaces ++;
            switch (typeTicket){
                case "standard": countStandart ++; break;
                case "kid": countKid ++; break;
                case "student": countStudent ++; break;
            }
            if (freeSpaces > takenSpaces){
                typeTicket = input[++i];
            } else {
                break;
            }
        }
        console.log(`${film} - ${(takenSpaces / freeSpaces * 100).toFixed(2)}% full.`);
        totalTickets += takenSpaces;
        film = input[++i];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(countStudent / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandart / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKid / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinema((["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
)