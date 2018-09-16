module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => 
            callback(new Error("Dimensions should be above zero."),
            null),
            2000);
    }
    else {
        setTimeout(() => 
            callback(null, 
            {
                perimeter: () => (2*(y+x)), 
                area: () => (y*x)
            }),
            2000);
    }
}
