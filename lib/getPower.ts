import { Station, Device } from "../types";

export default (station: Station, device: Device): number => {
  const [stationX, stationY, stationR] = station;
  const [deviceX, deviceY] = device;

  const distanceX = deviceX - stationX;
  const distanceY = deviceY - stationY;

  const distance = Math.sqrt(distanceX**2 + distanceY**2);

  if (distance > stationR) {
    return 0;
  }

  return (stationR - distance)**2;
}
