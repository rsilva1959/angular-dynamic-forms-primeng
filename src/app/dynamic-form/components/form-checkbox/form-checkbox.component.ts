import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'form-checkbox',
  template: `
    <div class="dynamic-field form-checkbox" [formGroup]="group">
    <p-checkbox [formControlName]="config.name" binary="true" [value]="config.value || false"></p-checkbox> {{ config.label }}      
    </div>
  `
})
export class FormCheckboxComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
