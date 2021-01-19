function areaOfFigures(typeFigure, parm1, parm2){
    let area = 0
    if (typeFigure == "square"){
        area = parm1 * parm1;
    } else if (typeFigure == "rectangle"){
        area = parm1 * parm2;
    } else if (typeFigure == "circle"){
        area = Math.PI * parm1 ** 2;
    } else if (typeFigure == "triangle"){
        area = parm1 * parm2 / 2
    }
    console.log(area.toFixed(3))
}
areaOfFigures("circle",
"6")



