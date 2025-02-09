function fib(n) 
{
    var fibs = [];
    if(n == 0) {
        fibs[n] = n; 
    }

    else if (n > 0) {
        fibs = fib(n-1);

        if (n == 1) {
            fibs[n] = n
        }

        else {
        fibs.push(fibs[n-1] + fibs[n-2]);
        }
    }
    return fibs;
}