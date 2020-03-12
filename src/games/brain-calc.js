const operationSign = () => {
  const num = Math.floor((Math.random() * 3) + 1);
  let oper = '+';
  switch (num) {
    case 1:
      oper = '-';
      break;
    case 2:
      oper = '*';
      break;
    default:
      oper = '+';
      break;
  }
  return oper;
};

const calc = (oper, a, b) => {
  switch (oper) {
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return a + b;
  }
};

export { operationSign, calc };
