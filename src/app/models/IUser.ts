import {ICompany} from "./ICompany";

export interface IUser {
  id: number;
  name: string;
  company: ICompany
}
