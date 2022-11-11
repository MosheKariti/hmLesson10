let userArray = [];

for (let i = 0; i < 10; i++) {
    userArray.push(prompt("Please insert a value"));
}

function printArray(x) {
    console.log(x);
}
userArray.forEach(printArray);


