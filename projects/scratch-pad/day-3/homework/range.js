// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

//I: two params that are numbers
//O: an array of all nums between start and end. if end is greater than start, provide them in reverse
//C: create something to store collected output, use push method, use one type of loop

///for function range, with two params start and end
function range(start, end) {
  // YOUR CODE GOES BELOW HERE //
 
  //init storArr to array literal
  let storArr = [];
  //create var count set to a num
  let count = 0;

//if first arg is less than second
if (start < end) {
   //reassign count variable to the param start
   count = start;
   //create a while loop to count all the way to end
   while (count <= end) {
     //push count to storArr
     storArr.push(count);
     //increment of one
     count++;
   }
  //else if end is less than start
 } else if (end < start) {
  //reassign count variable to the param end
  count = start;
  //create a while loop to count all the way to the start
  while (count >= end) {
    //push count to storArr
    storArr.push(count);
    //increment of one
    count--;
  }
 } 
   //return storArr
   return storArr;
   // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
