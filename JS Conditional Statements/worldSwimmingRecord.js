function swimRecord(recordI, distanceI, timeFor1Meter){
    let record = Number(recordI);
    let distance = Number(distanceI);
    let time1Meter = Number(timeFor1Meter);
    let extraTime = Math.floor(distance / 15) * 12.5;
    let totalTime = (distance * time1Meter) + extraTime;
    if (totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
    }
}
swimRecord("55555.67",
"3017",
"5.03")

