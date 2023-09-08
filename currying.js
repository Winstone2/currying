// A regular function that takes three arguments
function add(a, b, c) {
    return a + b + c;
}

// Now, let's curry the 'add' function
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// You can use the curried function like this
const curriedAdd = curryAdd(1)(2)(3);
console.log(curriedAdd); // Outputs: 6
