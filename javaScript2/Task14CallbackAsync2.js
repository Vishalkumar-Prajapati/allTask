// Write a function that takes an array of URLs and a callback function as arguments,
// and calls the callback function with an array of the responses from each URL.
function takeUrl(arrOfUrls,callback){
    arrOfUrls.forEach(url => {
        fetch(url)
        .then(() => callback(url));
    });
}
const arr=["http://amazon.com","http://google.com","http://netflix.com","http://flipkart.in"];
const obj=takeUrl(arr,(url)=>{console.log(`we got the response!! ${url}`)});