import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { DEFAULT_DIALOG_CONFIG, DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { ModalService } from './services/modal.service';

const components = [
  ModalComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  providers: [
    ModalService,
    {
      provide: DIALOG_DATA,
      useValue: {}
    },
    {
      provide: DialogRef,
      useValue: {}
    },
    {
      provide: DEFAULT_DIALOG_CONFIG,
      useValue: {
        hasBackdrop: true
      }
    }
  ],
  exports: [...components]
})
export class ModalModule { }
