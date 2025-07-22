import { Location } from "./Location.js";
export class GeolocationAPI {
    constructor({ ip, isp, location }) {
        this.ip = ip;
        this.isp = isp;
        this.location = new Location(location);
    }
    get fullLocation() {
        return this.location.completeAddress;
    }
    get coordinates() {
        return this.location.coordinates;
    }
    get ispName() {
        return this.isp;
    }
}
