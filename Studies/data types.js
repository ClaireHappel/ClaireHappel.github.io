/* *
 *  0. DATA TYPES
 * 
 *  JavaScript is a dynamic programming language that is weakly typed. Dynamic programming languages are a class of high
 *  level programming languages that execute many behaviors at runtime that other languages might perform during compilation.
 *  A programming language is loosely typed, or weakly typed, when it does not require diffrent variables and objects to be
 *  specified by the programmer. This means that variables in JavaScript are not tied to any one value type, and any variable 
 *  is able to be assigned or reassigned as needed to any data type. Addtionally, because it is weakly typed- JavaScript allows
 *  for implicit type conversion. Implicit type conversion is when instead of throwing an error, JavaScript will allow for two 
 *  different data types to be used in an operation and return what it believes the correct result to be (for example, if a
 *  number 3 is added with the string "3", JavaScript will return a 6 after converting the string value). This can cause odd
 *  results, particularly because of the way some of the data types are handled. There are a total of six simple data types 
 *  and three complex data types, and all have unique properties and oddities that set them apart within the language.
 * 
 * */

/* *
 *  1. Number
 * 
 *  Numbers, which are floating point values instead of integers within Javascript, can be either whole numbers (such as 9, 
 *  398420, or 78) or decimal numbers (such as 56.78, 9.32, or .000016). There are many ways to write a number or even 
 *  transform another data type into a number. Number(value) converts a value to the Number type, or if it is impossible 
 *  to convert- returns NaN. The JavaScript Number type is a double-precision 64-bit binary format IEEE 754 value, while 
 *  this is highly accurate, it is not limitless in terms of the numbers it can produce- and thus there can be issues with
 *  a value's magnitude and precision which will be discussed further in the operators section of this project.
 * 
 * */

/* *
 *  2. String
 * 
 *   Strings are one of the two data types that contain indexes and a length property, which makes them particularly easy
 *   to work with and manipulate. String can be created using single or double quotes, which are treated identically, or 
 *   using the backtick character ` in order to create template literals (also called template strings). A unique property
 *   worth noting regarding strings is that in javascript- 'a' is less than 'z'. This is because letters and characters do not
 *   follow alphabetical order but lexicographical order, and comparisons are measuring the Unicode value of the compared 
 *   values.
 * 
 * */

/* *
 *  3. Boolean
 * 
 *  There are only two boolean values: true and false. These values are often used in conditionals. The primitive Boolean 
 *  values true and false are distinctly different from the the true and false values of the Boolean object. To avoid any
 *  errors within code- avoic using Boolean() constructor with new to convert a non-boolean value to a boolean value.
 *  Instead, use Boolean as a function or the double bang operator to coherce the value into the primitive boolean.
 * 
 * */

/* *
 *  4. Array
 *   
 *   An array is .length 
 * 
 * */

/* *
 *  5. Object
 * 
 *   Unordered arrays, nulls, instanceof Date,
 * */

/* *
 *  6. Function
 * 
 * 
 * */

/* *
 *  7. undefined
 * 
 *  Undefined means does not exist or contains nothing, in the sense of this value was stated but was not defined. 
 * 
 * */
     //Checking for an undefined value

     let whatTimeIsIt; // => while the variable was created, it was never assigned

     console.log(whatTimeIsIt); // => 'undefined' is logged to the console

     //a conditional statement that checks if whatTimeIsIt is undefined
     if (whatTimeIsIt === undefined) { 
     whatTimeIsIt = 'Party Time!'; // => now whatTimeIsIt has been assigned a value of 'Party Time!'
     }

     console.log(whatTimeIsIt); // => 'Party Time!' is logged to the console

/* *
 *  8. null
 * 
 *  Null means does not exist or contains nothing, in the sense that a programmer wanted the value to be nothing- 
 *  as such the value it contains is nothing. It is important to be wary of typeof null, as this returns that the
 *  type of null is an object.
 * 
 * */

/* *
 *  9. NaN
 * 
 * 
 * */

/* *
 *  10. Infinity and -Infinity
 * 
 * 
 * */

/* *
 *  11. What is the difference between primitive/simple and complex data types?
 * 
 *  Simple, or primitive data types are the lowest type of data, meaning more complex types are formed from these
 *  simple data types. The six different simple data types are: strings, numbers, booleans, undefined, NaN, null. 
 *  All these primitives are static data- that is, that they have a size fixed at the compile time and will be 
 *  stored in a stack. All primitive values are atomic - an atomic action is one that effectively happens all at 
 *  once- think of it as meaning “one at a time”. When that concept meshes with primitives, it similarly is 
 *  indicating that primitives have only one value. Simple data tyes are also immutable. An immutable value is 
 *  one whose content cannot be changed without creating an entirely new value. The last property they all share
 *  is that they are all copied from one variable to the next when assigning or passing. This process is aptly 
 *  called "copy by value". 
 * 
 * */ 
     // Simple Data Types:

 /* *
 *  Complex values are of an indefinite size and aggregate values. As such they require dynamic memory allocation- 
 *  which means they will be allocated more space in memory over time via the heap where they are stored. There are 
 *  three complex data types: objects, arrays, and functions. Complex data types, unlike simple data types- are
 *  "copy by reference". This means that instead of a copy, variables will simply reference the data they are 
 *  assigned to. 
 * 
 * */
     // Complex Data Types:

/* *
 *  12. Primitive values are passed to a function BY COPY, complex values are by reference.
 *      What does that mean, and how are they different?
 * 
 *  When using any primitive value- a variable will make a copy of the value they are assigned. If there are 
 *  changes made to the original data- this will not impact the data stored in the variable. In a similar 
 *  vein, changing the variable will have no impact on the original data. 
 * 
 * */
     //Copy By Value:
     
       //number is assigned to a primitive value, 5
       let number = 5;
       //number 2 is copying the value of number
       let number2 = number;
     
       //what happens when we alter both variables?
       number -= 3;
       number2 += 6;
     
       //as their relationship began and ended with the moment of the copying- neither variable are impacted by the operations
       console.log(number); // => 2 is logged to console since 5 - 3 = 11
       console.log(number2); // => 11 is logged to console since 5 + 6 = 11

 /* * 
 *  Complex values will instead copy by reference. This means that variables will not make a copy of the value they
 *  are being assigned to, but instead will make a reference to that data. Any manipulation of variables will effect 
 *  the original data. Any changes to the original data will also effect the variable.
 *    
 * */

