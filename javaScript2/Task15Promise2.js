function takeNumber(i){
        function mainFunction(resolve,reject) {
            setTimeout(() => {
                resolve(i);
            }, 1000*i);
        }
        return new Promise(mainFunction);
    }
const onFulFilled=(i)=>{console.log(`second:${i}`)}
const onRejected=()=>{console.log(`error.....`);}
for(let i=0;i<=10;i++){
    const objFunc=takeNumber(i);
    objFunc.then(onFulFilled,onRejected);
}