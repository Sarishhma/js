const add =(a,b)=> a+b;
const square =(a)=> a*a;
const double =(a)=> a*2;


let com = (f1,f2,f3)=>(a,b)=>f3(f2(f1(a,b)));
let result = com(add,square,double)
console.log(result(2,3));