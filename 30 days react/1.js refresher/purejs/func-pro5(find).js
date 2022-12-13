const numbers = [0,1,2,3,4,6,7,5,8,9,10]

const findthefive = numbers.find((n)=>n==5)
console.log(findthefive)

const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countryWithWay = countries.find((country) => country.includes('way'))
console.log(countryWithWay)

const countries1 = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const index = countries1.find((country) => country.includes('o'))
console.log(index)