function isPalindrome(string) {
  // Start coding here
  let breakString = string.split("");
  let reversedString = breakString.reverse();
  let joinedString = reversedString.join("");
  return joinedString === string;
};

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false