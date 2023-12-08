function nFactorial(n){
    if(n === 1 || n === 0) return 1
    if(n < 0) return "error"

    return n * nFactorial(n - 1)
}

console.log(nFactorial(7));


 
 //Methode 2
function factorial2(n) { 
    let number = 1; 
     
    if(n === 0)
        return 1;
    for (let i = 1; i <= n; i++) 
        number = number * i; 
    return number; 
}
 
console.log(factorial2(7));