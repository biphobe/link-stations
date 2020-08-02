import { Device, Station, StationWithPower } from "../types";
import getPower from "./getPower";

export default (device: Device) => {
  return (station: Station): StationWithPower => ({
    station,
    power: getPower(station, device)
  });
};
