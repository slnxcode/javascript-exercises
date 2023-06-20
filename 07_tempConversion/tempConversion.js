const convertToCelsius = (degrees) => {
  let convert = 5 / 9 * (degrees - 32);
  if (convert % 1 === 0) {return convert} else return Number(convert.toFixed(1));
};

const convertToFahrenheit = (degrees) => {
  let convert = (degrees * 9/5) + 32;
  if (convert % 1 === 0) {return convert} else return Number(convert.toFixed(1));
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
