const myPromise= new Promise((res, rej)=>{
    let success=true;
    if(success){
        res("Promise resolved successfully!");
    } else {
        rej("Promise rejected.");
    }
})
myPromise
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.error(error);
});