function titleize(array, callback) {
  let titleized = [];
  titleized = array.map(element => `Mx. ${element} Jingleheimer Schmidt`);
  callback(titleized);
}

function print(array) {
  array.forEach(element => console.log(element));
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes phrRRRRRRRRR!!!!!`);
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  randomTrick = this.tricks[Math.floor(Math.random() * this.tricks.length)];
  console.log(`${this.name} is ${randomTrick}`);
}


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function() {
  herd.forEach(elephant => console.log(`${elephant.name} is trotting by!`));
}



function dinerBreakfast(food) {
  let order = [];

  return function(food) {
    order.push(food);
    console.log(`I'd like ${order.join(' and ')} please`);
  }
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");