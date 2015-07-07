/*  smallestMultiple(multiplicands, digits)
 *
 *  @param numbers        the amount of numbers to multiply by
 *
 *  @returns the smallest positive number that is evenly divisible by all numbers
 */
module.exports = function(numbers){
  // do work here
  var highNum = numbers;
  var divisible = false ;
  var counter = numbers;

  while(true){

    counter = numbers;

    while(counter > 3){

      divisible = false;

      if(highNum % counter !== 0){
        divisible = true;
        break;
      }

      counter--;
    }

    if(!divisible){
      console.log(highNum);
      return highNum;
    }
    highNum += numbers;
  }


  return 0;
};