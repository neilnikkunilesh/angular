import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../ApiService';
import { FormControl } from '@angular/forms';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-pricing-admin',
  templateUrl: './pricing-admin.component.html',
  styleUrls: ['./pricing-admin.component.css']
})
export class PricingAdminComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  apiRequest: any;
  apiResponse: any;
  loading: boolean = false;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  ngOnInit(): void {
  }

  public onSubmit() {
    this.loading = true;
    return this.apiService.postUnitPriceCost(this.apiRequest).subscribe(
      response => {
        this.loading = false;
        console.log('Api Response =', response)
        this.apiResponse = JSON.stringify(response);
      },
      err => {
        this.loading = false;
        console.log("Error occured", err);
      }
    );
  }

}
