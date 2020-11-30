import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-input',
  template: ` 
    <div class="dynamic-field form-input" [formGroup]="group">
      <span class="ui-float-label">
        <input [formControlName]="config.name" [value]="config.value|| '' " id="float-input" type="text" size="50" pInputText> 
        <label for="float-input">{{ config.label }}</label>
      </span>            
    </div>
  `
})
export class FormInputComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
