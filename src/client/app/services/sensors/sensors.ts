export interface ISensors {
  $key?: string;
  airq: number;
  co2: number;
  humidity: number;
  light: number;
  pressure: number;
  temperature: number;
  val(): ISensors;
}
