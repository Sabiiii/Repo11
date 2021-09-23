var myArr = [2, 4, 0, 8, 10];


function myArrayFunction(arr) {

    var myItems = [...arr];

    myArr[2] = myItems;

    myItems = 6;

        return myItems;
   
}


console.log(myArrayFunction(myArr));


module.exports = myArrayFunction;
