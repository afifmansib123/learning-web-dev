const number = [1,2,3,4,5]

const sumarray = arr => {
    let sum = 0;
    arr.foreach(function(element) {
        sum = sum + element
    })
    return sum;
}

console.log(sumarray(number));