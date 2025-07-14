//printing hellow world using function with in function
function createHelloWorld(){
    function f2(){
        console.log("hello world");
    }
   return f2;
}
var world = createHelloWorld();
world();