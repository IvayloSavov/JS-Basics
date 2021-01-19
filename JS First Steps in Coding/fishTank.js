function fishTank(lengthInput, widthInput, heightInput, percentInput) {
    let length = Number(lengthInput);
    let width = Number(widthInput);
    let height = Number(heightInput);
    let percent = Number(percentInput);
    let area_aquarium = length * width * height;
    area_aquarium = area_aquarium * 0.001;
    area_aquarium = area_aquarium - (area_aquarium * percent / 100);
    console.log(area_aquarium); 
}
fishTank("85", "75", "47", "17");