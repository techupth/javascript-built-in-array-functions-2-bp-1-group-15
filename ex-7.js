function isPalindrome(string) {
  // Start coding here
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
 
//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false