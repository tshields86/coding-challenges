function palindrome(str) {
  let len = str.length;
  for (let i = 0; i < Math.floor(len/2); i++) {
    if (str[i] !== str[len - 1 - i]) return false
  }
  return true
}

// test
console.log(palindrome("racecar")); //true
console.log(palindrome("travis")); //false
console.log(palindrome("RacecaR")); //true
console.log(palindrome("raCecar")); //false
console.log(palindrome(12321)); //true
console.log(palindrome(123321)); //true

// - or -
// works with strings not numbers

function palindrome2(str) {
  if (str == str.split('').reverse().join(''))
    return true
  else
    return false
}

// test
console.log(palindrome2("racecar")); //true
console.log(palindrome2("travis")); //false
console.log(palindrome2("RacecaR")); //true
console.log(palindrome2("raCecar")); //false
