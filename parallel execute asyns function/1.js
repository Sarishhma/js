var promiseAll = function (functions){
    return new Promise ((resolve,reject)=>{
        let res =Array(functions.length)
        let waitingfor =functions.length
        for (let i=0;i<functions.length;i++){
functions[i]()
.then((result)=>{
res[i]= result;
waitingfor--;
      if (waitingfor===0)resolve(res)

    }).catch(reject)
        }
    })
}