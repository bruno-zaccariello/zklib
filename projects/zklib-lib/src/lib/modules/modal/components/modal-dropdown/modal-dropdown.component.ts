import { Component, ContentChild, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { ModalOptions } from '../../models/modal-options.model';
import { ModalData } from '../../models/modal-data.model';
import { IModalComponent } from '../../interfaces/modal-component.interface';
import { ModalComponent } from '../modal/modal.component';
import { DialogRef } from '@angular/cdk/dialog';
import { Subject, takeUntil } from 'rxjs';
import { ModalEventType } from '../../enums/modal-event-types.enum';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'zk-modal-dropdown',
  templateUrl: './modal-dropdown.component.html',
  styleUrls: ['./modal-dropdown.component.scss']
})
export class ModalDropdownComponent implements OnInit, OnDestroy {

  private _destroy = new Subject<void>();

  @Output('close')
  private readonly onClose = new EventEmitter<boolean>();

  @Output('open')
  private readonly onOpen = new EventEmitter<DialogRef>();

  @Input()
  public modalId!: string;

  @Input()
  public options!: ModalOptions;

  @ContentChild(TemplateRef, { static: true })
  public bodyTemplate!: TemplateRef<any>;

  @ViewChild('modalTemplate', { static: true })
  public modalTemplate!: TemplateRef<any>;

  @ContentChild(ElementRef, { static: true })
  public content!: ElementRef<any>;

  @Input()
  public title!: string;

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

  public expanded: boolean = false;

  constructor(
    protected readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.listenEvents();
    this.register();
  }

  public toggleExpansion(): void {
    this.expanded = !this.expanded;
  }

  public register(): void {
    this.modalService.register(this.modalData);
  }

  public unregister(): void {
    this.modalService.unregister(this.modalId);
  }

  public open() {
    this.modalService.open(this.modalId);
  }

  public close() {
    this.modalService.close(this.modalId);
  }

  public listenEvents() {
    this.modalService.listenEvents(this.modalId)
      .pipe(takeUntil(this._destroy))
      .subscribe(
        (event) => {
          switch (event.eventType) {
            case ModalEventType.OPEN:
              this.onOpen.emit();
              break;
            case ModalEventType.CLOSE:
              this.onClose.emit(true);
              break;
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.close();
    this.unregister();
    this._destroy.next();
  }

}
