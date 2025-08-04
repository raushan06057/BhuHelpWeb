import { BackendErrorsInterface } from '../../../shared/types/backendErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
  token:any;
}
