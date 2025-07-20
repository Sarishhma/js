let args=[{},null,"3"];
let result = function(...args){
     let count = 0;
    for (let i =0;i<args.length;i++){
       
        count += 1;
    }
    return count;
}
console.log(result(...args))