const func1 = (a) => {
    const func2 = (b) => {
        const func3 = (c) => {
            return a * b + c;
        }
        return func3
    }
    return func2;
}

console.log(func1(2)(3)(4));

