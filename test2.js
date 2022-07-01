(function forVariation(){
let animals = {
    name: "Sulochan",
    type: "Mammal",
    kingdom: "Animal",
};

for(n in animals){
    console.log(`Animals ${n}`);
}

let petName = "Sulochan";
let allDogSpecies = [
    "SulochanKarki",
    "Sibindra",
    "boxer",
    "Snow"
];

for(let singleItem of petName){
    console.log(`Pet Letter \n ${singleItem}`);
}
for(let singleItem of allDogSpecies){
    console.log(`Dog Species \n ${singleItem}`);
}
})();
