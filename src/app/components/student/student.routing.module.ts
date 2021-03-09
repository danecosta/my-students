import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent } from './student-new/student-new.component';

const studentRoutes: Routes = [
    { path: 'student/all', component: StudentListComponent },
    { path: 'student/new', component: StudentNewComponent },
    { path: 'student/update/:id', component: StudentNewComponent },
    { path: '', redirectTo: '/student/all', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forChild(studentRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class StudentRoutingModule { }
