import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  title = 'New';
  student = new Student();
  studentId = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.studentId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.studentId)
      this.title = "Update";
  }

  saveStudent(): void { }


}
