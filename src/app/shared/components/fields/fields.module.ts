import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputSelectComponent,
    InputDateComponent,
    InputNumberComponent,
    InputTextareaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    InputTextComponent,
    InputSelectComponent,
    InputDateComponent,
    InputNumberComponent,
    InputTextareaComponent,
  ]
})
export class FieldsModule { }
