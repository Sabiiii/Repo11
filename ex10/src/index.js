function mySplice(arr1, arr2, n) {

    var ourSplice = arr2.slice();
    for (var i = 0; i < arr1.length; i++) {
        ourSplice.splice(n, 0, arr1[i]);
        ;
    }


    return ourSplice;

}



console.log(mySplice([1, 2, 3], [4, 5], 1));
console.log(mySplice([1, 2, 3], [4, 5], 2));
console.log(mySplice(["b", "c"], ["a", "d"]));
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"]));
module.exports = mySplice;
