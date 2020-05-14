import { Stock } from './stock';

describe('Stock', () => {
  it('should create an instance', () => {
    expect(new Stock('Test', 'TEST', 54, 55)).toBeTruthy();
  });
});
