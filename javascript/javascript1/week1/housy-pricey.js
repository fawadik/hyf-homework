var widthOfPetersHouse = 8;
var depthOfPetersHouse = 10;
var heightOfPetersHouse = 10;
var gardenOfPetersHouse = 100;
var costOfPetersHouse = 2500000;
/*-------------------Volume of Peters house---------------------------------*/
var volumeOfPetersHouse = widthOfPetersHouse*depthOfPetersHouse*heightOfPetersHouse;
/*----------------------------------------------------*/
/*-------------------Price Calculation fo Peters house----------------------*/
var priceOfPetersHouse = (volumeOfPetersHouse*2.5*1000)+(gardenOfPetersHouse*300);
/*----------------------------------------------------*/
/*-------------------Comparison of price with the cost----------------------*/
if(priceOfPetersHouse<costOfPetersHouse){
    var petersHouse = "Peter is paying "+priceOfPetersHouse+" which is too little\n";
}
else{
    petersHouse = "Peter is paying "+priceOfPetersHouse+" which is too much";
}
/*----------------------------------------------------*/
var widthOfJuliasHouse = 5;
var depthOfJuliasHouse = 11;
var heightOfJuliasHouse = 8;
var gardenOfJuliasHouse = 70;
var costOfJuliasHouse = 1000000;
/*-------------------Volume of Julias House------------------------*/
var volumeOfJuliasHouse = widthOfJuliasHouse*depthOfJuliasHouse*heightOfJuliasHouse;
/*----------------------------------------------------*/
/*-------------------Price Calculation for Julias House---------------------*/
var priceOfJuliasHouse = (volumeOfJuliasHouse*2.5*1000)+(gardenOfJuliasHouse*300);
/*----------------------------------------------------*/
/*--------------------Comparison of price with the cost--------------------------------*/
if(priceOfJuliasHouse<costOfJuliasHouse){
    var juliasHouse = "Julia is paying "+priceOfJuliasHouse+" which is too little";
}
else{
    juliasHouse = "Julia is paying "+priceOfJuliasHouse+" which is too much";
}
/*----------------------------------------------------*/
/*-----------------------Output for the price assessmetn for Peters House-----------------------------*/
console.log(petersHouse);
/*-----------------------Output for the price assessmetn for Julias House-----------------------------*/
console.log(juliasHouse);