function walking (input){
    let i = 0;
    let allSteps = 0;

    while (allSteps < 10_000){
        let line = input[i];
        if (line === "Going home"){
            allSteps += Number(input[++i]);
            break
        }
        let steps = Number(line);
        allSteps += steps;
        i++;
    }
    let neededMoreSteps = Math.abs(10_000 - allSteps);
    if (allSteps >= 10_000){
        console.log(`Goal reached! Good job!\n${neededMoreSteps} steps over the goal!`);
    } else {
        console.log(`${neededMoreSteps} more steps to reach goal.`);
    }
}
walking(["125",
"250",
"4000",
"30",
"2678",
"4682"])



