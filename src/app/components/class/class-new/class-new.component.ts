import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../models/class.model';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-class-new',
  templateUrl: './class-new.component.html',
  styleUrls: ['./class-new.component.css']
})
export class ClassNewComponent implements OnInit, OnDestroy {

  classId = '';
  title = 'New';
  class = new Class();

  editor: Editor;
  editorConfig = {
    editable: true,
    spellcheck: false,
    height: '70em',
    minHeight: '5rem',
    width: '100%',
    translate: 'no'
  };

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.editor = new Editor();

    this.classId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.classId) {
      this.title = "Update";
      this.getClassById();
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  getClassById(): void {
    let classes: Class[] = [
      { id: 'ca154c82-e7bb-4d91-a43b-a2ea65d5ae17', title: 'Family and Numbers', language: 'EN', level: 'B', contentOfLesson: '', planOfLesson: '' },
      { id: '9f9ac777-98a4-4b78-92ad-82d34a5ac06c', title: 'Irregular Verbs', language: 'EN', level: 'A', contentOfLesson: '', planOfLesson: '' }
    ];

    this.class = classes.filter(x => x.id == this.classId)[0];
  }

  saveClass(): void { }

}
