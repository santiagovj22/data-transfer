import BaseService from "./baseService";

export default class LocationService extends BaseService {
  constructor(resourcePath = "locations") {
    super(resourcePath);
  }
}
