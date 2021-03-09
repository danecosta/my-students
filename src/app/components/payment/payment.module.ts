import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentRoutingModule } from './payment.routing.module';

@NgModule({
    declarations: [
        PaymentListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        PaymentRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class PaymentModule { }
