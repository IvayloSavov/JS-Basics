function workingHours(input) {
    let hours = Number(input[0]);
    let dayOfWeek = input[1];
    let isWorkingDay = false;
    let isWorkingHour = false;
    switch(dayOfWeek){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday": isWorkingDay = true; break;
    }
    switch(hours){
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18: isWorkingHour = true; break;
    }
    if (isWorkingHour && isWorkingDay){
        console.log("open");
    } else {
        console.log("closed");
    }
}
workingHours(["11", "Monday"]);