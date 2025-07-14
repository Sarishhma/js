var except = function (val){
   const obj = {
        tobe (val1){
            if (val ===val1 )
                return  true;
            else 
                throw new Error ("not equal")
        },
         not(val1){
            if (val !== val1)
                return true;
            else 
                throw new Error ('false');

        }
    }
    return obj
}
console.log(except(5).tobe(5));
console.log(except(5).not(3));
console.log(except(5).not(5)); 