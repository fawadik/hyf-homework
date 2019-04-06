//functions as array elements
var arrayElements = [element1, element2, element3];

function element1 () { return "First function of array called";}

function element2 () { return "Second function of array called";}

function element3 () { return "Third function of array called";}
//calling all the array elements
function callArrayElements () {
  for (var i = 0; i<arrayElements.length; i++) {
    console.log(arrayElements[i]());
  }
}
callArrayElements();
//const and normal function
const constFunction = function newFunction () { return "This is const function";}
function normalFunction () { return "This is a normal function";}

console.log(constFunction);
console.log(normalFunction);

let newObj = {id: function objectFunction() {
    return "This is a function in an object";}}

console.log(newObj.id());

//inner and outer functions

function inner () {return "This is an inner Function";}
function outer () {return inner();}
var innerFuncReturn = outer();
console.log(innerFuncReturn);
