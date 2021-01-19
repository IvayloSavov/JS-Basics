function clock(hoursI, minutesI){
    let hours = Number(hoursI);
    let minutes = Number(minutesI);
    if (minutes + 15 >= 60){
        minutes = (minutes + 15) - 60;
        hours += 1;
    } else {
        minutes += 15;
    }
    if (minutes < 10){
        minutes = "0" + String(minutes);
    }
    if (hours > 23){
        hours = 0;
    }
    console.log(`${hours}:${minutes}`);
}
clock("23", "46");