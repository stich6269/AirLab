// Feel free to extend this interface
// depending on your app specific config.
export interface IConfig {
  API: 'http://localhost:300/';
}

export const Config: IConfig = JSON.parse('<%= ENV_CONFIG %>');
