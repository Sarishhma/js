var add = async function(Promise1,Promise2){
    const[var1,var2]= await Promise.all([Promise1,Promise2])
    return var1+var2;

}
add(Promise.resolve(2),Promise.resolve(3))
.then (console.log)