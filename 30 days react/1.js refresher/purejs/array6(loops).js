/*

loops :

for
while
do while
for of
forEach
for in

*/

//for

let total = 0
for(let i=0;i<5;i++){
    if(i %2 == 0){
        //total = i+total
        total += i;
    }
}
console.log(total)

//while

let count = 2;
do{
    console.log('whatever');
    count++;
}while(count<5)

// for-of : print numbers only

const numbers1 = [1,2,3,4,5];
for (const n of numbers1){
    console.log(n);
}
console.log('-----------------');
//for-each : print number and index

console.log('printing forEach')

const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number, i) => {
  console.log(number, i)
})

//for in 

const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'D3.js'],
  }
  
  for (const key in user) {
    console.log(key, user[key])
  }

//break and continue : break and skip

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
      break
    }
    console.log(i)
  }

  console.log('-----------------')

  for (let i = 0; i <= 5; i++) {
    if (i == 3) {
      continue
    }
    console.log(i)
  }