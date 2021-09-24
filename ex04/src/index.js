
var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {

    var newMonitorsList = [...arr];

    var monitorList = [];


    for (var i=0; i < monitorList.length; i++) {
    for (var j=0; j < monitorList[i].length; j++) {
        console.log(monitorList[i][j]);
        ;
    }

    return monitorList;


}

console.log(myMonitorsFunction(monitorList));
module.exports = myMonitorsFunction;

