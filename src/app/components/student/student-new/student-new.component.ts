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
    if (this.studentId) {
      this.title = "Update";
      this.getStudentById();
    }
  }

  getStudentById(): void {
    let students: Student[] = [
      { id: '0bc5deb3-629e-4a6f-a62e-804eab638dd7', name: 'Daniela', age: 28, email: 'daniccosta92@gmail.com', language: 'EN', level: 'A', firstClass: new Date(), notes: 'Best student', whatsapp: '+55 (32) 99133-9194' },
      { id: '950084dc-692a-4cef-a9f4-d27c67557865', name: 'Iandra', age: 25, email: 'iandralumarques@gmail.com', language: 'FR', level: 'A', firstClass: new Date(), notes: '', whatsapp: '+55 (32) 99132-3934' },
    ];

    this.student = students.filter(x => x.id == this.studentId)[0];
  }

  saveStudent(): void { }


}
