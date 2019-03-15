function getFullName(firstName, surName) {
    var fullName = firstName+" "+surName;
    return fullName; 
}
console.log(getFullName("Fowad", "Latif"));
var fullName1 = getFullName("Per", "Christensen");
var fullName2 = getFullName("Henrik", "Larsen");
console.log(fullName1);
console.log(fullName2);

function getFullName(firstName, surName, useFormalName) 
{
    if (useFormalName===true) {
        return "Lord "+firstName+" "+surName;
    }
    else if (useFormalName===false) {
        return firstName+" "+surName;
    }
    else {
        return firstName+" "+surName; 
    }
}   
console.log(getFullName("Fowad", "Latif", true));
console.log(getFullName("Fowad", "Latif", false));
