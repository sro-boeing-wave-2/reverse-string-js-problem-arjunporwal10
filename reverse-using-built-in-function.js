// The intent of this file is to reverse
// the string using built in functions.
function revers(str) {
  return str.split('').reverse().join('');
}
const reverse = (text) => {
  const str = text;
  const rever = revers(str);
  return rever;
};

module.exports = reverse;
