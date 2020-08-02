import { Device, StationWithPower } from "../types";

export default (mostPowerfulStation: StationWithPower, device: Device): string => {
  const deviceCoords = `${device[0]},${device[1]}`;
  const stationCoords = `${mostPowerfulStation.station[0]},${mostPowerfulStation.station[1]}`;

  if (mostPowerfulStation.power > 0) {
    return `Best link station for point ${deviceCoords} is ${stationCoords} with power ${mostPowerfulStation.power}`;
  } else {
    return `No link station within reach for point ${deviceCoords}`;
  }
};
