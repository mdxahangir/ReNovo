import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPaymentMethods(): Observable<any> {
    return this.http.get(`${this.apiUrl}/paymentMethods`);
  }

  getOrderSummary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/orderSummary`);
  }

  updatePaymentMethod(id: string, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/paymentMethods/${id}`, data);
  }
}
