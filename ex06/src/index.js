
function multiplyArrayFunction(myArray) {

 
   
   for (var i=0; i < myArray.length; i++) {
    for (var j=0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);

    };

}
return myArray;

}


console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));


module.exports = multiplyArrayFunction;

