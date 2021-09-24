var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {

    var myNewPets = [...myPets];
    
    myPetsArray = myNewPets[0];

    myNewPets.push("Birds", "Fish");
    firstPet.shift("Dog");
    lastPet.pop("Fish");

    myNewPets.unshift["Lion"];

    return myNewPets;


    
}

console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;


