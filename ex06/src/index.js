
function multiplyArrayFunction(myArray) {

   var sum = 0;
   var product = 1;
    i;

    for (i=0; i < myArray.length; i +=1) {

        sum += myArray[i];
        product *= myArray[i];
        console.log(sum + product);
    };

    return myArray

//    var sum = [i] + [j];
//    var product 
   
// for (var i=0; i < myArray.length; i++) {
//     for (var j=0; j < myArray[i].length; j++) {
//         console.log(myArray[i][j]);
//     }
}
 


console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7, 8, 9]]));


module.exports = multiplyArrayFunction;

