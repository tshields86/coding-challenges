let a = 1, b = 2, sum = 0;

while (a <= 4000000) {
  if (a % 2 === 0)
    sum += a;

  let c = a + b;
  a = b;
  b = c;
}

console.log(sum);
