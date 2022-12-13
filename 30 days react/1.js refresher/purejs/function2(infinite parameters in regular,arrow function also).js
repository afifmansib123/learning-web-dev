//argument - infinite arguments
console.log('---function for infinite arguments using arguments keyword---')

function sumnumbers(){
    let sum = 0;
    for(let i=0;i<arguments.length;i++){
        sum = sum + arguments[i]
    }
    return sum;
}
console.log(sumnumbers(1,2,3,4,5,6,7,8,9));

//arrow function -> infinite using args
console.log('---arrow function infinite arguuments----')
const sumnumbers1 = (...args) => {
    let sum = 0;
    for(const x of args){
        sum = sum + x;
    }
    return sum;
}

console.log(sumnumbers1(1,2,3,4,5,6,7,8,9,10));
