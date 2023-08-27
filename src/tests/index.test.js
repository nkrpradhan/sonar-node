const add = require("../index");
describe("Add function functionality", () => {
  it("check add function return", () => {
    const result = add(5, 6);
    expect(result).toEqual(11);
  });
});
