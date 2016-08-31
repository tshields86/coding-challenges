function primeFactors(n){
  let factors = [],
      divisor = 2;
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor);
       n = n / divisor;
       console.log(n);
    } else
      divisor++;
  }
  return factors;
}
console.log(primeFactors(69));
console.log(primeFactors(15));
console.log(primeFactors(100));
console.log(primeFactors(31));
