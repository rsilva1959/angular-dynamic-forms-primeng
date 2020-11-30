import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-select',
  template: `
    <div class="dynamic-field form-select" [formGroup]="group">

    <p-dropdown autoWidth="true" [options]="config.options" [formControlName]="config.name" [placeholder]="config.placeholder"
    filter="true"></p-dropdown>





      <!--<label>{{ config.label }}</label>-->

<!--
      <select [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option [value]="option.id" [selected]="config.value==option.id" *ngFor="let option of config.options">
          {{ option.valor }}
        </option>
      </select>
      -->

    </div>
  `
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
