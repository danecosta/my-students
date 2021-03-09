import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { StudentRoutingModule } from './student.routing.module';
import { StudentClassListComponent } from './student-class-list/student-class-list.component';

@NgModule({
    declarations: [
        StudentNewComponent,
        StudentListComponent,
        StudentClassListComponent
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
