import { Component, ComponentRef, ContentChild, Inject, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ModalOptions } from '../../models/modal-options.model';
import { ModalData } from '../../models/modal-data.model';
import { Subject, takeUntil } from 'rxjs';
import { ModalEventType } from '../../enums/modal-event-types.enum';
import { ModalSizes } from '../../enums/modal-sizes.enum';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { ModalFooterComponent } from '../modal-footer/modal-footer.component';
import { ModalFormComponent } from '../modal-form/modal-form.component';

@Component({
  selector: 'zk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  private _destroy = new Subject<void>();

  @ContentChild(TemplateRef, { static: true })
  public content!: TemplateRef<any>;

  @ContentChild(ModalFormComponent, { static: true })
  public modalForm!: TemplateRef<any>;

  @ViewChild('modalTemplate', { static: true })
  public modalTemplate!: TemplateRef<any>;

  @Input()
  public modalId!: string;

  @Input()
  public set title(title: string) {
    this._defaultOptions.title = title;
  }

  @Input()
  public set options(modalOptions: ModalOptions) {
    this._options = modalOptions;
  };
  public get options(): ModalOptions {
    return {
      ...this._defaultOptions,
      ...this._options
    };
  }

  public _defaultOptions: ModalOptions = {
    width: ModalSizes.width.PP,
    minWidth: '450px',
    minHeight: '200px'
  }
  public _options?: ModalOptions;

  public get modalData(): ModalData {
    return {
      modalId: this.modalId,
      modalContent: this.modalTemplate,
      options: this.options
    }
  }

  constructor(
    @Inject(DIALOG_DATA) public data: ModalOptions,
    private readonly dialogRef: DialogRef,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.register();
    this.startListener();
  }

  public startListener(): void {
    this.modalService.listenEvents()
      .pipe(takeUntil(this._destroy))
      .subscribe(event => {
        if (event?.data?.modalId === this.modalId) {
          switch (event.eventType) {
            case ModalEventType.OPEN:
              break;
            case ModalEventType.CLOSE:
              break;
            default:
              break;
          }
        }
      })
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

  ngOnDestroy(): void {
    this.close();
    this.unregister();
    this._destroy.next();
  }

}
