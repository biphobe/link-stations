import { Station, StationWithPower, Device } from "./types";
import createStationWithPower from "./lib/createStationWithPower";
import getMostPowerfulStation from "./lib/getMostPowerfulStation";
import createOutputMessage from "./lib/createOutputMessage";

const BASE_STATIONS: Station[] = [[0, 0, 10],[20, 20, 5],[10, 0, 12]];
const devices: Device[] = [[0, 0], [100, 100], [15, 10], [18, 18]];

devices.forEach((device) => {
  const stationsWithPower: StationWithPower[] = BASE_STATIONS.map(createStationWithPower(device));
  const mostPowerfulStation = getMostPowerfulStation(stationsWithPower);
  const outputMessage = createOutputMessage(mostPowerfulStation, device);

  console.log(outputMessage);
})
