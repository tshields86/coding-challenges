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
console.log(fibonacci3(10));
// Time complexity: O(N)

// third attempt using recursion
function fibonacci3(n) {
    if(n <= 2)
      return 1;
    else
      return fibonacci3(n - 1) + fibonacci3(n - 2);
};
console.log(fibonacci3(6));
console.log(fibonacci3(10));
// Time complexity: O(2^N)
