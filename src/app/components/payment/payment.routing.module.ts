import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentListComponent } from './payment-list/payment-list.component';

const paymentRoutes: Routes = [
    { path: 'payment/all', component: PaymentListComponent },
    { path: '', redirectTo: '/payment/all', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forChild(paymentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PaymentRoutingModule { }
