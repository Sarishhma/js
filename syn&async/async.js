const myPromise =new Promise(function(resolve,reject){
    let fileloaded = false;
    if(fileloaded){
        resolve("file loaded")
    }else{
        reject("file not loaded")
    }
})
myPromise.then(value=>console.log(value))

.catch(error=>console.log(error))