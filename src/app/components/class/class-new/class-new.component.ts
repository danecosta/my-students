import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../models/class.model';

@Component({
  selector: 'app-class-new',
  templateUrl: './class-new.component.html',
  styleUrls: ['./class-new.component.css']
})
export class ClassNewComponent implements OnInit {

  classId = '';
  title = 'New';
  class = new Class();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.classId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.classId) {
      this.title = "Update";
      this.getClassById();
    }
  }

  getClassById(): void {
    let classes: Class[] = [
      { id: 'ca154c82-e7bb-4d91-a43b-a2ea65d5ae17', title: 'Family and Numbers', language: 'EN', level: 'B', conversation: '', grammar: '', vocabulary: '' },
      { id: '9f9ac777-98a4-4b78-92ad-82d34a5ac06c', title: 'Irregular Verbs', language: 'EN', level: 'A', conversation: '', grammar: '', vocabulary: '' }
    ];

    this.class = classes.filter(x => x.id == this.classId)[0];
  }

  saveClass(): void { }

}
