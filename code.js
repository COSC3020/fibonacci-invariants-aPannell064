function fib(n) 
{    
    //Base Cases
    if(n == 0) {return [0]}
    else if (n == 1) {return [0, 1]}

    //Recursive Case
    else if (n > 1) { 
        var fibs = fib(n-1);
        fibs.push(fibs[n-1] + fibs[n-2]);
        return fibs;
    }

    //Excluded Case
    return [];
}
