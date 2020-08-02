import { Station, StationWithPower, Device } from "./types";
import createStationWithPower from "./lib/createStationWithPower";
import getMostPowerfulStation from "./lib/getMostPowerfulStation";

const BASE_STATIONS: Station[] = [[0, 0, 10],[20, 20, 5],[10, 0, 12]];
const devices: Device[] = [[0, 0], [100, 100], [15, 10], [18, 18]];

devices.forEach((device) => {
  const linkStations: StationWithPower[] = BASE_STATIONS.map(createStationWithPower(device));
  const mostPowerfulStation = getMostPowerfulStation(linkStations);

  if (mostPowerfulStation.power > 0) {
    console.log(`Best link station for point ${device[0]},${device[1]} is ${mostPowerfulStation.station[0]},${mostPowerfulStation.station[1]} with power ${mostPowerfulStation.power}`);
  } else {
    console.log(`No link station within reach for point ${device[0]},${device[1]}`);
  }
})
