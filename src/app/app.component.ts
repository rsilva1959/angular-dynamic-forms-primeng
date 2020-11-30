import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <div class="app">
      <dynamic-form
        [config]="config"
        (submit)="submit($event)">
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `
})
export class AppComponent implements AfterViewInit {

  constructor() { }

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config = [
    {
      type: 'input',
      disabled: false,
      value: 'Mikael Boff',
      label: 'Full name',
      name: 'name',
      validation: [Validators.required, Validators.minLength(4)],
    },
    {
      type: 'input',
      disabled: false,
      value: 'Programador',
      label: 'Profissão',
      name: 'profissao',
      // validation: this.mikael()
    },
    {
      type: 'checkbox',
      disabled: false,
      value: true,
      label: 'marcar',
      name: 'box',
      validation: [Validators.required],
    },
    {
      type: 'select',
      disabled: false,
      value: 4,
      placeholder: 'Selecione sua comida favorita',
      label: 'Favourite Food',
      name: 'food',
      options: [
        { value: 1, label: 'Pizza' },
        { value: 2, label: 'Cachorro Quente' },
        { value: 3, label: 'Pão de Milho' },
        { value: 4, label: 'Café' }
      ],
      validation: [Validators.required]
    }, {
      type: 'datepicker',
      name: 'data',
      label: 'Selecione a data',
      minDate: '2018-12-22',
      maxDate: '2019-02-20'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
      disabled: false
    }
  ];

  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    this.form.setDisabled('submit', true);
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }

  // mikael() {
  //   let arrValidation = [];
  //   let mikaValidacaoCustom: Array<any> = [{ key: 'minLength', value: '9' }];
  //   mikaValidacaoCustom.forEach(validacao => {
  //     if (validacao instanceof Object) {
  //       arrValidation.push(Validators[validacao.key](validacao.value));
  //       return;
  //     }

  //     if (validacao.includes('required')) {
  //       arrValidation.push(Validators['required']);
  //     }

  //   })

  //   return arrValidation
  // }
}