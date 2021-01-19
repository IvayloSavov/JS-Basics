function examPrep (input){
    let countBadGrades = Number(input[0]);
    let badGrades = 0;
    let i = 1;
    let averageGrade = 0;
    let countGrades = 0;
    let countTasks = 0;

    while (badGrades < countBadGrades){
        task = input[i];
        if (task === "Enough"){
            var lastProblem = input[i - 2];
            break;
        }
        mark = Number(input[++i]);
        if (mark <= 4){
            badGrades ++;
        }
        averageGrade += mark;
        countGrades++;
        i++;
        countTasks ++;
    }
    if (badGrades === countBadGrades){
        console.log(`You need a break, ${badGrades} poor grades.`);
    } else {
        console.log(`Average score: ${(averageGrade / countGrades).toFixed(2)}`);
        console.log(`Number of problems: ${countTasks}`);
        console.log(`Last problem: ${lastProblem}`)
    }
}
examPrep(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
