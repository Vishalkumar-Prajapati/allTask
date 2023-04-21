// function takeUrl(arrOfUrls,callback){
//     arrOfUrls.forEach(url => {
//         fetch(url)
//         .then(() => callback(url));
//     });
// }
// const arr=["http://amazon.com","http://google.com","http://netflix.com","http://flipkart.in"];
// const obj=takeUrl(arr,(url)=>{console.log(`we got the response!! ${url}`)});


function takeUrl(url){
    return new Promise((resolve,reject)=>{
        fetch(url).then(() => resolve(url),()=>reject(url));
    })
}
const arr=["http://amazon.com","http://google.com","http://netflix.com","http://flipkart.in"];


arr.forEach(url => {
    takeUrl(url).then((url)=>{console.log(`we got the response!! ${url}`)},(url)=>{console.log(`we got the error!! ${url}`)});
});