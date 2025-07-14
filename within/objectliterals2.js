//object within functions
function outer(val){
    const obj ={
        add(val1){
            var a = val + val1
            return a;
        },
        sub(val1){
            var b = val-val1
            return b
        }
    }
    return obj
}
console.log(outer(10).add(5))
console.log(outer(10).sub(5))