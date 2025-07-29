Array.prototype.groupBy= function(fn){
    return this.reduce((grouped,item)=>{
        const key = fn(item)
        if (!grouped[key]){
            grouped[key]=[];
        }
grouped[key].push(item)
return grouped;
    },{})
}
let array =[
    {"id":1},
    {"id":2},
    {"id":3}

]
const grp = array.groupBy(item=>item%2===0?"even":"odd");
console.log(grp)
