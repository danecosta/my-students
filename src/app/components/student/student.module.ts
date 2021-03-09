import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { StudentRoutingModule } from './student.routing.module';

@NgModule({
    declarations: [
        StudentNewComponent,
        StudentListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StudentRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class StudentModule { }
