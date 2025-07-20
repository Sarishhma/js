// let fname=["sarishma"];
// let name2=fname.map(nickname);
// function nickname(name2){
//     return "prettiest";
// }
// console.log(name2);
let age=[16,17,28,30,22,24,26,28,30];
var filter = age.filter(voter)
function voter(age){
    return age>+18;
}
console.log(filter);