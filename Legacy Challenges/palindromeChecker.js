//using two pointer
function palindromeChecker1(palindromeStr) {
  //[^...]: Inside square brackets, ^ negates the character class, matching any character not listed.
  //^: At the beginning of the regex, it matches the start of a line.

  const str = palindromeStr.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  let left = 0;
  let right = str.length - 1;

  while (left !== right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    }
    else {
      return false
    }
  }

  return true;
}
console.log(palindromeChecker1('Race Car'));

/* //not accurate
//using .reverse()
function palindromeChecker2(palindromeStr) {
  //[^...]: Inside square brackets, ^ negates the character class, matching any character not listed.
  //^: At the beginning of the regex, it matches the start of a line.

  const str = palindromeStr.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  //str.split() = split each caharcter from string to array
  //str.join() = combine an array of characters into a string

  if (str.split().reverse().join() === str) {
    return true;
  }
  else {
    return false
  }
}
console.log(palindromeChecker2('not a palindrome'));
*/