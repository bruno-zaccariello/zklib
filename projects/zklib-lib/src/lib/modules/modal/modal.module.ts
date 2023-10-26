import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { DEFAULT_DIALOG_CONFIG, DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { ModalService } from './services/modal.service';
import { NgIconsModule } from '@ng-icons/core';
import { jamClose } from '@ng-icons/jam-icons';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { ModalFooterComponent } from './components/modal-footer/modal-footer.component';
import { ModalBodyComponent } from './components/modal-body/modal-body.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { ModalDropdownComponent } from './components/modal-dropdown/modal-dropdown.component';

const components = [
  ModalComponent,
  ModalHeaderComponent,
  ModalBodyComponent,
  ModalFooterComponent,
  ModalFormComponent,
  ModalDropdownComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ jamClose }),
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
