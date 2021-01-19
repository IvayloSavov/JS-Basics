function solve (input){
    let countOpenTabs = Number(input[0]);
    let salary = Number(input[1]);
    let tabs = input.slice(2, );
    let isfired = false;

    for (let i = 0; i < countOpenTabs; i++){
        currentTab = tabs[i];
        switch (currentTab){
            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
        }
        if (salary <= 0){
            console.log("You have lost your salary.");
            isfired = true;
            break;
        }
    }

    if (!isfired){
        console.log(salary);
    }

}
solve(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"]

)