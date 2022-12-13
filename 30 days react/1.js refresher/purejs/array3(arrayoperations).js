//initialize empty
const arr = Array();
console.log(arr);


//fill in no of item
const puttingnumberofitems = Array(8);
console.log(puttingnumberofitems);


//fill in with value
const fillvalues = puttingnumberofitems.fill(2);
console.log(fillvalues)


//concat arrays
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)


//index of 
console.log(thirdList.indexOf(4));


// if exist in array
const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana') 

if (index != -1) {
  console.log('exist in the array')
} else {
  console.log('does not exist in the array')
}

//index of and includes
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.lastIndexOf(2));//lastindex:to print index
console.log(numbers.includes(5)); //includes or not

//isarray or not
const numbers1 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers1))

//array to string
const numbers3 = [1,2,3,4,5,6];
console.log(numbers.toString());