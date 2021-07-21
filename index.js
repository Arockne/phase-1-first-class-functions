//recievesFunction
  //passes in a function
  //calls the callback function
const receivesAFunction = cb => cb();

//returnsANamedFunction
  //takes no arguments
  //returns a named function
const returnsANamedFunction = () => {
  return function named() {
  }
}

//returnsAnAnonymousFunction
  //takes no arguments
  //return anonymous function
const returnsAnAnonymousFunction = () => () => {};