function fib(n) 
{
    if(n == 0) {return [0]}
    else if (n == 1) {return [0, 1]}
    
    var fibs = fib(n-1);
    fibs[n] = fibs[n-1] + fibs[n-2];
    return fibs;
}