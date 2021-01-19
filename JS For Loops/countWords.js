function solve(input){
    let text = input[0];
    let words = text.split(" ");
    if (words.length <= 10){
        console.log("The message was send successfully!");
    } else {
        console.log(`The message is too long to be send! Has ${words.length} words.`)
    }
}
solve(["This message has exactly eleven words. One more as it's allowed!"])