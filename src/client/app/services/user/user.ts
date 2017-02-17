export interface IUser{
  _id: string;
  username: string;
  email: string;
  created: string;
  deviceIds: any,
  photoUrl: string
}

export let USER: IUser = {
  _id: '',
  username: '',
  email: '',
  created: '',
  deviceIds: [],
  photoUrl: ''
};
