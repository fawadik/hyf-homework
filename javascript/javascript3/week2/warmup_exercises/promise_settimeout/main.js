function makeUpYourOwnFunctionName (resolveAfter) {
    
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("I am called Asynchronously");
      }, 1000*resolveAfter);
    });
  }
makeUpYourOwnFunctionName(6);

