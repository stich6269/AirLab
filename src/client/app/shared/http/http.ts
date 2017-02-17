import { Http, Response, RequestOptions } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';

import { contentHeaders } from './headers';
import { Config } from "../../config/env.config";
import { AlertService } from "../../shared/alert/alert-service";

//import {DialogService} from "./dialog.service";

let loading:number = 0,
    coolDown:any,
    loadingId:any,
    progressShown:boolean = false,
    progress:Subject<boolean> = new BehaviorSubject(progressShown);

@Injectable()
export class HttpClient {
    public element:any;
    public alertShown:boolean = false;
    public getRequestOptions:any;
    public postRequestOptions:any;
    private urlPrefix:string;

    constructor(private http:Http, private alertService:AlertService) {
        this.urlPrefix = Config.API;
        this.getRequestOptions = new RequestOptions({headers: contentHeaders, body: ''});
        this.postRequestOptions = new RequestOptions({headers: contentHeaders});
    }

    getProgress() {
        return progress;
    }

    parseResponce(resp:any) {
        return JSON.parse(resp['_body']);
    }

    get(url:string) {
        let pending:Subject<any> = new BehaviorSubject(null);
        this.showProgress();

        this.http.get(this.urlPrefix + url, this.getRequestOptions)
            .map(resp => { return this.parseResponce(resp); })
            .subscribe(
                resp => { this.successHandler(resp, pending); },
                error => { this.errorHandler(error); }
            );

        return pending;
    }

    post(url:string, data?:string) {
        var pending:Subject<any> = new BehaviorSubject(null);
        this.showProgress();

        this.http.post(this.urlPrefix + url, data, this.postRequestOptions)
            .map(resp => { return this.parseResponce(resp); })
            .subscribe(
                resp => { this.successHandler(resp, pending); },
                error => { this.errorHandler(error); },
                () => { pending.complete(); }
            );
        return pending;
    }
    put(url:string, data?:string) {
        var pending:Subject<any> = new BehaviorSubject(null);

        this.showProgress();

        this.http.put(this.urlPrefix + url, data, this.postRequestOptions)
            .map(resp => { return this.parseResponce(resp); })
            .subscribe(
                resp => { this.successHandler(resp, pending); },
                error => { this.errorHandler(error); },
                () => { pending.complete(); }
            );
        return pending;
    }
    delete(url:string) {
        let pending:Subject<any> = new BehaviorSubject(null);
        this.showProgress();
        this.http.delete(this.urlPrefix + url, this.getRequestOptions)
            .map(resp => { return this.parseResponce(resp); })
            .subscribe(
                resp => { this.successHandler(resp, pending); },
                error => { this.errorHandler(error); },
                () => { pending.complete(); }
            );
        return pending;
    }

    successHandler(resp:any, pending: Subject<any>) {
        this.hideProgress();
        if(resp.hasOwnProperty('errorMessages')){
            pending.error(resp.errorMessages[0])
        }else{
            pending.next(resp);
        }
    }

    errorHandler(error:Response) {
        this.hideProgress();
        let resp:any = typeof error['_body'] == 'object' ? error['_body'] : JSON.parse(error['_body']),
            status:any = error.status;


        if (!resp.Message)  resp.errorMessages = ['Network error'];
        this.showAlert('Error message: ' + status, resp.errorMessages[0], () => {});
    }

    showAlert(title:string, text:string, callback:any) {
        console.log('Error: ' + title + ' ' + text);
        /*if (!this.alertShown) {
            typeof callback == 'function' && callback();

            this.alertService.show({
                title: title,
                text: text
            })
        }*/
    };

    showProgress():void {
/*        loading++;
        if (loading === 1) {
            progress.next(true);
            coolDown = setTimeout(() => {
                loading = 0;
                this.showAlert('error', 'network timed out', this.hideProgress);
            }, 60000);
        }*/
    }

    hideProgress():void {
        /*clearTimeout(coolDown);
        clearTimeout(loadingId);

        loading -= 1;
        loadingId = setTimeout(() => {
            if (loading <= 0) {
                progress.next(false);
                loading = 0;
            }
        }, 30);
*/
    }
}
