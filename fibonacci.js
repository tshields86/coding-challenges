// first attempt with looping
function fibonacci(n) {
    let a = 0, b = 1, f = 1;
    for(let i = 2; i <= n; i++) {
      f = a + b;
      a = b;
      b = f;
    }
    return f;
};
console.log(fibonacci(6));
console.log(fibonacci(10));

// second attempt using a while loop
function fibonacci2(num){
  let a = 1, b = 0, temp;
  while (num >= 1){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b;
};
console.log(fibonacci2(6));
console.log(fibonacci2(10));
// Time complexity: O(N)

function fibonacci3(n){
  var fibo = [0, 1];
  if (n <= 2) return 1;
  for (var i = 2; i <=n; i++ ){
   fibo[i] = fibo[i-1]+fibo[i-2];
  }
 return fibo[n];
}
console.log(fibonacci2(6));
console.log(fibonacci2(10));

// third attempt using recursion
function fibonacciRec(n) {
    if(n <= 1)
      return n;
    else
      return fibonacciRec(n - 1) + fibonacciRec(n - 2);
};
console.log(fibonacciRec(6));
console.log(fibonacciRec(10));
// Time complexity: O(2^N)
