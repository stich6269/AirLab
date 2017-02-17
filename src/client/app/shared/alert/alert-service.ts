import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/Rx";

@Injectable()

export class AlertService {
    public dialog:BehaviorSubject<any> = new BehaviorSubject(null);

    getOptions() {
        return this.dialog
    }

    show(options:any) {
        this.dialog.next(options);
        let elem:any = $('#myAlert');
        elem.modal('show');
    }
}
