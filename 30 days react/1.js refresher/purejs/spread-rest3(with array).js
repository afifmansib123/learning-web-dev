const even = [0,2,4,8,10]
const odd = [1,3,5,7,9,11]

const evennumbers = [...even] 
const oddnumbers = [...odd]
const allnumbers = [...even , ...odd]

console.log(evennumbers)
console.log(oddnumbers)
console.log(allnumbers)