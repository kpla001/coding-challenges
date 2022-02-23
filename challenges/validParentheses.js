// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function (s) {
  // Stack to store left symbols
  const leftSymbols = [];
  // Loop for each character of the string
  for (let i = 0; i < s.length; i++) {
    // If left symbol is encountered
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      leftSymbols.push(s[i]);
    }
    // If right symbol is encountered
    else if (
      s[i] === ")" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "("
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "}" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "{"
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "]" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "["
    ) {
      leftSymbols.pop();
    }
    // If none of the valid symbols is encountered
    else {
      return false;
    }
  }
  return leftSymbols.length === 0;
};

// OR //

let isValidAlt = function (s) {
  let stack = new Stack();

  for (let character of s) {
    if (character === "{" || character === "[" || character === "(") {
      stack.push(character);
    } else if (!stack.isEmpty() && character === "}" && stack.peek() === "{") {
      stack.pop();
    } else if (!stack.isEmpty() && character === ")" && stack.peek() === "(") {
      stack.pop();
    } else if (!stack.isEmpty() && character === "]" && stack.peek() === "[") {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.isEmpty();
};

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }

  getCount() {
    return this.count;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  peek() {
    let result = this.storage[this.count - 1];
    return result;
  }

  isEmpty() {
    return this.count === 0;
  }
}
