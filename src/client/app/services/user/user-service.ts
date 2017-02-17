import {Injectable} from "@angular/core";
import {IUser, USER} from "./user";
import * as _ from 'underscore'

@Injectable()

export class UserService {
  user: IUser = USER;
  getUser():IUser {
    return this.user
  }

  update(data:any):IUser {
    return _.extend(this.user, data);
  }

  clear(){
    this.user = null;
  }
}
