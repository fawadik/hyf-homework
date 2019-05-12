function displayNumbers () {
    let number = 1;
    for(i=1; i<=99; i++) {
      //console.log(number);    
      if (number % 3 === 0 && number % 5 === 0) {
        console.log(number+" 'Jackpot'");
      } 
      else if (number % 5 === 0) {
        console.log(number+" 'This is divisible by 5'");
      }
      else if ( number % 3 === 0) {
        console.log(number+" 'This is divisible by 3'");
      }
      else {
        console.log(number);
      }
      number = number +1;
    }
  }
  displayNumbers();