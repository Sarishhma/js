function loaded(){
    return new Promise(function(resolve,reject){
    let fileloaded = false;
    if(fileloaded){
        resolve("file loaded")
    }else{
        reject("file not loaded")
    }
})
}
async function myfunction(){
    try{
        const value = await loaded() 
        console.log(value)
    }
    catch(error){
        console.log (error)
    }

}
myfunction()