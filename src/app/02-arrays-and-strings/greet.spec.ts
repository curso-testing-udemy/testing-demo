import { greet } from "./greet";


describe("greet", () => {
  it("the message should include the name", () => {
    expect(greet("Abel")).toContain("Abel");
  });
});
