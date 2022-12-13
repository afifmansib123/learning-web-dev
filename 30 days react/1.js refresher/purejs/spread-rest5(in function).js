const sumnumbers = (...args) => {
    let sum = 0;
    for (let num of args){
        sum = sum + num;
    }
    return sum
}
console.log(sumnumbers(1,2,5,6,7))
console.log()