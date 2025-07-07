console.log("start");
setTimeout(() => {
    console.log("timeout 1");
    setTimeout(() => {
        console.log("timeout 2");
        setTimeout(() => {
            console.log("timeout 3");
        }, 1000);
    }, 1000);
}, 1000);


function delay(ms, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, ms);
    });
}

console.log("start delay");
delay(1000, "Delay 1 completed")
    .then(() => delay(1000, "Delay 2 completed"))
    .then(() => delay(1000, "Delay 3 completed"))