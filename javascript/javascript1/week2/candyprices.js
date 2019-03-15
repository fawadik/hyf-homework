const bougthCandyPrices = [];
/*----------------------below is the function to push candy prices in the array----------------------- */
function addCandy(candyType, weight){
    if (candyType==="sweet"){
        bougthCandyPrices.push(weight*0.5);
    }
    else if (candyType==="chocolate"){
        bougthCandyPrices.push(weight*0.7);
    }
    else if (candyType==="toffee"){
        bougthCandyPrices.push(weight*1.1);
    }
    else (candyType==="chewing-gum")
        bougthCandyPrices.push(weight*0.03);
}
/*----------------------end of function----------------------- */
var amountToSpend = Math.random()*100;//generating a random amount to be spent
var totalPrice = 0;
/*----------------------below is the function to calculate the remaining amount----------------------- */
function canBuyMore(){
for (var i=0; i<bougthCandyPrices.length; i++) 
{
    totalPrice+= bougthCandyPrices[i]; //calculation fo totalamount spent on candies
}
if (totalPrice<amountToSpend) {//checking if we have enough money to buy more candies
    return "You can buy more:"
}
else {
    return "You can not buy more:"
}
}
/*----------------------End of funtion----------------------- */
addCandy("toffee", 15);//adding price to the prices array
console.log(canBuyMore());//getting output if we can buy more or not