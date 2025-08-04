export interface CountryModel {
  name: string;
  states: any; // Replace `any` with actual state type if available (e.g., State[] | null)
  id: number;
  createdBy: string;
  createdOn: string;
  createdOnUtc: string;
  modifiedBy: string;
  modifiedOn: string;
  modifiedOnUtc: string;
  isActive: boolean;
  isDeleted: boolean;
}
