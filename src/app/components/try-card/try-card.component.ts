import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pop-try-card',
  templateUrl: './try-card.component.html',
  styleUrls: ['./try-card.component.css']
})
export class TryCardComponent implements OnInit {
  @Input() try;
  @Output() edit: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
