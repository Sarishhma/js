var isEmpty = function(obj){
    if (Array.isArray(obj)){
        return obj.length ===0
    }else{
        let arr = Object.keys(obj);//object keys stored in arr as array
        return arr.length ===0
    }

}