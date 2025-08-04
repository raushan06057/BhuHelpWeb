export interface GetStateResponseInterface {
  name: string;
  countryId: number;
  country: any | null; // Replace `any` with appropriate type if available
  districts: any[] | null; // Replace `any[]` with appropriate district model if available
  id: number;
  createdBy: string;
  createdOn: string; // Use `Date` if you want to parse into JS Date
  createdOnUtc: string;
  modifiedBy: string;
  modifiedOn: string;
  modifiedOnUtc: string;
  isActive: boolean;
  isDeleted: boolean;
}
