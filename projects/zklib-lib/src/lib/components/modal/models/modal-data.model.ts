import { ComponentRef, TemplateRef } from "@angular/core";
import { ModalOptions } from "./modal-options.model";

export class ModalData<T = ComponentRef<any>> {
    constructor(
        public modalId: string,
        public modalContent?: TemplateRef<T>,
        public options?: ModalOptions
    ) { }
}