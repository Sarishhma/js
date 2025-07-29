let num = [null,{},3]
Array.prototype.last=function(nums){
if (this.length === 0){
     return -1;
}


   
return this[this.length-1];
}
console.log(num.last())