//lets build our pseudoclass without class syntax

//making constructor or factory functions
function Building(floors) {
  //making this {} work of new
  this.what = "building";
  this.floors = floors;
  //adding properties what and floors on this -> again work of new
  //also add __proto__ to this (its called prototypechaining)
  //returning this to instances -> work of this
}

//making methods for our instances

Building.prototype.countFloors = function() {
  console.log(`i have ${this.floors} floors`);
};

//making instances
var myHouse = new Building(2);
var muOffice = new Building(12);
myHouse.countFloors(); //i have 4 floors

console.log(myHouse);
//myHouse.__proto__ === Building.prototype -> true
//in the above call to myFloors our myhouse instance will look on __proto__ and from there it looks on prototype object of Building ...because every function is also an object

//The results of the shared method depend on the unique instance values which are created at call-time inside each function's scope.

//now lets jump into stacks and queues
