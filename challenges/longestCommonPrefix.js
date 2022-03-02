// 14. Longest Common Prefix
// Easy

// 7128

// 2834

// Add to List

// Share
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function (strs) {
  // Longest common prefix string
  let longestCommonPrefix = "";
  // Base condition
  if (strs == null || strs.length == 0) {
    return longestCommonPrefix;
  }
  // Find the minimum length string from the array
  let minimumLength = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    minimumLength = Math.min(minimumLength, strs[i].length);
  }
  // Loop for the minimum length
  for (let i = 0; i < minimumLength; i++) {
    // Get the current character from first string
    let current = strs[0][i];
    // Check if this character is found in all other strings or not
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] != current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += current;
  }
  return longestCommonPrefix;
};

// OR //

let longestCommonPrefixAlt = function (strs) {
  let longest = "";
  if (strs.length === 0) {
    return longest;
  }

  let comparisonWord = strs[0];
  let comparisonIndex = 0;

  for (let comparisonLetter of comparisonWord) {
    for (let i = 1; i < strs.length; i++) {
      let currentWord = strs[i];
      let currentLetter = currentWord.charAt(comparisonIndex);

      if (
        comparisonIndex > currentWord.length ||
        comparisonLetter !== currentLetter
      ) {
        return longest;
      }
    }
    comparisonIndex++;
    longest += comparisonLetter;
  }

  return longest;
};
