const isString = (string) => {
  return string.toString();
};

const isBoolean = (string) => {
  let result = true;
  const str = string.toString().toLowerCase()
  if (str === 'false') {
    result = false;
  }
  return result;
}

const isNumber = (string) => {
  return Number(string);
}

module.exports = {
  isString,
  isBoolean,
  isNumber
}