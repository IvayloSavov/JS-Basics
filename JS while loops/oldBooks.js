function library(books){
    let i = 1;
    let isFound = false;
    let searchedBook = books[0];

    while (!isFound){
        currentBook = books[i];
        if (currentBook === searchedBook){
            isFound = true;
        } else if (currentBook === "No More Books"){
            break;
        } else {
            i ++;
        }
    }
    if (!isFound){
        console.log("The book you search is not here!");
        console.log(`You checked ${i - 1} books.`);
    } else {
        console.log(`You checked ${i - 1} books and found it.`);
    }
}
library(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


