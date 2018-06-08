import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'arg-editable-try-card',
  templateUrl: './editable-try-card.component.html',
  styleUrls: ['./editable-try-card.component.css']
})
export class EditableTryCardComponent implements OnInit {
  @Input() try;
  @Input() editing;
  @Output() save: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
