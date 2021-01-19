function solve(input){
    let endNumber = Number(input[0]);
    let startNumber = 1;

    while (startNumber <= endNumber){
        console.log(startNumber);
        startNumber = startNumber * 2 + 1;
    }
}
solve((["31"]))