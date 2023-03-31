import operate from '../logic/operate';

describe('Test for operate function logic by taking two numbers and an operator as argumenets', () => {
  test('Return sum', () => {
    expect(operate(1, 52, '+')).toEqual('53');
  });
  test('Return difference', () => {
    expect(operate(18, 13, '-')).toEqual('5');
  });
  test('Multiply numbers', () => {
    expect(operate(4, 4, 'x')).toEqual('16');
  });
  test('Divide numbers', () => {
    expect(operate(11, 11, '÷')).toEqual('1');
  });
  test('Modulo numbers', () => {
    expect(operate(11, 4, '%')).toEqual('3');
  });
});
