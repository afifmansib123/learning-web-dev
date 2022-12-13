//A callback is a function which can be passed as parameter to other function. See the example below.

const func1 = (n) => {
    return n*n;
}

const cube = (x) => {
    return func1(x) * x
}

console.log(cube(2));