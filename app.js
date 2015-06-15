//var a : string = "tabish";
//console.log(a);
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
    DoorState[DoorState["Ajar"] = 2] = "Ajar";
})(DoorState || (DoorState = {}));
window.onload = function () {
    var myDoor = DoorState.Open;
    console.log("My door state is " + myDoor.toString());
};
//# sourceMappingURL=app.js.map