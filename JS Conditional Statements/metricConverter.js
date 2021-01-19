function metricConverter(numInput, metricInput, metricOutput){
    let num = Number(numInput);
    let currentMetric = metricInput;
    let outputMetric = metricOutput;

    if (currentMetric === "mm" && outputMetric === "m"){
        num /= 1000.00
    } else if (currentMetric === "mm" && outputMetric === "cm") {
        num /= 10.00
    } else if (currentMetric === "m" && outputMetric === "cm"){
        num *= 100.00
    } else if (currentMetric === "m" && outputMetric === "mm"){
        num *= 1000.00
    } else if (currentMetric ===  "cm" && outputMetric == "mm"){
        num *= 10.00
    } else if (currentMetric ===  "cm" && outputMetric == "m"){
        num /= 100.00
    }
    console.log(num.toFixed(3))
}
metricConverter("12", "mm", "m")