console.log('---regular function---')
function add(num1, num2){
    return num1+num2;
}
console.log(add(12,14));



console.log('---array func---')
function addarray1(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + i;
    }
    return sum;
}
console.log(addarray1([1,2,3,4,5]));


console.log('---')
