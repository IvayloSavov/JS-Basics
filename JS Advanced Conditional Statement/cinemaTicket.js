function cinemaTicket(input){
    let day = input[0];
    if (day === "Monday" || day === "Tuesday" || day === "Friday"){
        console.log(12);
    } else if (day === "Wednesday" || day === "Thursday"){
        console.log(14);
    } else if (day === "Sunday" || day === "Saturday"){
        console.log(16);
    }
}