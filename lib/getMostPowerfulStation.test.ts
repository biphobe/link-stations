import { deepStrictEqual } from "assert";

import { StationWithPower } from "../types";
import getMostPowerfulStation from "./getMostPowerfulStation";

describe("getMostPowerfulStation", () => {
  it("should return most powerful station", () => {
    const stations: StationWithPower[] = [
      {
        station: [0, 0, 0],
        power: 0
      },
      {
        station: [0, 0, 0],
        power: 10
      },
      {
        station: [0, 0, 0],
        power: 5
      }
    ];

    const mostPowerfulStation = getMostPowerfulStation(stations);

    deepStrictEqual(mostPowerfulStation, stations[1]);
  });
});
