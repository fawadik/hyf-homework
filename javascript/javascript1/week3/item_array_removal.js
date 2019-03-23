const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//generates a random number
const randomNumber = parseInt(Math.random() * 11);
//displays the random number
console.log(randomNumber);
//removes the number from the array
indexToRemove = numbersArray.indexOf(randomNumber);
numbersArray.splice(indexToRemove,1);
//-----------
console.log(numbersArray);



//optional part of the assignment
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i<numbersArray.length; i++) {  
  const randomNumber = parseInt(Math.random() * 11);
  var numbersToRemove=numbersArray.indexOf(randomNumber);
  numbersArray.splice(numbersToRemove,1);
}
console.log(numbersArray);