import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FieldValidatorService } from '../field-validator.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent{

  @Input() title: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validator: FieldValidatorService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}

