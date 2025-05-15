import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  paymentMethods: any[] = [];
  orderSummary: any = {};
  selectedPaymentMethod: string = 'credit-card';

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.paymentService.getPaymentMethods().subscribe(methods => {
      this.paymentMethods = methods;
      this.selectedPaymentMethod = methods.find((m: any) => m.active)?.id || 'credit-card';
    });

    this.paymentService.getOrderSummary().subscribe(summary => {
      this.orderSummary = summary;
      this.orderSummary.total = this.calculateTotal();
    });
  }

  calculateTotal(): number {
    return this.orderSummary.subtotal + this.orderSummary.shipping + 
           this.orderSummary.tax + this.orderSummary.discount;
  }

  selectPayment(methodId: string): void {
    this.selectedPaymentMethod = methodId;
    
    // Update all payment methods
    this.paymentMethods.forEach(method => {
      const newActiveState = method.id === methodId;
      if (method.active !== newActiveState || method.showDetails !== newActiveState) {
        this.paymentService.updatePaymentMethod(method.id, {
          active: newActiveState,
          showDetails: newActiveState
        }).subscribe(() => {
          method.active = newActiveState;
          method.showDetails = newActiveState;
        });
      }
    });
  }
}
