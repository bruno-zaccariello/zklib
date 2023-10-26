import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModalData } from '../models/modal-data.model';
import { ModalEvent } from '../models/modal-event.model';
import { ModalEventType } from '../enums/modal-event-types.enum';
import { Dialog, DialogConfig } from '@angular/cdk/dialog';

@Injectable({ providedIn: 'root' })
export class ModalService {

  public static readonly UNIVERSAL_ID = '*'

  public isModalOpen = false;

  private modalRegistry = new Map<string, ModalData>();

  private readonly OPEN_EVENT = (data: ModalData) => new ModalEvent(ModalEventType.OPEN, data);
  private readonly CLOSE_EVENT = (data: ModalData) => new ModalEvent(ModalEventType.CLOSE, data);

  private modalsTopic: BehaviorSubject<ModalEvent> = new BehaviorSubject(
    new ModalEvent(ModalEventType.CLOSE, { modalId: ModalService.UNIVERSAL_ID })
  );

  constructor(
    private readonly dialog: Dialog
  ) { }

  private check(): void {
    if (this.dialog.openDialogs.length > 0) {
      this.isModalOpen = true;
    } else {
      this.isModalOpen = false;
    }
  }

  private openModal(modalData: ModalData): void {
    const element = modalData.modalContent;
    if (!element) { return; }
    this.dialog.open(
      element,
      (modalData?.options as DialogConfig<any, any, any>)
    );
  }

  register(data: ModalData): void {
    this.modalRegistry.set(data.modalId, data);
  }

  unregister(modalId: string): void {
    this.modalRegistry.delete(modalId);
  }

  listenEvents(): Observable<ModalEvent> {
    return this.modalsTopic.asObservable();
  }

  open(modalId: string): void {
    const data = this.modalRegistry.get(modalId);
    if (!data) { return; }
    this.modalsTopic.next(this.OPEN_EVENT(data));
    this.openModal(data);
    this.check();
  }

  close(modalId: string): void {
    const data = this.modalRegistry.get(modalId);
    if (!data) {
      this.dialog.closeAll();
    } else {
      this.dialog.closeAll();
      this.modalsTopic.next(this.CLOSE_EVENT(data));
      this.check();
    }
  }

  closeAll() {
    this.dialog.closeAll();
    this.modalsTopic.next(this.CLOSE_EVENT({ modalId: ModalService.UNIVERSAL_ID }))
  }

}
