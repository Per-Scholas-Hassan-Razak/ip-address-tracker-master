import { Location, LocationProps } from "./Location";

export interface GeolocationAPIProps {
  ip: string;
  isp: string;
  location: LocationProps;
}

export class GeolocationAPI {
  ip: string;
  isp: string;
  location: Location;
  domains?: string[];

  constructor({ ip, isp, location}: GeolocationAPIProps) {
    this.ip = ip;
    this.isp = isp;
    this.location = new Location(location);
  }

  get fullLocation(): string {
    return this.location.completeAddress;
  }


  get coordinates(): { latitude: number; longitude: number } {
    return this.location.coordinates;
  }

  get ispName(): string {
    return this.isp;
  }
}