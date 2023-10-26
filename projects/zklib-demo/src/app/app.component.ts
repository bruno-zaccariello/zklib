import { Component } from '@angular/core';
import { ModalSizes } from '../../../zklib-lib/src/lib/modules/modal/enums/modal-sizes.enum';
import { ModalOptions } from '../../../zklib-lib/src/lib/modules/modal/models/modal-options.model';
import { ModalService } from '../../../zklib-lib/src/lib/modules/modal/services/modal.service';
import { ModalDropdownComponent } from '../../../zklib-lib/src/lib/modules/modal/components/modal-dropdown/modal-dropdown.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zklib-demo';

  modalBasica = 'modalBasica';
  modalBasicaOpts: ModalOptions = {
    width: ModalSizes.width.G,
    height: ModalSizes.height.M
  };

  modalForm = 'modalForm';
  modalStatus = 'modalStatus';

  constructor(
    private readonly modalService: ModalService
  ) { }

  openModal(tag: string): void {
    this.modalService.open(tag);
  }

}
