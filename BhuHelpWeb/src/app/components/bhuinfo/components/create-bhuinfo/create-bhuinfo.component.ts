import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BhuInfoModel } from '../../types/bhu-info.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { combineLatest } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectCountries,
  selectDistricts,
  selectGotras,
  selectPostOffices,
  selectProfessionals,
  selectStates,
} from './stores/reducers';
import { createBhuInfoActions } from './stores/actions';
import { GetStateRequestInterface } from '../../types/get-state-request.interface';
import { GetDistrictRequestInterface } from '../../types/get-district-request.interface';
import { GetPostOfficeRequestInterface } from '../../types/get-postoffice-request.interface';

@Component({
  selector: 'app-create-bhuinfo',
  templateUrl: './create-bhuinfo.component.html',
  styleUrls: ['./create-bhuinfo.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatTooltipModule,
  ],
})
export class CreateBhuinfoComponent implements OnInit {
  bhuInfoForm!: FormGroup;
  private fb = inject(FormBuilder);
  private store = inject(Store);
  data$ = combineLatest({
    countries: this.store.select(selectCountries),
    gotras: this.store.select(selectGotras),
    professionals: this.store.select(selectProfessionals),
    states: this.store.select(selectStates),
    districts: this.store.select(selectDistricts),
    postOffices:this.store.select(selectPostOffices)
  });

  ngOnInit(): void {
    this.initializeForm();
    this.loadDropDowns();
  }
  loadDropDowns() {
    this.store.dispatch(createBhuInfoActions.getCountry());
    this.store.dispatch(createBhuInfoActions.getGotra());
    this.store.dispatch(createBhuInfoActions.getProfessional());
  }
  initializeForm(): void {
    this.bhuInfoForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      age: [''],
      professionalId: [null],
      gotraId: [null],
      land: [''],
      mobileNumber: [''],
      countryId: [null],
      stateId: [null],
      address: [''],
      village: [''],
      postOfficeId: [null],
      policeStation: [''],
      districtId: [null],
      child: [0],
      unmarriedChild: [0],
    });
  }

  onSubmit(): void {
    if (this.bhuInfoForm.valid) {
      const formValue: Partial<BhuInfoModel> = {
        ...this.bhuInfoForm.value,
      };

      // this.bhuInfoService.create(formValue).subscribe({
      //   next: () => {
      //     alert('Bhu Info created successfully!');
      //     this.router.navigate(['/bhuinfo/list']);
      //   },
      //   error: (err) => {
      //     console.error('Creation failed', err);
      //     alert('Failed to create Bhu Info.');
      //   }
      // });
    } else {
      this.bhuInfoForm.markAllAsTouched();
    }
  }
  goBack() {}
  onCountryChange(event: MatSelectChange): void {
    const selectedCountryId = event.value;
    const getStateRequestInterface: GetStateRequestInterface = {
      countryId: selectedCountryId,
    };
    console.log('Selected Country ID:', selectedCountryId);
    this.store.dispatch(
      createBhuInfoActions.getState({ getStateRequestInterface })
    );
  }

  onStateChange(event: MatSelectChange): void {
    const selectedStateId = event.value;
    const getDistrictRequestInterface: GetDistrictRequestInterface = {
      stateId: selectedStateId,
    };
    this.store.dispatch(
      createBhuInfoActions.getDistrict({ getDistrictRequestInterface })
    );
  }
  onDistrictChange(event: MatSelectChange): void {
    const selectedDistrictId = event.value;
    const getPostOfficeRequestInterface: GetPostOfficeRequestInterface={
      districtId:selectedDistrictId
    }
    this.store.dispatch(createBhuInfoActions.getPostOffice({getPostOfficeRequestInterface}));
  }
}
