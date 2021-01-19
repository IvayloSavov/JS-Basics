function volleyball(input){
    let typeOfYear = input[0];
    let countHolidays = Number(input[1]);
    let countWeekendInWhichHeTravels = Number(input[2]);
    let totalTimePlayerVolleyball = 0;
    let countWeekendsInSofia = 48 - countWeekendInWhichHeTravels;
    totalTimePlayerVolleyball += countWeekendsInSofia * 3/4;
    totalTimePlayerVolleyball += countHolidays * 2/3;
    totalTimePlayerVolleyball += countWeekendInWhichHeTravels;

    if (typeOfYear === "leap"){
        totalTimePlayerVolleyball += totalTimePlayerVolleyball * 15/100;
    }
    console.log(Math.floor(totalTimePlayerVolleyball))
}
volleyball(["leap",
"5",
"2"]
)