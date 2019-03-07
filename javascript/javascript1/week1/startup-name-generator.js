/*---- Declaration of first and second word arrays----*/
var firstWords = ["Quick","Fast","Round","Tremendous","Splended","Fantastic","Acrobatic","Exotic","Energetic","Robust"];
var secondWords = ["Corporation","Limited","Logistics","Enterprises","Traders","Trends","Services","Hotels","Organization","Institute"];
/*----------------------------------------------------*/
/*----------------Random index generator--------------*/
const randomFirstWord = Math.floor(Math.random() * 10) + 0;
const randomSecondWord = Math.floor(Math.random() * 10) + 0;
/*----------------------------------------------------*/
var startupName = firstWords[randomFirstWord]+" "+secondWords[randomSecondWord];
/*----------------Output string-----------------------*/
var startupNameOutput = "\"The startup: "+"\""+startupName+"\""+" contains "+startupName.length+" characters\"";
console.log(startupNameOutput);