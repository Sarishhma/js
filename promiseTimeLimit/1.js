var TimeLimit = function(fn,t){
    return async function(...args){
    return new Promise((resolve,reject)=>{
        const timeout =setTimeout(()=>{
       reject("time exceeded");
    },t)
    fn(...args).then((result)=>{
        clearTimeout(timeout)
        resolve(result);
    })
    .catch((err)=>{
        clearTimeout(timeout)
        reject(err)
    })
 
} )
}
}
