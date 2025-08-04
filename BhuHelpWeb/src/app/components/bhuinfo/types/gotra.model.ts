export interface GotraModel {
  name: string;
  bhuInfos: any; // Use a specific type if known
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
