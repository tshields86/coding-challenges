function sumConsecutives(array) {
  let result = [];
  let total = 0;
  for (let i = 0; i < array.length; i ++) {
    if (array[i] != array[i+1]){
      total += array[i];
      result.push(total);
      total = 0;
    } else
      total += array[i]
  }
  return result
}
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]));
console.log(sumConsecutives([1,1,7,7,3]));
console.log(sumConsecutives([-5,-5,7,7,12,0]));
console.log(sumConsecutives([3,3,3,3,1]));

function sumConsecutives2(s) {
    let sum = 0,
    sums = [];
    for( let i = 0; i < s.length; i++){
      sum += s[i];
      if(s[i] != s[i+1]){
        sums.push(sum);
        sum = 0;
      }
    }
    return sums;
}
console.log(sumConsecutives2([1,4,4,4,0,4,3,3,1]));
console.log(sumConsecutives2([1,1,7,7,3]));
console.log(sumConsecutives2([-5,-5,7,7,12,0]));
console.log(sumConsecutives2([3,3,3,3,1]));
