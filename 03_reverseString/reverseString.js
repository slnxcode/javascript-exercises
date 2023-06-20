const reverseString = function(string) {
  let newArray = string.split('');
  let reverseArray = newArray.reverse();
  let finalReverse = reverseArray.join('');
  return finalReverse;
};

// Do not edit below this line
module.exports = reverseString;
