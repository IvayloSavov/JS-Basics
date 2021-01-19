function vacationBooksList(countPagesInput, pagesPer1hourInput, countDaysInput) {
    let countPages = Number(countPagesInput);
    let countPagesPer1Hour = Number(pagesPer1hourInput);
    let countDays = Number(countDaysInput);
    let totalTimeNeeded = countPages / countPagesPer1Hour;
    let timePerDayForReading = totalTimeNeeded / countDays;
    console.log(timePerDayForReading);
}
vacationBooksList("212", "20"," 2")