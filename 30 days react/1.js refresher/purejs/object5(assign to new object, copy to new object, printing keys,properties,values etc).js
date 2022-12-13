//copy object

const person = {
    firstname : 'zian',
    llastname : 'chow',
    age : 28,
    year : 1995,
    skills : [
        'html',
        'js',
        'react',
    ],
    location : 'Dhaka Cantonment',
}

console.log('---method ouside object---')
person.method1 = function(){
    return this.firstname+this.llastname+' was born in '+this.year;
}
console.log(person.method1());

console.log('---copying whole Object to a new one---')
const person2 = Object.assign({}, person)
console.log('printing seondobject: \n');
console.log(person2)

//the keys object is to get these names of properties
console.log('---printing keys:properties of the objects---')
const keystouse = Object.keys(person);
console.log(keystouse)

//Object.values to get values of those properties
console.log('---using values---')
const valuestouse = Object.values(person);
console.log(valuestouse); 

// entries : print keys values and everything
console.log('---printing entities---')
const entries = Object.entries(person)
console.log(entries);




