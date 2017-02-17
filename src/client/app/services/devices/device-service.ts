import {Injectable} from "@angular/core";
import {IDevice, Device} from "./device";
import {HttpClient} from "../http/http";
import {Subject} from "rxjs/Rx";
import * as _ from 'underscore';

let DEVICES: Array<IDevice> = [];

@Injectable()


export class DeviceService{
  devices: Array<IDevice> = DEVICES;

  constructor(private http: HttpClient){}

  addDevice(device: IDevice, cb?:any): void {
    this.http.post('deviceService', JSON.stringify(device))
      .subscribe(
        response => {
          if(response){
            let newDevice = new Device(response);
            this.devices.push(newDevice);
          }
        },
        err => {},
        () => { typeof cb=='function' && cb() })
  }

  removeDevice(device: IDevice): void {
    this.http.delete('deviceService/' + device._id)
      .subscribe(response => {
        if(response){
          this.devices.splice(this.devices.indexOf(device), 1);
        }
      })
  }

  getDevices(): void{
    this.http.get('deviceService')
      .subscribe(response => {
        DEVICES = [];
        _.forEach(response, (device: IDevice) => {
          this.devices.push(new Device(device));
        });
      })
  }

  updateDevice(device:IDevice ,data: IDevice, cb:any): void {
    this.http.put('deviceService/' + data._id, JSON.stringify(data))
      .subscribe(
        response => {
          if(response){
            let deviceModel = this.devices[this.devices.indexOf(device)];
            _.extend(deviceModel, response);
          }
        },
        err => {},
        () => { typeof cb=='function' && cb() })
  }

  getDevice(device: IDevice): Subject<any> {
    return this.http.delete('deviceService/' + device._id)
  }
}
