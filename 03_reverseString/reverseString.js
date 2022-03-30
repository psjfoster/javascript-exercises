const reverseString = function(string) {
  let array = string.split("");
  let stringReversed = "";
  for (let i = array.length - 1; i >= 0; i--) {
    stringReversed = stringReversed.concat(array[i]);
  }
  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
