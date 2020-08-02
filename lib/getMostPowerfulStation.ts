import { StationWithPower } from "../types";

export default (stations: StationWithPower[]): StationWithPower => {
  const sortedStations = [...stations].sort((first, second) => {
    return second.power - first.power;
  });

  return sortedStations[0];
}
