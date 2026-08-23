//1.  www.codewars.com/kata/5266876b8f4bf2da9b000362
function likes(names) {
  if (names.length < 1) return 'no one likes this';
  if (names.length === 1) return `${names[0]} likes this`;
  if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  if (names.length > 3)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

// 2. https://www.codewars.com/kata/523f5d21c841566fde000009
var arrayDiff = (a, b) => {
  if (b.length < 1) return a;
  let res = new Array();
  for (const value of a) {
    if (b.indexOf(value) == -1) {
      res.push(value);
    }
  }
  return res;
};

// 3. https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
function filter_list(list) {
  return list.filter((idx) => typeof idx !== 'string');
}

// 4. https://www.codewars.com/kata/54da5a58ea159efa38000836
function findOdd(A) {
  if (A.length == 1) return A[0];

  const map = new Map();
  for (const index of A) {
    map.set(index, (map.get(index) || 0) + 1);
  }
  for (const [key, value] of map) {
    if (value % 2 !== 0) return key;
  }
}

// 5. https://www.codewars.com/kata/546e2562b03326a88e000020
const squareDigits = (num) =>
  +num
    .toString()
    .split('')
    .map((idx) => Number(idx ** 2).toString())
    .join('');

// 6. https://www.codewars.com/kata/54ff3102c1bad923760001f3
const getCount = (s) => {
  const vowels = 'aeiou';
  let sum = 0;
  for (const c of s) {
    if (vowels.includes(c)) sum += 1;
  }
  return sum;
};

// 7. https://www.codewars.com/kata/5656b6906de340bd1b0000ac
function longest(s1, s2) {
  const set = new Set();
  for (const idx of s1) {
    set.add(idx);
  }
  for (const idx of s2) {
    set.add(idx);
  }

  return Array.from(set).sort().join('');
}