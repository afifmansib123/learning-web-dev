const countries = ['finland','russian','sweden','icceland','kennland']

const  countrieswithland = countries.filter((x)=>
    x.includes('land')
    )
console.log(countrieswithland)

const numbers = [0,1,2,3,4,5,6,7,8,9,10]
const even = numbers.filter((n)=> n%2 == 0)
const odd = numbers.filter((n)=> n%2 != 0)

console.log(odd)
console.log(even)