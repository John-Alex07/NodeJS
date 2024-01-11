function factorial(n){
    if(n == 0)
        return 1;
    return n * factorial(n-1);
}

for( i = 1; i < 15; i++)
    console.log(factorial(i));
