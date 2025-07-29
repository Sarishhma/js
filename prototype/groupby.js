let array =[
    {"id":1},
    {"id":2},
    {"id":3}

]
const _ = require("lodash");
Array.prototype.groupBy=function (fn){
    return _.groupBy(this ,fn)
};
const grouped = array.groupBy(item=>item.id%2==0?'even':'odd');
console.log(grouped);