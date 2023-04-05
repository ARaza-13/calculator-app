// a function that takes in multiple values and returns the sum //
function add(...args) {
    return args.reduce((total, current) => {
        return total + current;
    });
}

// a function that takes in multiple values and returns the difference //
function subtract(...args) {
    return args.reduce((total, current) => {
        return total - current;
    });
}

// a function that takes in multiple values and returns the product //
function multiply(...args) {
    return args.reduce((total, current) => {
        return total * current;
    });
}

// a function that takes in multiple values and returns the quotient //
function divide(...args) {
    return args.reduce((total, current) => {
        return total / current;
    });
}