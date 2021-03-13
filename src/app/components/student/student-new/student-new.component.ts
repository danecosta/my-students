import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  tittle = 'New';
  student = new Student();

  constructor() { }

  ngOnInit() {
  }

  saveStudent(): void { }


}
