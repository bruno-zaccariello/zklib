import { DialogConfig } from "@angular/cdk/dialog";

export class ModalOptions extends DialogConfig {
    closable?: boolean = true;
    title?: string;
}