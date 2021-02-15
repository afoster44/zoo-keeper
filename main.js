let dictionary = {
    kills: [],
    doesNot: []
}

class Animals {
    constructor(name, size, mood, killsOrNot, foodType, origination) {
        this.name = name
        this.size = size
        this.mood = mood
        this.killsOrNot = killsOrNot
        this.foodType = foodType
        this.origination = origination
    }
    //     function doesItKill(dictionary) {
    // if (killsOrNot == true) {
    //     dictionary.kills.push(Animals)
    // } else {
    //     dictionary.doesNot.push(Animals)
    // }
    // doesItKill();
}


let alligator = new Animals("American Alligator", "Large", "Angry", true, "Meat", "North America");
let bird = new Animals("Golden Eagle", "Medium", "Happy", true, "Fish and small prey", "North America");
let camel = new Animals("Camel", "Medium", "Lazy", false, "Grass and bugs", "North America");
let dolphin = new Animals('Bottle Nose Dolphin', 'Medium', 'Happy', true, 'fish', 'Ocean');
let eel = new Animals('Electric Eel', 'Small', 'Angry', true, 'fish', 'ocean');
let fox = new Animals('Fennec Fox', 'Small', 'Happy', true, 'Meat', 'Africa');
let giraffe = new Animals('Giraffe', "Large", 'Happy', false, 'Herbivore', 'Africa');
let horse = new Animals('Horse', 'Medium', 'Happy', false, 'Herbivore', 'North America');
let iguana = new Animals('Green Iguana', 'Small', 'Lazy', true, 'Herbivore', 'Brazil');
let jackal = new Animals('Jackal', 'Medium', 'Angry', true, 'Meat', 'Africa');
let kangaroo = new Animals('Kangaroo', 'Large', 'Happy', true, "Herbivore", 'Australia');
let lizard = new Animals('Lizard', 'Small', 'Lazy', true, 'Herbivore', 'India');
let monkey = new Animals('Mandrill', 'Medium', 'Lazy', true, "Herbivore and small animals", 'Africa');
let numbat = new Animals('Numbat', 'Small', 'Lazy', false, 'Herbiore', 'Australia');
let octopus = new Animals('Octopus', 'Medium', 'Angry', true, 'Fish', 'Ocean');
let panther = new Animals('Leopard', 'Medium', 'Lazy', true, 'Meat', 'Africa');
let quoll = new Animals('Quoll', 'Small', 'Angry', true, 'Meat', 'Australia');
let rattleSnake = new Animals('Diamondback Rattler', 'Small', 'Lazy', true, 'Meat', 'North America');
let shark = new Animals('Great White Shark', "Large", "Angry", true, 'fish', 'Ocean');
let tasmanianDevil = new Animals('Tasmanian Devil', 'Small', 'Angry', true, 'Meat', 'Australia');
let unua = new Animals('Sloth', 'Small', 'Lazy', false, "Herbivore", "South America");
let vampireBats = new Animals('Vampire Bat', 'Small', 'Angry', true, 'Blood', 'South America');
let xray = new Animals('X-Ray', 'Medium', 'Happy', true, 'Fish', 'Ocean');
let yak = new Animals('Yak', 'Large', 'Lazy', false, 'Herbivore', 'India');
let zebra = new Animals('Zebra', 'Medium', 'Happy', false, 'Herbivore', 'Africa');

let constructedAnimals = [alligator, bird, camel, dolphin, eel, fox, giraffe, horse, iguana, jackal, kangaroo, lizard, monkey, numbat, octopus, panther, quoll, rattleSnake, shark, tasmanianDevil, unua, vampireBats, xray, zebra]
console.log(constructedAnimals)

let ourAnimals = {
    kills: [],
    doesNot: [],
    isSmall: [],
    isMedium: [],
    isLarge: []
}


constructedAnimals.forEach(animal => {
    if (animal.killsOrNot == true) {
        ourAnimals.kills.push(animal);
    } else if (animal.killsOrNot == false) {
        ourAnimals.doesNot.push(animal);
    } else if (animal.size.toLowerCase() === 'small') {
        ourAnimals.isSmall.push(animal);
    } else if (animal.size.toLowerCase() === 'medium') {
        ourAnimals.isMedium.push(animal);
    } else if (animal.size.toLowerCase() === 'large') {
        ourAnimals.isLarge.push(animal);
    }
})

console.log(ourAnimals.kills);
console.log(ourAnimals.doesNot);
console.log(ourAnimals.isSmall);
console.log(ourAnimals.isMedium);
console.log(ourAnimals.isLarge);
