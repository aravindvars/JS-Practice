// let codes = {
//   49: 'Germany',
//   41: 'Switzerland',
//   44: 'Great Britain',
//   // ..,
//   1: 'USA',
// };
// codes[91] = 'India';
// codes[49] = 'Russia';
// delete codes[44];
// for (let code in codes) {
//   console.log(code, `:${codes[code]}`); // 1, 41, 44, 49
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// let sum = 0;
// for (let sal in salaries) {
//   sal2 = salaries[sal];
//   sum += sal2;
// }
// console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
function multiplyNumeric(obj) {
  for (let men in obj) {
    // console.log(typeof obj[men]);
    if (typeof obj[men] === 'number') {
      obj[men] *= 2;
      console.log(obj[men]);
    }
  }
  console.log(obj);
  return obj;
}
multiplyNumeric(menu);

// after the call
