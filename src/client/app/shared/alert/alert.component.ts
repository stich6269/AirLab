import { Component } from "@angular/core";
import { AlertService } from "./alert-service";

@Component({
    moduleId: module.id,
    selector: 'my-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.css']
})

export class AlertComponent {
    data:{title:string, text:string} = {title: '', text: ''};

    constructor(private alertService:AlertService) {
        alertService.getOptions()
            .subscribe((params:any) => {
                if (params) _.extend(this.data, params);
            })
    }
}
