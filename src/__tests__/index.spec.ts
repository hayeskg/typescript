import {
  multiply,
  sumSome,
  findMostSuitableOutfit,
  navigate,
  permissivelyAddFormNumbers,
  apply,
  replicateAndIterate,
  shimObject,
  rotateString
} from '../index';


describe('multiply()', () => {
  test('multiply takes two numbers and multiplies them', () => {
    expect(multiply(4, 3)).toBe(12);
    expect(multiply(3, 33)).toBe(99);
  });
})

describe('sumSome()', () => {
  test('takes an unknown length of numbers array, returns the sum', () => {
    expect(sumSome([3, 4, 11])).toBe(18);
    expect(sumSome([3])).toBe(3);
  });
})

describe('rotateString()', () => {
  test('takes an unknown length of numbers array, returns the sum', () => {
    // expect(rotateString([3, 4, 11])).toBe(18);
  });
})



