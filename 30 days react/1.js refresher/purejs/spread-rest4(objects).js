const user = {
    name : 'Afif',
    age : '25',
    proession : 'scientist',
    sport : 'powerlifter',
}


const afifsclone = {...user};

console.log(afifsclone);

//adding during copy

const anotherclone = {...user, secondjob: 'engineer'}
console.log(anotherclone)