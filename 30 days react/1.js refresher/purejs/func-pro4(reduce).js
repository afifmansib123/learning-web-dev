//Like forEach, map, and filter, reduce is also used with an array and it returns a single value. 

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, cur) => acc + cur,8);
console.log(sum)

const multiply = numbers.reduce((acc, cur) => acc * cur,2)
console.log(multiply)

