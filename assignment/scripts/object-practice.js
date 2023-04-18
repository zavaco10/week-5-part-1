console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Cody',
  lastName: 'Zavadil',
  hasSiblings: true,
  shoeCount: 10,
  favThreeFoods: ['starch', 'veggies', 'protein']
// TODO - add properties here
};
console.log('A little about me:', me);
//end me

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
const fullName = (me.firstName + ' ' + me.lastName) 
//remember to pull the value from the 'me' variable by using me.

console.log(fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/console.log(me.favThreeFoods[0]) 
console.log(me.favThreeFoods[2])



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/console.log(me.shoeCount)
//add one to shoeCount then console.log shoeCount

me.shoeCount += 1 
//using shorthand operator to add 1 to existing shoeCount property

console.log(me.shoeCount)


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'red';
console.log(me)