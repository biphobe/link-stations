import { deepStrictEqual } from "assert";

import { Device, Station } from "../types";
import createStationWithPower from "./createStationWithPower";

describe("createStationWithPower", () => {
  it("should create StationWithPower based on device and station", () => {
    const device: Device = [0, 0];
    const station: Station = [0, 0, 10];

    const stationWithPower = createStationWithPower(device)(station);
    const expectedStationWithPower = {
      station,
      power: 100
    };

    deepStrictEqual(stationWithPower, expectedStationWithPower);
  });
});
