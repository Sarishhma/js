function about(){
    console.log("hi im sy");
}
const time=setInterval(about,3000)
setTimeout(()=>{
    clearInterval(time)
},8000)
