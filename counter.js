//counter
function counter() {
    let count =0;
    function increment(){
        count++;
        console.log(count);
    }
    return increment;
}
const count1 = counter();
count1();
count1();
count1();