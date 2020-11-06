import url from "url";

import { apiUrl } from "../config/config";

export default class BaseService {
  resourcePath = null;

  constructor(path) {
    this.resourcePath = path;
  }

  create() {
    return { url: url.resolve(apiUrl, this.resourcePath) };
  }
  getLocation() {
    return { url: url.resolve(apiUrl, this.resourcePath) };
  }
}
