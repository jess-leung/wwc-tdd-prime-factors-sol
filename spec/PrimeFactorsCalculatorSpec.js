describe("Prime Factors Calculator", function() {
  var primeFactorsCalculator;

  beforeEach(function() {
    primeFactorsCalculator = new PrimeFactorsCalculator();
  });

  it("should return empty array for 1", function () {
    expect(primeFactorsCalculator.get(1)).toEqual([]);
  });

  it("should return [2] for 2", function () {
    expect(primeFactorsCalculator.get(2)).toEqual([2]);
  });

  it("should return [3] for 3", function () {
    expect(primeFactorsCalculator.get(3)).toEqual([3]);
  });

  it("should return [2, 2] for 4", function() {
    expect(primeFactorsCalculator.get(4)).toEqual([2, 2]);
  });

  it("should return [5] for 5", function() {
    expect(primeFactorsCalculator.get(5)).toEqual([5]);
  });

  it("should return [2, 3] for 6", function() {
    expect(primeFactorsCalculator.get(6)).toEqual([2, 3]);
  });

  it("should return [2, 2, 2] for 8", function() {
    expect(primeFactorsCalculator.get(8)).toEqual([2, 2, 2]);
  });

  it("should return [3, 3] for 9", function() {
    expect(primeFactorsCalculator.get(9)).toEqual([3, 3]);
  });

  it("should return [2, 5] for 10", function() {
    expect(primeFactorsCalculator.get(10)).toEqual([2, 5]);
  });

});
