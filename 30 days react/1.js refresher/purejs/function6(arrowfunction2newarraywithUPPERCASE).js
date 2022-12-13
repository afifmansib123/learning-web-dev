const changetouppercase = (arr) => {
    const newarr = []
    for(const x of arr){
        newarr.push(x.toUpperCase())
    }
    return newarr;
}
countries = ['germany','usa','finland','qatar'];
console.log(changetouppercase(countries));