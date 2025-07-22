// const pracctice = setTimeout(()=>{
//     console.log("hello");

// },2000)

async function greet(){
    console.log("Hi");
    await new Promise((resolve)=>setTimeout(()=>{
        console.log("sarishma");
        resolve();
    },2000))
}
greet()