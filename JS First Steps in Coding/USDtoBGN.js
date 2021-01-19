function converter(dollars) {
    let exchangeCourse = 1.79549;
    let usd = Number(dollars);
    let bgn = usd * exchangeCourse;
    console.log(bgn);
}
converter(22);