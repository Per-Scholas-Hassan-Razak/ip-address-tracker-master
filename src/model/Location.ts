export interface LocationProps {
  city: string;
  region: string;
  postalCode: string;
  country: string;
  timezone: string;
  lat: number;
  lng: number;
}

export class Location {
  city: string;
  region: string;
  postalCode: string;
  country: string;
  timezone: string;
  lat: number;
  lng: number;

  constructor(props: LocationProps) {
    this.city = props.city;
    this.region = props.region;
    this.postalCode = props.postalCode;
    this.country = props.country;
    this.timezone = props.timezone;
    this.lat = Number(props.lat);
    this.lng = Number(props.lng);
  }

  get completeAddress(): string {
    return `${this.city}, ${this.region} ${this.postalCode}`;
  }

  get coordinates(): { lat: number; lng: number } {
    return { lat: this.lat, lng: this.lng };
  }
}
