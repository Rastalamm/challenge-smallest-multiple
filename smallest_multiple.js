/*  smallestMultiple(multiplicands, digits)
 *
 *  @param numbers        the amount of numbers to multiply by
 *
 *  @returns the smallest positive number that is evenly divisible by all numbers
 */
module.exports = function(numbers){
  // do work here

  var finalNumber = 2;
  var arr = [];

  function primeChecker(num) {
      if(num < 2){
          finalNumber = 2;
      }

      for (var i = 2; i < num; i++) {
          if(num%i===0){
              return false;
          }else{
              return true;
          }
      }
  }

  function primeStart(num){
      for(var i = 7; i <= num; i++){
          if(primeChecker(i)){
              arr.push(i)
          }
      }
      console.log(arr);
  }


  primeStart(19);

  return 0;
};