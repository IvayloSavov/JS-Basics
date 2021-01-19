function sumSeconds(seconds1, seconds2, seconds3) {
    let time1 = Number(seconds1);
    let time2 = Number(seconds2);
    let time3 = Number(seconds3);
    let totalTime = time1 + time2 + time3;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10){
        seconds = "0" + String(seconds);
    }
    console.log(`${minutes}:${seconds}`)
}
sumSeconds("22", "7", "34")