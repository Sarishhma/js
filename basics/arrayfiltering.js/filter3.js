var filter =function(arr,fn){
    let newarr=[];
    for (let i=0;i<arr.length;i++){
        newarr=
   fn(arr[i],i);
    }
    return newarr;
}