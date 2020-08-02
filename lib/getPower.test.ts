import { strictEqual } from "assert";

import getPower from "./getPower";

describe("getPower", () => {
  it("should calculate power correctly for positive integers", () => {
    const power = getPower([0, 0, 10], [0, 0]);

    strictEqual(power, 100);
  });

  it("should calculate power correctly for positive and negative integers", () => {
    const power = getPower([-10, 10, 30], [10, -10]);

    strictEqual(power, 2.943725152285938);
  });

  it("should return 0 if distance > station reach", () => {
    const power = getPower([0, 0, 5], [5, 5]);

    strictEqual(power, 0);
  });
});
