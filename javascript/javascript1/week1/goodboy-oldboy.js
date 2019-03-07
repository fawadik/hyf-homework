var dogYearOfBirth = 2013;
var dogYearFuture = 2027;
var dogYear, dogAge;
var shouldShowResultInDogyears = false;
if(shouldShowResultInDogyears){
    dogYear = (dogYearFuture - dogYearOfBirth);
    dogAge = "Your dog will be "+dogYear+" human years old in "+dogYearFuture;
}
else{
    dogYear = (dogYearFuture - dogYearOfBirth)*7;
    dogAge = "Your dog will be "+dogYear+" dog years old in "+dogYearFuture;
}
console.log(dogAge);
