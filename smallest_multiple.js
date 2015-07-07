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

//always running until break case is set
  while(true){

    //resets the counter var back to original input
    //each time we need to enter the 2nd while loop
    counter = numbers;

    //lowest number to check to if a 10 is inserted.
    while(counter > 3){

      //assume highest Number and input counter are not divible
      divisible = false;

      //ifhighest Number/counter has a remainder, enter the if statement
      if(highNum % counter !== 0){
      //change divislbe var to true and break out of the inner while statement
        divisible = true;
        break;
      }

      //if there is no remainder, reduce counter by 1 and check against the if statments
      counter--;
    }

    //after we break out of inner loop, check var of the remainder
    //if no remainder, than enter if statement || if remainder skip if statement
    if(!divisible){
      //you have your highest Number if the inner loop went through the entire counter
      //and never broke out by force
      console.log(highNum);
      return highNum;
    }

    //if there is a remainder in inner loop, increase the highNum and start again
    highNum += numbers;
  }


  return 0;
};