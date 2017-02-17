import {Injectable} from "@angular/core";
import {ISensors} from "./sensors";
import {Subject, BehaviorSubject} from "rxjs/Rx";
import {HttpClient} from "../http/http";

@Injectable()

export class SensorService{
  observable: Subject<any> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient){};

  connectToDevice(): Subject<any> {
    //connect to the socket
    return this.observable;
  }

  getArchiveMetering(deviceId: string): any{
   return this.httpClient.get('./deviceData/' + deviceId);
  }

  onData(data: ISensors): void{
    this.observable.next(data);
  }
}
