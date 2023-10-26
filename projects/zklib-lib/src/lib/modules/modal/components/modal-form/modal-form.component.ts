import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';
import { IModalFormComponent } from './modal-form.interface';

@Component({
  selector: 'zk-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  @ContentChild(IModalFormComponent, { static: true })
  public content!: IModalFormComponent;

  constructor() { }

  ngOnInit() {
  }

  submit(): void {
    if (this.content) {
      this.content?.submit();
    }
  }

  dismiss(): void {
    if (this.content) {
      this.content?.dismiss();
    }
  }

}
