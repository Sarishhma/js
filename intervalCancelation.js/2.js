function  cancellable(fn,args,t){

fn(...args);
    const timer = setInterval(()=>{
        fn(...args)

    },t)
    let out = ()=>clearInterval(timer)
    return out;


}
const cancle = (cancellable(x =>console.log( x*2),[2],2000))
setTimeout(()=>{
    cancle();
    console.log("cancled")
},10000)