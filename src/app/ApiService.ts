import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic Z3BwLXVzZXI6Z3BwcGFzc3dvcmQ=',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { } 

  getUnitPriceCost() {
    return this.http.get(
      'https://localhost/gpp/pricingcosting/1.0.0/unitpricecost'
    );
  } 

  postUnitPriceCost(apiRequest: any) {
    console.log(apiRequest);   
    return this.http.post(
      'https://localhost/gpp/pricingcosting/1.0.0/unitpricecost',apiRequest,httpOptions
      
    );
  }
}


