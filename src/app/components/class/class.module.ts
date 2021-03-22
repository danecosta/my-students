import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClassRoutingModule } from './class.routing.module';
import { ClassNewComponent } from './class-new/class-new.component';
import { ClassListComponent } from './class-list/class-list.component';
import { NgxEditorModule } from 'ngx-editor';


@NgModule({
    declarations: [
        ClassNewComponent,
        ClassListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ClassRoutingModule,
        NgxEditorModule
    ],
    providers: [],
    bootstrap: []
})
export class ClassModule { }
