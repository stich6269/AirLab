export interface IDevice {
  _id?: string,
  id: string,
  name: string,
  model: string,
  registered?: string,
  description: string,
  status?: boolean
  photoUrl?: string
}

export class Device implements IDevice{
  _id: string;
  name: string;
  model: string;
  registered: string;
  description: string;
  status: boolean;
  photoUrl: string;
  id: string;

  constructor(device: IDevice){
    this._id = device._id;
    this.name = device.name;
    this.model = device.model;
    this.registered = device.registered;
    this.id = device.id;
    this.description = device.description;
    this.status = device.status || false;
    this.photoUrl = device.photoUrl || '';
  }
}
