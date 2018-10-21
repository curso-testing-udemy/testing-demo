import { compute } from "./compute";


describe('compute', () => {
  it("should return 0 if the input is a negative number", () => {
    expect(compute(-1)).toBe(0);
  });
  it("should increase if the input is a positive number", () => {
    expect(compute(1)).toBe(2);
  });
});
