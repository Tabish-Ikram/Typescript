//var a : string = "tabish";
//console.log(a);

enum DoorState {
Open,
Closed,
Ajar
}

window.onload = () => {
var myDoor = DoorState.Open;
console.log("My door state is " + myDoor.toString());
};