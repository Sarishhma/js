var map = function (arr,fn){
    const newarr=[];
    for(let i =0;i<arr.length;i++){
        newarr[i]=fn(arr[i],i);
    }
    return newarr;
}
function double(n){
    return n*2;
}
console.log(map([1,2,3],double));