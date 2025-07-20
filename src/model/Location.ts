export interface LocationProps {
  city: string;
  region: string;
  postalCode: string;
  country: string;
  timezone: string;
  latitude: number;
  longitude: number;
}

export class Location {
  city: string;
  region: string;
  postalCode: string;
  country: string;
  timezone: string;
  latitude: number;
  longitude: number;

  constructor(props: LocationProps) {
    this.city = props.city;
    this.region = props.region;
    this.postalCode = props.postalCode;
    this.country = props.country;
    this.timezone = props.timezone;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
  }

  get completeAddress(): string {
    return `${this.city}, ${this.region} ${this.postalCode}`;
  }

  get coordinates(): { latitude: number; longitude: number } {
    return { latitude: this.latitude, longitude: this.longitude };
  }
}