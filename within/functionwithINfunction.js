// now lets do function within a function
function sum(){
    function f(a,b){
        const sum = a+b;
        return sum;
    }
    return f;
}
var a= sum();
console.log(a(5,3)); // Outputs: 8