function bonusScore(initialPoints) {
    let points = Number(initialPoints);
    let bonusPoints = 0;
    if (points <= 100) {
        bonusPoints += 5;
    } else if (points > 100 && points <= 1000) {
        bonusPoints += (points * 20 / 100);
    } else if (points > 1000) {
        bonusPoints += (points * 10 / 100);
    }

    if (points % 2 === 0) {
        bonusPoints += 1;
    } else if (points % 10 == 5) {
        bonusPoints += 2;
    }
    console.log(bonusPoints);
    points += bonusPoints;
    console.log(points);
}
bonusScore("20")

