const functions= [x=> x+1, x=> x*x, x=>2*x];
let x=3; 
var compose  = function(functions){
    for (i= functions.length - 1;i>=0;i--){
        x = functions[i](x);
    }
    return x;
}
console.log(compose(functions)); // Output: 81