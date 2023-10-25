import { Component } from '@angular/core';
import { ModalService } from '../../../zklib-lib/src/lib/components/modal/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zklib-demo';
  modalId = 'my-modal';

  constructor(
    private readonly modalService: ModalService
  ) {}

  openModal(): void {
    this.modalService.open(this.modalId);
  }
}
