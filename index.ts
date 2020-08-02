import { Station, StationWithPower, Device } from "./types";

const getPower = (station: Station, device: Device): number => {
  const [stationX, stationY, stationR] = station;
  const [deviceX, deviceY] = device;

  const distanceX = deviceX - stationX;
  const distanceY = deviceY - stationY;

  const distance = Math.sqrt(distanceX**2 + distanceY**2);

  if (distance > stationR) {
    return 0;
  }

  return (stationR - distance)**2;
};

const BASE_STATIONS: Station[] = [[0, 0, 10],[20, 20, 5],[10, 0, 12]];
const devices: Device[] = [[0, 0], [100, 100], [15, 10], [18, 18]];

devices.forEach((device) => {
  const linkStations: StationWithPower[] = BASE_STATIONS.map((station) => {
    const power = getPower(station, device);

    return {
      station,
      power
    }
  });
  const getMostPowerfulStation = (stations: StationWithPower[]) => {
    const sortedStations = stations.sort((first, second) => {
      return second.power - first.power;
    });

    return sortedStations[0];
  }
  const mostPowerfulStation = getMostPowerfulStation(linkStations);

  if (mostPowerfulStation.power > 0) {
    console.log(`Best link station for point ${device[0]},${device[1]} is ${mostPowerfulStation.station[0]},${mostPowerfulStation.station[1]} with power ${mostPowerfulStation.power}`);
  } else {
    console.log(`No link station within reach for point ${device[0]},${device[1]}`);
  }
})
