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
    { id: 'daniela', name: 'Daniela', age: 28, email: '', language: 'EN', level: 'Advanced', firstClass: new Date(), notes: '', whatsapp: '' },
    { id: 'iandra', name: 'Iandra', age: 25, email: '', language: 'FR', level: 'Advanced', firstClass: new Date(), notes: '', whatsapp: '' },
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
