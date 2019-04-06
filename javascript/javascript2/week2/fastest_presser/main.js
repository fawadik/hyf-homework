var timer = document.getElementById("timer").nodeValue;
var timeLeft = document.getElementById("timeLeft");
var button = document.getElementById("startButton");
button.addEventListener("click", function() {
timeLeft.innerText = timer;})
