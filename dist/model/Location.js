export class Location {
    constructor(props) {
        this.city = props.city;
        this.region = props.region;
        this.postalCode = props.postalCode;
        this.country = props.country;
        this.timezone = props.timezone;
        this.lat = Number(props.lat);
        this.lng = Number(props.lng);
    }
    get completeAddress() {
        return `${this.city}, ${this.region} ${this.postalCode}`;
    }
    get coordinates() {
        return { lat: this.lat, lng: this.lng };
    }
}
