function solve (input){
    countJudges = Number(input[0]);
    let i = 1;
    line = input[i];
    let allGrades = 0;
    let totalCountGrades = 0;
    while (line !== "Finish"){
        let presentationName = line;
        let grade = 0;
        for (let j = 1; j <= countJudges; j++){
            totalCountGrades ++;
            judgeGrade = Number(input[++i]);
            grade += judgeGrade;
        }
        console.log(`${presentationName} - ${(grade/countJudges).toFixed(2)}.`);
        allGrades += grade;
        line = input[++i];
    }
    console.log(`Student's final assessment is ${(allGrades/totalCountGrades).toFixed(2)}.`);
}
solve((["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
)
