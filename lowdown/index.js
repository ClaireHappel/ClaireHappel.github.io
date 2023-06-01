'use strict';

// YOU KNOW WHAT TO DO //

/**
 *  each: Designed to loop over a collection, Array or Object, and applies the 
 *  action Function to each value in the collection.
 * 
 *  @param {Array or Object} collection: The collection over which to iterate.
 *  @param {Function} action: The Function to be applied to each value in the 
 *  collection.
 **/

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;


/** 
*  identity: Designed to take any value. It then returns the value unchanged.
*
*  @param {Value} value: The value that is taken in, it can be anything.
*  @return {Value} value: The same value that was taken in, unchanged.
*
**/

function identity(value) {
    return value;
}

module.exports.identity = identity;

/** 
*  typeOf: Designed to take in any value and then evaluate the value, returning a string
*          indicating the data type of the value given.
*
*  @param {Value} value: The value that is taken in, it can be anything.
*  @return {String} string: A string that is the data type of the given value.
*
**/

function typeOf(value) {
    
    let type = '';
    
       if (typeof value === 'string') {
           type = 'string';
       } else  if (typeof value === 'number'){
           type = 'number';
       } else if (typeof value === 'boolean'){
           type = 'boolean';
       } else if (typeof value === 'function') {
           type = 'function';
       } else if (value === null) {
           type = 'null';
       } else if (typeof value === 'undefined') {
           type = 'undefined';
       } else if (typeof value === 'object') {
          if (Array.isArray(value) === true) {
             type = 'array';
          } else if (value instanceof Date) {
             type = 'date';
          } else {
             type = 'object';
          }
       }
       return type;
    }

    module.exports.typeOf = typeOf;

/** 
*  first: Designed to take an array and a number and return an empty array if the parameter array is not an array, the first element
*         of the array if number is not given or not a number, and if both parameters are defined- the function will return an array of 
*         elements that will be equal to number.
*
*  @param {Array} array: An array to iterate over.
*  @param {Number} number: A number to determine how many elements to return.
*  @return {Array} array: If the array parameter is not an array, return the empty array [].
*  @return {Array[0]} a single element: If parameter number is not given or not a number, return just the first element of the array.
*  @return {Array} array: Return an array of elements that will be equal to number.
*
**/

//init first to a function that takes an array 
function first(array, number) {
    //if an array is not an array or number is less than 0
    if (!Array.isArray(array) || number < 0) {
      return [];
    } else if (!number || number === NaN) {
      return array[0];
    }
   //if number exists
   if (number) {
       array.splice(number);
     }
    return array;
  }

  module.exports.first = first;

/** 
*  last: Designed to take an array and a number and return an empty array if the parameter array is not an array, the last element
*         of the array if number is not given or not a number, and if both parameters are defined- the function will return an array of 
*         elements that will be equal to number.
*
*   @param {Array} array: An array to iterate over.
*   @param {Number} number: A number to determine how many elements to return.
*   @return {Array} array: If the array parameter is not an array, return the empty array [].
*   @return {Array[0]} a single element: If parameter number is not given or not a number, return just the last element of the array.
*   @return {Array} array: Return an array of elements that will be equal to number.
*
**/

//init first to a function that takes an array 
function last(array, number) {
    //if an array is not an array or number is less than 0
    if (!Array.isArray(array) || number < 0) {
      return [];
    //if number does not exist or if number is typeof not a number  
    } else if (!number || number === NaN) {
      return array[array.length - 1];
    //if number is greater than array.length 
    } else if (number > array.length) {
      return array;
    }
   //if number exists
   if (number) {
    //I have no idea why this works-
    array.splice(array[array.length - 1], number - 1);
     }
    //return the array
    return array;
    }

 module.exports.last = last;  
  
  /** _.indexOf
  * Arguments:
  *   1) An array
  *   2) A value
  * Objectives:
  *   1) Return the index of <array> that is the first occurrance of <value>
  *   2) Return -1 if <value> is not in <array>
  *   3) Do not use [].indexOf()!
  * Edge Cases:
  *   1) What if <array> has multiple occurances of val?
  *   2) What if <val> isn't in <array>?
  * Examples:
  *   _.indexOf(["a","b","c"], "c") -> 2
  *   _.indexOf(["a","b","c"], "d") -> -1
  */
  
  //I: an array, a value
  //O: return the index of array that is the first occurance of value
  //C: do not use indexOf
  //E: if value is not in array- return -1;
  
  function indexOf(array, value) {
  
    //init storVal to the val of an empty array
    let storVal = []; 
    //loop through the array to get all values
    for (let i = 0; i < array.length; i++) {
    //loop through all values of storVal
    for (let j = 0; j < array.length; j++) {
      //if an array value is strictly equal to value, but value is not one of the values within [j]
      if (value === array[i] && value !== storVal[j]) {
        //push value to storVal
        storVal.push(value);
        //return value
        return i;
      }
    }
    }
    //return -1 if value is not in array
    return -1;
  }
  
  module.exports.indexOf = indexOf; 

  /** _.contains
  * Arguments:
  *   1) An array
  *   2) A value
  * Objectives:
  *   1) Return true if <array> contains <value>
  *   2) Return false otherwise
  *   3) You must use the ternary operator in your implementation.
  * Edge Cases:
  *   1) did you use === ?
  *   2) what if no <value> is given?
  * Examples:
  *   _.contains([1,"two", 3.14], "two") -> true
  */
  
  function contains(array, value) {
      return _.indexOf(array, value) > -1 ? true: false;
  }

  module.exports.contains = contains; 

  /** _.unique
  * Arguments:
  *   1) An array
  * Objectives:
  *   1) Return a new array of all elements from <array> with duplicates removed
  *   2) Use _.indexOf() from above
  * Examples:
  *   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
  */
  
 function unique(array) {
    var uniqueArr = [...new Set(array)];
    return uniqueArr;
  }

  module.exports.unique = unique; 
  
  /** _.filter
  * Arguments:
  *   1) An array
  *   2) A function
  * Objectives:
  *   1) call <function> for each element in <array> passing the arguments:
  *      the element, it's index, <array>
  *   2) return a new array of elements for which calling <function> returned true
  * Edge Cases:
  *   1) What if <function> returns something other than true or false?
  * Examples:
  *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
  * Extra Credit:
  *   use _.each in your implementation
  */
  
  //I: an array, a function with arguments element, index, array
  //O: return new array of elements that returned true when the function was called
  
  function filter(array, func) {
    //init storElem to an array literal
    let storElem = [];
    for (var index = 0; index < array.length; index++) {
      let element = array[index]
      if (func(element, index, array) === true && func(element, index, array) !== undefined) {
        storElem.push(element);
      }
    }
    return storElem;
  }

  module.exports.filter = filter; 
  
  /** _.reject
  * Arguments:
  *   1) An array
  *   2) A function
  * Objectives:
  *   1) call <function> for each element in <array> passing the arguments:
  *      the element, it's index, <array>
  *   2) return a new array of elements for which calling <function> returned false
  *   3) This is the logical inverse if _.filter()
  * Examples:
  *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
  */
  
  function reject(array, func) {
    //init storElem to an array literal
    let storElem = [];
    for (var index = 0; index < array.length; index++) {
      let element = array[index]
      if (func(element, index, array) !== true && func(element, index, array) !== undefined) {
        storElem.push(element);
      }
    }
    return storElem;
  }
  
  module.exports.reject = reject; 
  
  /** _.partition
  * Arguments:
  *   1) An array
  *   2) A function
  * Objectives:
  *   1) Call <function> for each element in <array> passing it the arguments:
  *       element, key, <array>
  *   2) Return an array that is made up of 2 sub arrays:
  *       0) An array that contains all the values for which <function> returned something truthy
  *       1) An array that contains all the values for which <function> returned something falsy
  * Edge Cases:
  *   1) This is going to return an array of arrays.
  * Examples:
  *   _.partition([1,2,3,4,5], function(element,index,arr){
  *     return element % 2 === 0;
  *   }); -> [[2,4],[1,3,5]]
  }
  */
  
  function partition(array, func) {
    let truthy = [];
    let falsey = [];
    for(let i = 0; i < array.length; i++){
        if(func(array[i], i, array)){
            truthy.push(array[i]);
        } else {
             falsey.push(array[i]);
        }
    }
    return [truthy , falsey];
  }

  module.exports.partition = partition; 
  
  /** _.map
  * Arguments:
  *   1) A collection
  *   2) a function
  * Objectives:
  *   1) call <function> for each element in <collection> passing the arguments:
  *        if <collection> is an array:
  *            the element, it's index, <collection>
  *        if <collection> is an object:
  *            the value, it's key, <collection>
  *   2) save the return value of each <function> call in a new array
  *   3) return the new array
  * Examples:
  *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
  */
  
  function map(collection, func) {
  
    //init result to an array literal
    let result = [];
  
    //use a conditional to sort collection into objects and arrays 
    if (Array.isArray(collection) === true) { //if collection is an array
        //create a for loop to iterate through the array
        for (let i = 0; i < collection.length; i++) {
          //if col. is array, call func with the element, index, and the col. Push the result into result
          result.push(func(collection[i], i, collection));
        }
    //else if it is an object
    } else { 
      //create a for in loop to iterate through the object
      for (let key in collection) {
      //if col. is object, call func with the value, it's key, and the col.
          result.push(func(collection[key], key, collection));
      }
    }
    //return the result array
    return result;
  }

  module.exports.map = map; 
  
  /** _.pluck
  * Arguments:
  *   1) An array of objects
  *   2) A property
  * Objectives:
  *   1) Return an array containing the value of <property> for every element in <array>
  *   2) You must use _.map() in your implementation.
  * Examples:
  *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
  */
  
  //I: an array of objects, a property (key of a key/value pair)
  //O: return an array containing the value of each object within the array's specified property
  
  function pluck(arrayObj, propKey) {
      var newarr = arrayObj.map(function(arr){
          return arr[propKey];
      });
      return newarr;
  }

  module.exports.pluck = pluck; 
  
  /** _.every
  * Arguments:
  *   1) A collection
  *   2) A function
  * Objectives:
  *   1) Call <function> for every element of <collection> with the paramaters:
  *      if <collection> is an array:
  *          current element, it's index, <collection>
  *      if <collection> is an object:
  *          current value, current key, <collection>
  *   2) If the return value of calling <function> for every element is true, return true
  *   3) If even one of them returns false, return false
  *   4) If <function> is not provided, return true if every element is truthy, otherwise return false
  * Edge Cases:
  *   1) what if <function> doesn't return a boolean
  *   2) What if <function> is not given?
  * Examples:
  *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
  *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
  */
  
  function every(collection, func) {
    let check = func || _.identity;
    if (collection.length === 0) {
        return true;
    }    
    return _.reduce(collection,  (prev, next) => {
        if (!prev) {
            return false;
        } else {
            return check(next) ? true : false;
        }
    }, true);
  };

  module.exports.every = every; 
  
  /** _.some
  * Arguments:
  *   1) A collection
  *   2) A function
  * Objectives:
  *   1) Call <function> for every element of <collection> with the paramaters:
  *       if <collection> is an array:
  *        current element, it's index, <collection>
  *       if <collection> is an object:
  *        current value, current key, <collection>
  *   2) If the return value of calling <function> is true for at least one element, return true
  *   3) If it is false for all elements, return false
  *   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
  * Edge Cases:
  *   1) what if <function> doesn't return a boolean
  *   2) What if <function> is not given?
  * Examples:
  *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
  *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
  */
  
  function some(collection, func) { 
  
    //init result to an array literal
     let result = [];
    //false counter
     let falseCount = 0;
     //create a boolean flag, set to true
     let resultCheck = true;
     
     //if function does not exist
     if (!func) {
       //loop through the array
       for (let k = 0; k < collection.length; k++) {
         //if a value within it is truthy
         if (collection[k] == true) {
           //return true
           return true;
           //else
         } else {
           //return false
           return false;
         }
       }
     }
       
     //use a conditional to sort collection into objects and arrays 
     if (Array.isArray(collection) === true) { //if collection is an array
         //create a for loop to iterate through the array
         for (let i = 0; i < collection.length; i++) {
           //if col. is array, call func with the element, index, and the col. Push the result into result
           result.push(func(collection[i], i, collection));
         }
     //else if it is an object
     } else { 
       //create a for in loop to iterate through the object
       for (let key in collection) {
       //if col. is object, call func with the value, it's key, and the col.
           result.push(func(collection[key], key, collection));
       }
     }
     
     //loop through result
     for (let j = 0; j < result.length; j++) {
       //if any value of result is false
       if (result[j] === false) {
         //increase falseCount by 1
         falseCount += 1;
       }
       //if falseCount is strictly equal to the length of the result array
       if (falseCount === result.length) {
         //switch resultCheck to false
         resultCheck = false;
       }
     }      
       //return resultCheck
       return resultCheck;
  }

  module.exports.some = some; 
  
  /** _.reduce
  * Arguments:
  *   1) An array
  *   2) A function
  *   3) A seed
  * Objectives:
  *   1) Call <function> for every element in <collection> passing the arguments:
  *         previous result, element, index
  *   2) Use the return value of <function> as the "previous result"
  *      for the next iteration
  *   3) On the very first iteration, use <seed> as the "previous result"
  *   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
  *   5) After the last iteration, return the return value of the final <function> call
  * Edge Cases:
  *   1) What if <seed> is not given?
  * Examples:
  *   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
  */

 function reduce(array, func, seed){
    // let array = [1, 2, 3, 4];
    /*
    let func = function(accumulator, current){ // accumulator = 1  current = 2
    // code to accumulate value
    return accumulator + current; // 1 + 3
    }   
     */
    // let seed;
    let result;
    // determine if seed was not passed in
    if (seed === undefined){
        // use first element of array as seed
        result = array[0]; // result = 1
        for (let i = 1; i < array.length; i++){ 
            // reassign result to func invocation
            result = func(result, array[i], i, array);
            
        }
    } else { // else it was
        result = seed; // result = 0
        for (let i = 0; i < array.length; i++){ // 
            // reassign result to func invocation
            result = func(result, array[i], i, array);
        }
    }
    return result;
  }

  module.exports.reduce = reduce; 

  /** _.extend
  * Arguments:
  *   1) An Object
  *   2) An Object
  *   ...Possibly more objects
  * Objectives:
  *   1) Copy properties from <object 2> to <object 1>
  *   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
  *   3) Return the update <object 1>
  * Examples:
  *   var data = {a:"one"};
  *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
  *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
  */
  
function extend(obj) {
    _.each(arguments, function(extendObj) {
        for (var key in extendObj)
            obj[key] = extendObj[key];
    });
    return obj;
  };

  module.exports.extend = extend; 
