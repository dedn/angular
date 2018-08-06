import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    alertMsg: string;
    alertError = false;
    alertInfo = true;

    currentClasses = {};


    setClasses() {
        this.currentClasses = {
            'alert-danger': this.alertError,
            'alert-info': this.alertInfo,
        };
    }

    constructor() {
    }

    ngOnInit() {
        this.setClasses();
        this.alertMsg = 'Some Error';
    }

}
