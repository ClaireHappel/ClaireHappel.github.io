/* *
 *  0. OPERATORS
 *    
 *  There are several different operator types used within expressions in order to evaluate, alter, 
 *  or assign values within programs. If an entire javascript file is a car, and the expressions 
 *  inside it are the critical parts needed to create the car itself- the operators are the gears, 
 *  belts and pistons that allow for the components of the vehicle to operate intended instead of 
 *  malfunctioning. Operators help expressions (aka units of code) to resolve to a value. Some 
 *  types of operators present within javascript are assignment operators, arithmetic operators, 
 *  comparison operators, logical operators, unary operators, and ternary operators.
 *  
 * */

/* *
 *  1. Assignment operators
 * 
 *  The simple assignment operator is the equal sign (=) which is used to assign the right hand 
 *  operand to the left hand operand ( in the case of let x = 1 for example, 1 is the right hand 
 *  operand being assigned the the left operand x ). The simple assignment operator can be used with 
 *  a multitude of other operators in order to assign a value while also performing another action 
 *  to the value being assigned. Take for example sum += 1. The arithmetic addition operator + with 
 *  the simple assignment operator = creates a new operator called the addition assignment operator. 
 * 
 * */
     // Simple Assignment Operator (=):
       
       //assigning petNumber to the value of 2 with the equal sign
       let petNumber = 2;

     //Addition Assignment Operator (+=): 
       
       let sum = 0;
       sum += 1; // => sum incremented by one and reassigned from zero to the new value.
       console.log(sum); // => 1 is logged to the console

     //Subtraction Assignment Operator (-=):

       let subtract = 4;
       subtract -= 2; // => subtract decremented by two and reassigned to the new value
       console.log(subtract); // => 2 is logged to the console

     //Multiplication Assignment Operator (*=):

       let multiply = 2;
       multiply *= 2; // multiply is multiplied by 2 and the value is reassigned
       console.log(multiply); // => 4 is logged to the console 

     //Division Assignment Operator (/=):

       let divide = 10;
       divide /= 2; // => divide is divided by 2 and the value is reassigned
       console.log(divide); // => 5 is logged to the console 

     //Remainder Assignment	Operator (%=):
       
       let remainder = 20;
       remainder %= 2; // => 20/2 produces a remainder of 0. 0 is than reassigned to remainder	
       console.log(remainder); // => 0 is logged to the console

     //Exponentiation Assignment Operator (**=):

       let exponential = 3;
       exponential **= 3; // => 3 * 3 * 3 produces the value 27, which is reassigned to exoponential
       console.log(exponential) // => 27 is looged to the console

/* *
 *  2. Arithmetic operators
 *  
 *  Arithmetic operators work with numbers or variables that represent numbers. They will evaluate to a number 
 *  value which will then be returned. They can work with both whole numbers (for example: 2, 463287, 86) or numbers
 *  that have a decimal point (for example: 4.5, 34.0000344, or .098). Arithmetic operators, as implied by their name- 
 *  involve arithmetic concepts such as adding, subtracting, dividing, or multiplying. One way that Javascript differs 
 *  from standard arithmetic found in a classroom is the way that it handles division. If the number 0 is divided by 0, 
 *  it will return NaN. If a positive number is divided by 0, it will return infinity. On the other hand, a negative 
 *  number divided by 0 will return negative infinity. Similarly, odd things can happen when using floating point numbers 
 *  with arithmetic numbers (for example, 0.1 + 0.2 does not equal 0.3, but instead 0.30000000000000004). This is due 
 *  to how the values are calculated within the computer in binary, and thus not an error, but instead a quirk of 
 *  many programming languages. 
 * 
 * */
     //   Arithmetic Operators
     //   + Addition Operator
     //   - Subtraction Operator
     //   * Multiplication Operator
     //   / Division Operator
     //   ** Exponentiation Operator (ES7)
     //   % Modulus Operator (Division Remainder Operator)
     //   ++ Increment [ Post / Pre ]
     //   -- Decrement [ Post / Pre ]


/* *
 *  3. Comparison operators
 *  
 *  Comparison operators compare their operands to assess whether the comparison is true or false, returning the boolean
 *  value. Different data types are assessed in different ways. While numbers are evaluated simarly to how they would 
 *  be in a standard math class (for example, 2 > 4 would return a false result since 2 is not greater than 4), strings 
 *  are compared based on their Unicode values, which places letters down the alphabet at a higher instead of lower value. 
 *  If two data types being compared are not of the same type, Javascript will attempt to convert them during the comparison
 *  process, which can cause odd values. The strict equality and strict inequality operators however, will not perform 
 *  type conversion- instead strictly comparing for the exact specified value. 
 *  
 * */
     // Equal (==)	Returns true if the operands are equal.	3 == var1
     // "3" == var1
     // 3 == '3'
     // Not Equal (!=)	Returns true if the operands are not equal.	var1 != 4
     // var2 != "3"
     // Strict Equal (===)	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS.	3 === var1
     // Strict Not Equal (!==)	Returns true if the operands are of the same type but not equal, or are of different type.	var1 !== "3"
     // 3 !== '3'
     // Greater Than (>)	Returns true if the left operand is greater than the right operand.	var2 > var1
     // "12" > 2
     // Greater Than or Equal (>=)	Returns true if the left operand is greater than or equal to the right operand.	var2 >= var1
     // var1 >= 3
     // Less Than (<)	Returns true if the left operand is less than the right operand.	var1 < var2
     // "2" < 12
     // Less Than or Equal (<=)	Returns true if the left operand is less than or equal to the right operand.

/* *
 *  4. Logical operators
 *  
 *  The three logical operates are && (also known as the logical AND operator), || (also known as the logical OR operator),
 *  and ! (also known as the logical NOT operator or bang). All three are typically used to combine boolean values and 
 *  generally speaking, return one as well. However, it is worth noting that in addition to evaluating from left to right, 
 *  || and && are both capable of short-circuiting. What does short circuiting do exactly? In the case of the || operator- 
 *  the operator will return the first truthy value, but if no values are truthy, it will return the last, falsey value. 
 *  In the case of the && operator- it will return the first falsy value, and if none are falsy, it return the last, truthy 
 *  value. The logical NOT operator also has its own unique use cases- it can be used on a variable to provide its logical 
 *  opposite, or if use twice (!!) can coherce a variable from truthy to boolean true, or from falsey to boolean false.
 * 
 * */
     //Logical AND:

     //note: falsey values in javascript include: false , 0 , -0 , 0n , "" , null , undefined , and NaN
     console.log("" && "Red");    // =>  "" is returned as a falsey value
     console.log("Blue" && 'Red' && false); // => false is returned as a falsey value
     console.log("Blue" && "Red"); // => "Red" is returned since no values are falsey
     
     // Logical OR:

     //note: values are truthy unless they are defined as falsey 
     console.log("" || true || "Red"); // => true is returned as a value since "" is falsey
     console.log("Blue" || "Red"); // => "Blue" is returned because a string value is always considered to be true
     console.log(false || -0 || null); // => null is returned since no values are truthy

     // logical NOT:

     //init real to the value of true
     let real = true;

     console.log(!real); // => false is returned since the logical opposite of real is a falsey value;
     console.log(!undefined); // => true is returned since the logical opposite of undefined is a truthy value
     console.log(!!"Red"); // => returns a true boolean since Red is truthy
     console.log(!!null); // => returns a false boolean since null is falsey

/* *
 *  5. Unary operators
 * 
 *     Unary operators are operators that perform an action on a single operand. there are two arithmetic operators
 *     that are unary: + and -, and both must prefix its single operand
 * */
     // +x	Unary Plus	Convert a value into a number
     // -x	Unary Minus	Convert a value into a number and negate it
     // ++x	Increment Operator (Prefix)	Add one to the value
     // –x	Decrement Operator (Prefix)	Subtract one from the value
     // x++	Increment Operator (Postfix)	Add one to the value
     // x–	Decrement Operator (Postfix)
     // x-- Decrement Operator 

/* *
 *  6. Ternary operator
 * 
 *  The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition 
 *  followed by a question mark (?), then an expression to execute if the condition is truthy followed by a 
 *  colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently 
 *  used as an alternative to an if...else statement.
 * 
 * */