import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormioCustomComponent } from 'angular-formio';

@Component({
  selector: 'app-rating-wrapper',
  templateUrl: './rating-wrapper.component.html',
  styleUrls: ['./rating-wrapper.component.scss'],
})
export class RatingWrapperComponent
  implements OnInit, FormioCustomComponent<number>
{
  @Input() value: number = 0;

  @Output() valueChange = new EventEmitter<number>();

  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  updateValue(payload: number) {
    this.value = payload;
    this.valueChange.emit(payload);
  }
}
