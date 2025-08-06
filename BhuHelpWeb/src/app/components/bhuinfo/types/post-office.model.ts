export interface PostOfficeModel {
  id: number;
  name: string;
  pin: string;
  districtId: number;
  district: any | null; // Replace `any` with `DistrictModel` if available
  bhuInfos: any | null; // Replace with `BhuInfoModel[]` if known
  createdBy: string;
  createdOn: string;      // ISO date string
  createdOnUtc: string;   // ISO date string
  modifiedBy: string;
  modifiedOn: string;
  modifiedOnUtc: string;
  isActive: boolean;
  isDeleted: boolean;
}
