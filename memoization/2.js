function square(n){
    return n*n;
}

function memoize(func){
    let cache={}
    return function(...args){
         let n = JSON.stringify(args)
         if (n in cache){
            return cache[n]
         }else{
            let result = func.apply(this,args)
            cache[n]=result
            return result;
         }
    }
   
}
   let effresult =(memoize(square))
         console.time()
         console.log(effresult(5))
         console.timeEnd()
          console.time()
         console.log(effresult(5))
         console.timeEnd()