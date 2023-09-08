// A curried function for calculating the area of a rectangle
function calculateArea(length) {
    return function(width) {
        return length * width;
    };
}

const calculateAreaWithLength10 = calculateArea(10); // Fix the length to 10

// Now, you can use the partially applied function to calculate areas with different widths
const area1 = calculateAreaWithLength10(5); // length = 10, width = 5
const area2 = calculateAreaWithLength10(8); // length = 10, width = 8

console.log(area1); // Outputs: 50
console.log(area2); // Outputs: 80
