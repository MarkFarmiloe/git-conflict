const subtract = (a, b) => {
  return a - b;
};

const add = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  let result = 0;
  for (let i = 0; i < a; i++) {
    result = add(result, b);
  }
  return result;
};

const intDivision = (a, b) => {
  let count = 0,
    remainder = 0;
  while (a > 0) {
    count++;
    subtract(a, b);
  }
  count--;
  remainder = a + b;
  return count, remainder;
};
