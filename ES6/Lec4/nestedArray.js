// [[[[[[[[[[[[[[[[[[12,21,21,1]]]]]]]]]]]]]]]]]];
// [12,21,21,1]

const arr=[[['2']]];
// const a=arr.flat(20);
// console.log(a);
function name([params]) {
    if(params==='2'){
    return [params]
}
    console.log(params)
    return name(params);
}
console.log(name(arr));



