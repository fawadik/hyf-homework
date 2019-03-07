var dogYearOfBirth = 2013;
var dogYearFuture = 2027;
var dogYear, dogAge;
var shouldShowResultInDogyears = false;
/*-----------------------Dog age calculation on the basis of boolean values-----------------------------*/
if(shouldShowResultInDogyears){
    dogYear = (dogYearFuture - dogYearOfBirth);
    dogAge = "Your dog will be "+dogYear+" human years old in "+dogYearFuture;
}
else{
    dogYear = (dogYearFuture - dogYearOfBirth)*7;
    dogAge = "Your dog will be "+dogYear+" dog years old in "+dogYearFuture;
}
/*--------------------Output of dog age-----------------------------*/
console.log(dogAge);
