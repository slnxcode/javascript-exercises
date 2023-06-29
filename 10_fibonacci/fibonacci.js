const fibonacci = function(x) {
    if (x === 0) return 0;
    if (x < 0) return 'OOPS';
    const fib = [];
    fib[0] = 1;
    fib[1] = 1;

    for (let i = 2; i < 50; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    }
    x = fib[x - 1];
    return x;
    };

// Do not edit below this line
module.exports = fibonacci;
