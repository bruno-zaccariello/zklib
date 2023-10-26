import { Component, forwardRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IModalFormComponent } from '../../../../zklib-lib/src/lib/modules/modal/components/modal-form/modal-form.interface';

@Component({
  selector: 'form-generico',
  templateUrl: './form-generico.component.html',
  styleUrls: ['./form-generico.component.scss'],
  providers: [
    {
      provide: IModalFormComponent,
      useExisting: forwardRef(() => FormGenericoComponent),
    }
  ]
})
export class FormGenericoComponent extends IModalFormComponent {

  override submit() {
    window.alert('enviado: ' + this.form.value.sentimento);
  }

  override dismiss() { 
    window.alert('cancelado');
  }

  form = this.fb.group({
    sentimento: ['']
  });

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

}
