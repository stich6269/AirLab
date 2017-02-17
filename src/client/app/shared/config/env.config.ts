export interface EnvConfig {
  API?: string;
  ENV?: string;
}

export const Config: EnvConfig = JSON.parse('<%= ENV_CONFIG %>');
console.log(Config);
