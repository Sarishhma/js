let arr =[3,2,4,6,5,1]
var sortby =function(arr,fn){
    return arr.sort((a,b)=>fn(b)-fn(a))
}
const result = sortby(arr,x=>x)
console.log(result)
