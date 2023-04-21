function takeTimer(timer){
    return new Promise((resolve,reject)=>{
        console.log("we are in promise function");
        setTimeout(() => { if(typeof resolve=='function')resolve();reject();/* this is not run any way*/ },timer);
    });
}
async function Main(){
    try{
        await takeTimer(5000);
        await onFulFilled();
    }
    catch(error){
        await onRejected();
    }
}
Main();
function onFulFilled(){
    console.log("Hi ! I am Vishalkumar Prajapati");
}
function onRejected(){
    console.log("error !!!!!");
}