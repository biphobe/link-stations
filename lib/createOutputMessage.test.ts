import { strictEqual } from "assert";

import { Device, StationWithPower } from "../types";
import createOutputMessage from "./createOutputMessage";

describe("createOutputMessage", () => {
  const device: Device = [0, 0];

  it("should create correct output for station with power > 0", () => {
    const stationWithPower: StationWithPower = {
      station: [0, 0, 0],
      power: 5
    };
    const outputMessage = createOutputMessage(stationWithPower, device);
    const expectedOutputMessage = `Best link station for point ${device[0]},${device[1]} is ${stationWithPower.station[0]},${stationWithPower.station[1]} with power ${stationWithPower.power}`;

    strictEqual(outputMessage, expectedOutputMessage);
  });

  it("should create correct output for station with power === 0", () => {
    const stationWithPower: StationWithPower = {
      station: [0, 0, 0],
      power: 0
    };
    const outputMessage = createOutputMessage(stationWithPower, device);
    const expectedOutputMessage = `No link station within reach for point ${device[0]},${device[1]}`;

    strictEqual(outputMessage, expectedOutputMessage);
  });
});
