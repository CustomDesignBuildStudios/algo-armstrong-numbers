const findArmstrongNumbers = require("./armstrongNumbers");
const shallowEqualArrays = require("shallow-equal").shallowEqualArrays;

function createArrayOfNum(maxValue) {
  return [...Array(maxValue).keys()];
}

describe("test armstrongNumbers", () => {
  test("findArmstrongNumbers(createArrayOfNum(999)) === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407]", () => {
    expect(shallowEqualArrays(
      findArmstrongNumbers(
        createArrayOfNum(999)),
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407])).toBe(true);
  });

  test("findArmstrongNumbers(createArrayOfNum(99)) === [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    expect(shallowEqualArrays(
      findArmstrongNumbers(
        createArrayOfNum(99)),
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true);
  });

  test("findArmstrongNumbers(createArrayOfNum(8)) === [0, 1, 2, 3, 4, 5, 6, 7]", () => {
    expect(shallowEqualArrays(
      findArmstrongNumbers(
        createArrayOfNum(8)),
        [0, 1, 2, 3, 4, 5, 6, 7])).toBe(true);
  });


});