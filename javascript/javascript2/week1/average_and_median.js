const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
//function for calculating the median
function median(housePrices) {
  housePrices.sort( function(a,b) {return a - b;} );
  console.log(housePrices);
  var half = Math.floor(housePrices.length/2);
  if (housePrices.length % 2) {
    return housePrices[half];
  }
  else {
    return (housePrices[half-1] + housePrices[half]) / 2.0;
  }
}

//function below calculates the average

function average (housePrices) {
   var sum = 0;
   var numberOfHouses = housePrices.length;
   for (var i = 0; i<housePrices.length; i++) {
       sum+= housePrices[i];
   } 
   var averagePrice = sum / numberOfHouses;
   return Math.floor(averagePrice);  //rounds off the value
}

console.log(average(housePrices));
console.log(median(housePrices));
