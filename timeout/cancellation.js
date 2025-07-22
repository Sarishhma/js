var cancellation = function(args,fn,t){
    const canclefn = function(){
        clearTimeout(timer);
        console.log("Cancelled!");
    }
    const timer = setTimeout(function(){
        fn()
    },t)
    return canclefn;
}
let cancle =cancellation([2],x=>console.log(x*2),2000)
setTimeout(cancle,1000)
