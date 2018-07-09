// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (text) => {
  const arrlen = text.length;
  let newstr = '';
  for (let i = arrlen - 1; i >= 0; i -= 1) {
    newstr += text[i];
  }
  return newstr;
};

module.exports = reverse;
