var rect = {
		perimeter: (x, y) => (2*(y*x)),
		area: (x, y) => (y*x)	
}

function solveRect(l, b) {
		console.log(`solving for rectangle l=${l} and b=${b}`)
		if (l <= 0 || b <= 0) {
				console.log("Dimensions should be above zero.")
		}
		else {
				console.log("Perimeter: " + rect.perimeter(l, b));
				console.log("Area: " + rect.area(l, b));
		}
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
