import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import moment from 'moment';

@Component({
  selector: 'form-calendar',
  template: ` 
    <div class="dynamic-field form-calendar" [formGroup]="group">
      <span class="ui-float-label">
        <p-calendar [formControlName]="config.name"
         [minDate]="minDate" [maxDate]="maxDate" [locale]="ptbr" dateFormat="dd/mm/yy"
          readonlyInput="true" showIcon="true" dataType="string"></p-calendar>
        <label for="float-input">{{ config.label }}</label>
      </span>
    </div>
  `
})
export class FormCalendarComponent implements Field, OnInit {
  config: FieldConfig;
  group: FormGroup;

  ptbr;
  ngOnInit() {
    moment.locale('pt-BR');

    this.ptbr = {
      firstDayOfWeek: 0,
      dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      dayNamesMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
      monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

  get minDate() {
    return this.config.minDate == 'today' ? new Date() : this.config.minDate == null ? null : moment(this.config.minDate).toDate();
  }

  get maxDate() {
    return this.config.maxDate == 'today' ? new Date() : this.config.maxDate == null ? null : moment(this.config.maxDate).toDate();
  }
}

// <div class="dynamic-field form-input" [formGroup]="group">
//       <span class="ui-float-label">
//         <input [formControlName]="config.name" [value]="config.value|| '' " id="float-input" type="text" size="50" pInputText> 
//         <label for="float-input">{{ config.label }}</label>
//       </span>            
//     </div>
