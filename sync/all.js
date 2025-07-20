async function demo() {
    console.log("Start");

    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

    console.log("After 2 seconds");
}

demo();
