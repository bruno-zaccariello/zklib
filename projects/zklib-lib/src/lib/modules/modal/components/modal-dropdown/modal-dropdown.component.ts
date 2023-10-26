import { Component, ContentChild, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalOptions } from '../../models/modal-options.model';
import { ModalData } from '../../models/modal-data.model';
import { IModalComponent } from '../../interfaces/modal-component.interface';

@Component({
  selector: 'zk-modal-dropdown',
  templateUrl: './modal-dropdown.component.html',
  styleUrls: ['./modal-dropdown.component.css']
})
export class ModalDropdownComponent implements IModalComponent, OnInit, OnDestroy {

  @Input()
  public modalId!: string;

  @Input()
  public options!: ModalOptions;

  @ViewChild('modalTemplate', { static: true })
  public modalTemplate!: TemplateRef<any>;

  @ContentChild(ElementRef, { static: true })
  public content!: ElementRef<any>;

  public get modalData(): ModalData {
    return {
      modalId: this.modalId,
      modalContent: this.modalTemplate,
      options: {
        ...ModalOptions.defaultDropdown(),
        ...this.options
      }
    }
  }

  constructor(
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.register(this.modalData);
  }

  ngOnDestroy(): void {
    this.modalService.unregister(this.modalId);
  }

}
