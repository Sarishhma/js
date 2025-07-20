var reduce = function(fn,init,nums){
    let total =init;
for (let i =0; i<nums.length;i++){
    total = fn(total ,nums[i]);
}
return total;
}
console.log(reduce((a,b)=>a+b,0,[1,2,3,4]));