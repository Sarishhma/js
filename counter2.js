function createcounter(init){
    let n = init;
    var count ={
         increment()
{
    init++;
    return init;
} ,  
decrement(){
    init--;
    return init
;
} ,
reset(){
    init=n;
    return init;
}
}
return count;
}
let count1 = createcounter(2);
// console.log(count1.increment());
// console.log(count1.decrement());
 console.log(count1.reset());