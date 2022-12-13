function printname( fname = 'john', lname = 'roy'){
    return fname + ' is ' + lname;
}
console.log(printname());
console.log(printname('albert','issac'));

const weight = (mass,N) => {
    return (mass * 1.62 + N )
}
console.log(weight(20,9.8));