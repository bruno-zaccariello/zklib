import { Component } from '@angular/core';
import { ModalService } from '../../../zklib-lib/src/lib/components/modal/services/modal.service';
import { ModalOptions } from 'projects/zklib-lib/src/lib/components/modal/models/modal-options.model';
import { ModalSizes } from 'projects/zklib-lib/src/lib/components/modal/enums/modal-sizes.enum';

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

  constructor(
    private readonly modalService: ModalService
  ) {}

  openModal(tag: string): void {
    this.modalService.open(tag);
  }
}
