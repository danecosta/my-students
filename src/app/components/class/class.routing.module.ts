import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassNewComponent } from './class-new/class-new.component';

const classRoutes: Routes = [
    { path: 'class/all', component: ClassListComponent },
    { path: 'class/new', component: ClassNewComponent },
    { path: 'class/update/:id', component: ClassNewComponent },
    { path: '', redirectTo: '/class/all', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forChild(classRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ClassRoutingModule { }
