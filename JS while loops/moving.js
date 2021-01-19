function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);
    let totalFreeSpace = width * length * heigth; 
    let notEnoughtFreeSpace = false;
    let i = 3;

    let command = input[i];
    while(command !== "Done"){
        if (totalFreeSpace - Number(command) <= 0){
            notEnoughtFreeSpace = true;
            break;
        }
        totalFreeSpace -= Number(command);
        ++i;
        command = input[i];
    }
    
    if (notEnoughtFreeSpace){
        console.log(`No more free space! You need ${command - totalFreeSpace} Cubic meters more.`);
    }else {
        console.log(`${totalFreeSpace} Cubic meters left.`);
    }
}
moving(["10",
"1",
"2",
"4",
"6",
"Done"])