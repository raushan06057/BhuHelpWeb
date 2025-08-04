export interface ProfessionalModel {
  name: string;
  description: string;
  bhuInfos: any; // or replace with correct type if known
  id: number;
  createdBy: string;
  createdOn: string;        // or Date if parsing needed
  createdOnUtc: string;     // or Date
  modifiedBy: string;
  modifiedOn: string;       // or Date
  modifiedOnUtc: string;    // or Date
  isActive: boolean;
  isDeleted: boolean;
}
