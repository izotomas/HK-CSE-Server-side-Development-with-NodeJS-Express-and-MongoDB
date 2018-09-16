var rect = require('./rectangle');

function solveRect(l, b) {
    console.log(`solving for rectangle l=${l} and b=${b}`);
    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("Error: ", err.message);
        }
        else {
            console.log(`The area for rectangle l=${l} and b=${b} is: ${rectangle.area()}`);
            console.log(`The perimeter for rectangle l=${l} and b=${b} is: ${rectangle.perimeter()}`);

        }
    });
    console.log("This statement is called after rect()");

}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
