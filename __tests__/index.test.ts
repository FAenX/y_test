import {Hello} from '../src/index';

describe('Calculator', () => {
  let greeter: Hello;

  beforeEach(() => {
    greeter = new Hello();
  });

  test('Greets', () => {
    expect(greeter.sayHello()).toBe('Hello World');
  });
});
