const add =(a,b)=> a+b;
const subtract =(a,b)=> a-b;
const mul =(a,b)=> a*b;

let result =(f1,f2,f3)=>(a,b)=>f3(f2(f1(a,b),b),b);
let final =result(add,subtract,mul);
console.log(final(2,3));