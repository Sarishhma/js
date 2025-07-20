let age=[16,18,20,22,24,26,28,30];
var filter = age.filter(vote)
function vote(age){
    return age >+18;
}
console.log(filter);