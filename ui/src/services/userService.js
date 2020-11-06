import BaseService from "./baseService";

export default class UserService extends BaseService {
  constructor(resourcePath = "users") {
    super(resourcePath);
  }
}
