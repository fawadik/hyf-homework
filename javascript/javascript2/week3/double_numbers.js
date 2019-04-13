let numbers = [1, 2, 3, 4];
let newNumbers = [];


/*for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}*/

newNumbers = numbers.filter(newNumber => {
                                    if (newNumber % 2!== 0)
                                      return newNumber * 2;                                    
                                });
console.log("The doubled numbers are", newNumbers); // [2, 6]

newNumbers = numbers.map(newNumber => 
                         {if (newNumber % 2 !== 0)
                           return newNumber*2;});
console.log("The doubled numbers are", newNumbers); // [2, 6]