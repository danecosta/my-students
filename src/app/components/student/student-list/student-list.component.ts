import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  filter: string;
  students: Student[] = [
    { id: '0bc5deb3-629e-4a6f-a62e-804eab638dd7', name: 'Daniela', age: 28, email: 'daniccosta92@gmail.com', language: 'EN', level: 'A', firstClass: new Date(), notes: 'Best student', whatsapp: '+55 (32) 99133-9194' },
    { id: '950084dc-692a-4cef-a9f4-d27c67557865', name: 'Iandra', age: 25, email: 'iandralumarques@gmail.com', language: 'FR', level: 'A', firstClass: new Date(), notes: '', whatsapp: '+55 (32) 99132-3934' },
  ];
  studentsBkp = Object.assign(this.students);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  filterStudents(): void {
    this.students = this.studentsBkp;
    if (this.filter)
      this.students = this.studentsBkp.filter(x => x.name === this.filter);
  }

  edit(id: string): void {
    this.router.navigate(['/student/update', id]);
  }

}
