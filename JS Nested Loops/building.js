function building (input){
    let countFloors = Number(input[0]);
    let roomsPerFloor = Number(input[1]);
    let result = "";

    for (let floor = countFloors; floor > 0; floor--){
        for (let room = 0; room < roomsPerFloor; room++){
            if (floor === countFloors){
                result += `L${floor}${room} `;
                continue
            } else if (floor % 2 !== 0){
                result += `A${floor}${room} `;
            } else {
                result += `O${floor}${room} `;
            }
        }
        result = result.trim() + "\n";
    }
    console.log(result.trim());
}
building((["6", "4"]));