let arr =[8,4,1,2,3,5]
var sortby = function(arr,fn){
    return arr.sort((a,b)=>fn(a)-fn(b))
};
const result = sortby(arr,x=>x)
console.log(result)
const divide = sortby(arr,x=>x%3)
console.log(divide)
