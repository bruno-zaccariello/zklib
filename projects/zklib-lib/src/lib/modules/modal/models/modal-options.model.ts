import { DialogConfig } from "@angular/cdk/dialog";
import { ModalSizes } from "../enums/modal-sizes.enum";
import { ModalDropdownDialogComponent } from "../components/modal-dropdown-dialog/modal-dropdown-dialog.component";

export class ModalOptions extends DialogConfig<any, any, any> {
    closable?: boolean = true;
    title?: string;
    repeatable?: boolean = false;

    static default(): ModalOptions {
        return {
            hasBackdrop: true,
            width: ModalSizes.width.PP,
            minWidth: '450px',
            minHeight: '200px'
        }
    }
    
    static defaultDropdown(): ModalOptions {
        return {
            hasBackdrop: false,
            width: ModalSizes.statusModal.width,
            minHeight: ModalSizes.statusModal.heigh,
            container: ModalDropdownDialogComponent
        }
    }
}