import formatCurrency from "../../scripts/utils/money.js";

describe("test suite: format currency", () => {
  it("converts cents into dollars", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
});

describe("for edge case", () => {
  it("works with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it("rounds up to the nearest cent", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });

  it("rounds down", () => {
    expect(formatCurrency(2000.4)).toEqual("20.00");
  });

  it("works with negatve number", () => {
    expect(formatCurrency(-500)).toEqual("-5.00");
  });
});
