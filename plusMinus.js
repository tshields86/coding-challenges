// takes in an array, totals the number of posiitve, negative, and zero values and logs their fractional representation in the array
function plusMinus(arr) {
  let totals = {pos: 0, neg: 0, zero: 0};
  arr.forEach(function(current, i) {
    if (current > 0) totals.pos ++;
    else if (current < 0) totals.neg ++;
    else totals.zero ++;
  })
  for (total in totals) console.log((totals[total]/arr.length).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
plusMinus([5, -10, -7, -4, 41, 1, 17]);
plusMinus([0, 11, 6, 0, -44, 12]);
