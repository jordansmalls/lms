// do 5 codewars challenges marked strings

// 1. https://www.codewars.com/kata/5168bb5dfe9a00b126000018
const solution = (s) => s.split('').reverse().join('');

// 2. https://www.codewars.com/kata/5265326f5fda8eb1160004c8
const numberToString = (n) => n.toString();

// 3. https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name) {
  let arr = name.split(' ');
  return `${arr[0][0].toUpperCase()}.${arr[1][0].toUpperCase()}`;
}
// 4. https://www.codewars.com/kata/57eae65a4321032ce000002d
const fakeBin = (x) => {
  let newStr = '';
  for (let i = 0; i <= x.length; i++) {
    if (x.split('')[i] < 5) {
      newStr += '0';
    } else if (x.split('')[i] >= 5) {
      newStr += '1';
    }
  }
  return newStr;
};
// 5. https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
const repeatStr = (n, s) => s.repeat(n);