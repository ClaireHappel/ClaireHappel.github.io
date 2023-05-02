/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a variable named 'animal' assing to an empty object
var animal = {};
//use dot not to give animal prop named species with val of any species
animal.species = 'cat';
//use bracket to give animal a property called name 
animal['name'] = 'Siegfried';

//using either to give animal property called noises with val of empty array
animal.noises = [];

//print animal object
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a variable named noises and assign to empty array
var noises = [];

//using bracket notation, give noises its first element, set to value of animal sound
noises[0] = 'meow';

//using an array function add another noise to the end of the array
noises.push('purr');

//using an array function add another noise to the start of the array
noises.unshift('brrrrroowww');

//use bracket notation to add another element to the end of noises
noises[noises.length] = 'mew';

//console log the length of noises
console.log(noises.length);

//console log the last element of noises without hard coding
console.log(noises[noises.length - 1])

//console log the whole array 
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//using bracket syntax assign the noises property on animal to the new noises array
animal['noises'] = noises

//using any syntax add another noise to the noises prop on animal
animal['noises'].push('broowooww');

//console log animal 
console.log(animal)




/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a var called animals and assign it to an empty array
var animals = [];

//push animal that was created into animals
animals.push(animal)

//console log animals 
console.log(animals)

//create a variable called duck and assign it to given data
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

//push duck to animals
animals.push(duck);

//log animals to console
console.log(animals);

//create two more animals with all properties, include at least two sounds 
var alligator = { species: 'alligator', name: 'Gator Tot', noises: ['hiss', 'chirp']};

var bear = { species: 'bear', name: 'Fuzzy Wuzzy', noises: ['growl', 'huff']};

//push both animals to 
animals.push(alligator, bear);

//log animals to console 
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create variable called friends and assign to an array
var friends = [];

//create function getRandom that takes animals array and returns a random index of the input array using Math.randomom
function getRandom(array) {

 //
 let max = Math.floor(array.length - 1);
 let min = Math.ceil(0);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

//

var indexToAdd = getRandom(animals);

friends.push(animals[indexToAdd].name);

console.log(friends)

animals[getRandom(animals)].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}