const countries = ['bd','pak','india']
const countryfunc = countries.map(
    function (x){
        return x.toUpperCase()
    }
)
console.log(countryfunc)

const numbers = [1,2,3,4,5,6]
const squareofnumbers = numbers.map((n)=>n*n)
console.log(squareofnumbers)