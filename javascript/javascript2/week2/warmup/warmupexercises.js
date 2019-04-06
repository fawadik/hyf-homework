//warmup Exercise
//1. function is to display a text with the some delay
setTimeout(function() {
    console.log("In timeout");
}, 2500);

console.log('Second log');

//-----------------------------------------

//2. logout string after delay
function logoutString(delay, stringToLog) {
    setTimeout(function() {
       return stringToLog;
  }, delay);
  }
  console.log(logoutString(3000,  "Logout this string"));
  //--------------------------------------

  //3. calling a function with the button click
    function logoutStringWithButton(delay) {
    setTimeout(function() {    
    }, delay);
    var displayOutput = document.getElementById("delayOutput");
    displayOutput.innerText = "3.5 seconds after the button is clicked";
  }  


 //4. calling a functions within another function

 function logsEarth() {
    console.log("Earth");
  }
  var earthFunction = logsEarth();
  
  function logsSaturn() {
    console.log("Saturn");
  }
  var saturnFunction = logsSaturn();
  
  function planetLogFunction (planet) {
   
    if (planet !== "Earth") {
      logsSaturn();
    } else {
      logsEarth();
    }
    
  }
  console.log(planetLogFunction(earthFunction));
  console.log(planetLogFunction(saturnFunction));
 //--------------------------------------

//5. geolocation function

var location = navigator.geolocation.getCurrentPosition(function(position) {
    do_something(position.coords.latitude, position.coords.longitude);
  });
function displayLocation() {
    var currentGeoLocation = document.getElementById("locationOutput");
    currentGeoLocation.innerHTML = location;
}
//-------------------------------------

//7. callback functions

let addition = function(x, y) { console.log(x + y);}
let subtraction = function(a, b) { console.log(a - b);}
let multiplication = function (p, q) { console.log(p * q);}

function runAfterDelay (delay, callback) {
  
  setTimeout(addition, delay);
}
addition(4, 6);
runAfterDelay(2000, addition);
runAfterDelay(1000, subtraction);

//-------------------------------------

//8. Double click

//-------------------------------------

//9. joke functions
function funnyJoke (){
  console.log("This is a funny Joke");
}
function badJoke (){
  console.log ("This is a bad joke");
}
function jokeCreater (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke ();
  }
}
jokeCreater (true, funnyJoke, badJoke);
jokeCreater (false, funnyJoke, badJoke);

//-------------------------------------



 


