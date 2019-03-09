import { DriverQuestions } from './driver-questions'


export interface Drivers {
  Id: number;
  Description: string;
  DriverQuestions: DriverQuestions[];
}