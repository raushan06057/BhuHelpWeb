export interface DistrictModel {
  id: number;
  name: string;
  stateId: number;
  state: any | null; // You can replace `any` with a specific `StateModel` if available
  postOffices: any | null; // Replace with PostOfficeModel[] if known
  createdBy: string;
  createdOn: string;      // ISO date string
  createdOnUtc: string;   // ISO date string
  modifiedBy: string;
  modifiedOn: string;
  modifiedOnUtc: string;
  isActive: boolean;
  isDeleted: boolean;
}
