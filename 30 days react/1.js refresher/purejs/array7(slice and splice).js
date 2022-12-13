const numbers = [1, 2, 3, 4, 5]

console.log(numbers.splice()) // -> remove all items

const numbers1 = [1, 2, 3, 4, 5]
console.log(numbers1.splice(0, 1)) // remove the first item

const numbers3 = [1, 2, 3, 4, 5, 6]
console.log(numbers3.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

