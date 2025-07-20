let required = function(){
    let votingage =17;
   function result (){
    if (votingage<18){
        return "cant vote";
    }else{
        return "can vote";
    }
   }
   return result;
}
let final = required();
console.log(final())