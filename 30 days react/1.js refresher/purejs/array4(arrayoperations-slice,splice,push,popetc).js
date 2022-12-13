//join arrays
const numbers = [1,2,3,4,5];

console.log(numbers.join('#'));
console.log(numbers.join(' ., '));

// splice arrays

// difference between slice and splice : 
// splice() changes the original array whereas slice() doesn't but both of them returns array object.

//Splice: It takes three parameters:Starting position, number of items to be removed and number of items to be added.
console. log('splice start')
const numbers1 = [1,2,3,4,5];
console.log(numbers.splice(0,1))

const numbers2 = [1, 2, 3, 4, 5, 6]
console.log(numbers2.splice(3, 3, 7, 8, 9)) 
console.log('splice end');


//push array element
let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')
console.log(fruits);

//pop item - remove from end
const numbers3 = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end

console.log(numbers3)
// shitft and unshift - remove from beginning, add to beginning

const numbers4 = [1, 2, 3, 4, 5]
numbers4.shift() // -> remove one item from the beginning

console.log(numbers4)

const numbers5 = [1, 2, 3, 4, 5]
numbers5.unshift(0) // -> add one item from the beginning

console.log(numbers5)

//reverse numbers
const numbers6 = [1,2,3];
console.log(numbers6.reverse())

// sorting
const numbers7 = [1,5,3,2,4];
console.log(numbers7.sort())

// Arrays of arrays

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(frontEnd)
console.log(fullStack)
