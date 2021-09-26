
var monitorsListArray = ["Apple", "Peach", "Berry"];

var monitorList = [];


function myMonitorsFunction(arr) {

    var newMonitorsList = [...arr];

    
    var monitorList = [
        ["Apple", 1],
        ["Peach", 2],
        ["Berry", 3]
    ];

    return monitorList; 
}






console.log(myMonitorsFunction(monitorList));
module.exports = myMonitorsFunction;





