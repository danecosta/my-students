import { Component, OnInit } from '@angular/core';
import { subDays } from 'date-fns';
import { Payment } from '../models/payment.model';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  filter: string;
  payments: Payment[] = [
    { studentId: '', student: 'Daniela', value: '10', classDate: subDays(new Date(), 30), paymentDate: new Date() },
    { studentId: '', student: 'Ana', value: '10', classDate: subDays(new Date(), 5) }
  ];
  paymentsBkp = Object.assign(this.payments);

  constructor() { }

  ngOnInit() {
  }

  filterPayments(): void {
    this.payments = this.paymentsBkp;
    if (this.filter)
      this.payments = this.paymentsBkp.filter(x => x.student === this.filter);
  }
}
