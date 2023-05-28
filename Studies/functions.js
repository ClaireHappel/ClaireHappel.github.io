/* *
 *  0. FUNCTIONS
 * 
 *  
 *  
 *  
 *  
 *  
 * 
 * 
 * 
 * */

/* *
 *  1. The two phases to using functions: First we must ____? Next we can execute a function by ____? 
 *    (or two other words for executing a function)
 * 
 *  First the function must be created, once it has been initialized it can then be executed by calling it, 
 *  using arguements if the object takes them.
 * 
 * */

/* *
 *  2. What's the difference between a function's parameters and arguments PASSED to a function?
 *  
 *  A parameter is a variable used as a placeholder within a function. Arguments are the values within the function 
 *  call itself- while they can be a variable representing a data type, they can also be any data type (for example,
 *  you could use the variable numArray or an actual array such as [1, 2, 3]). When these arguments are passed through 
 *  the function, they will be used in the places the parameter holds for them. 
 * 
 * */

/* *
 *  3. What's the syntax for a named function?
 * 
 *  The syntax for a named function is a function keyword, followed by a name, followed by parentheses (). Optionally 
 *  the function can have parameters and a return.
 * 
 * */

/* *
 *  4. How do we assign a function to a variable?
 * 
 *  Functions can be assigned to variables in the same way as any other data type. After a variable is created, it 
 *  can be assigned the value of an anonymous function. This function can then be used in a function call by using 
 *  the variable in the same way as we would the name of a named function.
 * 
 * */

/* *
 *  5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we
 *     specify inputs, and how do we specify outputs?
 * 
 *  A function's ability to take inputs is tied to it's parameters. If a function needs to take 
 *  inputs, setting a parameter for each argument that will be taken will allow all inputs to be
 *  taken in. 
 * 
 *  If we want to return a single value, then we need to make sure to specify a return within 
 *  our function. Without it, our function call will result in a value of undefined, regardless 
 *  of what other things might occur inside the function itself. Adding a return, we will 
 *  recieve some sort of output for each function call we make.
 *  
 * */

/* *
 *  6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is not true.
 * 
 *  
 * */

/* *
 *  7. Closures: Functions form closures around the data they house. If an object is returned from the function
 *     and is held in memory somewhere (reference), that closure stays alive, and data can continue to exist
 *     in these closures.
 *     
 * 
 * 
 * */