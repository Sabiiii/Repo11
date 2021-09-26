var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {

    var myNewPets = [...myPets];
    

    myNewPets.push("Bird", "Fish");
    firstPet = myNewPets.shift("Dog");
    lastPet = myNewPets.pop("Fish");

    myNewPets.unshift("Lion");

    return myNewPets;

}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;






