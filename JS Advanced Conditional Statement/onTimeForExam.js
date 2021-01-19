function onTimeForExam(input){
    let examHours = Number(input[0]) * 60;
    let examMinute = Number(input[1]) + examHours;
    let arriveHour = Number(input[2]) * 60;
    let arriveMinute = Number(input[3]) + arriveHour;
    let difference = arriveMinute - examMinute;

    if (difference > 0){
        console.log("Late");
        if (difference < 60){
            console.log(`${difference} minutes after the start`)
        } else {
            let hours = parseInt(difference / 60);
            let minutes = Math.abs(difference % 60);
            if (minutes < 10){
                minutes = "0" + String(minutes);
            }
            console.log(`${hours}:${minutes} hours after the start`)
        }
    } else if (difference === 0 || (difference < 0 && difference >= -30)){
        console.log("On time");
        if (difference > -60){
            console.log(`${Math.abs(difference)} minutes before the start`)
        }
    } else if (difference < -30){
        console.log("Early");
        if (difference > -60){
            console.log(`${Math.abs(difference)} minutes before the start`)
        } else {
            let hours = parseInt(difference / 60);
            let minutes = Math.abs(difference % 60);
            if (minutes < 10){
                minutes = "0" + String(minutes);
            }
            console.log(`${Math.abs(hours)}:${minutes} hours before the start`)
        }
    }
}

