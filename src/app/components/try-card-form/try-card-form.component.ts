import { Component, OnInit, Input, EventEmitter, Output, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'pop-try-card-form',
  templateUrl: './try-card-form.component.html',
  styleUrls: ['./try-card-form.component.css']
})
export class TryCardFormComponent implements OnInit {
  @Input() set try(data) {
    this.form.get('title').patchValue(data.title);
    this.form.get('text').patchValue(data.text);
    this.form.get('page').patchValue(data.page);
    this.form.get('id').patchValue(data.id);
    this.chapter = data.chapter.id;
  }

  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  chapter: number;
  id: number;

  constructor(
    private fb: FormBuilder,
    private zone: NgZone
  ) {
    this.form = this.fb.group({
      id: '',
      title: '',
      text: '',
      page: ''
    });
  }

  ngOnInit() {
  }

}
