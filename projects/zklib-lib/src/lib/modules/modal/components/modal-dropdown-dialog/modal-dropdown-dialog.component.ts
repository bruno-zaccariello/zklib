import { CdkDialogContainer } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
  template: '<ng-template cdkPortalOutlet></ng-template>',
  styleUrls: ['./modal-dropdown-dialog.component.css']
})
export class ModalDropdownDialogComponent extends CdkDialogContainer { }
