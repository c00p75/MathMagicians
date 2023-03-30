import calculate from '../logic/calculate';

describe('Test that when given a button name and a calculator Obj object, the calculator will return an updated calculator Obj object', () => {
  let Obj = null;

  beforeEach(() => {
    Obj = {
      total: null,
      next: null,
      operation: null,
    };
  });

  test('test if Obj.next will update', () => {
    expect(calculate(Obj, '0')).toStrictEqual({ total: null, next: '0' });
  });

  test('test if Obj.next and Obj.operation will update', () => {
    Obj = calculate(Obj, '4');
    Obj = calculate(Obj, '-');
    expect(calculate(Obj, '9')).toStrictEqual({ total: '4', next: '9', operation: '-' });
  });

  test('Test if passing two numbers and + operator will return their sum', () => {
    Obj = calculate(Obj, '4');
    Obj = calculate(Obj, '+');
    Obj = calculate(Obj, '9');
    expect(calculate(Obj, '=')).toStrictEqual({ total: '13', next: null, operation: null });
  });

  test('Test if passing two numbers and - operator will return their difference', () => {
    Obj = calculate(Obj, '10');
    Obj = calculate(Obj, '-');
    Obj = calculate(Obj, '1');
    expect(calculate(Obj, '=')).toStrictEqual({ total: '9', next: null, operation: null });
  });

  test('Test if passing two numbers and x operator will return their product', () => {
    Obj = calculate(Obj, '2');
    Obj = calculate(Obj, 'x');
    Obj = calculate(Obj, '100');
    expect(calculate(Obj, '=')).toStrictEqual({ total: '200', next: null, operation: null });
  });

  test('Test if passing two numbers and ÷ operator will return their quotient', () => {
    Obj = calculate(Obj, '50');
    Obj = calculate(Obj, '÷');
    Obj = calculate(Obj, '5');
    expect(calculate(Obj, '=')).toStrictEqual({ total: '10', next: null, operation: null });
  });
});
