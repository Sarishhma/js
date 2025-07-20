const add =(a,b)=> a+b;
const subtract =(a)=> a-6;
const mul =(a)=> a*3;

function add2(...fns){
    function a1(...values){
        return fns.reduce((fns,val)=>fns(val),values)
    }
    return a1;
}
let result = add2()
console.log (result(add,subtract,mul)(2,3));