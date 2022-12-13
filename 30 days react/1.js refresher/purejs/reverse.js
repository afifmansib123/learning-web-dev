const array1 = [1,2,3,4,5];
const array2 = []

for (let elements = array1.length-1; elements>=0 ; elements = elements-1){
    array2.push(array1[elements]);
}
console.log(array2);