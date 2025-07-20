const add =(a,b)=> a+b;
const subtract =(a)=> a-6;
const mul =(a)=> a*3;

const compareAll = (...funs)=>(a,b)=>
    funs.reduce((Val,fn,index)=>index === 0? fn(a,b):fn(Val),null);

const result =compareAll(add,subtract,mul);
console.log(result(2,3));