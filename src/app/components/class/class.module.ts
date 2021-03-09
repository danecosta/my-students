import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClassRoutingModule } from './class.routing.module';
import { ClassNewComponent } from './class-new/class-new.component';
import { ClassListComponent } from './class-list/class-list.component';


@NgModule({
    declarations: [
        ClassNewComponent,
        ClassListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ClassRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class ClassModule { }
