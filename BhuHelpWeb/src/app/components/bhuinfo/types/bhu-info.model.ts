export interface BhuInfoModel {
  id: number;
  name: string;
  dob: string; // ISO string format, use Date if needed: Date;
  age: number;
  professionalId: number;
  professional: any | null; // You can define a separate interface for professional if available
  gotraId: number;
  gotra: any | null;
  land: string;
  mobileNumber: string;
  address: string;
  village: string;
  postOfficeId: number;
  postOffice: any | null;
  policeStation: string;
  districtId: number;
  district: any | null;
  child: number;
  unmarriedChild: number;
  childInfos: any | null; // Define interface if structure is known
  createdBy: string;
  createdOn: string; // ISO string format
  createdOnUtc: string;
  modifiedBy: string;
  modifiedOn: string;
  modifiedOnUtc: string;
  isActive: boolean;
  isDeleted: boolean;
}
