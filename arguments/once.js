var once = function(fn){
    let called = false;
    return function one(...args){

        if (called)
         {
            return undefined;
    }
    called=true;
    return fn(...args);
}

}