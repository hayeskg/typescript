// Here are a set of katas you could do with TDD - make sure you write them with correct types! Each one should prompt you to discover something a bit new about how Typescript handles certain situations. In some situations, you might find it simpler to write some additional definitions outside of the function. These do get pretty tricky pretty quickly! If you need to practice more with simpler ones, grab some of the katas from Fundamentals, and rewrite these with typescript. You can also learn a lot from writing typed versions of functions for a utility library like lodash or ramda.

export function multiply(x: number, y: number): number {
  // take two numbers and return them multiplied together
  return x * y
}

export function sumSome(nums: number[]): number {
  // take an unlimited number of numbers and return the total
  let sum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

export function rotateString(stringToRotate: string, rotateBy?: number): string {
  // take a string and return another string that is 'rotated' (last letter moves to first position) the number of times in the second parameter (defaulting to 1) i.e.
  // rotateString('hello', 3) // 'llohe'
  // rotateString('bye') // 'eby'
  let stringArr: string[] = stringToRotate.split('');
  let stop: number = rotateBy || 1;
  for (let i = 1; i <= stop; i++) {
    let temp = stringArr.pop();
    stringArr.unshift(temp);
  }
  return stringArr.join('');

}

export function findMostSuitableOutfit() {
  // takes A) an array of outfits in the form of {top: string, trousers: string, shoes: string} and B) a desired singular outfit of the same form and returns the outfit in the array which has the most properties matching the desired outfit, with an additional `chosen: true` property. If there are no outfits that match any of the properties, it should return null. Try to avoid redefining any types!
  // you could make use of "intersections / unions" here, but there are probably simpler if wordier ways to solve this. You could come back to this after solving it and looking at these concepts here: https://www.typescriptlang.org/v2/docs/handbook/unions-and-intersections.html
}

export function navigate() {
  // should take an array with two numbers representing x,y co-ordinates, and an array of strings equal to 'north', 'east', 'south' or 'west'. It should return the new co-ordinates after the strings have been applied to the original co-ordinates ('north' increasing the 'y' co-ordinate by 1, etc.)
  // you shouldn't have to worry about (or test for) this function being called with an invalid string - have a look at "enums": https://www.typescriptlang.org/docs/handbook/enums.html
}

export function permissivelyAddFormNumbers() {
  // takes two numbers that may be either number or string types (i.e. 42 or '42'). It should add them together. If called with two numbers or one string / one number, it should return a number; if called with two strings, it should return a string.
  // have a look at "overloading functions": https://www.typescriptlang.org/docs/handbook/functions.html
}

export function apply() {
  // should take a value and a unary function, and call the function with that value. The function it takes, defined in your tests, should have a typed parameter
  // have a look at "generics": https://www.typescriptlang.org/docs/handbook/generics.html
}

export function replicateAndIterate() {
  // should take an object with a single key value pair, the value of which is a number. Create a new object of the same form, and return it with the value increased by 1.
  // use Typescript to guarantee that the object is not mutated to achieve this (then you don't need to test it!)
  // have a look at "interfaces" and "readonly properties": https://www.typescriptlang.org/docs/handbook/interfaces.html
}

export function shimObject() {
  // should take an object and an array of strings that are keys from the object (guarantee this!), then return another object with only those keys and all others discarded.
}
