const palindromes = (str) => {
  str = str.replaceAll(/[.,?\!:~' ']/g, '').toLowerCase();
  let result = str.split('').reverse().join('');
  return result === str ? true : false; 
};

// Do not edit below this line
module.exports = palindromes;
