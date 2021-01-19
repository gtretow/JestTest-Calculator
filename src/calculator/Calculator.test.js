function Calc(firstNumber, secondNumber) {
  //Define the two properties
  this.firstNumber = firstNumber;
  this.secondNumber = secondNumber;
  //Define your add method that will return the result of adding two properties.
  this.add = function () {
    return this.firstNumber + this.secondNumber;
  };

  this.subtract = function () {
    return this.firstNumber - this.secondNumber;
  };

  this.multiply = function () {
    return this.firstNumber * this.secondNumber;
  };
}

const numberToAdd = new Calc(5, 10);
const numberToAddReversed = new Calc(10, 5);

const numberToSubtract = new Calc(5, 10);
const numberToSubtractReversed = new Calc(10, 5);

const numberToMulitply = new Calc(5, 10);
const numberToMultiplyReversed = new Calc(10, 5);

//TESTS
describe("check if the add method works as intended", () => {
  test("check is 5+10 is falsey", () => {
    expect(numberToAdd.add() === 50).toBeFalsy();
  });

  test("check is 5+10 truthy", () => {
    expect(numberToAdd.add() === 15).toBeTruthy();
  });

  test("check if numbers switched around is truthy", () => {
    expect(numberToAddReversed.add()).toEqual(15);
  });
});

//Group your subtract tests

describe("check if the subtract method works as intended", () => {
  test("check if 5-19 is not negative -5", () => {
    expect(numberToSubtract.subtract() === 5).toBeFalsy();
  });

  test("check if 5-10 is 5", () => {
    expect(numberToSubtract.subtract()).toEqual(-5);
  });

  test("check if the numbers reverse does not equal to same output by other variable", () => {
    expect(numberToSubtractReversed.subtract() !== -5).toBeTruthy();
  });
});

//Groopu your multiply tests
describe('Check if the multiply method works as intended', () => {
    test('Check if 5 and 10 is not 5', () => {
        expect(numberToMulitply.multiply() === 5).toBeFalsy();
    })
    test('Check if it is 5 * 10 are 50', () => {
        expect(numberToMulitply.multiply()).toEqual(50);
    })
    test('Check if 5 and 10 equal 50 with numbers switched around', () => {
        expect(numberToMultiplyReversed.multiply() === 50).toBeTruthy();
    })
})