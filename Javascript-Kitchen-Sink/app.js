// Variable storing my name
var myName = "Randy";
// Constant storing number of states
const numberOfStates = 50;
// Adding 5 and 4
var fivePlusFour = 5+4;
// Objective #6
function checkNameForL(name){
  let letterNum = name.charCodeAt(0);
  if (letterNum <76) {
    console.log("Back of the line!");
  }else {
    console.log("Next!");
  }
}
checkNameForL("Randy");
checkNameForL("Andy");
// sayHello Function
function sayHello(){
  alert("Hello World!");
}
sayHello();
// Check Age Function
function checkAge(name, age){
  if (age <21) {
    alert("Sorry " +name+", you aren't old enough to view this page!");
  }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
// Vegetables Array
var myVegetables = ["Broccoli", "Asparagus", "Carrot"];
for (i=0;i<3;i++){
  console.log(myVegetables[i]);
}
// Array with 5 Objects
var array= [
kara={name:"Kara",age:22},
monel={name:"Mon-El",age:23},
james={name:"James",age:19},
winslow={name:"Winslow",age:24},
alex={name:"Alex",age:18}];
// Function Checking array for Age
for(i=0;i<array.length;i++){
  checkAge(array[i].name,array[i].age);
}
// Return number of characters
function getLength(word) {
  console.log(word.length);
}
getLength('Hello World!w');
var phraseLength = 0;
phraseLength = getLength('Hello Worldw!');
// Number is Even or not
if (phraseLength%2) {
  console.log('The world is an odd place!');
}else {
  console.log('The world is nice and even!');
}
